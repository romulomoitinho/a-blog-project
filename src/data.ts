interface post {
    id: number;
    title: string;
    imageUrl: string;
    body: string
}

class Posts implements post{
    id: number;
    title: string;
    imageUrl: string;
    body: string;

    constructor (id: number, title: string, imageUrl: string, body: string){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body
    }

}

interface comment {
    id: number;
    postId: number;
    email: string;
    body: string
}

interface usuario {
    userName: string;
    email:string
}

class Comments {
    id: number;
    postId: number;
    email: string;
    body: string;
    constructor (id: number, postId: number, email: string, body: string){
        this.id = id;
        this.postId = postId;
        this.email = email;
        this.body = body
    }
}



var posts: post[] = [
    new Posts(1, "The Future 1", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(2, "The Future 2", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(3, "The Future 3", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(4, "The Future 4", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(5, "The Future 5", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(6, "The Future 6", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t")
];

