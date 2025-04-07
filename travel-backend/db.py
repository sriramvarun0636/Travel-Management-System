from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Adjust this string if needed
SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://root:varun@localhost/travel_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
