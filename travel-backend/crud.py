from sqlalchemy.orm import Session
import models, schemas

def get_trips(db: Session):
    return db.query(models.Trip).all()

def create_trip(db: Session, trip: schemas.TripCreate):
    db_trip = models.Trip(**trip.dict())
    db.add(db_trip)
    db.commit()
    db.refresh(db_trip)
    return db_trip
