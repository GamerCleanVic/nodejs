import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!');
});
server.get('/contato', (req: Request, res: Response) => {
    res.send('Esta é a página de contato');
});

server.listen(3003);