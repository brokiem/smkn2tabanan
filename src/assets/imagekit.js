import ImageKit from "imagekit";

export function upload(file, privateKey, callback = () => {}) {
    const imagekit = new ImageKit({
        publicKey: "public_eASR6hL2bY8Ceia+KbydGWyWNu8=",
        privateKey: privateKey,
        urlEndpoint: "https://ik.imagekit.io/smkn2tabanan",
    });

    imagekit.upload({
        file: file,
        fileName: file.name,
        tags: ["images"]
    }, function (err, result) {
        callback(result);
    })
}