// import fs from "fs";
// import OpenAI from "openai";

const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI();

OPENAI_API_KEY='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';

const prompt1 = "Task: Analyze the following video transcript and suggest placements for relevant assets from your limited library in JSON format. Each entry in the JSON should specify the 'asset name' and its corresponding 'timestamp' in seconds within the video. Be creative and resourceful in utilizing the available assets to effectively represent different concepts. Available assets: ``share, account, inbox, analytics, restart, calendar, chat, accessibility, heart, warning, settings, trending-down, trending-up, right arrow, videocam, star-rating-morph, magnifier-zoom-search, document, suitcase, arrow-1-rounded, avatar-man, avatar-female, computer-display, dividends, equity-security, conversation-talking-community, video-camera, iota-internet-of-things, thumb-down, one-1, web-www-internet, star-of-bethlehem, frysztak-town, human-avatar, clock-time, eye, envelope-mail-send, computer-display, person-sign-protest, consultation, computer-mouse``";
const prompt2 = 'Example: ``Transcript excerpt: "We need to increase our efficiency and meet the deadline." Output of the given transcript in json format: {"asset_name": "clock", "timestamp": 30}``. Make sure that the output is a JSON object '

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    // file: fs.createReadStream("/Users/harshbatra/Downloads/" + clipName),
    file: fs.createReadStream('11.mp4'),

    model: "whisper-1",
    response_format: "srt",
    prompt: "keep the timestamps length as 1 second",
    word_timestamps: true
  });

  console.log(transcription);

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "keep the output strictly in JSON format and the items in 'content' should be an array."},
    { role: "user", content: transcription + prompt1 + prompt2}
  ],
    model: "gpt-3.5-turbo", 
  });

  console.log(completion.choices[0]);
  var csinterface = new CSInterface();
  var a = "hi";
  csinterface.evalScript("$._PPP_.addFiles('" + a + "')", a);
   	
}

// csinterface.evalScript('var assetsAndTime ="'+ completion + '";')
main();
