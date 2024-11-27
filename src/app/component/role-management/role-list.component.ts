import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: { id: number; name: string; description: string }[] = [];
  selectedRole: { id: number; name: string; description: string } | null = null;

  constructor() {}

  ngOnInit(): void {
    // Initialize the list of roles
    this.roles = [
      { id: 1, name: 'Admin', description: 'Full access to the system' },
      { id: 2, name: 'Editor', description: 'Can edit content' },
      { id: 3, name: 'Viewer', description: 'Can view content only' }
    ];
  }

  addRole(newRole: { name: string; description: string }): void {
    const newId = this.roles.length ? Math.max(...this.roles.map(role => role.id)) + 1 : 1;
    this.roles.push({ id: newId, ...newRole });
  }

  editRole(updatedRole: { id: number; name: string; description: string }): void {
    const roleIndex = this.roles.findIndex(role => role.id === updatedRole.id);
    if (roleIndex !== -1) {
      this.roles[roleIndex] = updatedRole;
    }
  }

  deleteRole(id: number): void {
    this.roles = this.roles.filter(role => role.id !== id);
  }

  selectRole(role: { id: number; name: string; description: string }): void {
    this.selectedRole = { ...role };
  }

  clearSelection(): void {
    this.selectedRole = null;
  }
}

