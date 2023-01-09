export function upload(file, privateKey) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("Authorization", `Basic ${btoa(privateKey + ":")}`);

        const formdata = new FormData();
        formdata.append("file", file);
        formdata.append("tags", "images");
        formdata.append("fileName", file.name);

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://upload.imagekit.io/api/v1/files/upload", requestOptions)
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    });
}