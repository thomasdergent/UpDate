import { Component, OnInit } from '@angular/core';
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
  currentJournalist: User = new User(0, '', '', '', '', '', '', 2);
  journalist: User = new User( 0, '', '', '', '', '', null,2);
  updateJournalist: User = new User(0, '', '', '', '', '', null, 2);
  submitted: boolean = false;
  submitEditJournalist: boolean = false;
  onSubmitDeleteJournalist: boolean =false;

  constructor(
    private _userService: UserService,
  ) {

    setTimeout(function () {
      this.getJournalists();
    }.bind(this), 500);
  }

  getJournalists() {
    this._userService.getUsersByRole(2).subscribe(
      result => {
        this.journalists = result;
      }
    );
  }

  //open modal (add class from scss)
  open() {
    let modal = document.getElementById('addEmployeeModal')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  //close modal (add class from scss)
  close() {
    let modal = document.getElementById('addEmployeeModal')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  onSubmit() {
    this.submitted = true;
    

    this._userService.addUser(this.journalist).subscribe();

    let modal = document.getElementById('addEmployeeModal')
    modal.classList.remove('show')
    modal.classList.add('hidden')
    window.location.reload();
  }

  
  editJournalist(id: number) {
    this._userService.getUserByID(id).subscribe(
      result => {
        this.currentJournalist = result;
        localStorage.setItem("userrr", JSON.stringify(result));
      }
    );



    let modal = document.getElementById('editEmployeeModal')
    modal.classList.remove('hidden')
    modal.classList.add('show')
    }

    onSubmitEditJournalist(){
      this.submitEditJournalist=true;


      this.updateJournalist= new User(this.currentJournalist.userID, this.currentJournalist.firstName, this.currentJournalist.lastName, this.currentJournalist.email, this.currentJournalist.userName, this.currentJournalist.password, null, 2, new Role(2, "Journalist"));

      this._userService.updateUser(this.currentJournalist.userID, this.currentJournalist).subscribe();

    }


    openDeleteModal(id: number){

      this._userService.getUserByID(id).subscribe(
        result => {
          this.currentJournalist = result;
        }
      );
  
      let modal = document.getElementById('deleteEmployeeModal')
      modal.classList.remove('hidden')
      modal.classList.add('show')
    }
  
      deleteJournalist(){
        this.onSubmitDeleteJournalist=true;
  
        this._userService.deleteUser(this.currentJournalist.userID).subscribe();
        window.location.reload();
      }
      
      ngOnInit(): void {
      }

  }
