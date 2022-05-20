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
  taskArr: Task[] = [];

  addTaskValue: string = '';
  editTAskVAlue: string = '';
  constructor(private curdService: CrudService) {}

  ngOnInit(): void {
    this.editTAskVAlue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.curdService.getAllTask().subscribe(
      (res) => {
        this.taskArr = res;
      },
      (err) => {
        alert('unable to get list of Task ');
      }
    );
  }
  addTask() {
    if (this.addTaskValue === '') {
      alert('enter the task');
    } else {
      this.taskObj.task_name = this.addTaskValue;
      this.curdService.addtask(this.taskObj).subscribe(
        (res) => {
          this.ngOnInit();
          this.addTaskValue = '';
        },
        (err) => {
          alert(err);
        }
      );
    }
  }

  editTask() {
    this.taskObj.task_name = this.editTAskVAlue;
    this.curdService.editTask(this.taskObj).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('failed to update task');
      }
    );
  }

  deleteTask(etask: Task) {
    this.curdService.deleteTask(etask).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        alert('failed to delete Task ');
      }
    );
  }

  call(etask: Task) {
    this.taskObj = etask;
    this.editTAskVAlue = etask.task_name;
  }
}
