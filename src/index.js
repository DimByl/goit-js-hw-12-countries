import './sass/main.scss';
import fetchCountries from './fetchCountries';
import createCountryList from './templates/countrieslist.hbs';
import createCard from './templates/countries.hbs';
import notifications from './notificationSettings';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/countdown/dist/PNotifyCountdown.css';
import { alert } from '@pnotify/core';
import debounce from 'lodash.debounce';

const refs = {
    input: document.querySelector('.input'),
    listofCountries: document.querySelector('.list-of-countires'),
    countryContainers: document.querySelector('.container-countries')
}

refs.input.addEventListener('input', debounce(inputHandler, 500));

function inputHandler() {
    refs.listofCountries.innerHTML = '';
    refs.countryContainers.innerHTML = '';
    fetchCountries(refs.input.value).
        then(res => {
            if (res.status === 404) {
                handleError();
                return;
            } else handleResult(res);
        });
}
function renderCountries(country) {
    refs.listofCountries.insertAdjacentHTML('beforeend', createCountryList(country));
}

function renderCountry(country) {
    refs.countryContainers.innerHTML = '';
    refs.countryContainers.insertAdjacentHTML('beforeend', createCard(country));
}

function handleResult(res) {
    if (res.length === 1) {
        renderCountry(res);
        alert(notifications.found);
    } else if (res.length > 10) {
        alert(notifications.foundTooMany);
        return;
    } else {
        renderCountries(res);
        alert(notifications.foundMany);
    }
}


function handleError() {
    alert(notifications.notFound);
}