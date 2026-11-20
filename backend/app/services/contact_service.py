from sqlalchemy.orm import Session

from app.models import ContactMessage
from app.schemas import ContactCreate


def create_contact_message(db: Session, payload: ContactCreate) -> ContactMessage:
    new_message = ContactMessage(
        name=payload.name.strip(),
        email=payload.email.strip(),
        message=payload.message.strip(),
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return new_message