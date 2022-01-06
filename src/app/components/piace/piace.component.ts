import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piace',
  templateUrl: './piace.component.html',
  styleUrls: ['./piace.component.scss']
})
export class PiaceComponent implements OnInit {

  @Input() type? : string;
  @Input() position? : string;
  @Input() color? : string;

  constructor() { }

  ngOnInit(): void {
  }

  move(){

  }

}
