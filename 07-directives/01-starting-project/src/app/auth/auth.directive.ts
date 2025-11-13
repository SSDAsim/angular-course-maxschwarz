/* This is a structural directive which we will use to show different content to different users basedon their role. More like *NgIf but specifically for our authorization controls. */
/* in order to use this in other component files or directive files, must add it in the 'imports[]' in their .ts files */

import { Directive, input, inject, effect, TemplateRef, ViewContainerRef } from '@angular/core';
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

  /* 
  * if you have used the <ng-template> in the template file you need to delcare it here that you want to use that in the template
  * Injecting a `TemplateRef` tells Angular that this directive i.e. `appAuth` will be used on an ng-template element and that we want to get hold of that template and implicitly also the content inside of that template. 
  * By injecting the ViewContainerRef type or class , we get a reference to the place in the DOM where this template is being used
  */
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    /* run some code in effect() whenever a signal value changes */
    effect(() => {
      if(this.AuthService.activePermission() === this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
    /* angular will set subscription to activePermission() and userType(). so whenever the value of either property changes, the code inside effect() will be executed (each time the value of the property changes) */
  }

}
