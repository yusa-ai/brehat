const WEBSITE_NAME = ' - ÎLE-DE-BRÉHAT';

function getCurrentPage() {
    let url = window.location.pathname.substr(1);
    return url.split('.')[0];
}

function initialize(webpage) {
    let title;

    switch (webpage) {
        case 'municipalite':
            title = 'Municipalité : la mairie de Bréhat en détail';
            break;
        default:
            webpage = 'index';
            title = 'Commune d\'Île-de-Bréhat, site officiel';
    }

    document.title = title.concat(WEBSITE_NAME);
    document.getElementById(webpage).classList.add('active');
}

window.onload = function () {
    let webpage = getCurrentPage();
    initialize(webpage);
}