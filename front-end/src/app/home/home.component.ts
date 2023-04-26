import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employeecrud',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  EmployeeArray : any[] = [];
  currentEmployeeID = "";
     
  name: string ="";
  phone: string ="";
  email: string ="";

  

  constructor(private router: Router,private http: HttpClient)
  {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.http.get("http://127.0.0.1:9998/user/getAll")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.EmployeeArray = resultData.data;
    });
  }
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.phone = data.phone;
   this.email = data.email;
 
   this.currentEmployeeID = data._id;
  
  }


  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "phone" : this.phone,
      "email" : this.email,
 
    };
    
    this.http.patch("http://127.0.0.1:9998/user/update"+ "/"+this.currentEmployeeID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Updateddd")
        this.getAllEmployee();
      
    });
  }


  setDelete(data: any) {
    this.http.delete("http://127.0.0.1:9998/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd")
        this.getAllEmployee();
  
    });
    }


  save()
  {
    if(this.currentEmployeeID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }

  register()
  {
 
    let bodyData = {
      "name" : this.name,
      "phone" : this.phone,
      "email" : this.email,
      
  };
    this.http.post("http://127.0.0.1:9998/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        this.name = '';
        this.phone  = '';
        this.email  = '';
        
        this.getAllEmployee();
    });
  }

  regs(){
    this.router.navigateByUrl('/');
  }
  

}


