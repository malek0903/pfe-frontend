import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/workflow', title: 'Workflow',  icon: 'dashboard', class: '' },
    { path: '/workflow-list', title: 'Workflow-list',  icon: 'dashboard', class: '' },
    { path: '/workflow-responce', title: 'Workflow Responce',  icon: 'dashboard', class: '' },
    { path: '/user-list', title: 'User list',  icon: 'users', class: '' }
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
