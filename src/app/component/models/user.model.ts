import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: { id: number; name: string; email: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    
    this.users = [
      { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
      { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com' }
    ];
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}

