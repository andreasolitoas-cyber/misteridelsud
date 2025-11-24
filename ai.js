
function toggleAIChat(){
  const panel = document.getElementById('aiChatPanel');
  if(!panel) return;
  panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
}

function appendMessage(text, who){
  const box = document.getElementById('aiChatMessages');
  if(!box) return;
  const div = document.createElement('div');
  div.className = 'ai-msg ' + (who === 'user' ? 'ai-msg-user' : 'ai-msg-bot');
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

async function sendAIMessage(){
  const input = document.getElementById('aiChatInput');
  if(!input || !input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  appendMessage(text, 'user');

  // Risposta finta locale per ora.
  // Per connettere una vera IA (OpenAI, ecc.),
  // crea un endpoint backend e chiama la tua API da qui.
  const fakeReply = "Per ora sono una voce registrata nel Portale. " +
    "Quando collegherai la tua chiave API privata, risponderò davvero alle domande su Misteri del Sud, " +
    "sui luoghi maledetti e sulle tue indagini, nella lingua in cui mi scrivi.";
  setTimeout(() => {
    appendMessage(fakeReply, 'bot');
  }, 600);
}
