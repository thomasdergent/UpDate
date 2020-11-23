import { Article } from '../article/article.model';
import { User } from '../user/user.model';

export class Like {
    likeID: number;
    number: number;
    userID: number;
    user: User;
    articleID: number;
    article: Article;
    constructor(
        number: number,
        userID: number,
        articleID: number,
        likeID?: number,
        user?: User,
        article?: Article
    ) {
        this.number=number;
        this.userID=userID,
        this.user=user;
        this.articleID=articleID;
        this.article=article;
        if (likeID){
            this.likeID=likeID;
        }
    }
}