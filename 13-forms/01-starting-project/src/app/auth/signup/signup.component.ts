import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

function equalCheck(controlName1: string, controlName2: string){

  return (control: AbstractControl) => {
    // retrieve the values of the form controls
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;

    if(val1 === val2) {
      return null; 
    }

    return { passwordsNotEqual: true };
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {

  /* set up reactive form */
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }), 
    passwords: new FormGroup({
      password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
    }, {
      validators: [equalCheck('password', 'confirmPassword')]
    }
    ),
    firstName: new FormControl('', { validators: [Validators.required] }),
    lastName: new FormControl('', { validators: [Validators.required] }),
    address: new FormGroup({
      street: new FormControl('', { validators: [Validators.required] }),
      number: new FormControl('', { validators: [Validators.required] }),
      postalCode: new FormControl('', { validators: [Validators.required] }),
      city: new FormControl('', { validators: [Validators.required] }),
    }),
    // drop-down input type
    role: new FormControl<'student' | 'teacher' | 'founder' | 'employee' | 'other'>('other', { validators: [Validators.required] }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      // equals the number of maximum values that you expect 
    ]),
    // checkbox input type
    agree: new FormControl(false, { validators: [Validators.required ] })
  })

  onSubmit() {
    if(this.form.invalid){
      console.log("INVALID");
      return;
    }

    console.log(this.form);
  }

  onReset() {
    this.form.reset();
  }
}
