import { Component, OnInit } from '@angular/core';
import { Router,NavigationStart} from '@angular/router';
import { DataService } from '../../data.service';
@Component({
  selector: 'emp_data',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeeDataComponent implements OnInit {


  constructor(private router: Router,private mydataservice : DataService) { }
    empdata=[];
  ngOnInit(): void {
    this.router.events.subscribe(event =>{
        if (event instanceof NavigationStart){
             
        }
     })


     //consuming API 
     this.mydataservice.getData().subscribe(r=>{
        this.empdata=r;
      });
  }
}
