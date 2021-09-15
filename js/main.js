const websiteName = ' - ÎLE-DE-BRÉHAT';

function changePageTitle(page) {
    switch (page) {
        default:
            document.title = 'Commune d\'Île-de-Bréhat, site officiel'.concat(websiteName);
    }
}

window.onload = function () {
    const page = document.URL.split('/').pop();
    changePageTitle(page);
}