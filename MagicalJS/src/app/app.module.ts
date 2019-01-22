import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { StageComponent } from './shared/stage/stage.component';
import { MainComponent } from './pages/main/main.component';
import { MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatIconModule, MatSidenavModule, BrowserAnimationsModule, MatButtonModule, MatListModule,
    MatDividerModule, HttpClientModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
