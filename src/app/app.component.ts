import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from './models';
import { AccountService } from './services';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'sap-web';
  user?: User | null;
  selectedNav: string | undefined;
  constructor(private accountService: AccountService,
    private matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    private location: Location) {
    this.accountService.user.subscribe(x => this.user = x);
    this.matIconRegistry.addSvgIcon("globe", this._domSanitizer.bypassSecurityTrustResourceUrl("assets/image/globe.svg"));

  }
  ngOnInit(): void {
    const path = this.location.path()
    if (path) {
      this.selectedNav = path.split("/")[1]
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
  }
  getFullName() {
    if (this.user && this.user.firstName && this.user.lastName) {
      return ` ${this.user.firstName}  ${this.user.lastName}`
    }
    return ""

  }

  getAvatar() {
    if (this.user && this.user.firstName && this.user.lastName) {
      const initials = this.user.firstName.charAt(0) + this.user.lastName.charAt(0);
      return initials.toUpperCase();
    }
    return ""
  }


  logout() {
    this.accountService.logout();
    this.selectedNav = "dashboard"
  }
  setSelectedNav(nav: string) {
    this.selectedNav = nav;
  }

}
