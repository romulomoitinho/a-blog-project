//data array with each post
const dataArray = [
    { id: 1, title: 'The Future 1', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took", imageUrl: 'post_1.png' },
    { id: 2, title: 'The Future 2', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took", imageUrl: 'post_1.png' },
    { id: 3, title: 'The Future 3', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took", imageUrl: 'post_1.png' },
    { id: 4, title: 'The Future 4', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took", imageUrl: 'post_1.png' },
    { id: 5, title: 'The Future 5', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' },
    { id: 6, title: 'The Future 6', body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...", imageUrl: 'post_1.png' }
];

const commentData = [
    {id: 1, postId: 1, body: 'Muy bueno!', userInformation: {userName: "usuario_1", email: 'example@email.com'}},
    {id: 2, postId: 1, body: 'Trés bien!', userInformation: {userName: "usuario_1", email: 'example@email.com'}},
    {id: 3, postId: 1, body: 'Very Good!', userInformation: {userName: "usuario_1", email: 'example@email.com'}},
];

//a fuction to create dinamically div (card post) elements
function createPostCards() {
    //getting de section post element
    const postSection = document.getElementById('post-section');

    if (postSection) {
        for (let data of dataArray) {
        //creating the anchor for the card
        const anchorCardElement = document.createElement('a')
        anchorCardElement.href = `http://127.0.0.1:5501/detail_page.html?id=${data.id}`

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
        bodyElement.textContent = cropText(data.body, 180);

        //creating the footer element to put de 'Expand...'
        const footerElement = document.createElement('footer');
        footerElement.classList.add('expand-text-box');
        footerElement.textContent = 'Expand...';

        //inserting the elemnte in the postCardElement
        postCardElement.appendChild(imageElement);
        postCardElement.appendChild(titleElement);
        postCardElement.appendChild(bodyElement);
        postCardElement.appendChild(footerElement);

        anchorCardElement.appendChild(postCardElement)
        //finally, put the postCardElement in the postSection
        postSection.appendChild(anchorCardElement);
        }
    }
}

function createPostCardDetail() {
    const postCardDetailElement = document.getElementById('post-view');

    if(postCardDetailElement){

    }
}

function createComments() {
    //getting de section post element
    const commentSection = document.getElementById('comments-section');

    if (commentSection) {
        for (let comment of commentData) {
            //creating the div element
            const commentDivElement = document.createElement('div');
            commentDivElement.classList.add('comment');

            //creating the p elements to put in the div
            const userNameElement = document.createElement('p');
            userNameElement.classList.add('user-information');
            userNameElement.textContent = comment.userInformation.userName;

            const userEmailElement = document.createElement('p');
            userEmailElement.classList.add('user-information');
            userEmailElement.textContent = comment.userInformation.email;

            const userCommentElement = document.createElement('p');
            userCommentElement.classList.add('comment-text');
            userCommentElement.textContent = comment.body;

            //creating the svg element to put in the div
            const svgCommentElement = `
            <svg width="654" height="2" viewBox="0 0 654 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.996582 1H653.003" stroke="#575757" stroke-width="0.5" />
            </svg>`

            //inserting the elemnte in the postCardElement
            commentDivElement.appendChild(userNameElement);
            commentDivElement.appendChild(userEmailElement);
            commentDivElement.appendChild(userCommentElement);
            commentDivElement.innerHTML += svgCommentElement;

            //inserting the div on the comment section
            commentSection.appendChild(commentDivElement);
        }
    }
}

function cropText(text: string, caracterLimit: number): string {
    //the text is small or the same size of the limit
    if (text.length <= caracterLimit) {
        return text;
    } else {
        const croppedText = text.slice(0, caracterLimit);
        // Verifica se o último caractere é espaço para não cortar uma palavra pela metade
        const lastSpace = croppedText.lastIndexOf(' ');
        const textoFinal = lastSpace > -1 ? croppedText.slice(0, lastSpace) : croppedText;
        return textoFinal + '...';
    }
}

createPostCards();
//createPostCardDetail();
createComments();
//console.log(window.location.href.split('/')[3].split('?')[1]);