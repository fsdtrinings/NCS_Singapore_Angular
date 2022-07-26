import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  status:boolean = false;
  output:number = 0;
  today: Date = new Date();  
  marks:number = 0.8516;
  summary :string = "this is the ncs angular task"
  debitCard :string = "458488948"; // 485-854-154

  ngOnInit(): void {
  }

  doThings(a:string,b:string)
  {
    let x = parseInt(a);
    let y = parseInt(b);
    console.log(x+" + "+y+" = "+(x+y))
    this.output = (x+y);
  }
}
