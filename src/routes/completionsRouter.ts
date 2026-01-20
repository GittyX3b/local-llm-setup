import {
  createLMSCompletion,
  createOllamaCompletion,
} from "../controllers/index.ts";
import { validateBodyZod } from "../middlewares/index.ts";
import { promptBodySchema } from "../schemas/index.ts";
import { Router } from "express";

const completionsRouter = Router();

completionsRouter.use(validateBodyZod(promptBodySchema));

completionsRouter.post("/ollama", createOllamaCompletion);
completionsRouter.post("/lms", createLMSCompletion);

export { completionsRouter };
