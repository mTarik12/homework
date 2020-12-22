document.querySelector('.btn').addEventListener('click', () => {

    setTimeout(() => {
        function downloadBooks(requestStatus) {

            const request = new XMLHttpRequest();

            request.open('GET', 'books.json', true);
            request.onreadystatechange = function () {

                if (request.readyState != 4) return;

                if (request.status != requestStatus) {
                    alert(`Error: ${requestStatus}`);

                } else {
                    const data = request.responseText;
                    const parseData = JSON.parse(data);

                    const list = document.querySelector('.authors');

                    parseData.forEach((cur) => {
                        list.innerHTML += `<li>${cur.author}</li>`;
                    })
                }
            };
            request.send();
        }

        downloadBooks(200);

    }, 1500);
});



