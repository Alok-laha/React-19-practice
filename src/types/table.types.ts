// Utilities to compute nested path strings and their value types
export type NestedPaths<T> = {
    [K in keyof T & string]: T[K] extends Record<string, any>
        ? `${K}` | `${K}.${NestedPaths<T[K]>}`
        : `${K}`
}[keyof T & string];

export type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
        ? PathValue<T[K], Rest>
        : unknown
    : P extends keyof T
    ? T[P]
    : unknown;

export type Columns<T, P extends NestedPaths<T> = NestedPaths<T>> = {
    name: P;
    title: string;
    render?: (value: PathValue<T, P>, row: T) => React.ReactNode;
}

export type TableProps<T> = {
    rows: T[];
    columns: Columns<T>[];
    pagination?: {
        currentPage: number;
        totalPages: number;
        limit: number;
        setPageNumber: (page: number) => void;
        setLimit: (limit: number) => void;
    };
}