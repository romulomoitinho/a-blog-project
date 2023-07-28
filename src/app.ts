//data array with each post
const dataArray = [
    { id: 1, title: 'The Future 1', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' },
    { id: 2, title: 'The Future 2', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' },
    { id: 3, title: 'The Future 3', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' },
    { id: 4, title: 'The Future 4', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' },
    { id: 5, title: 'The Future 5', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' },
    { id: 6, title: 'The Future 6', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' },
];

//a fuction to create dinamically div (card post) elements
function createPostCards() {
//getting de section post element
const postSection = document.getElementById('post-section');

if (postSection) {
    for (let data of dataArray) {
    //creating the div element
    const postCardElement = document.createElement('div');
    postCardElement.classList.add('post');
    
    //creating the img element
    const imageElement = document.createElement('img');
    imageElement.src = data.imageUrl;

    //creating the title post element
    const titleElement = document.createElement('h2');
    titleElement.classList.add('title-post');
    titleElement.textContent = data.title;

    //creating the p element to put de body
    const bodyElement = document.createElement('p');
    bodyElement.classList.add('summary-post');
    bodyElement.textContent = data.body;

    //creating the footer element to put de 'Expand...'
    const footerElement = document.createElement('footer');
    footerElement.classList.add('expand-text-box');
    footerElement.textContent = 'Expand...';

    //inserting the elemnte in the postCardElement
    postCardElement.appendChild(imageElement);
    postCardElement.appendChild(titleElement);
    postCardElement.appendChild(bodyElement);
    postCardElement.appendChild(footerElement);

    //finally, put the postCardElement in the postSection
    postSection.appendChild(postCardElement);
    }
}
}

createPostCards();