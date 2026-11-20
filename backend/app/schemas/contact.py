from datetime import datetime
from pydantic import BaseModel, ConfigDict, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=5000)


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)