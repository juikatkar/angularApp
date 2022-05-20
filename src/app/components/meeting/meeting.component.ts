import { Component, OnInit } from '@angular/core';
import { meeting } from '../../models/meeting';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meetings:meeting[];

  inputMeeting:string = "";

  constructor() { }

  ngOnInit(): void {
    this.meetings = [
      {
        content: 'Scrum Call',
        completed: false
      },
      {
        content: 'KT Session',
        completed: false
      },
      {
        content: 'Sync Up Meeting',
        completed: false
      },
      {
        content: 'Upcoming schedules',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.meetings.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteMeeting (id:number) {
    this.meetings = this.meetings.filter((v, i) => i !== id);
  }

  addMeeting () {
    this.meetings.push({
      content: this.inputMeeting,
      completed: false
    });

    this.inputMeeting = "";
  }

}
