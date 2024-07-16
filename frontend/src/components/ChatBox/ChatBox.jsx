import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { MessageBubble, ScrollableChat } from "./ChatBox.styles";

const ChatBox = ({ conversation, loading, onSendMessage, hasImage }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const handleSubmit = () => {
    if (!hasImage && !text.trim()) {
      setError("Please upload an image and enter a message.");
    } else if (!hasImage) {
      setError("Please upload an image.");
    } else if (!text.trim()) {
      setError("Please enter a message.");
    } else {
      onSendMessage(text);
      setText("");
    }
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError("");
  };

  return (
    <>
      <ScrollableChat elevation={3}>
        {conversation.map((message, index) => (
          <MessageBubble
            key={index}
            isUser={message.type === "user"}
            elevation={1}
          >
            <Typography variant="body1">{message.content}</Typography>
          </MessageBubble>
        ))}
        <div ref={chatEndRef} />
      </ScrollableChat>
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading || (!hasImage && !text.trim())}
        >
          {loading ? <CircularProgress size={24} /> : "Send"}
        </Button>
      </Box>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ChatBox;
