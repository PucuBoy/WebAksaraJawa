const axios = require('axios');

const sendToMLModel = async (imageData) => {
  const response = await axios.post(process.env.ML_API_URL, { image: imageData });
  return response.data;
};

module.exports = { sendToMLModel };
