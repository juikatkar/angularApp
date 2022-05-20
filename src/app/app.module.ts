import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { EmployeeDataComponent } from './components/employeedata/employeedata.component';
import { DataService } from './data.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: 'meetingschedule',  
    component: MeetingComponent  
 },
  { path: 'employee', component: EmployeeDataComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    EmployeeDataComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
