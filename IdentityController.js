// setIdentity function displays different instructions and buttons based on the provided identity.
// It updates the instructionDiv, buttonsDiv, and backButtonsDiv elements in the UI.
// The function is called with parameters 'normal', 'vip', or 'manager' to display instructions for different identities.

// goBack function resets the UI to the initial state where the user can choose their identity.
// It is called when the user clicks the "Back" button to go back to the identity selection screen.

function setIdentity(identity) {
    const instructionDiv = document.getElementById('instruction');
    const buttonsDiv = document.getElementById('buttons');
    const backButtonsDiv = document.getElementById('backButtons');

    switch (identity) {
        case 'normal':
            instructionDiv.innerHTML = '<h3>Hi Normal Customer, please choose to perform:</h3>';
            buttonsDiv.innerHTML = '<button onclick="addNormalOrder()">New Normal Order</button>';
            backButtonsDiv.innerHTML = '<button onclick="goBack()">Back</button>';
            backButtonsDiv.style.display = 'flex';
            break;
        case 'vip':
            instructionDiv.innerHTML = '<h3>Hi VIP Customer, please choose to perform:</h3>';
            buttonsDiv.innerHTML = '<button onclick="addVipOrder()">New VIP Order</button>';
            backButtonsDiv.innerHTML = '<button onclick="goBack()">Back</button>';
            backButtonsDiv.style.display = 'flex';
            break;
        case 'manager':
            instructionDiv.innerHTML = '<h3>Hi Manager, please choose to perform:</h3>';
            buttonsDiv.innerHTML = '<button onclick="increaseBot()">+ Bot</button><button onclick="decreaseBot()">- Bot</button>';
            backButtonsDiv.innerHTML = '<button onclick="goBack()">Back</button>';
            backButtonsDiv.style.display = 'flex';
            break;
        default:
            break;
    }
}

function goBack() {
    const instructionDiv = document.getElementById('instruction');
    const buttonsDiv = document.getElementById('buttons');
    const backButtonsDiv = document.getElementById('backButtons');

    instructionDiv.innerHTML = '<h3>Please choose your identity:</h3>';
    buttonsDiv.innerHTML = '<button onclick="setIdentity(\'normal\')">Normal Customer</button><button onclick="setIdentity(\'vip\')">VIP Customer</button><button onclick="setIdentity(\'manager\')">Manager</button>';
    backButtonsDiv.style.display = 'none';
}




