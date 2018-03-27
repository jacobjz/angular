import { Component } from '@angular/core'
import { EventService } from '../events.service'
import { ActivatedRoute } from '@angular/router'


@Component({
selector: '',
templateUrl: 'app/event-details/event-details.component.html',
styles: [`.container {padding-left: 20px; padding-right: 20px;}
          .imageThumb {height:100px;}`]
})

export class EventDetailsComponent{
  event: any;
constructor(private eventService:EventService, private route:ActivatedRoute){

}
  ngOnInit(){
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
