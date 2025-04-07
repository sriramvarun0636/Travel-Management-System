from db import Base, engine
from trip_model import Trip  # <- updated this line

# Create the tables in the database
Base.metadata.create_all(bind=engine)

print("✅ Trip table created successfully.")
