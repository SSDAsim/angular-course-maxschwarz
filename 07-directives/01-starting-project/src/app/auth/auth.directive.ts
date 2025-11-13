/* This is a structural directive which we will use to show different content to different users basedon their role. More like *NgIf but specifically for our authorization controls. */
/* in order to use this in other component files or directive files, must add it in the 'imports[]' in their .ts files */

import { Directive, input, inject, effect } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  /* to store the userType which will be passed form the outside */
  userType = input.required<Permission>({alias: 'appAuth'});

  /* to get the authenticated user, inject AuthService dependency */ 
  private AuthService = inject(AuthService);

  constructor() {
    /* run some code in effect() whenever a signal value changes */
    effect(() => {
      if(this.AuthService.activePermission() === this.userType()){
        console.log('SHOWW ELEMENT!!!!');
      } else {
        console.log('DOOO NOT SHOWW ELEMENT!!!!');
      }
    });
    /* angular will set subscription to activePermission() and userType(). so whenever the value of either property changes, the code inside effect() will be executed (each time the value of the property changes) */
  }

}
