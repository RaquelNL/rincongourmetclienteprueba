// Importación de módulos y clases necesarios desde Angular y RxJS
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComentario, IComentarioPage } from '../model/model.interfaces';
import { API_URL } from 'src/environment/environment';

// Decorador Injectable indica que esta clase es inyectable en otros componentes o servicios
@Injectable()
export class ComentariosAjaxService {

    // Definición de la URL base para las operaciones relacionadas con comentarios
    sUrl: string = API_URL + "/comentarios";

    // Constructor que recibe el servicio HttpClient mediante la inyección de dependencias
    constructor(
        private oHttpClient: HttpClient
    ) { }

    // Obtener un comentario por su ID
    getOne(id: number): Observable<IComentario> {
        return this.oHttpClient.get<IComentario>(this.sUrl + "/" + id);
    }

    // Obtener comentarios asociados a un usuario
    getByUserId(userId: number): Observable<IComentario[]> {
        return this.oHttpClient.get<IComentario[]>(this.sUrl + "/byUserId/" + userId);
    }

    // Obtener una página de comentarios paginada y ordenada
    getPage(size: number | undefined, page: number | undefined, orderField: string, orderDirection: string): Observable<IComentarioPage> {
        // Si no se proporciona un tamaño, se establece a 10 por defecto
        if (!size) size = 10;
        
        // Si no se proporciona un número de página, se establece a 0 por defecto
        if (!page) page = 0;
        
        // Realizar la solicitud HTTP para obtener la página de comentarios
        return this.oHttpClient.get<IComentarioPage>(this.sUrl + "?size=" + size + "&page=" + page + "&sort=" + orderField + "," + orderDirection);
    }

    // Eliminar un comentario por su ID
    removeOne(id: number | undefined): Observable<number> {
        // Verificar que se proporciona un ID antes de enviar la solicitud de eliminación
        if (id) {
            return this.oHttpClient.delete<number>(this.sUrl + "/" + id);
        } else {
            // Si no se proporciona un ID, devolver un observable vacío
            return new Observable<number>();
        }
    }

    // Crear un nuevo comentario
    newOne(oComment: IComentario): Observable<IComentario> {
        return this.oHttpClient.post<IComentario>(this.sUrl, oComment);
    }

    // Actualizar la información de un comentario existente
    updateOne(oComment: IComentario): Observable<IComentario> {
        return this.oHttpClient.put<IComentario>(this.sUrl, oComment);
    }

    // Método adicional, si es necesario, para realizar alguna operación específica con comentarios
    // ...

}
