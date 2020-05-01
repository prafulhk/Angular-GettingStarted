import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { convertToSpaces } from './shared/convertToSpaces.pipe';
import { StarComponent } from './shared/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
