const express = require('express');
const apiRoutes =require('./routes/api');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api', apiRoutes);


//Establish the connection to the Port
app.listen(PORT, function () {  
    console.log(`Server running on Port: ${PORT}`); 
    if (!process.env.OPENAI_API_KEY) {
        console.error('The OPENAI_API_KEY environment variable is missing or empty');
      } else {
        console.log('OpenAI API Key:', process.env.OPENAI_API_KEY); // Verify the key is loaded
      }
});  
