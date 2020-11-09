import { Role } from '../role/role.model';

export class CurrentUser {
    constructor(
        public userID: number,
        public email: string,
        public userName: string,
        public roleID: number,
        public role?: Role,
    ) { }
}

