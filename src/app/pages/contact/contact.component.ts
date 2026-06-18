import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  eventTypes = [
    'Birthday Party',
    'Wedding',
    'Corporate Event',
    'Festival / Fair',
    'Fundraiser',
    'School Function',
    'Private Party',
    'Other'
  ];

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      eventType: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    this.success = true;
    this.form.reset();
    this.submitted = false;
  }
}
