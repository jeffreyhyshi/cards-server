const { PeerServer } = require("peer");

const clientIdFunction = () => (Math.random().toString(36)).substr(2, 6);

const server = PeerServer({
    port: 9000,
    path: '/card-peer',
    generateClientId: clientIdFunction
});