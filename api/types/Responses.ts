import {Response} from 'express'

type Send<ResBody = any, T = Response<ResBody>> = (body?: ResBody) => T;

export interface CustomResponse<T> extends Response {
   json: Send<T, this>
}
export interface Error {
    message?: string
}