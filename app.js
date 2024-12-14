const generateRandomBtn = document.querySelector("#generateRandomBtn");
const feedbackTextbox = document.querySelector("#randomNumber");

generateRandomBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    // 1 - 10 -> Math.random() * (11 - 1) + 1;
   
    const feedBackMsg = `Random Number: ${randomNumber}`;
    feedbackTextbox.innerHTML = feedBackMsg;
});