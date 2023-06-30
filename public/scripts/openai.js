const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const categorizeInput = (input) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY // Use an environment variable
  });

  // input = 'watch star wars'

  const openai = new OpenAIApi(configuration);

  return openai.createCompletion({
    model: "text-davinci-003",
    prompt: `I have 4 categories. 1: Movies, 2: Books, 4: Restaurants, 3: Products, and 5: Uncategorized. Please categorize my following prompt, using only the number associated with the category. For example: I want to eat at nobu should return 4.\n\n${input}\n\nCategory Number: \n\n`,
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

categorizeInput()
  .then((result) =>{
  console.log(result)}
  );


module.exports = {
  categorizeInput
};
