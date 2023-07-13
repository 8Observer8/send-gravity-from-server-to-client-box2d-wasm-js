import express from "express";
import http from "http";
import path from "path";
import { WebSocketServer } from "ws";
import { box2d, initBox2D } from "./init-box2d.js";
import { makeMessage, serverEvents } from "../share/events.js"

const app = express();
app.use(express.static(path.join(process.cwd(), "public")));

const httpServer = http.createServer(app);
const wss = new WebSocketServer({ server: httpServer });
const port = process.env.PORT || 3000;
httpServer.listen(port, () => console.log("Listening at port: " + port));

wss.on("connection", client => {
    async function init() {
        await initBox2D();
        const {
            b2Vec2,
            b2World
        } = box2d;

        const gravity = new b2Vec2(0, -3);
        const world = new b2World(gravity);
        const g = world.GetGravity();
        console.log(g.x, g.y);
        client.send(makeMessage(serverEvents.outgoing.GRAVITY, JSON.stringify({ x: g.x, y: g.y })));
    }

    init();
});
