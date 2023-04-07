import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { InfoAnnuelleCreateComponent } from './view/InfoAnnuelle/info-annuelle-create/info-annuelle-create.component';
import { TaxeAnnuelleInfoComponent } from './view/TaxeAnnuelle/taxe-annuelle-info/taxe-annuelle-info.component';
import { RedevableCreateComponent } from './view/redevables/redevable-create/redevable-create.component';
import { RedevableListComponent } from './view/redevables/redevable-list/redevable-list.component';
import { NotificationlocaleListeComponent } from './view/notificationlocale/notificationlocale-liste/notificationlocale-liste.component';
import { NotificationlocaleCreateComponent } from './view/notificationlocale/notificationlocale-create/notificationlocale-create.component';
import { LocalCreateComponent } from './view/locals/local-create/local-create.component';
import { LocalListComponent } from './view/locals/local-list/local-list.component';
import { BodyComponent } from './view/body/body.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";



@NgModule({
  declarations: [
    AppComponent,
    InfoAnnuelleCreateComponent,
    TaxeAnnuelleInfoComponent,
    BodyComponent,
    RedevableCreateComponent,
    RedevableListComponent,
    NotificationlocaleCreateComponent,
    NotificationlocaleListeComponent,
    LocalCreateComponent,
    LocalListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
