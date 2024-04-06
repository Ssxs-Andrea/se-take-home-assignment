// Order class represents an order with order number, status, and type.
// Functions addNormalOrder and addVipOrder add new orders to the orders array, 
// with normal and VIP orders having unique order numbers. 
// Function updatePendingOrdersUI updates the UI to display the current list of pending orders.

class Order {class
    constructor(orderNumber, status, type) {
        this.orderNumber = orderNumber;
        this.status = status;
        this.type = type;
    }
}

let orders = [];
let normalOrderCounter = 0;

function addNormalOrder() {
    const orderNumber = `normal${String(normalOrderCounter).padStart(3, '0')}`;
    const newOrder = new Order(orderNumber, "PENDING", "NORMAL");
    orders.push(newOrder);
    normalOrderCounter++;
    updatePendingOrdersUI();
    processingOrder();
}

let vipOrderCounter = 0;

function addVipOrder() {
    const orderNumber = `vip${String(vipOrderCounter).padStart(3, '0')}`;
    const newOrder = new Order(orderNumber, "PENDING", "VIP");
    let lastVipIndex = -1;

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type === "VIP") {
            lastVipIndex = i;
        }
    }

    if (orders.length === 0) {
        orders.push(newOrder);
    } else if (lastVipIndex === -1) {
        orders.unshift(newOrder);
    } else {
        orders.splice(lastVipIndex + 1, 0, newOrder);
    }

    vipOrderCounter++;
    updatePendingOrdersUI();
    processingOrder();
}

function updatePendingOrdersUI() {
    const pendingOrdersList = document.getElementById('pendingOrders');
    pendingOrdersList.innerHTML = '';

    orders.forEach(order => {
        const orderItem = document.createElement('li');
        orderItem.textContent = `${order.orderNumber}`;
        pendingOrdersList.appendChild(orderItem);
    });
}