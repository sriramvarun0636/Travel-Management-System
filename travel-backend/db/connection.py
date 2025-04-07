import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

def get_connection():
    return mysql.connector.connect(
        host=os.getenv("localhost"),
        user=os.getenv("root"),
        password=os.getenv("varun"),
        database=os.getenv("database")
    )
