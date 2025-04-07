from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional

class TripBase(BaseModel):
    destination: str
    start_date: date
    end_date: date
    price: float
    description: Optional[str] = None

class TripCreate(TripBase):
    pass

class Trip(TripBase):
    id: int
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
