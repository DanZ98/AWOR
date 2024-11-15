import { useRef, useEffect } from "react";

const useHorizontalDrag = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
        scrollLeft.current = containerRef.current?.scrollLeft || 0;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - (containerRef.current?.offsetLeft || 0);
        const walk = (x - startX.current) * 2; // Scroll-fast
        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleClick = (e: MouseEvent) => {
            if (isDragging.current) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        };

        const links = container.querySelectorAll('a');
        links.forEach(link => link.addEventListener('click', handleClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleClick));
        };
    }, []);

    return {
        containerRef,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove,
    };
};

export default useHorizontalDrag;