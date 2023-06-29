const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const categorizeInput = (input) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Use an environment variable
  });

  const openai = new OpenAIApi(configuration);

  return openai.createCompletion({
    model: "text-davinci-003",
    prompt: `I have 4 categories. Movies, Books, Restaurants, Products, and Uncategorized. Please categorize my following prompt in just one word, using the exact category words I've provided.\n\n${input}.\n\nCategory:`,
    temperature: 0,
    max_tokens: 6,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n"],
  })
    .then((response) => {
      return response.data.choices[0].text;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

module.exports = {
  categorizeInput
};
