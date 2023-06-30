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
    prompt: `I have 4 categories. 1: Movies, 2: Books, 3: Products, 4: Restaurants, and 5: Uncategorized.
    Please categorize my following prompt, using only the number.
    Return 5 if the falls into multiple categories. example: I want to eat at nobu should return 4 beceause user wants to eat.
    Here's an example of a prompt that could have multiple categories: spiderman returns 5 because there are books, movies, and products associated with it.
    Another example: Watch batman reuturns 1 because the user indicates they want to watch a movie.
    ONLY return a number.\n\n${input}\n\nCategory Number:`,
    temperature: 0,
    max_tokens: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    // stop: ["\n"],
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
