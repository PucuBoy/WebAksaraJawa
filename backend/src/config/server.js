const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const questionRoutes = require('../routes/questions');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/questions', questionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});