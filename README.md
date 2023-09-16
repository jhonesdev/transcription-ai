# transcription.ai

The transcription.ai is an application that uses artificial intelligence to generate relevant information from video transcriptions.

## Get Started

1. Clone the repositore
2. Open the server-api folder and run command `npm install`
3. Create .env file in the folder and write the parameters below 
    ```
    DATABASE_URL="file:./dev.db"
    OPENAI_KEY="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"
    ```
4. Run `npm run dev` to execute backend app
5. Open the front-end folder and run command `npm install`
6. Run `npm run dev` to execute front-and app
7. Access local
    

## Usage

Upload a video in mp4 format, enter keywords used in the video, which can help the AI ​​correctly transcribe the video content and click the "Carregar video" button

![Step 1](https://github.com/jhonesdev/transcription-ai/blob/main/front-end/docs/step1.png?raw=true)

After success, select prompt and temperature. Remember that higher temperatures make the result more creative but less accurate

![Step 2](https://github.com/jhonesdev/transcription-ai/blob/main/front-end/docs/step2.png?raw=true)

To finish, click the "Executar" button and wait for the IA to respond

![Step 2](https://github.com/jhonesdev/transcription-ai/blob/main/front-end/docs/step2.png?raw=true)

## License

MIT

**Free Software, Hell Yeah!**