import { courseData } from "@/data/courseData";

interface TutorResponse {
  answer: string;
  sources: string[];
}

/**
 * Mock AI Tutor — keyword-matched responses from course data.
 * Architecture is designed for future RAG backend replacement:
 *   Student Question → Course Knowledge Base → LLM → Answer
 *
 * Replace this function body with an API call to your RAG backend.
 */
export async function getAIResponse(query: string): Promise<TutorResponse> {
  // Simulate a short delay for realism
  await new Promise((resolve) => setTimeout(resolve, 600));

  const q = query.toLowerCase().trim();

  // Check for module-specific queries
  for (const mod of courseData.modules) {
    const modKeywords = [
      mod.title.toLowerCase(),
      `module ${mod.number}`,
      `module ${String(mod.number).padStart(2, "0")}`,
    ];

    if (modKeywords.some((k) => q.includes(k))) {
      const topicList = mod.topics.map((t) => `• ${t.title}`).join("\n");
      return {
        answer: `**Module ${String(mod.number).padStart(2, "0")}: ${mod.title}**\n\n${mod.overview}\n\n**Topics covered:**\n${topicList}`,
        sources: [`Module ${mod.number}`],
      };
    }
  }

  // Check for lab queries
  if (q.includes("lab")) {
    for (const lab of courseData.labs) {
      const labKeywords = [
        lab.title.toLowerCase(),
        `lab ${lab.number}`,
        `lab ${String(lab.number).padStart(2, "0")}`,
      ];
      if (labKeywords.some((k) => q.includes(k))) {
        return {
          answer: `**Lab ${String(lab.number).padStart(2, "0")}: ${lab.title}**\n\n**Objective:** ${lab.objective}\n\n**Requirements:** ${lab.requirements.join(", ")}\n\n**Procedure:**\n${lab.procedure.map((s, i) => `${i + 1}. ${s}`).join("\n")}`,
          sources: [`Lab ${lab.number}`],
        };
      }
    }
    // Generic lab response
    const labList = courseData.labs
      .map((l) => `• Lab ${String(l.number).padStart(2, "0")}: ${l.title}`)
      .join("\n");
    return {
      answer: `Here are all the labs in this course:\n\n${labList}\n\nAsk about a specific lab for more details!`,
      sources: ["Labs"],
    };
  }

  // Check for important questions query
  if (q.includes("important question") || q.includes("exam") || q.includes("viva")) {
    const allQuestions = courseData.modules.flatMap((mod) =>
      mod.importantQuestions.map(
        (iq) => `**${mod.title}:**\n• ${iq.question} _(${iq.type})_`
      )
    );
    const sample = allQuestions.slice(0, 8).join("\n\n");
    return {
      answer: `Here are some important questions for exam preparation:\n\n${sample}\n\n...and more! Visit the **Important Questions** page for the complete list.`,
      sources: ["Important Questions"],
    };
  }

  // Check for project queries
  if (q.includes("project")) {
    const projectList = courseData.projects
      .map((p) => `• **${p.title}** — ${p.difficulty}`)
      .join("\n");
    return {
      answer: `Here are the course projects:\n\n${projectList}\n\nVisit the **Projects** page for detailed descriptions, implementation steps, and resources.`,
      sources: ["Projects"],
    };
  }

  // Check for book / resource queries
  if (q.includes("book") || q.includes("resource") || q.includes("reference")) {
    const bookList = courseData.books
      .map((b) => `• **${b.title}** by ${b.author}`)
      .join("\n");
    return {
      answer: `Here are the recommended books:\n\n${bookList}\n\nVisit the **Resources** page for publications, videos, and external links.`,
      sources: ["Books", "Resources"],
    };
  }

  // Check for specific topic keywords across all modules
  for (const mod of courseData.modules) {
    for (const topic of mod.topics) {
      const topicWords = topic.title.toLowerCase().split(/\s+/);
      const significantWords = topicWords.filter(
        (w) => w.length > 3 && !["and", "the", "for", "with"].includes(w)
      );
      if (significantWords.some((w) => q.includes(w))) {
        return {
          answer: `**${topic.title}** is covered in **Module ${String(mod.number).padStart(2, "0")}: ${mod.title}**.\n\n${mod.overview}\n\nCheck the module notes and important questions for detailed study material.`,
          sources: [`Module ${mod.number}`, topic.title],
        };
      }
    }
  }

  // Greeting
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return {
      answer:
        "Hello! 👋 I'm your AI Course Assistant for **AIM3002P — Fundamentals of Generative AI**. I can help you with:\n\n• Module overviews and topics\n• Lab details and procedures\n• Important questions for exam prep\n• Project suggestions\n• Book and resource recommendations\n\nWhat would you like to know?",
      sources: [],
    };
  }

  // Fallback — couldn't find relevant information
  return {
    answer:
      "I couldn't find this information in the provided course material. Try asking about:\n\n• A specific module (e.g., \"Explain Module 3\")\n• Lab details (e.g., \"Tell me about Lab 1\")\n• Important questions for exam prep\n• Course projects\n• Recommended books and resources\n\nOr visit the relevant section on the website for more details.",
    sources: [],
  };
}
