import { CSSProperties } from "react";
/**
 * 处理类名
 *
 * ``` js
 * classnames(['aaa', 'bbb', '', 'ddd'])   // 'aaa bbb ddd'
 * classnames({'aaa': true, 'bbb': false, 'ccc': true})   // 'aaa ccc'
 * ```
 */
export declare function classnames(cls: string[] | Record<string, boolean | undefined>): string;
export declare function handlePlacement(placement: 'bottomLeft' | 'bottomRight'): CSSProperties;
export declare const cssUtils: {
    classnames: typeof classnames;
    handlePlacement: typeof handlePlacement;
};
