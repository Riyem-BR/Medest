import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[{
    path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'home',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},
    {path:'ortho',loadChildren:()=>import('./views/front/ortho/ortho.module').then(m=>m.OrthoModule)},
    {path:'cancer',loadChildren:()=>import('./views/front/cancer/cancer.module').then(m=>m.CancerModule)},
    {path:'hemodialysis',loadChildren:()=>import('./views/front/hemodialysis/hemodialysis.module').then(m=>m.HemodialysisModule)},
    {path:'laser',loadChildren:()=>import('./views/front/laser/laser.module').then(m=>m.LaserModule)},
    {path:'lasik',loadChildren:()=>import('./views/front/lasik/lasik.module').then(m=>m.LasikModule)},
    {path:'obesity',loadChildren:()=>import('./views/front/obesity/obesity.module').then(m=>m.ObesityModule)},
    {path:'sterility',loadChildren:()=>import('./views/front/sterility/sterility.module').then(m=>m.SterilityModule)},
    {path:'toothcare',loadChildren:()=>import('./views/front/toothcare/toothcare.module').then(m=>m.ToothcareModule)},
    {path:'aesthetic',loadChildren:()=>import('./views/front/aesthetic/aesthetic.module').then(m=>m.AestheticModule)},
   
  ]},


  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'interventions',loadChildren:()=>import('./views/admin/interventions/interventions.module').then(m=>m.InterventionsModule)},
    {path:'addinterventions',loadChildren:()=>import('./views/admin/addinterventions/addinterventions.module').then(m=>m.AddinterventionsModule)}

  ]},


  {path:'admin/login',component:AuthAdminLayoutComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
