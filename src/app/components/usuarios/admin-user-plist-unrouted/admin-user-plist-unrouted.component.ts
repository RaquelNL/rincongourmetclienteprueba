import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PaginatorState } from 'primeng/paginator';
import { MessageService } from 'primeng/api';
import { IUser, IUserPage } from '../../../model/model.interfaces';
import { AdminUserDetailUnroutedComponent } from '../admin-user-detail-unrouted/admin-user-detail-unrouted.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosAjaxService } from '../../../service/usuarios.ajax.service';

@Component({
  providers: [ConfirmationService],
  selector: 'app-admin-user-plist-unrouted',
  templateUrl: './admin-user-plist-unrouted.component.html',
  styleUrls: ['./admin-user-plist-unrouted.component.css']
})

export class AdminUserPlistUnroutedComponent implements OnInit {

  oPage: IUserPage | undefined;
  orderField: string = "id";
  orderDirection: string = "asc";
  oPaginatorState: PaginatorState = { first: 0, rows: 10, page: 0, pageCount: 0 };
  status: HttpErrorResponse | null = null;
  oUserToRemove: IUser | null = null;

  constructor(
    private oUserAjaxService: UsuariosAjaxService,
    public oDialogService: DialogService,
    private oCconfirmationService: ConfirmationService,
    private oMatSnackBar: MatSnackBar,
    private oMessageService: MessageService
  ) {} 

  ngOnInit() {
    this.getPage();
  }

  getPage(): void {
    this.oUserAjaxService.getPage(this.oPaginatorState.rows, this.oPaginatorState.page, this.orderField, this.orderDirection).subscribe({
      next: (data: IUserPage) => {
        this.oPage = data;
        this.oPaginatorState.pageCount = data.totalPages;
        console.log(this.oPaginatorState);
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

  onPageChang(event: any) {
    this.oPaginatorState.rows = event.rows;
    this.oPaginatorState.page = event.page;
    this.getPage();
  }

  doOrder(fieldorder: string) {
    this.orderField = fieldorder;
    if (this.orderDirection == "asc") {
      this.orderDirection = "desc";
    } else {
      this.orderDirection = "asc";
    }
    this.getPage();
  }

  ref: DynamicDialogRef | undefined;

  doView(u: IUser) {
    this.ref = this.oDialogService.open(AdminUserDetailUnroutedComponent, {
      data: {
        id: u.id
      },
      header: 'Vista del usuario',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false
    });
  }

  doRemove(u: IUser) {
    this.oUserToRemove = u;
  
    // Ajusta el mensaje que se mostrará en el p-toast
    const message = {
      severity: 'warn',
      summary: 'Confirmación de Borrado',
      detail: '¿Estás seguro que quieres borrar este usuario?',
      key: 'confirmation' // Usa una clave única para gestionar mensajes
    };
  
    // Muestra el mensaje en el p-toast
    this.oMessageService.add(message);
  }
  
  confirm() {
    this.oCconfirmationService.confirm({
      accept: () => {
        this.oMatSnackBar.open("El usuario ha sido borrado.", '', { duration: 2000 });
        this.oUserAjaxService.removeOne(this.oUserToRemove?.id).subscribe({
          next: () => {
            this.getPage();
            this.oUserToRemove = null; // Limpiar después de la confirmación
          },
          error: (error: HttpErrorResponse) => {
            this.status = error;
            this.oMatSnackBar.open("Error al borrar el usuario.", "", { duration: 2000 });
          }
        });
      },
      reject: (type: ConfirmEventType) => {
        this.oMatSnackBar.open("El usuario no ha sido borrado.", "", { duration: 2000 });
      }
    });
  }
  


}
