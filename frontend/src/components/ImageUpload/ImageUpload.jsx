import { Button, Paper } from "@mui/material";
import { ImagePreview } from "./ImageUpload.styles";

const ImageUpload = ({ onImageUpload, imagePreview }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    onImageUpload(file);
  };

  return (
    <>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span" fullWidth>
            Upload Image
          </Button>
        </label>
      </Paper>
      {imagePreview && (
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <ImagePreview src={imagePreview} alt="Uploaded preview" />
        </Paper>
      )}
    </>
  );
};

export default ImageUpload;
