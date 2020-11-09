import { Article } from '../article/article.model';

export class Tag {
    constructor(
        public tagID: number,
        public name: string,
        public articles: Article[]
    ){}
}
