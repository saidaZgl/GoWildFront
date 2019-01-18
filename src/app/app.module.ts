import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListEventsComponent } from './events/list-events/list-events.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OpenDataParisServices } from './services/OpenDataParisServices';
import { ParametersComponent } from './parameters/parameters.component';
import { DetailsEventsComponent } from './events/details-events/details-events.component';
import { MapComponent } from './events/map/map.component';
import { MapServices } from './services/map.services';
import { CreateEventComponent } from './events/create-event-page/create-event.component';
import { ModifyEventComponent } from './events/modify-event-page/modify-event.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { UserService } from './services/User.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'events', component: ListEventsComponent },
  { path: 'param', component: ParametersComponent },
  { path: 'events/:id', component: DetailsEventsComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'modify-event', component: ModifyEventComponent },
  { path: 'create-user', component: UserInfosComponent},
  { path: 'modify-user', component: UserInfosComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListEventsComponent,
    FooterComponent,
    HomeComponent,
    ParametersComponent,
    DetailsEventsComponent,
    MapComponent,
    CreateEventComponent,
    ModifyEventComponent,
    EventFormComponent,
    UserInfosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    OpenDataParisServices,
    MapServices,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
