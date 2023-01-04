const relationshipButton = document.querySelector('#relationships-button');
const momentsButton = document.querySelector('#moments-button');
const homeButton = document.querySelector('#home-button');
const peopleButton = document.querySelector('#people-button');
const notificationButton = document.querySelector('#notification-button');

const relationshipPage = document.querySelector('#relationship-wrapper');
const momentsPage = document.querySelector('#moments-wrapper');
const homePage = document.querySelector('#dashboard-wrapper');
const peoplePage = document.querySelector('#people-wrapper');
const notificationPage = document.querySelector('#notification-wrapper');

let activePage = homePage;

relationshipButton.addEventListener('click', () => {
    hideActivePage(relationshipPage);
    // Set the active page to this page
    activePage = relationshipPage;
})

momentsButton.addEventListener('click', () => {
    hideActivePage(momentsPage);
    // Set the active page to this page
    activePage = momentsPage;
})

homeButton.addEventListener('click', () => {
    hideActivePage(homePage);
    // Set the active page to this page
    activePage = homePage;
})

peopleButton.addEventListener('click', () => {
    hideActivePage(peoplePage);
    // Set the active page to this page
    activePage = peoplePage;
})

notificationButton.addEventListener('click', () => {
    hideActivePage(notificationPage);
    // Set the active page to this page
    activePage = notificationPage;
})

function hideActivePage(calledPage) {

    if (activePage === calledPage) return;

    activePage.classList.add('hidden')

    calledPage.classList.remove('hidden')
} 