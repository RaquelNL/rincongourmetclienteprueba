import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserPlistRoutedComponent } from './components/usuarios/admin-user-plist-routed/admin-user-plist-routed.component';
import { AdminUserViewRoutedComponent } from './components/usuarios/admin-user-view-routed/admin-user-view-routed.component';
import { AdminUserNewRoutedComponent } from './components/usuarios/admin-user-new-routed/admin-user-new-routed.component';
import { AdminUserEditRoutedComponent } from './components/usuarios/admin-user-edit-routed/admin-user-edit-routed.component';
//import { AdminRecPlistRoutedComponent } from './components/recetas/admin-rec-plist-routed/admin-rec-plist-routed.component';
//import { AdminRecViewRoutedComponent } from './components/recetas/admin-rec-view-routed/admin-rec-view-routed.component';
//import { AdminRecNewRoutedComponent } from './components/recetas/admin-rec-new-routed/admin-rec-new-routed.component';
//import { AdminRecEditRoutedComponent } from './components/recetas/admin-rec-edit-routed/admin-rec-edit-routed.component';
import { AppComponent } from './app.component';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  //--
  { path: 'home', component: HomeRoutedComponent },
  { path: 'admin/user/plist', component: AdminUserPlistRoutedComponent },
  { path: 'admin/user/view/:id', component: AdminUserViewRoutedComponent },    
  { path: 'admin/user/new', component: AdminUserNewRoutedComponent },
  { path: 'admin/user/edit/:id', component: AdminUserEditRoutedComponent },
  //-- 
  /*
  { path: 'admin/recetas/plist', component: AdminRecPlistRoutedComponent },
  { path: 'admin/recetas/view/:id', component: AdminRecViewRoutedComponent },    
  { path: 'admin/recetas/new', component: AdminRecNewRoutedComponent },
  { path: 'admin/recetas/edit/:id', component: AdminRecEditRoutedComponent },
  //--
  { path: 'admin/ingredientes/plist', component: AdminRecPlistRoutedComponent },
  { path: 'admin/ingredientes/view/:id', component: AdminRecViewRoutedComponent },    
  { path: 'admin/ingredientes/new', component: AdminRecNewRoutedComponent },
  { path: 'admin/ingredientes/edit/:id', component: AdminRecEditRoutedComponent },
  //--
  { path: 'admin/comentarios/plist', component: AdminRecPlistRoutedComponent },
  { path: 'admin/comentarios/view/:id', component: AdminRecViewRoutedComponent },    
  { path: 'admin/comentarios/new', component: AdminRecNewRoutedComponent },
  { path: 'admin/comentarios/edit/:id', component: AdminRecEditRoutedComponent },
  //--
  { path: 'admin/medidas/plist', component: AdminRecPlistRoutedComponent },
  { path: 'admin/medidas/view/:id', component: AdminRecViewRoutedComponent },    
  { path: 'admin/medidas/new', component: AdminRecNewRoutedComponent },
  { path: 'admin/medidas/edit/:id', component: AdminRecEditRoutedComponent },
 */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
