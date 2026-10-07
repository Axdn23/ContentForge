from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import GenerationRequest, GenerationResponse, GoogleAuthRequest, UserProfile
from app.services.generator import generate_content

app = FastAPI(title='ContentForge API', version='0.1.0')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/health')
def health_check() -> dict[str, str]:
    return {'status': 'ok'}


@app.post('/api/auth/google')
def google_login(payload: GoogleAuthRequest) -> UserProfile:
    email = payload.email.lower()
    is_school_email = email.endswith('.edu') or 'school' in email or 'edu' in email.split('@')[-1]
    is_business_email = 'company' in email or 'business' in email or '.com' in email.split('@')[-1]

    if is_school_email:
        plan = 'Pro'
        mode = 'student'
    elif is_business_email:
        plan = 'Pro'
        mode = 'business'
    else:
        plan = 'Free'
        mode = 'student'

    return UserProfile(
        id='user_123',
        email=email,
        mode=mode,
        plan=plan,
        isPro=plan == 'Pro',
    )


@app.post('/api/projects/generate', response_model=GenerationResponse)
def generate_project(payload: GenerationRequest) -> GenerationResponse:
    content = generate_content(payload)
    return GenerationResponse(
        mode=payload.mode,
        contentType=payload.contentType,
        title=payload.title,
        content=content,
    )
