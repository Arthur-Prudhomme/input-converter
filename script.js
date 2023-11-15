const p = document.getElementById("test");
const container = document.getElementById("shortcut-container");

// Function to simulate key press
const simulateKey = (keyPressed) => {
    window.dispatchEvent(new KeyboardEvent("keydown", {
        key: keyPressed
    }));
}

window.addEventListener("keyup", (e) => {
    document.querySelectorAll(".shortcut-element").forEach(e => e.remove());
})

window.addEventListener('keydown', (e) => {

    if (e.key === 'v') {
        console.log('CTRL + V');
        simulateKey("Control");
        simulateKey("x");
    } else {

        let div = document.createElement('div');
        div.classList.add('shortcut-element');
        let text = document.createElement('p')
        text.innerHTML = `${e.key}`;
        div.appendChild(text);
        container.appendChild(div)
    }
});