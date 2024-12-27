const http = require('http');
const app = require('./app');
// const port = process.env.PORT || 5000;
const port = 4000; // Use a different port like 4001



const server = http.createServer(app);


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});