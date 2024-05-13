const stock = {
    macbook: 2,
    iphone: 4
}

/**
 * @param {string} itemName 
 */
function processPayment(itemName) {
    stock[itemName]--;
    console.log(`Payment is being processed for item ${itemName}`);
}

/**
 * @param {string} itemName 
 */
function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
}

/**
 * @param {string} itemName 
 * @param {function} callbackPayment 
 * @param {function} callbackError 
 */
function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if(stock[itemName] !== undefined && stock[itemName] > 0)
        callbackPayment(itemName);
    else
        callbackError(itemName);
}

const userInput = prompt('Please enter the item you would like to purchase (Macbook, iPhone)', '');
processOrder(userInput.toLowerCase(), processPayment, processError);