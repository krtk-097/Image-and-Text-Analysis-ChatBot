import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const OcrTextContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  maxHeight: "200px",
  overflow: "auto",
  backgroundColor: theme.palette.grey[100],
  "& pre": {
    margin: 0,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: 1.5,
  },
}));
