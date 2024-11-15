import { useState } from "react";
import { IconData } from "../data";
import Pills from "./Pills";
import useHorizontalDrag from "../hooks/horizontalDragg";
import '../styles/icon-styles/icon-styles.css';

const IconSelection = () => {
    const [activeIcon, setActiveIcon] = useState<number | null>(1);
    const {
        containerRef,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove,
    } = useHorizontalDrag();

    // Onclick icon selection for icon pulsing animation
    const handleIconClick = (id: number) => {
        console.log('Icon clicked:', id);
        setActiveIcon(id);
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