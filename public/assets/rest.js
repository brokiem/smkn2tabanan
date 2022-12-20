const CONSTANTS = {
    API_URL: 'https://exuberant-toga-wasp.cyclic.app/v1',
}

export function fetchNews(callback) {
    return fetch(`${CONSTANTS.API_URL}/berita/all`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function fetchAnnouncements(callback) {
    return fetch(`${CONSTANTS.API_URL}/pengumuman/all`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function getNewsDetail(id, callback) {
    return fetch(`${CONSTANTS.API_URL}/berita/get/${id}`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function getAnnouncementDetail(id, callback) {
    return fetch(`${CONSTANTS.API_URL}/pengumuman/get/${id}`)
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}