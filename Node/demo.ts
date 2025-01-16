import * as http from 'http';
import { Routes } from './routes';

const server = http.createServer(Routes);

server.listen(3000);