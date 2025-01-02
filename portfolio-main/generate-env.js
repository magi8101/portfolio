const fs = require('fs');
const dotenv = require('dotenv');

// Load variables from .env
dotenv.config();

// Template for injecting into JavaScript
const envScript = `
window.env = {
    EMAILJS_PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY}',
    EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
    EMAILJS_TEMPLATE_ID_MESSAGE: '${process.env.EMAILJS_TEMPLATE_ID_MESSAGE}',
    EMAILJS_TEMPLATE_ID_THANKYOU: '${process.env.EMAILJS_TEMPLATE_ID_THANKYOU}'
};
`;

// Write to a file (e.g., env.js)
fs.writeFileSync('./public/env.js', envScript, 'utf8');
console.log('Environment variables injected!');
