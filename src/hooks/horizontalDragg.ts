import { useEffect, useRef } from "react";

const horizontalDragg = () => {
    const iconRef = useRef<HTMLDivElement>(null);

    const pointerScroll = (elem: HTMLElement) => {
        const dragStart = (ev: PointerEvent) =>
            elem.setPointerCapture(ev.pointerId);
        const dragEnd = (ev: PointerEvent) =>
            elem.releasePointerCapture(ev.pointerId);
        const drag = (ev: PointerEvent) =>
            elem.hasPointerCapture(ev.pointerId) &&
            (elem.scrollLeft -= ev.movementX);

        elem.addEventListener("pointerdown", dragStart);
        elem.addEventListener("pointerup", dragEnd);
        elem.addEventListener("pointermove", drag);
    };

    useEffect(() => {
        if (iconRef.current) {
            pointerScroll(iconRef.current);
        }
    }, []);

   return iconRef;
};

export default horizontalDragg;
