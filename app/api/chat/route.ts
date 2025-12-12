import { google } from "@ai-sdk/google";
import { streamText, convertToCoreMessages } from "ai";
import { profile, experiences, projects, skills, education } from "@/lib/data";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Check for required environment variables
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "Google Gemini not configured. Please set GOOGLE_GENERATIVE_AI_API_KEY in your .env.local file.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();

  // Convert UI messages to core messages format
  const coreMessages = convertToCoreMessages(messages);

  // Create context about the portfolio
  const context = `You are an AI assistant representing ${profile.firstName} ${
    profile.lastName
  }, a ${profile.headline}.

Bio: ${profile.shortBio}

Full Bio: ${profile.fullBio}

Contact:
- Email: ${profile.email}
- Phone: ${profile.phone}
- Location: ${profile.location}
- Availability: ${profile.availability}

Social Links:
${Object.entries(profile.socialLinks)
  .map(([key, value]) => `- ${key}: ${value}`)
  .join("\n")}

Years of Experience: ${profile.yearsOfExperience}

Stats:
${profile.stats.map((stat) => `- ${stat.label}: ${stat.value}`).join("\n")}

Key Skills:
${skills
  .slice(0, 10)
  .map(
    (skill) => `- ${skill.name}: ${skill.proficiency} (${skill.percentage}%)`
  )
  .join("\n")}

Recent Experience:
${experiences
  .slice(0, 3)
  .map(
    (exp) => `
Company: ${exp.company}
Position: ${exp.position}
Duration: ${exp.startDate} - ${exp.current ? "Present" : exp.endDate}
Description: ${exp.description}
Key Achievements: ${exp.achievements.slice(0, 3).join(", ")}
`
  )
  .join("\n")}

Featured Projects:
${projects
  .filter((p) => p.featured)
  .map(
    (proj) => `
- ${proj.title}: ${proj.tagline}
  Technologies: ${proj.technologies.join(", ")}
  ${proj.liveUrl ? `Live URL: ${proj.liveUrl}` : ""}
  ${proj.githubUrl ? `GitHub: ${proj.githubUrl}` : ""}
`
  )
  .join("\n")}

Education:
${education
  .map(
    (edu) => `
- ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution}
  ${edu.gpa ? `GPA: ${edu.gpa}` : ""}
  ${edu.description}
`
  )
  .join("\n")}

You should answer questions about ${
    profile.firstName
  }'s experience, skills, projects, education, and availability. 
Be conversational, professional, and helpful. If asked about something not in the portfolio, politely say you don't have that information but suggest checking the website or contacting directly.`;

  // Use Gemini 1.5 Flash (fast and efficient) or gemini-1.5-pro for better quality
  const modelName = process.env.GOOGLE_MODEL_NAME || "gemini-1.5-flash";

  const result = await streamText({
    model: google(modelName) as any,
    system: context,
    messages: coreMessages,
  });

  return (result as any).toUIMessageStreamResponse();
}
