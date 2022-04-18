import {writable} from 'svelte/store';
export let user = writable(sessionStorage.getItem('user'));