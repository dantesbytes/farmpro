 import 'dotenv/config';
 import { Langbase } from 'langbase';

 const langbase = new Langbase({
    apiKey: process.env.LANGBASE_API_KEY!,


 });

 async function main() {

    const memory = await langbase.memories.create({
        name: 'knowledge-base',
        description: 'An AI memory for agentic memory course',
        embedding_model: 'openai:text-embedding-3-large',
    })

    console.log("memory created:", memory)
    
 }

 main().catch((err) => {
    console.error('❌ Error creating memory:', err);
    process.exit(1);
  });
  
