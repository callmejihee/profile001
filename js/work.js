const btnList = document.querySelectorAll('.work__btn');
const itemList = document.querySelectorAll('.work__list ul li');

btnList.forEach(btn => {
        btn.onclick = function() {
        //active
        btnList.forEach(btn => {
            btn.classList.add('active');
        });
        btn.classList.remove('active');

        //filter
        //console.log(btn.textContent);       
        const value = btn.textContent;
        itemList.forEach(img => {
            img.style.display = 'none';
            if (img.getAttribute('data-filter') == value.toLowerCase() || value == 'All') {
                img.style.display = 'grid';
            }
        });
    }
});