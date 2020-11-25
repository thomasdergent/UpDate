import { Tag } from '../tag/tag.model';
import { User } from '../user/user.model';
import {Articlestatus} from '../articlestatus/articlestatus.model'
import { CurrentUser } from '../user/current-user.model';
import { ArticleService } from 'src/app/services/articleService/article.service';

export class Article {
    constructor(
        public title: string,
        public subTitle: string,
        public shortSummary: string,
        public body: string,
        public image: string,
        public tagID: number,
        public tag: Tag,
        public userID: number,
        public user: User,
        public articleStatusID: number,
        public articleStatus: Articlestatus,
        public articleID?: number,
    ) {}

}