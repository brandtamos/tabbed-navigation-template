import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService, Beer, Member } from '../../shared/data.service';
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
  member: Member;
  beersDrankenLabel: string
  loading: boolean = true;
  loaderVisibility: string = 'visible';

  draftIcon = 'font://&#xf0fc;';
  bottleIcon = 'font://&#xf72f;';
  //caskIcon = '';

  constructor(dataService: DataService, route: ActivatedRoute, routerExtensions: RouterExtensions) { 
    this.dataService = dataService;
    this.route = route;
    this.routerExtensions = routerExtensions;

  }

  ngOnInit() {
    this.showLoader();
    const memberId = this.route.snapshot.params.memberId;
    this.member = this.dataService.getMemberById(memberId);
    this.dataService.beers.subscribe(data =>{
      this.beers = data;
      this.beersDrankenLabel = 'Beers Dranken: ' + this.beers.length.toString();
      this.hideLoader();
    });
    this.dataService.getMemberBeersByMemberId(memberId).subscribe();
  }

  onBackTap(): void {
    this.beers = [];
    this.routerExtensions.back();
  }

  private showLoader(): void {
    this.loading = true;
    this.loaderVisibility = 'visible';
  }

  private hideLoader(): void{
    this.loading = false;
    this.loaderVisibility = 'collapsed';
  }

  serveTypeIcon(serveTypeCode: string){
    switch(serveTypeCode){
      case '(D)':
        return this.draftIcon;
      case '(B)':
        return this.bottleIcon;
      default: //TODO: find cask icon
        return this.draftIcon;
    }
  }

}
