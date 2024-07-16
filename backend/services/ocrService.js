const { createWorker } = require("tesseract.js");

exports.performOCR = async (imagePath) => {
  const worker = await createWorker();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(imagePath);
  await worker.terminate();
  return text;
};
