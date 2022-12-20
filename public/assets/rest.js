const CONSTANTS = {
    API_URL: 'https://exuberant-toga-wasp.cyclic.app',
}

export function fetchNews(callback) {
    return fetch(`${CONSTANTS.API_URL}/v1/berita/all`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function fetchAnnouncements(callback) {
    return fetch(`${CONSTANTS.API_URL}/v1/pengumuman/all`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function getNewsDetail(id, callback) {
    return fetch(`${CONSTANTS.API_URL}/v1/berita/get/${id}`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function getAnnouncementDetail(id, callback) {
    return fetch(`${CONSTANTS.API_URL}/v1/pengumuman/get/${id}`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}