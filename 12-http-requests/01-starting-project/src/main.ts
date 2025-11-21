import { bootstrapApplication } from '@angular/platform-browser';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';

// register an http interceptor
function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn){
    const req = request.clone({
        headers: request.headers.set('X-DEBUG', 'TESTING')
    })
    console.log('[Outgoing Request]');
    console.log(request);
    // return next(req); 
    return next(request); // pass the intercepted request (i.e. intercepted request will continue)
    /* original request can't be mutated but you can clone it to mutate the clone and forward it instead of original request */
}

bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(
        withInterceptors([loggingInterceptor])
    )]
}).catch((err) => console.error(err));
