let completedOrder = [];

function processingOrder() {
    if (botCount > 0 && orders.length > 0) {
        const bot = bots.find(bot => bot.state === "IDLE"); // Find an idle bot
        if (bot) {
            const order = orders.shift();
            order.status = "PROCESSING";
            bot.state = "PROCESSING";
            bot.currentOrder = order;
            bot.remainingTime = 10;
            updatePendingOrdersUI();
            updatePendingBotsUI();

            bot.timerId = setInterval(() => {
                bot.remainingTime--;
                if (bot.remainingTime < 0) {
                    clearInterval(bot.timerId); // Stop the timer when time reaches 0

                    order.status = "COMPLETE";
                    updatePendingOrdersUI();
                    completedOrder.push(order);
                    updateCompleteOrdersUI();

                    bot.state = "IDLE";
                    bot.currentOrder = null;
                    bot.remainingTime = 0;
                    updatePendingBotsUI();

                    if (orders.length > 0) {
                        processingOrder();
                    }
                } else {
                    updatePendingBotsUI();
                }
            }, 1000);//update every second
        }
    }
}

function updateCompleteOrdersUI() {
    const completeOrdersList = document.getElementById('completedOrders');
    completeOrdersList.innerHTML = '';

    completedOrder.forEach(order => {
        const orderItem = document.createElement('li');
        orderItem.textContent = `${order.orderNumber}`;
        completeOrdersList.appendChild(orderItem);
    });
}
