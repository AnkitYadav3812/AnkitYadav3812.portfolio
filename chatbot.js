// Chatbot functionality
class PortfolioChatbot {
  constructor() {
    this.chatbot = document.getElementById('chatbot');
    this.toggleBtn = document.getElementById('chatbot-toggle');
    this.closeBtn = document.getElementById('chatbot-close');
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.input = document.getElementById('chatbot-input');
    this.sendBtn = document.getElementById('chatbot-send');

    this.initEventListeners();
    this.knowledgeBase = this.buildKnowledgeBase();
  }

  initEventListeners() {
    this.toggleBtn.addEventListener('click', () => this.toggleChat());
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChat() {
    this.chatbot.classList.toggle('active');
  }

  buildKnowledgeBase() {
    return {
      greetings: ['hi', 'hello', 'hey'],
      expertise: ['skills', 'expertise'],
      projects: ['projects', 'work'],
      contact: ['contact', 'email']
    };
  }

  sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;

    this.addMessage(message, 'user');
    this.input.value = '';

    setTimeout(() => {
      const response = this.generateResponse(message);
      this.addMessage(response, 'bot');
    }, 800);
  }

  addMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `message ${sender}-message`;
    div.textContent = text;
    this.messagesContainer.appendChild(div);
  }

  generateResponse(message) {
    return "I can help you explore Ankit's skills, projects, and experience.";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioChatbot();
});
