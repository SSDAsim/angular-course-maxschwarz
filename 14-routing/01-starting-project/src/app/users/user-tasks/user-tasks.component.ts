import { Component, inject, input} from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  userName = input.required<string>();

  message = input.required<string>();
}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  
  // inject the service here again because it is not inside the class
  const usersServices = inject(UsersService);
  const userName = usersServices.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => { 
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks';   // Max's Tasks
}; 

