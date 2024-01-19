import { HttpErrorResponse } from "@angular/common/http";

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    strSortField: string;
    strSortDirection: string;
    strFilter: string;
    strFilteredTitle: string;
    strFilteredMessage: string;
    nRecords: number;
}

export interface IEntity {
    id: number,
}

export interface IUser extends IEntity {
    usuario: string,
    nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    email: string,
    rol: boolean,
    foto: string,
    recetas: number,
    comentarios: number
}

export interface IUserPage extends IPage<IUser> {
}

export interface IReceta extends IEntity {
    usuarioAsignado: IUser,
    nombre: string,
    pasos: string,
    tiempo_preparacion: number,
    dificultad: string,
    foto: string
}

export interface IRecetaPage extends IPage<IReceta> {
}

export interface IIngrediente extends IEntity {
    nombre: string,
    calorias: string,
    grasas: string,
    colesterol: string,
    sodio: string,
    carbohidratos: string,
    proteinas: string,
    medidas: IMedida,
    foto: string

}

export interface IIngredientePage extends IPage<IIngrediente> {
}

export interface IMedida extends IEntity {
    nombre: string
}

export interface IMedidaPage extends IPage<IMedida> {
}

export interface IComentario extends IEntity {
    nombre: string
    usuarioAsignado: IUser,
    recetaAsignada: IReceta,
    descripcion: string,
    fecha: Date
}

export interface IComentarioPage extends IPage<IComentario> {
}

export interface IRecIng extends IEntity {
    recetaAsignada: IReceta,
    ingredienteAsignado: IIngrediente,
    cantidad: number
}

export interface IRecIngPage extends IPage<IRecIng> {
}

export type formOperation = 'EDIT' | 'NEW';

export interface SessionEvent {
    type: string;
}

export interface IToken {
    jti: string;
    iss: string;
    iat: number;
    exp: number;
    name: string;
}