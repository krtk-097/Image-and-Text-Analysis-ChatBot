import { useState } from "react";
import { analyzeImage } from "../services/api";

export const useConversation = () => {
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageText, setImageText] = useState("");

  const addMessage = async (text, image) => {
    setLoading(true);
    try {
      const formData = new FormData();
      if (image) formData.append("image", image);
      formData.append("text", text);
      formData.append("conversation", JSON.stringify(conversation));

      const response = await analyzeImage(formData);

      if (response.imageText && !imageText) {
        setImageText(response.imageText);
      }

      setConversation(response.conversation);
    } catch (error) {
      console.error("Error in conversation:", error);
      alert("An error occurred while processing your request");
    } finally {
      setLoading(false);
    }
  };

  return { conversation, loading, imageText, addMessage };
};
