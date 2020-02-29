import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
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

  constructor(dataService: DataService, route: ActivatedRoute, routerExtensions: RouterExtensions) { 
    this.dataService = dataService;
    this.route = route;
    this.routerExtensions = routerExtensions;

  }

  ngOnInit() {
    const memberId = +this.route.snapshot.params.memberId;
  }

  onBackTap(): void {
    this.routerExtensions.back();
}

}
