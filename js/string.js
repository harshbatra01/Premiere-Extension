var jsonObj = `{
    index: 0,
    message: {
      role: 'assistant',
      content: '{"asset_name": "angel_fund", "timestamp": 1},\n' +
        '{"asset_name": "spouse", "timestamp": 6},\n' +
        '{"asset_name": "money", "timestamp": 11},\n' +
        '{"asset_name": "networks", "timestamp": 25},\n' +
        '{"asset_name": "professional_angels", "timestamp": 45},\n' +
        '{"asset_name": "investing", "timestamp": 50}'
    },
    logprobs: null,
    finish_reason: 'stop'
  }`;

  function main(inputCode) {
    const jsonString = JSON.stringify(jsonObj);

    // Replace '\n' and '+'
    const processedString = jsonString.replace(/\\n|\+/g, '');

    // Replace "'" without "assistant" before or after it
    const finalString = processedString.replace(/(?<!assistant)'(?!assistant)/g, '');

    // Parse the modified string back to JSON object
    const modifiedObject = JSON.parse(finalString);
    console.log(modifiedObject)
  }
  
  main();