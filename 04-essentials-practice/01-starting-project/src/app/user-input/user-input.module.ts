import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserInputComponent } from './user-input.component';

@NgModule({
    declarations: [UserInputComponent],
    imports: [FormsModule],
    exports: [UserInputComponent], // if you split the app in different modules then you have to make the components in the sub modules available to the parent module and to other components.
})
export class UserInputModule {}