from app.schemas import GenerationRequest


def generate_content(payload: GenerationRequest) -> str:
    mode = payload.mode
    content_type = payload.contentType
    title = payload.title
    description = payload.description

    if mode == 'business':
        return (
            f"Business brief: {title}\n\n"
            f"Objective: {description}\n\n"
            "1. Situation overview\n"
            "- Describe the business problem or opportunity clearly.\n\n"
            "2. Key findings\n"
            "- Summarize evidence, context, and stakeholder priorities.\n\n"
            "3. Recommended action\n"
            "- Explain the next step and expected business impact.\n\n"
            "4. Closing\n"
            "- Provide a concise call to action and decision request.\n"
        )

    return (
        f"Student project plan: {title}\n\n"
        f"Prompt: {description}\n\n"
        f"Content type: {content_type}\n\n"
        "1. Introduction\n"
        "- Introduce the topic and explain why it matters.\n\n"
        "2. Main points\n"
        "- Break the topic into clear sections with supporting examples.\n\n"
        "3. Evidence and examples\n"
        "- Include relevant facts, case studies, research, or personal observations.\n\n"
        "4. Conclusion\n"
        "- End with a summary of the main insight and final takeaway.\n"
    )
