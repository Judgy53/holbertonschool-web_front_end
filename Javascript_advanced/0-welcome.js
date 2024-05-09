/**
 * Welcome the user in an alert
 * @param {string} firstName 
 * @param {string} lastName 
 */
function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;

    function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }

    displayFullName();
}