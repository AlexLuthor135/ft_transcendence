document.addEventListener('DOMContentLoaded', async function () {
    await loadChatData();
});

async function loadChatData() {
    try {
        const chatResponse = await fetch('https://localhost/api/chatData/');
        const chatData = await chatResponse.json();
        if (chatResponse.ok) {
            displayDirectMessages(chatData.directMessages);
            initializeLiveChat(chatData.liveChatInfo);
        } else {
            console.error('Failed to load chat data');
        }
    } catch (error) {
        console.error('Error fetching chat data:', error);
    }
}

function displayDirectMessages(messages) {
    const messagesContainer = document.getElementById('directMessages');
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `From: ${msg.sender} - ${msg.content}`;
        messagesContainer.appendChild(messageElement);
    });
}

function initializeLiveChat(liveChatInfo) {
    // Assuming liveChatInfo contains necessary information to connect to a WebSocket server
    const chatSocket = new WebSocket(liveChatInfo.socketUrl);

    chatSocket.onmessage = function(event) {
        const liveChatContainer = document.getElementById('liveChat');
        const messageData = JSON.parse(event.data);
        const messageElement = document.createElement('div');
        messageElement.textContent = `From: ${messageData.sender} - ${messageData.content}`;
        liveChatContainer.appendChild(messageElement);
    };

    document.getElementById('sendMessage').addEventListener('click', function() {
        const messageInput = document.getElementById('messageInput');
        chatSocket.send(JSON.stringify({ content: messageInput.value }));
        messageInput.value = ''; // Clear input after sending
    });
}