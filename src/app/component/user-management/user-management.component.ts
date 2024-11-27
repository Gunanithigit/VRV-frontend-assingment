import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: { id: number; name: string; email: string }[] = [];
  selectedUser: { id: number; name: string; email: string } | null = null;

  constructor() {}

  ngOnInit(): void {
    // Fetch or initialize the user list
    this.users = [
      { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
      { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
      { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com' }
    ];
  }

  addUser(newUser: { name: string; email: string }): void {
    const newId = this.users.length ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
    this.users.push({ id: newId, ...newUser });
  }

  editUser(updatedUser: { id: number; name: string; email: string }): void {
    const userIndex = this.users.findIndex(user => user.id === updatedUser.id);
    if (userIndex !== -1) {
      this.users[userIndex] = updatedUser;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  selectUser(user: { id: number; name: string; email: string }): void {
    this.selectedUser = { ...user };
  }

  clearSelection(): void {
    this.selectedUser = null;
  }
}

