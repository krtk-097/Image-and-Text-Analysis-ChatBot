import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const ScrollableChat = styled(Paper)({
  height: "400px",
  overflowY: "auto",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
});

export const MessageBubble = styled(Paper)(({ theme, isUser }) => ({
  padding: "8px 16px",
  maxWidth: "70%",
  alignSelf: isUser ? "flex-end" : "flex-start",
  backgroundColor: isUser
    ? theme.palette.primary.light
    : theme.palette.secondary.light,
  marginBottom: "8px",
}));
