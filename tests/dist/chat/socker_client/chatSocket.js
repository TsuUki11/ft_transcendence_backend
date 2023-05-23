var io = require('../lib/socket.io');
const socket = io("http://localhost:3000");
const message = document.getElementById('message');
const messages = document.getElementById('messages');
const handleSubmetNewMessage = () => {
    socket.emit("message", { data: message });
};
socket.on("message", ({ data }) => {
    handleNewMessage(data);
});
const handleNewMessage = (message) => {
    messages.appendChild(buildNewMessage(message));
};
const buildNewMessage = (message) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    return li;
};
//# sourceMappingURL=chatSocket.js.map