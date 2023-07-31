class Posts {
    constructor(id, title, imageUrl, body) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
    }
}
class Comments {
    constructor(id, postId, userInformation, body) {
        this.id = id;
        this.postId = postId;
        this.userInformation = userInformation;
        this.body = body;
    }
}
export var comments = [
    new Comments(1, 1, { userName: "usuario_1", email: 'example1@email.com' }, 'Muy bueno!'),
    new Comments(2, 1, { userName: "usuario_2", email: 'example2@email.com' }, 'Trés bien!'),
    new Comments(3, 1, { userName: "usuario_4", email: 'example4@email.com' }, 'Very Good!'),
    new Comments(4, 1, { userName: "usuario_5", email: 'example5@email.com' }, 'Excelente!'),
    new Comments(5, 1, { userName: "usuario_6", email: 'example6@email.com' }, 'Fantastic!'),
    new Comments(6, 2, { userName: "usuario_10", email: 'example10@email.com' }, 'Increíble!'),
    new Comments(7, 2, { userName: "usuario_2", email: 'example2@email.com' }, 'Extraordinaire!'),
    new Comments(8, 2, { userName: "usuario_3", email: 'example3@email.com' }, 'Fantástico!'),
    new Comments(9, 4, { userName: "usuario_4", email: 'example4@email.com' }, 'Amazing!'),
    new Comments(10, 4, { userName: "usuario_5", email: 'example5@email.com' }, 'Fantástico!'),
    new Comments(11, 4, { userName: "usuario_8", email: 'example8@email.com' }, 'Maravilloso!'),
    new Comments(12, 4, { userName: "usuario_4", email: 'example4@email.com' }, 'Extraordinário!'),
    new Comments(13, 5, { userName: "usuario_7", email: 'example7@email.com' }, 'Très bien!'),
    new Comments(14, 6, { userName: "usuario_9", email: 'example9@email.com' }, 'Incrível!'),
    new Comments(15, 6, { userName: "usuario_6", email: 'example6@email.com' }, 'Fantástico!')
];
export var posts = [
    new Posts(1, 'The Future 1', 'post_1.png ', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"),
    new Posts(2, 'The Future 2', 'post_1.png', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"),
    new Posts(3, 'The Future 3', 'post_1.png', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"),
    new Posts(4, 'The Future 4', 'post_1.png', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"),
    new Posts(5, 'The Future 5', 'post_1.png', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "),
    new Posts(6, 'The Future 6', 'post_1.png', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...")
];
