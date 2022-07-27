import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'debitcard'
})
export class DebitcardPipe implements PipeTransform{

    transform(value: any) {
            console.log(value);
            let inputValue:string = value;

            let newValue = "**"+inputValue+"**";
           return newValue; 
    }
}
