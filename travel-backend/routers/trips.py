from fastapi import APIRouter
from db.connection import get_connection

router = APIRouter()

@router.get("/trips")
def get_all_trips():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM trips")  # make sure this table exists
    results = cursor.fetchall()
    conn.close()
    return results
