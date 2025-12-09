# 🌾 Farming FAQ AI Agent (Serverless)

This project is a **serverless AI FAQ agent** built on top of **Langbase**, inspired by the *“Build Serverless AI Agents with Langbase”* course by Maham (Scrimba).

The agent is designed to answer farming and agriculture-related questions using a curated **Farming FAQ dataset**, while demonstrating **context engineering, memory, and AI primitives** in a production-ready setup.

---

## 🚀 What This Agent Does

- ✅ Answers farming-related questions using an FAQ knowledge base  
- ✅ Uses **context-engineered prompts** for accurate, grounded responses  
- ✅ Supports **agent memory** for better multi-turn conversations  
- ✅ Runs fully **serverless** using Langbase (no infra management)  
- ✅ Designed to be extended with tools, actions, or APIs

Examples of supported queries:
- “How often should I irrigate corn crops?”
- “What fertilizer is best for tomatoes?”
- “How do I prevent pests in organic farming?”

---

## 🧠 Architecture Overview

**Core stack:**
- **Langbase** – Serverless AI cloud
- **LLM Agent** – Context-engineered, task-oriented agent
- **FAQ Farming Dataset** – Knowledge source (CSV / JSON / Markdown)
- **Memory** – Conversation-aware responses
- **AI Primitives** – Retrieval, reasoning, and structured output

Flow:
1. User asks a question  
2. Agent retrieves relevant FAQ context  
3. Context + memory are injected into the prompt  
4. Agent generates a grounded response  
5. Optional tools/actions can be triggered  

---

## 📂 Project Structure

```bash
.
├── data/
│   └── farming_faq.json        # Farming FAQ dataset
├── agent/
│   ├── prompt.ts               # Context-engineered system prompt
│   ├── memory.ts               # Agent memory configuration
│   └── agent.ts                # Core agent logic
├── api/
│   └── handler.ts              # Serverless endpoint
├── utils/
│   └── loadFaqData.ts          # Dataset loader & formatter
├── .env.example
├── package.json
└── README.md
