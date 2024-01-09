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
        function showTabContent(i = 1) {
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

        // box shadow
        const horizontalText = document.querySelectorAll('.shadow-text'),
         horizantalShadow = document.querySelectorAll('#customRange'),
         codeValueId = document.querySelectorAll('.valueId'),
         boxShadow = document.querySelector('.box-shadow')

         let r = 0, g = 0, b = 0;

        horizantalShadow.forEach((input, index) => {
            input.addEventListener('input', () => {
                const opacityValue = horizantalShadow[5].value;
                 if (index < horizontalText.length) {
                    if(input.type == 'color') {
                        let hexInput = input.value.trim();
                        hexInput = hexInput.replace(/^#/, '');
                        r = parseInt(hexInput.substring(0, 2), 16),
                        g = parseInt(hexInput.substring(2, 4), 16),
                        b = parseInt(hexInput.substring(4, 6), 16);
                        let resultDiv = document.querySelectorAll('.rgba-shadow');
                        resultDiv[0].textContent = r,
                        resultDiv[1].textContent = g,
                        resultDiv[2].textContent = b;
                        horizontalText[index].textContent ='RGB(' + r + ', ' + g + ', ' + b + ')';
                    } else horizontalText[index].textContent = input.value; 
                } if (index < codeValueId.length) {
                    codeValueId[index].textContent = input.value;
                }
                document.querySelector('.opacityValue').textContent = opacityValue;

        
                boxShadow.style.boxShadow = 
                `${horizantalShadow[0].value}px
                ${horizantalShadow[1].value}px
                ${horizantalShadow[2].value}px
                ${horizantalShadow[3].value}px
                rgba(${r}, ${g}, ${b}, ${opacityValue})
                   `
            });
        });

})