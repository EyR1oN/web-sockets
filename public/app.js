const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');


const ws = new WebSocket('ws://localhost:3000');

function print(value) {
    const li = document.createElement('li');
    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener('submit', sbm => {
    sbm.preventDefault();
    ws.send(input.value);
    input.value = '';
})

ws.onmessage = response => print(response.data);