import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventListComponent } from './event-list.component'
import { EventThumbnailComponent } from './event-thumbnail.component'
import { NavBarComponent } from './navbar.component'
import { EventService } from './events.service'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './event-details/event-details.component'
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router'
import { CreateEventComponent } from './create-event.component'
import { Error404Component } from './error/404.component'
import { EventRouterActivator } from './event-route-activator.service'
import { EventsListResolver } from './events-list-resolver.service'
@NgModule({
imports: [BrowserModule,
RouterModule.forRoot(appRoutes)],
declarations: [
  EventsAppComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  NavBarComponent,
  CreateEventComponent,
  Error404Component
],
providers: [EventService,
ToastrService,
EventRouterActivator,
EventsListResolver,
{
 provide: 'canDeactivateCreateEvent',
 useValue: checkDirtyState
}
],
bootstrap: [EventsAppComponent]
})

export class AppModule{}

function checkDirtyState(){
}
