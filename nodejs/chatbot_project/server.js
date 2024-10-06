const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for chatbot responses
app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    
    // Generate a response based on user message
    let botResponse;
    if (userMessage.includes('hi') || userMessage.includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
    } else if (userMessage.includes('how are you') || userMessage.includes('how are u')) {
        botResponse = 'I am just a bot, but thank u for asking, how are u though';
    } else if (userMessage.includes('i am also fine thank u for asking')) {
        botResponse = 'So what do u want to know about?';
    } else if (userMessage.includes('do you have a name') || userMessage.includes('what is your name') || userMessage.includes('do u have a name')) {
        botResponse = 'I don’t have a name, but you can call me ChatBot!';
    } else if (userMessage.includes('oh! a very lovely name')) {
        botResponse = 'Thank u so much for the compliment';
    } else if (userMessage.includes('okay it was nice texting u bye')) {
        botResponse = 'Goodbye! Have a great day!';
    } else {
        botResponse = "I’m not sure how to respond to that. Can you ask something else?";
    }

    // Send the bot response back to the client
    res.json({ response: botResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
