import { Component, OnInit } from '@angular/core';
import { piaceData } from 'src/app/models/piace.interface';
import { startBoardData } from 'src/app/models/startBoardData';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    boardData? : piaceData[][];
    startBoardData = startBoardData;
  
    constructor() { }


  ngOnInit(): void {
    this.initBoard();
  }

  initBoard(){
    this.boardData = startBoardData;
  }


    isEvenField(index : number , rowIndex : number) : boolean{
      const isRowEven = rowIndex % 2 === 0;
      const isFieldEven = index % 2 === 0;
      return isRowEven ? isFieldEven : !isFieldEven;
    }

    onFiledClick(field : piaceData){
      this.clearAllFocus();
      if(!field?.type){
        console.log("empty clicked")
        return;
      }
      this.setFocus(field)
        console.log("clicked" , field.type , field.position , field.color)
    }

    setFocus(field : piaceData){

    }

    clearAllFocus(){

    }
}
