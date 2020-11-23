import { Article } from '../article/article.model';
import { User } from '../user/user.model';

export class Comment {
    public commentID: number;
    public body: string;

    constructor(
        body: string,
        commentID?: number,
    ) {
       if (commentID)
       {
        this.commentID=commentID;
       } 
        this.body=body;
     }
}