from sqlalchemy import Column, Integer, String, Date, DECIMAL, Text, TIMESTAMP
from db import Base

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    destination = Column(String(100), nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    price = Column(DECIMAL(10, 2), nullable=False)
    description = Column(Text)
    created_at = Column(TIMESTAMP, server_default="CURRENT_TIMESTAMP")
