import { Routes } from '@angular/router';
import { AuthGuard } from 'app/service/AuthGuard';
import { UserListComponent } from 'app/users/user-list/user-list.component';
import { WorkflowGeneratorComponent } from 'app/workflow/workflow-generator/workflow-generator.component';
import { WorkflowListComponent } from 'app/workflow/workflow-list/workflow-list.component';
import { WorkflowResponceComponent } from 'app/workflow/workflow-responce/workflow-responce.component';

export const AdminLayoutRoutes: Routes = [ 
    { path: 'workflow',      component: WorkflowGeneratorComponent,  canActivate: [AuthGuard],  data: { roles: ['USER'] }  },
    { path: 'workflow-list',      component: WorkflowListComponent },
    { path: 'workflow-responce',      component: WorkflowResponceComponent },
    { path: 'user-list',      component: UserListComponent }
   
];
