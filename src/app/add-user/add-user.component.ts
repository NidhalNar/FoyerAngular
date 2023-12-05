// add-user.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/UserService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      nomUser: ['', Validators.required],
      prenomUser: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', Validators.required],
      role: ['', Validators.required],
    });
  }


  onSubmit() {
    const user = this.userForm.value;
    this.userService.addUser(user).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        // Redirigez l'utilisateur vers la liste des utilisateurs
        this.router.navigate(['/listuser']);
      },
      (error) => {
        console.error('Error adding user:', error);
        // Handle error scenarios
      }
    );
  }
}
