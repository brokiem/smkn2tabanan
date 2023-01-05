const CONSTANTS = {
    API_URL: 'https://exuberant-toga-wasp.cyclic.app',
}

export function fetchNews(callback) {
    fetch(`${CONSTANTS.API_URL}/v1/berita/all`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function fetchAnnouncements(callback) {
    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/all`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function getNewsDetail(id, callback) {
    fetch(`${CONSTANTS.API_URL}/v1/berita/get/${id}`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function getAnnouncementDetail(id, callback) {
    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/get/${id}`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(error => console.log('error', error));
}

export function publishNews(data, callback) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("created_at", Date.now().toString());
    urlencoded.append("updated_at", Date.now().toString());

    const params = {
        method: 'POST',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/berita/add`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export function publishAnnouncement(data, callback) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("created_at", Date.now().toString());
    urlencoded.append("updated_at", Date.now().toString());

    const params = {
        method: 'POST',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/add`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export function draftNews(data, callback) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("created_at", Date.now().toString());
    urlencoded.append("updated_at", Date.now().toString());

    const params = {
        method: 'POST',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/berita/draft`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export function draftAnnouncement(data, callback) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("created_at", Date.now().toString());
    urlencoded.append("updated_at", Date.now().toString());

    const params = {
        method: 'POST',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/draft`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}