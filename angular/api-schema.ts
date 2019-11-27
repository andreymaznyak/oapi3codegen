import {
    Schema,
    SchemaArray,
    SchemaBoolean,
    SchemaInteger,
    SchemaNumber,
    SchemaString,
    SchemaObject
} from '../oapi-defs';

export type SubSchema = | Schema
                 | SchemaArray
                 | SchemaBoolean
                 | SchemaInteger
                 | SchemaNumber
                 | SchemaString
                 | SchemaObject;

export interface ApiSchema {
    request: SubSchema | null;
    response: SubSchema | null;
    params: SubSchema | null;
}
