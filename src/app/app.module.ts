import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//--
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from '@angular/material/snack-bar';
//--
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
//--
//import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';
//import { MenuUnroutedComponent } from './components/shared/menu-unrouted/menu-unrouted.component';
//--

import { AdminUserPlistRoutedComponent } from './components/usuarios/admin-user-plist-routed/admin-user-plist-routed.component';
import { AdminUserViewRoutedComponent } from './components/usuarios/admin-user-view-routed/admin-user-view-routed.component';
import { AdminUserNewRoutedComponent } from './components/usuarios/admin-user-new-routed/admin-user-new-routed.component';
import { AdminUserEditRoutedComponent } from './components/usuarios/admin-user-edit-routed/admin-user-edit-routed.component';
import { AdminUserPlistUnroutedComponent } from './components/usuarios/admin-user-plist-unrouted/admin-user-plist-unrouted.component';
import { AdminUserDetailUnroutedComponent } from './components/usuarios/admin-user-detail-unrouted/admin-user-detail-unrouted.component';
import { AdminUserFormUnroutedComponent } from './components/usuarios/admin-user-form-unrouted/admin-user-form-unrouted.component';
import { AdminUserSelectionUnroutedComponent } from './components/usuarios/admin-user-selection-unrouted/admin-user-selection-unrouted.component';

//import { TrimPipe } from './pipes/trim.pipe.ts.pipe';
import { UsuariosAjaxService } from './service/usuarios.ajax.service';
import { RecetasAjaxService } from './service/recetas.ajax.service';
import { RecIngAjaxService } from './service/recing.ajax.service';
import { MedidasAjaxService } from './service/medidas.ajax.service';
import { IngredientesAjaxService } from './service/ingredientes.ajax.service';
import { ComentariosAjaxService } from './service/comentarios.ajax.service';//import { AdminProjectSelectionUnroutedComponent } from './components/project/admin-project-selection-unrouted/admin-project-selection-unrouted.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HomeRoutedComponent } from './components/shared/home-routed/home-routed.component';
import { MenuUnroutedComponent } from './components/shared/menu-unrouted/menu-unrouted.component';
//import { FooterUnroutedComponent } from './components/shared/footer-unrouted/footer-unrouted.component';
//import { LoginRoutedComponent } from './components/shared/login-routed/login-routed.component';
//import { SessionAjaxService } from './service/session.ajax.service.ts.service';
//import { AuthInterceptor } from './interceptor/auth.interceptor';
//import { LogoutRoutedComponent } from './components/shared/logout-routed/logout-routed.component';
//--
@NgModule({
  declarations: [
   //TrimPipe,
    AppComponent,
    HomeRoutedComponent,
  MenuUnroutedComponent,
    //LoginRoutedComponent,
    //LogoutRoutedComponent,
    //--
    AdminUserPlistRoutedComponent,
    AdminUserViewRoutedComponent,
    AdminUserNewRoutedComponent,
    AdminUserEditRoutedComponent,
    AdminUserPlistUnroutedComponent,
    AdminUserDetailUnroutedComponent,
    AdminUserFormUnroutedComponent,
    AdminUserSelectionUnroutedComponent,
    //--
    //--
    //--
    //--
    //--
  ],
  imports: [ 
    ReactiveFormsModule,
   BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //--
    BrowserAnimationsModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TableModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    //--
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    MessageService,
    DialogService,
    ConfirmationService,
    MatSnackBar,
    UsuariosAjaxService,
    RecIngAjaxService,
    RecetasAjaxService,
    MedidasAjaxService,
    IngredientesAjaxService,
    ComentariosAjaxService,
    //SessionAjaxService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


