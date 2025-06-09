const tf = require('@tensorflow/tfjs-node');

let model;

const labels = [
  "Gambar Kosong", "ba", "ca", "da", "dha", "ga", "ha", "ja",
  "ka", "la", "ma", "na", "nga", "nya", "pa", "ra", "sa", "ta",
  "tha", "undefined", "wa", "ya"
];

async function loadModel() {
  if (!model) {
    model = await tf.loadGraphModel('file://src/model/model.json');
    console.log('✅ Model loaded');
  }
}

async function classifyImage(imageBuffer) {
  try {
    await loadModel();

    const imageTensor = tf.node
      .decodeImage(imageBuffer, 1)
      .resizeNearestNeighbor([224, 224])
      .expandDims(0)
      .toFloat()
      .div(255.0);

    const prediction = model.predict(imageTensor);
    const probabilities = prediction.dataSync();

    const maxIndex = probabilities.indexOf(Math.max(...probabilities));
    const label = labels[maxIndex];

    return { label };
  } catch (error) {
    console.error("❌ Error di classifyImage:", error.message);
    throw error;
  }
}

module.exports = {
  classifyImage
};
