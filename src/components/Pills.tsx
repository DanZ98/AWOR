import "../styles/pills-styles/pills-styles.css";
import useHorizontalDrag from "../hooks/horizontalDragg";

const Pills = ({ filteredPills, displayPill }: { filteredPills: Array<any>, displayPill: boolean } ) => {

    const {
        containerRef,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove,
    } = useHorizontalDrag();

    return (
        <div className="pills">
            <p className="pills-container" 
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>
                {filteredPills.map((item) => {
                    return (
                        <a href={`#${item.title}`} key={item.id} className={`pills-link ${displayPill ? 'pills-display' : ''}`}>
                            {item.title}
                        </a>
                    )})
                }
            </p>
        </div>
    )
}

export default Pills;