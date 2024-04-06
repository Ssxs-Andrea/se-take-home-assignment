// Bot class represents a bot with an ID, state, current order, and remaining processing time.
// Function increaseBot adds a new bot to the bots array with an incremented ID and updates the UI.
// Function decreaseBot removes the last bot from the bots array if there are bots available, 
// stopping the processing of its current order if applicable, and updates the UI.
// Function updatePendingBotsUI updates the UI to display the current list of bots and their status.

class Bot {
    constructor(id, state) {
        this.id = id;
        this.state = state;
        this.processingOrderNumber = null;
        this.currentOrder = null
        this.remainingTime = 0;
        this.timerId = null;
    }
}

let bots = [];
let botCount = 0;

function increaseBot() {
    const botId = `BOT${String(botCount + 1).padStart(3, '0')}`;
    const newBot = new Bot(botId, "IDLE");
    bots.push(newBot);
    botCount++;
    updatePendingBotsUI();
    processingOrder();
}
function decreaseBot() {
    if (botCount > 0) {
        const lastBot = bots.pop();
        botCount--;

        if (lastBot.state === "PROCESSING" && lastBot.currentOrder) {
            const order = lastBot.currentOrder;
            order.status = "PENDING";
            clearInterval(lastBot.timerId);
            orders.unshift(order);
            updatePendingOrdersUI();
        }
        updatePendingBotsUI();
    }
}

function updatePendingBotsUI() {
    const pendingBotsList = document.getElementById('botNumbers');
    pendingBotsList.innerHTML = '';

    bots.forEach(bot => {
        const botItem = document.createElement('li');
        botItem.id = `${bot.id}`;
        if (bot.state === "IDLE") {
            botItem.textContent = `${bot.id} - IDLE`;
        } else if (bot.state === "PROCESSING") {
            botItem.textContent = `${bot.id} - Remaining Time: ${bot.remainingTime}s - Order Number: ${bot.currentOrder.orderNumber}`;
        }
        pendingBotsList.appendChild(botItem);
    });
}


