from pydantic import BaseModel, Field


class GoogleAuthRequest(BaseModel):
    email: str = Field(..., min_length=3)


class UserProfile(BaseModel):
    id: str
    email: str
    mode: str
    plan: str
    isPro: bool


class GenerationRequest(BaseModel):
    mode: str = 'student'
    contentType: str = 'Presentation'
    title: str = 'Untitled project'
    description: str = 'Create an engaging, concise, and relevant output.'


class GenerationResponse(BaseModel):
    mode: str
    contentType: str
    title: str
    content: str
