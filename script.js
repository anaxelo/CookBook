// Закомментировать код ниже если нужно будет отключить радужный фон к
setInterval(() => {
    document.body.style.transitionDuration = '2s';
    const o = Math.round;
    let r = Math.random;
    const s = 255;
    let color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    document.body.style.background = color;
}, 1000);
// Закомментировать код выше если нужно будет отключить радужный фон ккк

document.getElementById('1111').addEventListener('click', () => {
    let lalala = document.getElementById('22222').value;
    const lalala2 = document.getElementById('333333');
    let lalala4 = lalala2.options[lalala2.selectedIndex].text;
    const lalala3 = document.getElementById('444444').value;

    const div = document.createElement('div');
    div.innerHTML = `<i class="right"></i> <i class="right"></i> ${lalala3} ${lalala4} ${lalala}</div>`;
    let hehe = document.getElementById('fast-reg')
    hehe.append(div);
})

document.getElementById('banan').addEventListener('click', () => {
    const lololoshka = document.getElementById('s2tep-box').value;

    const div = document.createElement('div');
    div.innerHTML = `<li>
    ${lololoshka}
</li>`;
    let hoho = document.getElementById('kukuruza')
    hoho.append(div);
})

document.getElementById('12345').addEventListener('click', () => {
    let bb = true;
    const inputElement = document.getElementById('polezniy_element?').value;
    const inputValue = document.getElementById('kolvo').value;
    if (inputElement === "" || inputValue === "") {
        bb = false;
        console.log('=> ^_^ Андрей гей 0_0 <=');
    }
    for (let i = 0; i < document.getElementById('thead').rows[0].cells.length; i++) {
        if (document.getElementById('thead').rows[0].cells[i].innerHTML === inputElement) {
            document.getElementById('tbody').rows[0].cells[i].innerHTML = (+document.getElementById('tbody').rows[0].cells[i].innerHTML + +inputValue).toFixed(2);
            bb = false;
        }
    }
    if (bb) {
        const th = document.createElement('th');
        th.innerHTML = `${inputElement}`;
        let haha = document.getElementById('id')
        haha.append(th);
        const td = document.createElement('td');
        td.innerHTML = `${inputValue}`;
        let hihi = document.getElementById('tr')
        hihi.append(td);
    }
})