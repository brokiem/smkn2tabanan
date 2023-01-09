const CONSTANTS = {
    API_URL: 'https://exuberant-toga-wasp.cyclic.app',
}

export function login(data) {
    return new Promise((resolve, reject) => {
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
            .then(resolve)
            .catch(reject);
    });
}

export function fetchKey(accessToken, keyName) {
    return new Promise((resolve, reject) => {
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
            .then(resolve)
            .catch(reject);
    });
}

export function fetchNews() {
    return new Promise((resolve, reject) => {
        fetch(`${CONSTANTS.API_URL}/v1/berita/all`, {method: 'GET', redirect: 'follow'})
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function fetchAnnouncements() {
    return new Promise((resolve, reject) => {
        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/all`, {method: 'GET', redirect: 'follow'})
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function getNewsDetail(id) {
    return new Promise((resolve, reject) => {
        fetch(`${CONSTANTS.API_URL}/v1/berita/get/${id}`, {method: 'GET', redirect: 'follow'})
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function getAnnouncementDetail(id) {
    return new Promise((resolve, reject) => {
        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/get/${id}`, {method: 'GET', redirect: 'follow'})
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function fetchDraftedNews(token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        fetch(`${CONSTANTS.API_URL}/v1/berita/draft/all`, {method: 'GET', headers: headers, redirect: 'follow'})
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function fetchDraftedAnnouncements(token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/draft/all`, {method: 'GET', headers: headers, redirect: 'follow'})
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function getDraftedNewsDetail(id, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        fetch(`${CONSTANTS.API_URL}/v1/berita/draft/get/${id}`, {method: 'GET', headers: headers, redirect: 'follow'})
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function getDraftedAnnouncementDetail(id, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/draft/get/${id}`, {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        })
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function publishNews(data, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const urlencoded = new URLSearchParams();
        urlencoded.append("title", data.title);
        urlencoded.append("image_header_url", data.image_header_url);
        urlencoded.append("contents", data.contents);
        urlencoded.append("posted_by", "Admin");
        urlencoded.append("is_draft", "false");
        urlencoded.append("created_at", Date.now().toString());
        urlencoded.append("updated_at", Date.now().toString());

        const params = {
            method: 'POST',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/berita/add`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function publishAnnouncement(data, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const urlencoded = new URLSearchParams();
        urlencoded.append("title", data.title);
        urlencoded.append("image_header_url", data.image_header_url);
        urlencoded.append("contents", data.contents);
        urlencoded.append("posted_by", "Admin");
        urlencoded.append("is_draft", "false");
        urlencoded.append("created_at", Date.now().toString());
        urlencoded.append("updated_at", Date.now().toString());

        const params = {
            method: 'POST',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/add`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function draftNews(data, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const urlencoded = new URLSearchParams();
        urlencoded.append("title", data.title);
        urlencoded.append("image_header_url", data.image_header_url);
        urlencoded.append("contents", data.contents);
        urlencoded.append("posted_by", "Admin");
        urlencoded.append("is_draft", "true");
        urlencoded.append("created_at", Date.now().toString());
        urlencoded.append("updated_at", Date.now().toString());

        const params = {
            method: 'POST',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/berita/add`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function draftAnnouncement(data, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const urlencoded = new URLSearchParams();
        urlencoded.append("title", data.title);
        urlencoded.append("image_header_url", data.image_header_url);
        urlencoded.append("contents", data.contents);
        urlencoded.append("posted_by", "Admin");
        urlencoded.append("is_draft", "true");
        urlencoded.append("created_at", Date.now().toString());
        urlencoded.append("updated_at", Date.now().toString());

        const params = {
            method: 'POST',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/add`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function editNews(articleId, data, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const urlencoded = new URLSearchParams();

        if (data.title !== undefined) {
            urlencoded.append("title", data.title);
        }
        if (data.image_header_url !== undefined) {
            urlencoded.append("image_header_url", data.image_header_url);
        }
        if (data.contents !== undefined) {
            urlencoded.append("contents", data.contents);
        }
        if (data.is_draft !== undefined) {
            urlencoded.append("is_draft", data.is_draft);
        }

        const params = {
            method: 'PUT',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/berita/edit/${articleId}`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function editAnnouncement(articleId, data, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const urlencoded = new URLSearchParams();

        if (data.title !== undefined) {
            urlencoded.append("title", data.title);
        }
        if (data.image_header_url !== undefined) {
            urlencoded.append("image_header_url", data.image_header_url);
        }
        if (data.contents !== undefined) {
            urlencoded.append("contents", data.contents);
        }
        if (data.is_draft !== undefined) {
            urlencoded.append("is_draft", data.is_draft);
        }

        const params = {
            method: 'PUT',
            headers: headers,
            body: urlencoded,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/edit/${articleId}`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function deleteNews(articleId, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const params = {
            method: 'DELETE',
            headers: headers,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/berita/${articleId}`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

export function deleteAnnouncement(articleId, token) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("x-access-token", token);

        const params = {
            method: 'DELETE',
            headers: headers,
            redirect: 'follow'
        }

        fetch(`${CONSTANTS.API_URL}/v1/pengumuman/${articleId}`, params)
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}