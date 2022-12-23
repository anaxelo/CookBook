setInterval(() => {
    document.body.style.transitionDuration = '2s';
    const o = Math.round;
    const r = Math.random;
    const s = 255;
    const color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    document.body.style.background = color;
}, 1000);

document.getElementById('12345').addEventListener('click', () => {
    alert('Андрей гей')
})

document.getElementById('1111').addEventListener('click', () => {
    const lalala = document.getElementById('22222').value;
    const lalala2 = document.getElementById('333333');
    const lalala4 = lalala2.options[lalala2.selectedIndex].text;
    const lalala3 = document.getElementById('444444').value;

    const div = document.createElement('div');
    div.innerHTML = `<i class="right"></i> <i class="right"></i> ${lalala3} ${lalala4} ${lalala}</div>`;
    const hehe = document.getElementById('fast-reg')
    hehe.append(div);
})