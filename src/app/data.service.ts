import { Injectable } from '@angular/core';
import Task from './Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: Task[] = [];

  constructor() { }
}
