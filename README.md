# local-llm-setup
basic node/express api for prompting to local ai model


![screencast_preview.gif](https://raw.githubusercontent.com/GittyX3b/local-llm-setup/refs/heads/main/screecast_preview.gif)


(My setup was for llama3.2 on M4 MAC)

# Quickstart

1. Install locally [Ollama](https://ollama.com/) or [LM Studio](https://lmstudio.ai/)
   
   -> run model llama3.2 `ollama run llama3.2` (in Terminal) or llama3.2:3b-instruct (in LM Studio) 

   -> get MODEL_URL *(Ollama default: 127.0.0.1:11434/v1 or LMS defaul: 127.0.0.1:1234/v1)* `ollama serve`


2. clone this repository
   
   -> install denpendencies `npm i` 

   -> search repo for `process.env` and add the found variables to `./.env.development.local`



   
   > NODE_ENV="development
   >
   > PORT=8084
   >
   > OLLAMA_API_KEY=""
   > OLLAMA_URL="http://127.0.0.1:11434/v1"
   > OLLAMA_MODEL="llama3.2"
   >
   > LMS_API_KEY=""
   > LMS_URL="http://127.0.0.1:1234/v1"   
   > LMS_MODEL="llama3.2:3b-instruct"
   >   
   > OPENAI_KEY=""
   > OPENAI_MODEL=""
   



   *...API_KEYs are local empty strings*
   
   *PORT is the express-api-port*



# Prompting 


   - send a request to `POST http://127.0.0.1:804/ai/ollama` or `POST http://127.0.0.1:804/ai/lms` using the following json in body


      `{ "prompt":"Youre question here?", "stream":true }`
   
   
      *`stream` option defines response as block (false) or in pieces (true)*

