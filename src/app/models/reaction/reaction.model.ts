import { Article } from '../article/article.model';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';

export class Reaction {
    reactionID: number;
    body: string;
    userID: number;
    user: User;
    articleID: number;
    article: Article
    constructor(
        body: string,
        userID: number,
        articleID: number,
        user?: User,
        article?: Article,
        reactionID?: number
    ) {
        this.body = body;
        this.userID = userID;
        this.user=user;
        this.articleID = articleID;
        this.article=article;
        if (reactionID) {
            this.reactionID = reactionID;
        }
    }
}

