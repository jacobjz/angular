import { Routes } from '@angular/router'
import { EventListComponent } from './event-list.component'
import { EventDetailsComponent } from './event-details/event-details.component'
import { CreateEventComponent } from './create-event.component'
import { Error404Component } from './error/404.component'
import { EventRouterActivator } from './event-route-activator.service'
import { EventsListResolver } from './events-list-resolver.service'
export const appRoutes:Routes = [
  { path: 'events/new', component:  CreateEventComponent },
  { path: 'events', component: EventListComponent, resolve: {events:EventsListResolver}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
  { path: '404', component: Error404Component},
  { path: '',redirectTo: '/events', pathMatch:'full'}
]
