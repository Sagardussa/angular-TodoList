import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  taskObj: Task = new Task();
  taskarry: Task[] = [];

  addTaskValue: string = '';
  constructor(private curdService: CrudService) {}

  ngOnInit(): void {}
  addTask(etask: Task) {
    this.curdService.addtask(etask).subscribe({
      next: (res) => {},
      error: (err) => {
        alert(err);
      },
    });
  }
}
