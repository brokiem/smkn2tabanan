const CONSTANTS = {
    API_URL: 'https://exuberant-toga-wasp.cyclic.app',
}

export function login(data, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", data.email);
    urlencoded.append("password", data.password);

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(`${CONSTANTS.API_URL}/v1/auth/login`, requestOptions)
        .then(response => response.json())
        .then(callback)
        .catch(onError);
}

export function fetchKey(accessToken, keyName, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("x-access-token", accessToken);
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    fetch(`${CONSTANTS.API_URL}/v1/key/${keyName}`, requestOptions)
        .then(response => response.json())
        .then(callback)
        .catch(onError);
}

export function fetchNews(callback, onError = () => {}) {
    fetch(`${CONSTANTS.API_URL}/v1/berita/all`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function fetchAnnouncements(callback, onError = () => {}) {
    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/all`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function getNewsDetail(id, callback, onError = () => {}) {
    fetch(`${CONSTANTS.API_URL}/v1/berita/get/${id}`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function getAnnouncementDetail(id, callback, onError = () => {}) {
    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/get/${id}`, {method: 'GET', redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function fetchDraftedNews(token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    fetch(`${CONSTANTS.API_URL}/v1/berita/draft/all`, {method: 'GET', headers: headers, redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function fetchDraftedAnnouncements(token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/draft/all`, {method: 'GET', headers: headers, redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function getDraftedNewsDetail(id, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    fetch(`${CONSTANTS.API_URL}/v1/berita/draft/get/${id}`, {method: 'GET', headers: headers, redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function getDraftedAnnouncementDetail(id, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/draft/get/${id}`, {method: 'GET', headers: headers, redirect: 'follow'})
        .then(res => res.json())
        .then(callback)
        .catch(onError);
}

export function publishNews(data, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("is_draft", false);
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
        .catch(onError);
}

export function publishAnnouncement(data, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("is_draft", false);
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
        .catch(onError);
}

export function draftNews(data, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("is_draft", true);
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
        .catch(onError);
}

export function draftAnnouncement(data, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("posted_by", "Admin");
    urlencoded.append("is_draft", true);
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
        .catch(onError);
}

export function editNews(articleId, data, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("is_draft", data.is_draft);

    const params = {
        method: 'PUT',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/berita/edit/${articleId}`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(onError);
}

export function editAnnouncement(articleId, data, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", data.title);
    urlencoded.append("image_header_url", data.image_header_url);
    urlencoded.append("contents", data.contents);
    urlencoded.append("is_draft", data.is_draft);

    const params = {
        method: 'PUT',
        headers: headers,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/edit/${articleId}`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(onError);
}

export function deleteNews(articleId, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const params = {
        method: 'DELETE',
        headers: headers,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/berita/${articleId}`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(onError);
}

export function deleteAnnouncement(articleId, token, callback, onError = () => {}) {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("x-access-token", token);

    const params = {
        method: 'DELETE',
        headers: headers,
        redirect: 'follow'
    }

    fetch(`${CONSTANTS.API_URL}/v1/pengumuman/${articleId}`, params)
        .then(callback)
        .then(result => console.log(result))
        .catch(onError);
}