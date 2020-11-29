import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Role } from 'src/app/models/role/role.model';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-journalist-crud',
  templateUrl: './journalist-crud.component.html',
  styleUrls: ['./journalist-crud.component.scss']
})
export class JournalistCRUDComponent implements OnInit {

  journalists: User[];
  //declareren als nieuwe user want anders laadt de pagina niet omdat modal als div in de pagina zit en niet in een ander com
  currentJournalist: User = new User('', '', '', '', '', '', 2);
  journalist: User = new User('', '', '', '', '', '', 2);
  updateJournalist: User = new User('', '', '', '', '', '', 2);
  submitted: boolean = false;
  submitEditJournalist: boolean = false;
  onSubmitDeleteJournalist: boolean = false;

  constructor(
    private _userService: UserService,
    private alertService: AlertService,
  ) {

    this.getJournalists();
  }

  getJournalists() {
    this._userService.getUsersByRole(2).subscribe(
      result => {
        this.journalists = result.reverse();
      }
    );
  }

  //open modal (add class from scss)
  openAdd() {
    let modal = document.getElementById('addJournalistModal')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  //close modal (add class from scss)
  closeAdd() {
    let modal = document.getElementById('addJournalistModal')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  openEdit(id: number) {
    this._userService.getUserByID(id).subscribe(
      result => {
        this.currentJournalist = result;
      }
    );

    let modal = document.getElementById('editJournalistModal')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  closeEdit() {
    let modal = document.getElementById('editJournalistModal')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  openDelete(id: number) {
    this._userService.getUserByID(id).subscribe(
      result => {
        this.currentJournalist = result;
      }
    );

    let modal = document.getElementById('deleteJournalistModal')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  closeDelete() {
    let modal = document.getElementById('deleteJournalistModal')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  onSubmitAdd() {
    this.submitted = true;
    this._userService.addUser(this.journalist).subscribe(
      result => {
        let modal = document.getElementById('addJournalistModal')
        modal.classList.remove('show')
        modal.classList.add('hidden')
        this.journalist = new User('', '', '', '', '', '', 2);
        this.getJournalists();

        this.alertService.success('Gebruiker toegevoegd');
      }
    );
  }

  onSubmitEditJournalist() {
    this.submitEditJournalist = true;

    this.updateJournalist = new User(this.currentJournalist.firstName, this.currentJournalist.lastName, this.currentJournalist.email, this.currentJournalist.userName, this.currentJournalist.password, null, 2, new Role(2, "Journalist"), this.currentJournalist.userID);

    this._userService.updateUser(this.currentJournalist.userID, this.currentJournalist).subscribe(
      result => {
        let modal = document.getElementById('editJournalistModal')
        modal.classList.remove('show')
        modal.classList.add('hidden')

        this.getJournalists();

        this.alertService.success('Gebruiker bewerkt');
      }
    );
  }

  deleteJournalist() {
    this.onSubmitDeleteJournalist = true;

    this._userService.deleteUser(this.currentJournalist.userID).subscribe(
      result => {
        let modal = document.getElementById('deleteJournalistModal')
        modal.classList.remove('show')
        modal.classList.add('hidden')

        this.getJournalists();

        this.alertService.success('Gebruiker verwijderd');
      }
    );
  }

  ngOnInit(): void {
  }

}
