import * as Components from '../oapi-defs/components';

export type DescriptorSchema = Components.SchemaArray
    | Components.SchemaBoolean
    | Components.SchemaInteger
    | Components.SchemaNumber
    | Components.SchemaObject
    | Components.SchemaString;

export type DataTypeContainer = DataTypeDescriptor[];

export type DescriptorContext = {[name: string]: DataTypeDescriptor};

/**
 * Описание определенного типа данных.
 */
export interface DataTypeDescriptor {

    /**
     * Access to src schema.
     */
    schema: DescriptorSchema;

    /**
     * Название этой модели (может быть string
     * или null).
     */
    modelName?: string;

    /*
     * Предлагаемое имя для типа данных: может
     * применяться, если тип данных анонимный, но
     * необходимо вынести его за пределы родительской
     * модели по-ситуации (например, в случае с Enum).
     */
    suggestedModelName?: string;

    /**
     * Путь до оригинальной схемы, на основе
     * которой было создано описание этого типа данных.
     */
    originalSchemaPath?: string;

    /**
     * Родительсткие модели.
     */
    ancestors?: DataTypeDescriptor[];

    /**
     * Рендер типа данных в строку.
     *
     * @param {DataTypeDescriptor[]} childrenDependencies
     * Immutable-массив, в который складываются все зависимости
     * типов-потомков (если такие есть).
     * @param {boolean} rootLevel
     * Говорит о том, что это рендер "корневого"
     * уровня — то есть, не в составе другого типа,
     * а самостоятельно.
     *
     * @returns {string}
     */
    render(
        childrenDependencies: DataTypeDescriptor[],
        rootLevel: boolean
    ): string;

    /**
     * Получение комментариев для этого дескриптора.
     * @returns {string}
     * @private
     */
    getComments(): string;
}
