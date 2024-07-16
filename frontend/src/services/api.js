import axios from "axios";

const API_URL =
  "https://image-and-text-analysis-chatbot-server.onrender.com/api";

export const analyzeImage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};
