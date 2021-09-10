'use strict';


(function generatePage() {


    // Data
const user1 = {
    img: './images/image-victor.jpg',
    name: 'Victor Crest',
    age: 26,
    city: 'London',
    followers: 80000,
    likes: 803000,
    photos:1400
}

const user2 = {
    img: './images/petar-popara.jpeg',
    name: 'Petar Popara',
    age: 65,
    city: 'El Dorado',
    followers: 90000,
    likes: 904000,
    photos:3800
}

// DOM Elements
const main = document.querySelector('main');

// Functions
function thousandToK(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function generateCard(user) {
    const userCard = document.createElement('div');
    userCard.setAttribute('class', 'user-card');

    const upper = document.createElement('div');
    upper.setAttribute('class', 'upper');
    const cover = document.createElement('div');
    cover.setAttribute('class', 'cover');
    const img = document.createElement('div');
    img.setAttribute('class', 'img');
    const face = document.createElement('img');
    face.setAttribute('src', `${user.img}`);
    face.setAttribute('alt', `avatar`);
    const about = document.createElement('div');
    about.setAttribute('class', 'about');
    const name = document.createElement('h2');
    name.innerHTML = `${user.name} <span>${user.age}</span>`
    const city = document.createElement('p');
    city.textContent = `${user.city}`;

    const bottom = document.createElement('div');
    bottom.setAttribute('class', 'bottom');
    const numsF = document.createElement('div');
    numsF.setAttribute('class', 'nums');
    const folowersH = document.createElement('h2');
    folowersH.textContent = `${thousandToK(user.followers)}`;
    const folowersP = document.createElement('p');
    folowersP.textContent = 'Followers';
    const numsL = document.createElement('div');
    numsL.setAttribute('class', 'nums');
    const likesH = document.createElement('h2');
    likesH.textContent = `${thousandToK(user.likes)}`;
    const likesP = document.createElement('p');
    likesP.textContent = 'Likes';
    const numsP = document.createElement('div');
    numsP.setAttribute('class', 'nums');
    const photosH = document.createElement('h2');
    photosH.textContent = `${thousandToK(user.photos)}`;
    const photosP = document.createElement('p');
    photosP.textContent = 'Photos';


    main.append(userCard);
        userCard.append(upper);
         upper.append(cover);
         upper.append(img);
            img.append(face);
         upper.append(about)
            about.append(name)
            about.append(city)

    userCard.append(bottom);

        bottom.append(numsF);
        numsF.append(folowersH);
        numsF.append(folowersP);

        bottom.append(numsL);
        numsL.append(likesH);
        numsL.append(likesP);

        bottom.append(numsP);
        numsP.append(photosH);
        numsP.append(photosP);
      
}

generateCard(user1);



}())