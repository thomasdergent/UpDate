import { Role } from '../role/role.model';

export class User {
    public userID: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public userName: string;
    public password: string;
    public token: string;
    public roleID: number;
    public role: Role;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        userName: string,
        password: string,
        token: string,
        roleID?: number,
        role?: Role,
        userID?: number
    ) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.token = token;
        this.roleID = roleID;
        this.role = role;
        if (userID){
            this.userID=userID;
        }
    }
}

export function getUserFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem('user'));

    return new User(user.firstName, user.lastName, user.email, user.userName, user.password, user.token, user.roleID, user.role, user.userID);
}
