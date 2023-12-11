const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: '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' });

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: {
              "url": "https://files.oaiusercontent.com/file-HPdz7lrvxZqZofwHWCVAYWKM?se=2023-12-11T17%3A17%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfd3bc940-ac66-4fbe-9ffe-80037917cb35.webp&sig=2DwvOclz6FA6pAhuiJf4oB42KfBPlWfCUZK5S0Ra8iY%3D",
            },
          },
        ],
      },
    ],
    max_tokens: 1000
  });
  console.log(response.choices[0]);
}
main();