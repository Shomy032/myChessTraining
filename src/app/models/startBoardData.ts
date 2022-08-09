import { piaceData } from './piace.interface';
import { PieceNames } from './pieceNames.enum';

export enum ChessPositionNames {}
// todo

export enum ChessPlayerColors {}
// todo

export const startBoardData: piaceData[][] = [
  [
    {
      type: PieceNames.ROOK,
      position: 'a8',
      color: 'black',
    },
    {
      type: PieceNames.KNIGHT,
      position: 'b8',
      color: 'black',
    },
    {
      type: PieceNames.BISHOP,
      position: 'c8',
      color: 'black',
    },
    {
      type: PieceNames.QUEEN,
      position: 'd8',
      color: 'black',
    },
    {
      type: PieceNames.KING,
      position: 'e8',
      color: 'black',
    },
    {
      type: PieceNames.BISHOP,
      position: 'f8',
      color: 'black',
    },
    {
      type: PieceNames.KNIGHT,
      position: 'g8',
      color: 'black',
    },
    {
      type: PieceNames.ROOK,
      position: 'h8',
      color: 'black',
    },
  ],
  [
    {
      type: PieceNames.PAWN,
      position: 'a7',
      color: 'black',
    },
    {
      type: PieceNames.PAWN,
      position: 'b7',
      color: 'black',
    },
    {
      type: PieceNames.PAWN,
      position: 'c7',
      color: 'black',
    },
    {
      type: PieceNames.PAWN,
      position: 'd7',
      color: 'black',
    },
    {
      type: PieceNames.PAWN,
      position: 'e7',
      color: 'black',
    },
    {
      type: PieceNames.PAWN,
      position: 'f7',
      color: 'black',
    },
    {
      type: PieceNames.PAWN,
      position: 'g7',
      color: 'black',
    },
    {
      type: PieceNames.PAWN,
      position: 'h7',
      color: 'black',
    },
  ],

  [
    { position: 'a6' },
    { position: 'b6' },
    { position: 'c6' },
    { position: 'd6' },
    { position: 'e6' },
    { position: 'f6' },
    { position: 'g6' },
    { position: 'h6' },
  ],
  [
    { position: 'a5' },
    { position: 'b5' },
    { position: 'c5' },
    { position: 'd5' },
    { position: 'e5' },
    { position: 'f5' },
    { position: 'g5' },
    { position: 'h5' },
  ],
  [
    { position: 'a4' },
    { position: 'b4' },
    { position: 'c4' },
    { position: 'd4' },
    { position: 'e4' },
    { position: 'f4' },
    { position: 'g4' },
    { position: 'h4' },
  ],
  [
    { position: 'a3' },
    { position: 'b3' },
    { position: 'c3' },
    { position: 'd3' },
    { position: 'e3' },
    { position: 'f3' },
    { position: 'g3' },
    { position: 'h3' },
  ],

  [
    {
      type: PieceNames.PAWN,
      position: 'a2',
      color: 'white',
    },
    {
      type: PieceNames.PAWN,
      position: 'b2',
      color: 'white',
    },
    {
      type: PieceNames.PAWN,
      position: 'c2',
      color: 'white',
    },
    {
      type: PieceNames.PAWN,
      position: 'd2',
      color: 'white',
    },
    {
      type: PieceNames.PAWN,
      position: 'e2',
      color: 'white',
    },
    {
      type: PieceNames.PAWN,
      position: 'f2',
      color: 'white',
    },
    {
      type: PieceNames.PAWN,
      position: 'g2',
      color: 'white',
    },
    {
      type: PieceNames.PAWN,
      position: 'h2',
      color: 'white',
    },
  ],
  [
    {
      type: PieceNames.ROOK,
      position: 'a1',
      color: 'white',
    },
    {
      type: PieceNames.KNIGHT,
      position: 'b1',
      color: 'white',
    },
    {
      type: PieceNames.BISHOP,
      position: 'c1',
      color: 'white',
    },
    {
      type: PieceNames.QUEEN,
      position: 'd1',
      color: 'white',
    },
    {
      type: PieceNames.KING,
      position: 'e1',
      color: 'white',
    },
    {
      type: PieceNames.BISHOP,
      position: 'f1',
      color: 'white',
    },
    {
      type: PieceNames.KNIGHT,
      position: 'g1',
      color: 'white',
    },
    {
      type: PieceNames.ROOK,
      position: 'h1',
      color: 'white',
    },
  ],
];
