"use strict";
class Posts {
    constructor(id, title, imageUrl, body) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
    }
}
class Comments {
    constructor(id, postId, email, body) {
        this.id = id;
        this.postId = postId;
        this.email = email;
        this.body = body;
    }
}
var posts = [
    new Posts(1, "The Future 1", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(2, "The Future 2", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(3, "The Future 3", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(4, "The Future 4", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(5, "The Future 5", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t"),
    new Posts(6, "The Future 6", "post_1.png", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy t")
];
