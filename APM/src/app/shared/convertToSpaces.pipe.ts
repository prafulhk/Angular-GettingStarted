import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
    name: 'convertToSpaces'
})
export class convertToSpaces implements PipeTransform{

    transform(value: string, charecter: string): string{
        return value.replace(charecter,' ');
    }
}