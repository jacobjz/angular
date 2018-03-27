import { Component, OnInit } from '@angular/core'

import { EventService } from './events.service'
import { ToastrService } from './common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
selector: 'events-list',
template: `
<div>
<h1> Events </h1>
<hr/>
<div class="row">
<div *ngFor="let event of events" class="col-md-5">
<event-thumbnail [event]="event"></event-thumbnail>
</div>
</div>
</div>
`
,
styles:[
  `
  .well div {color: #bbb;}
  `
]
})
export class EventListComponent implements OnInit{
  events:any
constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){

}
ngOnInit() {
this.events = this.route.snapshot.data['events'];
}
}
