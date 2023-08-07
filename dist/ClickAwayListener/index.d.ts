import React, { FC } from 'react';
type ClickAwayMouseEventHandler = 'onClick' | 'onMouseDown' | 'onMouseUp' | 'onPointerDown' | 'onPointerUp';
type ClickAwayTouchEventHandler = 'onTouchStart' | 'onTouchEnd';
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
declare const ClickAwayListener: FC<ClickAwayListenerProps>;
export default ClickAwayListener;
