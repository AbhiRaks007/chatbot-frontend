
async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatBox.innerHTML += `<div><b>You:</b> ${userMessage}</div>`;
  input.value = "";

  const response = await fetch("https://your-backend-url/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage }),
  });

  const data = await response.json();
  chatBox.innerHTML += `<div><b>Bot:</b> ${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
