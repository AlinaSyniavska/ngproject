import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from "../../models/IUser";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: IUser[];
    // singleUser: IUser;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService
            .getUsers()
            .subscribe(response => this.users = response);

/*        this.userService
            .getUser(5)
            .subscribe(response => this.singleUser = response);*/
    }

}
