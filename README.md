# ContentForge

ContentForge is an AI-powered content creation workspace for students and professionals. It helps users brainstorm ideas, structure presentations, create reports, and generate documents across multiple modes.

## Features

- Student mode and adult/business mode
- Presentation, report, essay, proposal, and brief generation
- AI brainstorming and outline generation
- Script and slide structure generation
- Google sign-in ready flow
- School or company email auto-upgrade logic for Pro access

## Project structure

- frontend: Next.js app
- backend: FastAPI server

## Quick start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Environment variables

Create a `.env.local` in frontend and `.env` or `.env.local` in backend depending on your setup.

Example:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
OPENAI_API_KEY=your_key_here
```

## Roadmap

- Playlist and project saving
- PDF/PPT upload feedback
- AI image generation
- Google OAuth setup
- School/business account validation
- Team collaboration

## License

MIT
