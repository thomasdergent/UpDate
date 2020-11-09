import { Tag } from '../tag/tag.model';
import { User } from '../user/user.model';
import {Articlestatus} from '../articlestatus/articlestatus.model'

export class Article {
    constructor(
        public articleID: number,
        public title: string,
        public subTitle: string,
        public shortSummary: string,
        public body: string,
        public tagID: number,
        public tag: Tag,
        public userID: number,
        public user: User,
        public articleStatusID: number,
        public articleStatus: Articlestatus
    ) {}

}