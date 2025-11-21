import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private destroyRef = inject(DestroyRef);

  private form = viewChild.required<NgForm>('form');
  constructor() {
    afterNextRender(() => {
      /* get the email of the user */
      const savedForm = window.localStorage.getItem('saved-login-form');

      if(savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;

        // this.form().setValue({
        //   email: savedEmail, 
        //   password: ''
        // });

        // alternatively 
        // wait for the form to be fully initialized
        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1);
      }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }
  onSubmitForm(formData: NgForm){

    if(formData.form.invalid){
      return ;
    }

    const email = formData.form.value.email;
    const password = formData.form.value.password;
    console.log(formData);

    formData.form.reset();
  }
}
