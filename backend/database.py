from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:bhavesh729@localhost:5432/Task_Manager"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autoflush= False, bind=engine , autocommit=False
)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()