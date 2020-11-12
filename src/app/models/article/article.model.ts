import { Tag } from '../tag/tag.model';
import { User } from '../user/user.model';
import {Articlestatus} from '../articlestatus/articlestatus.model'
import { CurrentUser } from '../user/current-user.model';

export class Article {
    constructor(
        public articleID: number,
        public title: string,
        public subTitle: string,
        public shortSummary: string,
        public body: string,
        public tagID: number,
        public userID: number,
        public articleStatusID: number,
    ) {}

}