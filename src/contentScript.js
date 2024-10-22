import AIIcon from "./AIIcon";

window.onload = () => {
  const messageInput = document.querySelector("input.message-input-selector");

  if (messageInput) {
    messageInput.addEventListener("focus", () => {
      // Show AI icon
      displayAIIcon();
    });

    messageInput.addEventListener("blur", () => {
      // Hide AI icon when input loses focus
      hideAIIcon();
    });
  }
};

function displayAIIcon() {
  // Inject AI icon overlay into DOM
  <AIIcon />;
}

function hideAIIcon() {
  // Remove AI icon from DOM
  <AIIcon />;
}
