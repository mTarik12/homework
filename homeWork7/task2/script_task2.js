changeCSS = () => {
    let p = document.getElementById('text');
    p.style.color = 'orange';
    p.style.fontSize = '20pt';
    p.style.fontFamily = 'Comic Sans MS';
}

document.querySelector('.btn').addEventListener('click', changeCSS);