const Result = require("../models/Result");
const { performOCR } = require("../services/ocrService");
const { getAIResponse } = require("../services/aiService");

exports.analyzeImage = async (req, res) => {
  try {
    const { text, conversation } = req.body;
    const imagePath = req.file ? req.file.path : null;

    let imageText = "";
    if (imagePath) {
      imageText = await performOCR(imagePath);
    }

    const updatedConversation = JSON.parse(conversation);
    updatedConversation.push({ type: "user", content: text });

    const aiResponse = await getAIResponse(imageText, updatedConversation);

    updatedConversation.push({ type: "bot", content: aiResponse });

    const result = new Result({
      imageText,
      inputText: text,
    });
    await result.save();

    res.json({ imageText, conversation: updatedConversation });
  } catch (error) {
    console.error("Error in analyzeImage:", error);
    res.status(500).json({ error: "An error occurred during analysis" });
  }
};
