import { useEffect, useRef } from "react";

const horizontalDragg = () => {
   const iconRef = useRef<HTMLDivElement>(null);

   const pointerScroll = (elem: HTMLElement) => {
      let isDragging = false;
      let startX: number;
      let scrollLeft: number;

      const dragStart = (ev: MouseEvent) => {
         isDragging = true;
         startX = ev.pageX - elem.offsetLeft;
         scrollLeft = elem.scrollLeft;
      };

      const dragEnd = () => {
         isDragging = false;
      };

      const drag = (ev: MouseEvent) => {
         if (!isDragging) return;
         ev.preventDefault();
         const x = ev.pageX - elem.offsetLeft;
         const walk = (x - startX) * 2; // Scroll-fast
         elem.scrollLeft = scrollLeft - walk;
      };

      elem.addEventListener("mousedown", dragStart);
      elem.addEventListener("mouseleave", dragEnd);
      elem.addEventListener("mouseup", dragEnd);
      elem.addEventListener("mousemove", drag);
   };

   useEffect(() => {
      if (iconRef.current) {
         pointerScroll(iconRef.current);
      }
   }, []);

   return iconRef;
};

export default horizontalDragg;
