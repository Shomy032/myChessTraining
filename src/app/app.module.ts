import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { BoardDirective } from './components/board/board.directive';
import { PiaceComponent } from './components/piace/piace.component';
import { AppPieceDirective } from './core/piece/piece.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PiaceComponent,
    BoardDirective,
    AppPieceDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
