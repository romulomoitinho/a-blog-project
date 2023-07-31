import { posts, comments } from "./data.js";


//a fuction to create dinamically div (card post) elements
function createPostCards() {
    //getting de section post element
    const postSection = document.getElementById('post-section');

    if (postSection) {
        for (let post of posts) {
        //creating the anchor for the card
        const anchorCardElement = document.createElement('a')
        anchorCardElement.href = `${window.location.href.split('/')[0]}detail_page.html?id=${post.id}`

        //creating the div element
        const postCardElement = document.createElement('div');
        postCardElement.classList.add('post');
        
        //creating the img element
        const imageElement = document.createElement('img');
        imageElement.src = post.imageUrl;

        //creating the title post element
        const titleElement = document.createElement('h2');
        titleElement.classList.add('title-post');
        titleElement.textContent = post.title;

        //creating the p element to put de body
        const bodyElement = document.createElement('p');
        bodyElement.classList.add('summary-post');
        bodyElement.textContent = cropText(post.body, 180);

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
    const postCardDetailElement = document.getElementById('post-detail');
    
    if(postCardDetailElement){
        const idToDiscover = window.location.href.split('?id=')[1];
        const postObject = posts.find((post) => `${post.id}` === idToDiscover);
        if (postObject) {
            //creating the div container
            const divPostDetail = document.createElement('div');
            divPostDetail.classList.add('post');

            //creating and taking its source
            const imageElementDetail = document.createElement('img');
            imageElementDetail.setAttribute('src', postObject.imageUrl)

            //creating the h2
            const h2ElementDetail = document.createElement('h2');
            h2ElementDetail.classList.add('title-post');
            h2ElementDetail.textContent = postObject.title;

            //creating the text post
            const textPostDetail = document.createElement('p');
            textPostDetail.classList.add('text-post');
            textPostDetail.textContent = postObject.body;

            divPostDetail.appendChild(imageElementDetail);
            divPostDetail.appendChild(h2ElementDetail);
            divPostDetail.appendChild(textPostDetail);

            postCardDetailElement.appendChild(divPostDetail);
        }
    }
        
}

function createComments() {
    //getting de section post element
    const commentSection = document.getElementById('comments-section');
    
    if (commentSection) {
        const idToDiscover = window.location.href.split('?id=')[1];
        const commentObjects = comments.filter((comment) => `${comment.postId}` === idToDiscover);
        if (commentObjects.length > 0){
            for (let comment of commentObjects) {
                //creating the div element
                const commentDivElement = document.createElement('div');
                commentDivElement.classList.add('comment');
    
                //creating the p elements to put in the div
                const userNameElement = document.createElement('p');
                userNameElement.classList.add('user-information');
                userNameElement.innerHTML = comment.userInformation.userName + ':&nbsp';
    
                const userEmailElement = document.createElement('p');
                userEmailElement.classList.add('user-information');
                userEmailElement.innerHTML = comment.userInformation.email + ':&nbsp';
    
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

                console.log(commentSection.style.height)
            }
        } else {
            const commentDivElement = document.createElement('div');
            commentDivElement.classList.add('comment');

            const noCommentElement = document.createElement('p');
            noCommentElement.classList.add('comment-text');
            noCommentElement.classList.add('noComments');
            noCommentElement.textContent = 'No comments at this moment';

            commentDivElement.appendChild(noCommentElement);

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
createPostCardDetail();
createComments();