import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  @Input() role: { id?: number; name: string; description: string } | null = null;
  @Output() saveRole = new EventEmitter<{ id?: number; name: string; description: string }>();
  @Output() cancel = new EventEmitter<void>();

  roleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    if (this.role) {
      this.roleForm.patchValue(this.role);
    }
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      this.saveRole.emit({ id: this.role?.id, ...this.roleForm.value });
      this.roleForm.reset();
    }
  }

  onCancel(): void {
    this.cancel.emit();
    this.roleForm.reset();
  }
}

