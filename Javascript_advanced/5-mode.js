/**
 * @param {number} size new font size
 * @param {string} weight new font weight
 * @param {string} transform new text transform
 * @param {string} background new background color
 * @param {string} color new text color
 * @returns {() => void} closure that applies the new styles to the body
 */
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = `${size}pt`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

/**
 * Add buttons to change page style in body
 */
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(9, 'normal', 'lowercase', 'white', 'black');

    //Add Welcome Holberton! paragraph
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.appendChild(document.createTextNode('Welcome Holberton!'));
    document.body.appendChild(welcomeParagraph);

    //Add Spooky button
    const spookyButton = document.createElement('button');
    spookyButton.appendChild(document.createTextNode('Spooky'));
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    //Add Dark mode button
    const darkButton = document.createElement('button');
    darkButton.appendChild(document.createTextNode('Dark mode'));
    darkButton.addEventListener('click', darkMode);
    document.body.appendChild(darkButton);

    //Add Scream mode button
    const screamButton = document.createElement('button');
    screamButton.appendChild(document.createTextNode('Scream mode'));
    screamButton.addEventListener('click', screamMode);
    document.body.appendChild(screamButton);
}

main();