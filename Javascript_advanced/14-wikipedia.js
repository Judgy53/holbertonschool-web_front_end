/**
 * @param {string} data 
 */
function createElement(data) {
    const pElem = document.createElement('p');
    pElem.innerHTML = data;
    document.body.appendChild(pElem);
}

/**
 * @param {function} callback 
 */
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        const responseJson = JSON.parse(xhr.responseText);
        callback(responseJson["query"]["pages"]["21721040"]["extract"]);
    }
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    xhr.send(null);
}

queryWikipedia(createElement);