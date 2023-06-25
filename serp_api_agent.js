import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import { OpenAI } from 'langchain/llms/openai';
import { SerpAPI } from 'langchain/tools';
import { Calculator } from 'langchain/tools/calculator';

import * as dotenv from 'dotenv';
dotenv.config();

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
});
const tools = [
  new SerpAPI(process.env.SERP_API_KEY, {
    location: 'Chicago,Illinois,United States',
    hl: 'en',
    gl: 'us',
  }),
  new Calculator(),
];

const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: 'zero-shot-react-description',
  verbose: true,
});

const input = `const input = What happened to the submersible that went missing? Cite your sources.`;

const result = await executor.call({ input });

console.log(`Got output ${result.output}`);
