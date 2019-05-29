'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('.container');

    let images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
    ];

    function loadImg(path) {
        return new Promise((resolve, reject) => {

            let image = new Image();
            image.src = path;

            image.addEventListener('load', () => resolve(image));
            image.addEventListener('error', () => reject(path));
        });
    }

    images = images.map((item) => loadImg(item));

    Promise.all(images)
        .then(
            values => values.forEach(value => div.appendChild(value)),
            image => console.error(`Error! Can't get image: ${image}`));
}); 