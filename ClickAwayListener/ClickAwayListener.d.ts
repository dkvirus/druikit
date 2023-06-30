import React from 'react';
declare type ClickAwayMouseEventHandler = 'onClick' | 'onMouseDown' | 'onMouseUp' | 'onPointerDown' | 'onPointerUp';
declare type ClickAwayTouchEventHandler = 'onTouchStart' | 'onTouchEnd';
export interface ClickAwayListenerProps {
    /**
     * The wrapped element.
     */
    children: React.ReactElement;
    /**
     * If `true`, the React tree is ignored and only the DOM tree is considered.
     * This prop changes how portaled elements are handled.
     * @default false
     */
    disableReactTree?: boolean;
    /**
     * The mouse event to listen to. You can disable the listener by providing `false`.
     * @default 'onClick'
     */
    mouseEvent?: ClickAwayMouseEventHandler | false;
    /**
     * Callback fired when a "click away" event is detected.
     */
    onClickAway: (event: MouseEvent | TouchEvent) => void;
    /**
     * The touch event to listen to. You can disable the listener by providing `false`.
     * @default 'onTouchEnd'
     */
    touchEvent?: ClickAwayTouchEventHandler | false;
}
export declare const ClickAwayListener: (props: ClickAwayListenerProps) => React.JSX.Element;
export {};
