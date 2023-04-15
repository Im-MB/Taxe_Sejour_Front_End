import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { TrimestreCreateComponent } from './view/trimestres/trimestre-create/trimestre-create.component';
import { TrimestreListComponent } from './view/trimestres/trimestre-list/trimestre-list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BodyComponent } from './view/body/body.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {EarthComponent} from "./view/earth/earth.component";
import {TaxeTrimCreateComponent} from "./view/taxeTrim/taxe-trim-create/taxe-trim-create.component";
import {TaxeTrimListComponent} from "./view/taxeTrim/taxe-trim-list/taxe-trim-list.component";
import { HomePageComponent } from './view/home-page/home-page.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {RouterModule} from "@angular/router";



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
    LocalListComponent,
    TrimestreCreateComponent,
    TrimestreListComponent,
    EarthComponent,
    TaxeTrimCreateComponent,
    TaxeTrimListComponent,
    HomePageComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        Ng2SearchPipeModule,
        SweetAlert2Module,
        BrowserAnimationsModule,
        NgApexchartsModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
