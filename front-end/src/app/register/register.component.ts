import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string ="";
  phone: string ="";
  email: string ="";
  password: string ="";

  constructor(private router: Router,private http: HttpClient) 
  {
  }

  ngOnInit(): void
  {
  }

  register()
  {
    let bodyData = 
    {
      "name" : this.name,
      "phone" : this.phone,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:9998/employee/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
    });
  }

  save()
  {
    this.register();
  }

  regs(){
    this.router.navigateByUrl('/register');
  }

}