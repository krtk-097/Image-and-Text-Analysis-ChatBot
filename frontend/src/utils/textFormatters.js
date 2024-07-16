export const formatOcrText = (text) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  return lines.join("\n");
};
