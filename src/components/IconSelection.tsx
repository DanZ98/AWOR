import { useState, useRef } from "react";
import { IconData } from "../data";
import Pills from "./Pills";
import '../styles/icon-styles/icon-styles.css';

const IconSelection = () => {
    const [activeIcon, setActiveIcon] = useState<number | null>(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Onclick icon selection for icon pulsing animation
    const handleIconClick = (id: number) => {
        console.log('Icon clicked:', id);
        setActiveIcon(id);
    };

    //Horizontal mouse dragging for icon selection
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

    return (
        <section className="icon">
            <div 
                className="icon-container"
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {IconData.map((item) => {
                    return (
                        <div 
                            key={item.id} 
                            className={`icon-content ${activeIcon === item.id ? 'active' : ''}`} 
                            onClick={() => handleIconClick(item.id)}
                        >
                            <div className="icon-img-container">
                                <img src={item.img} alt={item.title} className="icon-image" />
                            </div>
                            <h3 className="icon-title">{item.title}</h3>
                        </div>
                    );
                })}   
            </div>
            <Pills />
        </section>
    )
}

export default IconSelection;