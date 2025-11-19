from pydantic import BaseModel

class Task(BaseModel):
    id: int
    title: str
    completed: bool

    class Config:
        orm_mode = True