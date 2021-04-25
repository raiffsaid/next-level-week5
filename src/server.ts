import express from 'express'; 
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from "path";

import './database';
import { routes } from './routes';

const app = express();

// Definindo pasta public de arquivos estáticos
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile); // Mudando a engine para usar HTML puro
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
    return res.render("html/client.html");
});

const http = createServer(app); // Criando protocolo HTTP
const io = new Server(http); // Criando protocolo WS

io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id);
});

app.use(express.json()); // Definir uso do JSON antes das rotas

app.use(routes);

http.listen(3333, () => console.log('Server running on port 3333'));