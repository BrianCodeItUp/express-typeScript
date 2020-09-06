import 'reflect-metadata'
import { RequestHandler } from 'express'
import { Methods, MetadataKeys } from './config'

interface RouteHanlderDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

const routeBinder = (method: string) =>
  (path: string) =>
  (target: any, key: string, desc: RouteHanlderDescriptor) => {
  Reflect.defineMetadata(MetadataKeys.path, path, target, key)
  Reflect.defineMetadata(MetadataKeys.method, method, target, key)
}

export const get = routeBinder(Methods.get)
export const put = routeBinder(Methods.put)
export const post = routeBinder(Methods.post)
export const del = routeBinder(Methods.del)
export const patch = routeBinder(Methods.patch)