const pages = document.querySelectorAll('page');
for (let i = 0; i < pages.length; i++) {
    let footer = pages[i].appendChild(document.createElement('footer'));
    if (Lang === 'en') {
        footer.innerHTML = `Page ${i + 1}`;
    } else if (Lang === 'fa') {
        footer.innerHTML = `صفحه ${Intl.NumberFormat('fa').format(i + 1)}`;
    }
    let header = pages[i].appendChild(document.createElement('header'));
    header.innerHTML = bookName;
    if (i % 2 == 0 && i != 0) {
        if (Lang == 'fa') {
            footer.innerHTML += `  <a onclick="prevPage();">〈 صفحه قبل 〉</a>`;
        } else if (Lang == 'en') {
            footer.innerHTML += `  <a onclick="prevPage();">〈 Previous page 〉</a>`;
        }
    } else if (i % 2 == 1 && i != 0 && i != pages.length - 1) {
        if (Lang == 'fa') {
            footer.innerHTML += `  <a onclick="nextPage();">〈 صفحه بعد 〉</a>`;
        } else if (Lang == 'en') {
            footer.innerHTML += `  <a onclick="nextPage();">〈 Next page 〉</a>`;
        }
    }
}
function nextPage(){
    currentPage[0] += 2;
    currentPage[1] += 2;
    localStorage.setItem('currentPage', JSON.stringify(currentPage));
    Page();
}
function nextPageMob(){
    currentPage[0]++;
    currentPage[1]++;
    localStorage.setItem('currentPage', JSON.stringify(currentPage));
    Page();
}
function prevPage(){
    currentPage[0] -= 2;
    currentPage[1] -= 2;
    localStorage.setItem('currentPage', JSON.stringify(currentPage));
    Page();
}
function prevPageMob(){
    currentPage[0]--;
    currentPage[1]--;
    localStorage.setItem('currentPage', JSON.stringify(currentPage));
    Page();
}
function Page(){
    currentPage = JSON.parse(localStorage.getItem('currentPage'));
    pages.forEach(page => {
        page.style.display = 'none';
    });
    pages[currentPage[0]].style.display = 'flex';
    pages[currentPage[1]].style.display = 'flex';
}
if (localStorage.getItem('currentPage') == null) {
    localStorage.setItem('currentPage', JSON.stringify([0, 1]));
}
Page();