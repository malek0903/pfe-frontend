import { Routes } from '@angular/router';
import { AuthGuard } from 'app/service/AuthGuard';
import { WorkflowGeneratorComponent } from 'app/workflow/workflow-generator/workflow-generator.component';
import { WorkflowListComponent } from 'app/workflow/workflow-list/workflow-list.component';
import { WorkflowResponceComponent } from 'app/workflow/workflow-responce/workflow-responce.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   
   
    { path: 'workflow',      component: WorkflowGeneratorComponent,  canActivate: [AuthGuard],  data: { roles: ['USER'] }  },
    { path: 'workflow-list',      component: WorkflowListComponent },
    { path: 'workflow-responce',      component: WorkflowResponceComponent },

];
