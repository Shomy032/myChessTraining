import { Component, OnDestroy, OnInit } from '@angular/core';
import { piaceData } from 'src/app/models/piace.interface';
import { PieceNames } from 'src/app/models/pieceNames.enum';
import { startBoardData } from 'src/app/models/startBoardData';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit , OnDestroy {

    boardData : piaceData[][] = [];
    startBoardData = startBoardData;

    focusedField? : string;
    possibleMoves : string[] = []
    
    constructor() { }


  ngOnInit(): void {
    this.initBoard();
  }

  initBoard(){
    const cachedData = this.getCachedData();
    this.boardData = cachedData || startBoardData;
  }

  getCachedData(){
    const data = localStorage.getItem("boardData");
    try {
      if(data){
        const parsedData = JSON.parse(data);
        return parsedData;
      }
    } catch(error) {
        return;
    }
  }

    isEvenField(index : number , rowIndex : number) : boolean{
      const isRowEven = rowIndex % 2 === 0;
      const isFieldEven = index % 2 === 0;
      return isRowEven ? isFieldEven : !isFieldEven;
    }

    onFiledClick(field : piaceData){
      this.clearAllFocus();  
      this.setFocus(field);
    }

    setFocus(field : piaceData){
      this.focusedField = field.position;
      this.setPossibleMoves(field)
    }

    isFieldFocused(field : piaceData){
      const isPositionFocused = this.focusedField === field.position;
      const havePieceOnIt = field.type;
      return isPositionFocused && havePieceOnIt;
    }

    setPossibleMoves(field : piaceData){
      this.clearPossibleMoves()
      if(field.type){
        this.calculatePossibleMoves(this.boardData , field)
      }
    }

      isFieldPossibleMove(field : piaceData){
        if(field?.position){
          return this.possibleMoves?.includes(field.position);
        }
        return false;
      }

    clearPossibleMoves(){
      this.possibleMoves = [];
    }

    clearAllFocus(){
      this.focusedField = "";
    }

    calculatePossibleMoves(boardData : piaceData[][] , focusedField : piaceData) {
        if(!focusedField?.type){
          return;
        } 

        const position = focusedField.position || "";

        const isBlackPiece = focusedField.color === "black"
        const isWhitePiece = focusedField.color === "white"

        const isPawn = focusedField?.type === PieceNames.PAWN;
        const isRook = focusedField?.type === PieceNames.ROOK;

        if(isPawn){
          const moveDirection = isBlackPiece ?  -1 : 1;
          this.createPawnPossibleMoves(position , moveDirection)
        } else if(isRook){
          // TODO 
        }
    }

    createPawnPossibleMoves(position : string , direction : number){
      const splitPosition : any = position?.match(/.{1}/g);
      splitPosition[1] = (parseInt(splitPosition[1]) + direction).toString();
      this.possibleMoves.push([...splitPosition].join().replace("," , ""))
    }

    ngOnDestroy(){
      localStorage.setItem("boardData" , JSON.stringify(this.boardData))
    }
}
