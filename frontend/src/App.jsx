import { Container, Grid, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import ChatBox from "./components/ChatBox/ChatBox";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import OcrDisplay from "./components/OcrDisplay/OcrDisplay";
import { useConversation } from "./hooks/useConversation";
import theme from "./theme";

function App() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { conversation, loading, imageText, addMessage } = useConversation();

  const handleImageUpload = (file) => {
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Chat Bot Image and Text Analyzer
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ImageUpload
              onImageUpload={handleImageUpload}
              imagePreview={imagePreview}
            />
            {imageText && <OcrDisplay text={imageText} />}
          </Grid>
          <Grid item xs={12} md={6}>
            <ChatBox
              conversation={conversation}
              loading={loading}
              onSendMessage={(text) => addMessage(text, image)}
              hasImage={!!image}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
