import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  roles: { id: number; name: string; description: string }[] = [];
  selectedRole: { id?: number; name: string; description: string } | null = null;
  isFormVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Initialize roles
    this.roles = [
      { id: 1, name: 'Admin', description: 'Full access to the system' },
      { id: 2, name: 'Editor', description: 'Can edit content' },
      { id: 3, name: 'Viewer', description: 'Can view content only' }
    ];
  }

  addRole(): void {
    this.selectedRole = null;
    this.isFormVisible = true;
  }

  editRole(role: { id: number; name: string; description: string }): void {
    this.selectedRole = { ...role };
    this.isFormVisible = true;
  }

  saveRole(role: { id?: number; name: string; description: string }): void {
    if (role.id) {
      // Update existing role
      const index = this.roles.findIndex(r => r.id === role.id);
      if (index !== -1) {
        this.roles[index] = role;
      }
    } else {
      // Add new role
      const newId = this.roles.length ? Math.max(...this.roles.map(r => r.id)) + 1 : 1;
      this.roles.push({ id: newId, ...role });
    }
    this.isFormVisible = false;
  }

  deleteRole(id: number): void {
    this.roles = this.roles.filter(role => role.id !== id);
  }

  cancelForm(): void {
    this.isFormVisible = false;
    this.selectedRole = null;
  }
}

