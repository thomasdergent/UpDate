import { Article } from '../article/article.model';

export class Tag {
    constructor(
        public name: string,
        public tagID?: number,
    ){}
}
