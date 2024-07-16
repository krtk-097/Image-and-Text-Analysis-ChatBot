const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.getAIResponse = async (imageText, conversation) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  let prompt = `You are a helpful assistant. The following text was extracted from an image:

"${imageText}"

Please answer questions based on this image text. Here's the conversation so far:

`;

  conversation.forEach((message, index) => {
    prompt += `${message.type === "user" ? "Human" : "Assistant"}: ${
      message.content
    }\n`;
  });

  prompt += "Assistant: ";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
