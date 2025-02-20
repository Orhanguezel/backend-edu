import { createServer } from 'http'; 

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end('<h1>Home</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404);
        res.end('<h1>404</h1>');
    }
}
);
server.listen(4000, () => {
    console.log('Server is running on 4000');
    }
);
