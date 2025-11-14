import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temp',
    standalone: true,
})
export class TemperaturePipe implements PipeTransform {
    /*
    * Any pipe class can not work until it has a transform() 
    * in order to avoid typos and errors, we must implement PipeTransform class
    * transform() must return a transfromed value
    */

    transform(value: string | number) {
        let val: number;

        // convert value into number for calculations
        if (typeof value === 'string'){
            val = parseFloat(value);
        } else {
            val = value;
        }

        // temperature from celsius into fahrenheite 
        const outputTemp = val * (9/5) + 32;

        return `${outputTemp} °F`;
    }
}