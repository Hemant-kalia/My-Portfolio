from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas import ContactCreate, ContactResponse
from app.services.contact_service import create_contact_message

router = APIRouter(prefix="/api/contact", tags=["Contact"])


@router.post("", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact(payload: ContactCreate, db: Session = Depends(get_db)):
    try:
        return create_contact_message(db, payload)
    except Exception as exc:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to save message to database.",
        ) from exc