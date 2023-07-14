const clientEvents = {
    outgoing: {

    },
    incoming: {
        GRAVITY: "scGravity"
    }
};

let host;

if (window.location.host === "localhost:3000") {
    host = "ws://localhost:3000";
} else {
    host = "wss://merciful-regal-soursop.glitch.me";
}

const ws = new WebSocket(host);

ws.onmessage = event => {
    const action = JSON.parse(event.data).action;
    const data = JSON.parse(event.data).data;
    switch (action) {
        case clientEvents.incoming.GRAVITY: {
            const gravity = JSON.parse(data);
            const output = document.getElementById("output");
            output.innerText = `gravity = (${gravity.x}, ${gravity.y})`;
            break;
        }
    }
};
//# sourceMappingURL=index.js.map
