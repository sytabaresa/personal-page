declare module 'basicscroll'

declare global {
    interface Window { gapi: gapi; }
}

window.gapi = window.gapi || {};