import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
selector: 'event-thumbnail',
template: `
<div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
<h2>{{event.name}}</h2>
<div>Date: {{event.date}}</div>
<div [ngStyle]="getStartTimeStyle()"  [ngSwitch]="event?.time">
Time: {{event.time}}
<span *ngSwitchCase="'8:00 am'"><i style="font-size:24px" class="fa">&#xf017;</i></span>
<span *ngSwitchCase="'10:00 am'">(Late Start)</span>
<span *ngSwitchDefault>(Normal Start)</span>
</div>
<div>Price: \${{event.price}}</div>
<div *ngIf="event?.location">
<span>Location: {{event.location.country}}, {{event.location.address}}</span>
</div>
</div>
`,
styles:[`
  .thumbnail {min-height:210px;}
  .pad-left {margin-left:10px;}
  .well div {color: bbb;}
  `]
})
export class EventThumbnailComponent{
@Input() event:any;

getStartTimeStyle():any{
if(this.event && this.event.time=='8:00 am'){
  return {color: '#4A96AD', 'font-weight':'bold'}
}
  return {};
}
}
