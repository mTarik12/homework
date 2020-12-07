window.addEventListener('resize', () => {
    document.querySelector('.width').textContent = `Width: ${window.innerWidth}px.`;
    document.querySelector('.height').textContent = `Height: ${window.innerHeight}px.`;
});

