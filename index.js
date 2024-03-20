const express = require('express');
const { createServer } = require('node:http');

const { join } = require('node:path'); 
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

