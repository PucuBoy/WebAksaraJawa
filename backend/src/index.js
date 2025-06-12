const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const classifyRoutes = require('./routes/classifyRoutes');
const questionRoutes = require('./routes/questions');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/classify', classifyRoutes);
app.use('/api/questions', questionRoutes);

app.get('/', (req, res) => {
  res.send('WebAksaraJawa API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
