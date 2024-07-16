import { Typography } from "@mui/material";
import { formatOcrText } from "../../utils/textFormatters";
import { OcrTextContainer } from "./OcrDisplay.styles";

const OcrDisplay = ({ text }) => {
  return (
    <OcrTextContainer elevation={3}>
      <Typography variant="h6" gutterBottom>
        Extracted Text:
      </Typography>
      <pre>{formatOcrText(text)}</pre>
    </OcrTextContainer>
  );
};

export default OcrDisplay;
