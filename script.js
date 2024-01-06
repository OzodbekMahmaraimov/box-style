window.addEventListener('DOMContentLoaded', () => {
    let ranges = document.querySelectorAll('.range'),
    win = document.querySelectorAll('.val'),
    box = document.querySelector('.box'),
    a = document.querySelectorAll('a');

ranges.forEach((item, index) => {
    item.addEventListener('input', () => {
        if (item.dataset.index == "all") {
            box.style.borderRadius = `${item.value}px`;
            win[index].textContent = `${item.value}px`;
        }
        if (item.dataset.index == "tl") {
            box.style.borderTopLeftRadius = `${item.value}px`;
            win[index].textContent = `${item.value}px`;
        }
        if (item.dataset.index == "tr") {
            box.style.borderTopRightRadius = `${item.value}px`;
            win[index].textContent = `${item.value}px`;
        }
        if (item.dataset.index == "bl") {
            box.style.borderBottomLeftRadius = `${item.value}px`;
            win[index].textContent = `${item.value}px`;
        }
        if (item.dataset.index == "br") {
            box.style.borderBottomRightRadius = `${item.value}px`;
            win[index].textContent = `${item.value}px`;
        }
    });
});


a.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

let navIcon = document.querySelector('.nav-icon'),
    nav2 = document.querySelector('.navigation-items'),
    know = true;
navIcon.addEventListener('click', () => {
    if(know) {
        nav2.classList.remove('hidden');
        nav2.classList.add('navigation-items-sm');
        know = false;
    } else {
        nav2.classList.remove('navigation-items-sm');
        nav2.classList.add('hidden');  
        know = true;
    }
    }) 

    // Tab
    const tabsParent = document.querySelector('.navigation-items'),
        tabs = document.querySelectorAll('.navigation-item'),
        tabsContent = document.querySelectorAll('.tabcontent')

        function hideTabContent() {
            tabsContent.forEach((item) => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            })
            tabs.forEach(item => {
                item.classList.remove('text-danger', 'fs-5');
            })
        }
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('text-danger', 'fs-5')
        }

        hideTabContent()
        showTabContent()

        tabsParent.addEventListener('click', (event) => {
            const target = event.target
            if(target && target.classList.contains('navigation-item')) {
                tabs.forEach((item, idx) => {
                    if(target == item) {
                        hideTabContent()
                        showTabContent(idx)
                    }
                })
            }
        })
})