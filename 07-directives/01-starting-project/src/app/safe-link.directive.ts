import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', // target every anchor tag which has attribute 'appSafeLink
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)', // listen to click event. coule do @HostListen
    }
})
export class SafeLinkDirective {

    // take query parameter as input
    // queryParam = input('myapp');
    queryParam = input('myapp', {alias: 'appSafeLink'});

    constructor() {
        console.log('This is safe link directive.');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do You Want to Leave he Page?');

        if(wantsToLeave) {
            // add query parameter
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            return ;

            //(event.target as HTMLAnchorElement) typecasting to convice typescript that this will be an HTML Anchor Element
        }
        
        event.preventDefault();
    }
}