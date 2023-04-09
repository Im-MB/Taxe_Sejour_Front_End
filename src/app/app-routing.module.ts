import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./view/body/body.component";
import {InfoAnnuelleCreateComponent} from "./view/InfoAnnuelle/info-annuelle-create/info-annuelle-create.component";
import {RedevableListComponent} from "./view/redevables/redevable-list/redevable-list.component";
import {NotificationlocaleListeComponent} from "./view/notificationlocale/notificationlocale-liste/notificationlocale-liste.component";
import {LocalListComponent} from "./view/locals/local-list/local-list.component";
import {TrimestreListComponent} from "./view/trimestres/trimestre-list/trimestre-list.component";
import {EarthComponent} from "./view/earth/earth.component";
import {TaxeTrimListComponent} from "./view/taxeTrim/taxe-trim-list/taxe-trim-list.component";

const routes: Routes = [
  {
    path:'',
    component:BodyComponent
  },
  {
    path:'redevable',
    component:RedevableListComponent
  },
  {
    path:'taxeAnnuelle',
    component:InfoAnnuelleCreateComponent
  },
  {
    path:'notificationLocal',
    component:NotificationlocaleListeComponent
  },
  {
    path:'local',
    component:LocalListComponent
  },
  {
    path:'trimestre',
    component:TrimestreListComponent
  },
  {
    path:'localMaps',
    component:EarthComponent
  },
  {
    path:'taxeTrim',
    component:TaxeTrimListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
