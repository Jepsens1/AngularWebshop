import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User | undefined;
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    this.router.navigate(['/login']);
  }
}
