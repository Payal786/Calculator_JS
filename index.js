const show = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

buttons.forEach(btn => {
    btn.addEventListener('click', value);
});

function value(e) {
    const key = e.target.innerText;

    if (key === 'AC') {
        show.innerText = '';
    } else if (key === '=') {
        try {
            show.innerText = eval(show.innerText);
        } catch {
            show.innerText = 'Error';
        }
    } else if (key === 'del') {
        show.innerText = show.innerText.slice(0, -1);
    } else if (key === 'π') {
        show.innerText += Math.PI;
    } else if (key === 'sqrt') {
        show.innerText = Math.sqrt(parseFloat(show.innerText));
    } else if (key === '1/x') {
        show.innerText = 1 / parseFloat(show.innerText);
    } else {
        show.innerText += key;
    }
}
