async function toVote(codeStatus) {
    const result = await fetch('http://192.168.0.105:8080/');
    const now = new Date();

    const button = document.querySelector('.btn');

    if (result.status === codeStatus) {

        button.addEventListener('click', () => {
            setTimeout(() => {
                button.innerHTML = `Your vote is accepted: ${now}`;
            }, 1000);
        });

    } else {

        button.addEventListener('click', () => {
            setTimeout(() => {
                const newError = new Error('Bad gateway');
                alert(newError);
            }, 1000);
        });
    }
};

toVote(200);

