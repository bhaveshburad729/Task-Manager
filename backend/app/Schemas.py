from pydantic import BaseModel


class TaskBase(BaseModel):
    title: str


class TaskCreate(TaskBase):
    pass  # for future use — just a placeholder now


class Task(TaskBase):
    id: int
    completed: bool

    class Config:
        from_attributes = True
