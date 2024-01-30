import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

const cost = `
00:01: Hello, how can I help you today?
00:02: I'm looking for information on language models.
00:03: Sure, I can help with that. Language models are a type of artificial intelligence that can...
00:04: ...generate text, translate languages, write different kinds of creative content, and answer your questions...
00:05: ...in an informative way. They are trained on large amounts of text data to learn patterns...
00:06: ...and relationships between words.
`;

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("a.MP4"),
    model: "whisper-1",
    response_format: text,
    prompt: cost,
    word_timestamps: true
  });

  console.log(transcription);
}


main();

