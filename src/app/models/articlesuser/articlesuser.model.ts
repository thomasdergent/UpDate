import { Article } from '../article/article.model';
import { User } from '../user/user.model';

export class Articlesuser {
    constructor(
        public articlesUserID: number,
        public article: Article,
        public user: User
    ) {}
}
