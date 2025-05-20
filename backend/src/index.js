const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const classifyRoutes = require('./routes/classifyRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/classify', classifyRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
