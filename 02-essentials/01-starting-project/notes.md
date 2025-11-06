# Angular Course

## Section 2 - Angular Essentials

### 17. Managing and Creating Components with Angular CLI

    ng generate component <componentname>

OR short-hand 

    ng g c <componentname 

Example: 

    ng g c user

the above command will generate a component under `app/user/user.component.ts` and similarly `.html` and `.css` and `.spec.ts` for the **automated testing** file

### 21. Outputting Dynamic Content with Interpolation 

String interpolation allows you to render the dynamic data. in Angular, you can render the property of a class in the markup using double curly braces '{{  }}' 

### 22. Property Binding 

String interpolation is typically used between tags like `<h1>{{ selectedUser.name }}</h1>` and not used for *attributes* e.g. `<img src="{{ selectedUser.avatar }}" >`. Although you can use that but there is an alternative called Property Binding.

To configure the property of the DOM element to bind, we wrap the name of the element in double square brackets '[]' and assign the value to that attribute 

    <img [src]="'assets/users/' + selectedUser.avatar">

we can do this 

    <img src="assets/users/{{ selectedUser.avatar }}" alt="{{ selectedUser.name }}"/>

but this is better

    <img [src]="'assets/users/' + selectedUser.avatar" [alt]="selectedUser.name" />


#### Difference between Interpolation and Property Binding

With interpolation, you can do only **string** or **integer** manipulation. It does not deal with values for example *boolean* values. 

Let's take an example: you have a property in the component class which it *disable = false*. now in input tag's attribute **disabled** you pass it as 

    <input disabled="{{ disable }}" /> // this will read it as string and it will be always true

with Property Binding 

    <input [disabled]=disable /> // this will read 'disable' as false

To change the attribute or property, always use the **Property Binding**. 

### 27. How Angular tracks and make the UI changes 

`Zone.js` is a JS library. After every event (user events and others) **zone.js** looks for the changes to be made and updates the UI. When an async task completes, zone.js notifies Angular to run change detection. This ensures the UI updates automatically when data changes. Without zone.js, developers would need to manually trigger change detection.

### 28. Introducing Signals 

Signals are advance method of change detection and UI updates. Signals are Trackable Data Containers.

A Signal is an object that stores a value. Angular manages subscriptions to the signal to get notified about value changes. When a change occurs, Angular is the able to update the part of the UI that needs updating. 

They contains values, and they notify angular when those values change so Angular can update those parts of the UI where these values are being used. 

Whenever you are dealing with any property that stores a signal, you have to execute the property as a function to get the latest value for it. you can not access it like {{ selectUser.name }} rather you have to {{ selectUser().name }}

By using Signal, Angular can implement UI change in a fine grained way. Angular can now just look at specific parts of the app for the UI changes, and not all the possible parts of the application where an event could occur.

**Zone.js** -> notifies Angular about user events, expired timers etc. 
**Singals** -> notify Angular about when a signal values changes. 



