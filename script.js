let ranges = document.querySelectorAll('.range'),
    win = document.querySelectorAll('.val'),
    box = document.querySelector('.box'),
    a = document.querySelectorAll('a');

ranges.forEach((item, index) => {
    item.addEventListener('input', () => {
        if (item.dataset.index == "tl") {
            box.style.borderTopLeftRadius = `${item.value}px`;
            win[index].value = `${item.value}px`;
        }
        if (item.dataset.index == "tr") {
            box.style.borderTopRightRadius = `${item.value}px`;
            win[index].value = `${item.value}px`;
        }
        if (item.dataset.index == "bl") {
            box.style.borderBottomLeftRadius = `${item.value}px`;
            win[index].value = `${item.value}px`;
        }
        if (item.dataset.index == "br") {
            box.style.borderBottomRightRadius = `${item.value}px`;
            win[index].value = `${item.value}px`;
        }
    });
});


a.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

let navIcon = document.querySelector('.nav-icon');
navIcon.addEventListener('click', () => {
    
}) 