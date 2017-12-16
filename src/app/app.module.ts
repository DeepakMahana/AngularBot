import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { ParticlesModule } from 'angular-particle';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './chat/chat.component';

import { ChatService } from './services/chat.service';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    ParticlesModule,
    MatToolbarModule,
    FlexLayoutModule
  ],

  providers: [ChatService],

  bootstrap: [AppComponent]
})
export class AppModule { }
