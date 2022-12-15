export function lazyLoad(view: string): Object {
    return () => import(`@/views/${view}.vue`);
}

export function preloadImage(url: string): Promise<any> {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

export function preloadImages(urls: Array<string>): Promise<any>[] {
    let promises: any[] = [];

    urls.forEach(url => {
        promises.push(preloadImage(url));
    });

    return promises;
}