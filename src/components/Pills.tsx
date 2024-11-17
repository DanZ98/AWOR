import { useEffect } from "react";
import { PillsData } from "../data";
import "../styles/pills-styles/pills-styles.css";
import useHorizontalDrag from "../hooks/horizontalDragg";

interface PillsLinkVisibility {
    isPillsLinkVisible: boolean;
}

const Pills = ({isPillsLinkVisible} : PillsLinkVisibility) => {
    const {
        containerRef,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove,
    } = useHorizontalDrag();

    // Prevent default behavior for pills link when dragging
    useEffect(() => {
        const links = document.querySelectorAll('.pills-link');
        const preventDefault = (e: MouseEvent) => e.preventDefault();

        links.forEach(link => {
            link.addEventListener('mousedown', preventDefault as EventListener);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('mousedown', preventDefault as EventListener);
            });
        };
    }, []);

    return (
        <div className="pills">
            <p className="pills-container" 
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>
                {PillsData.map((item) => {
                    return (
                        <a href={`#${item.title}`} key={item.id} className={`pills-link ${isPillsLinkVisible ? 'pills-display' : '' }`}>
                            {item.title}
                        </a>
                    )
                    }
                )}
            </p>
        </div>
    )
}

export default Pills;