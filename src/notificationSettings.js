import * as PNotifyMobile from '@pnotify/mobile/';
import * as PNotifyCountdown from '@pnotify/countdown';
import { defaultModules } from '@pnotify/core';
defaultModules.set(PNotifyMobile, {});
export default {
    foundTooMany: {
        type: 'error',
        title: 'Too many matches found.',
        text: 'Please enter specific query!',
        delay: 3000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
    notFound: {
        type: 'error',
        title: 'No matches found.',
        text: 'Please enter different query!',
        delay: 3000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
    found: {
        type: 'success',
        title: 'Country found.',
        delay: 3000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
    foundMany: {
        type: 'notice',
        title: 'Found more than one country.',
        text: 'Choose country you are searching for!',
        delay: 3000,
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
};