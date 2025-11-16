import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { userMessage, template } = await req.json();

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_API_PROVIDER!,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are an expert resume generator.

I will provide some user information in JSON format under the key "userdata". 
Using ONLY that minimal information, generate a complete, professional, ATS-friendly resume in the EXACT JSON structure provided below.

Requirements:
- Use userdata to fill in fields wherever possible.
- If userdata is missing something, make reasonable professional assumptions.
- ALWAYS generate a *complete* resume.
- Fill every field with strong, polished, professional content.
- All descriptive or list content must be placed inside editorHTML fields.
- OUTPUT ONLY the final resume JSON — no explanations, no markdown, no extra text.
- STRICTLY follow this template:

${template}

Here is the userdata to build the resume from (may be partial; fill missing pieces yourself):
${userMessage}
`,
        },
        {
          role: "user",
          content: `Generate the final JSON now for this provided data ${userMessage} based on the template provided: ${template}`,
        },
      ],
    });

    return NextResponse.json({
      reply: JSON.parse(completion.choices[0].message.content!),
    });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
