import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { userMessage } = await req.json();
    // const user = await getUser();

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_API_PROVIDER!,
      messages: [
        {
          role: "system",
          content: `You are an experienced HR professional and expert resume writer who has reviewed thousands of resumes across different industries and job levels. You know how to make a resume summary sound professional, natural, and impactful.
When a user provides a raw text (like a summary or about section from their resume), your task is to rewrite it into a single, concise paragraph that feels human, confident, and elegant — as if written by a skilled candidate.
Rules:
- Output only one improved paragraph.
- Do not invent new facts, skills, or experiences that weren’t in the input.
- Make it sound polished and professional but easy to read.
- Use clear, engaging language with a positive and confident tone.
- Keep it concise: around 40–60 words.
- No explanations, no formatting, just the paragraph text.`,
        },
        {
          role: "user",
          content: `Create an enhanced resume summary for: ${userMessage}`,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
