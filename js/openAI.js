const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI();

OPENAI_API_KEY = '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';

// Function to read file content and return a Promise
const readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

async function main() {
  try {

    const promptText = await readFileAsync('prompt.txt');

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream('life.mp4'),
      model: "whisper-1",
      response_format: "srt",
      // prompt: "keep the timestamps length as 1 second",
      word_timestamps: true
    });

    console.log(transcription);

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "don't give serial numbers, the output should be a javascript object and don't repeat asset names" },
        { role: "user", content: transcription + promptText }
      ],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);


    // var csinterface = new CSInterface();
    // var a = "hi";
    // csinterface.evalScript("$._PPP_.addFiles('" + a + "')", a);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function
main();
