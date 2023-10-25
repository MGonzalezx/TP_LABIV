import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCardModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {AngularFireModule} from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { ToastrModule  } from 'ngx-toastr';
import { MayorMenorComponent } from './components/mayor-menor/mayor-menor.component';
import {HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    IgxCardModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), 
    provideFirestore(() => getFirestore()),
    ToastrModule.forRoot(),
    HttpClientModule
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
