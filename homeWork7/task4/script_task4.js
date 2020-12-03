const selectX = document.querySelector('.names');

document.querySelector('.btn').addEventListener('click', function () {

    for (let i = selectX.length - 1; i >= 0; i--) {

        if (selectX[i].selected) {
            selectX.remove(i);
            break;
        }
    }
});
