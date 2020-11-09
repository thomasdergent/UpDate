import { Article } from '../article/article.model'

export class Articlestatus {
    constructor(
    public articleSatusID: number,
    public name: string,
    public articles: Article[]
    ){}
}
