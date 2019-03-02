import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  counterSeconds = 600;
  private panelBody: any;
  private navHeight: number;
  private nav: any;
  private urlLogout: string;
  private mainMenu:any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.nav = document.getElementsByTagName("nav")[0];
    this.navHeight = this.nav.offsetHeight;
    this.addRouteChangeListener();
  }

  private addRouteChangeListener() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.panelBody = document.getElementById("mainMenu");
      }
    });
    this.setUpTopMarginOfMainDivDependOfPositionOfNavbar();
  }

  private setUpTopMarginOfMainDivDependOfPositionOfNavbar(){
    if (this.navHeight !== this.nav.offsetHeight) {
      this.navHeight = this.nav.offsetHeight;
    }
    if (this.panelBody === undefined || this.panelBody === null) {
      this.panelBody=document.getElementById("mainMenu");
    }
    if (this.panelBody !== undefined && this.panelBody !== null) {
      this.panelBody.style.marginTop = this.navHeight+5;
    }
  }

}
