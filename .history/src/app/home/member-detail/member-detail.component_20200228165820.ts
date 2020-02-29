import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService, Beer } from '../../shared/data.service';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'ns-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  private dataService: DataService
  private route: ActivatedRoute
  private routerExtensions: RouterExtensions

  beers: Array<Beer>;

  constructor(dataService: DataService, route: ActivatedRoute, routerExtensions: RouterExtensions) { 
    this.dataService = dataService;
    this.route = route;
    this.routerExtensions = routerExtensions;

  }

  ngOnInit() {
    const memberId = this.route.snapshot.params.memberId;
    this.dataService.beers.subscribe(data =>{
      this.beers = data;
    });
    this.dataService.getMemberBeersByMemberId(memberId).subscribe();
  }

  onBackTap(): void {
    this.routerExtensions.back();
}

}
