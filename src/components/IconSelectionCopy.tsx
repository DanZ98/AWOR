// import { useState, useEffect } from "react";
// import { IconData, PillsData } from "../data";
// import Pills from "./Pills";
// import useHorizontalDrag from "../hooks/horizontalDragg";
// import "../styles/icon-styles/icon-styles.css";

// const IconSelection = () => {
//    const [activeIcon, setActiveIcon] = useState(IconData[0].id);
//    const [filteredPills, setFilteredPills] = useState(PillsData);
//    const [displayPill, setDisplayPill] = useState<boolean>(false);

//    const {
//       containerRef,
//       handleMouseDown,
//       handleMouseLeave,
//       handleMouseUp,
//       handleMouseMove,
//    } = useHorizontalDrag();

//    const getPillRangeByIconId = (iconId: number) => {
//       // Define the ranges for each icon ID
//       const ranges: { [key: number]: { start: number; end: number } } = {
//          1: { start: 1, end: 3 },
//          2: { start: 4, end: 5 },
//          3: { start: 6, end: 6 },
//          4: { start: 7, end: 9 },
//          5: { start: 10, end: 14 },
//          6: { start: 15, end: 21 },
//          7: { start: 22, end: 23 },
//          8: { start: 24, end: 26 },
//          // Add more ranges as needed
//       };
//       return ranges[iconId];
//    };

//    useEffect(() => {
//       // Set default active icon to "Financial Management" and execute range { start: 1, end: 3 }
//       const defaultIconId = 1; // Assuming "Financial Management" has id 1
//       setActiveIcon(defaultIconId);
//       const range = getPillRangeByIconId(defaultIconId);
//       const filtered = PillsData.filter(
//          (pill) => pill.id >= range.start && pill.id <= range.end
//       );
//       setFilteredPills(filtered);
//       setDisplayPill(true);
//       console.log(`Executing range: ${range.start} to ${range.end}`);
//    }, []);

//    // Function to handle icon click
//    const handleIconClick = (iconId: number) => {
//       if (activeIcon === iconId) {
//          setDisplayPill(!displayPill);
//       } else {
//          setActiveIcon(iconId);
//          const range = getPillRangeByIconId(iconId);
//          const filtered = PillsData.filter(
//             (pill) => pill.id >= range.start && pill.id <= range.end
//          );
//          setFilteredPills(filtered);
//          setDisplayPill(true);
//       }
//    };

//    return (
//       <section>
//          <div className="icon">
//             <div
//                className="icon-container"
//                ref={containerRef}
//                onMouseDown={handleMouseDown}
//                onMouseLeave={handleMouseLeave}
//                onMouseUp={handleMouseUp}
//                onMouseMove={handleMouseMove}
//             >
//                {IconData.map((icon) => (
//                   <div
//                      key={icon.id}
//                      className={`icon-content ${
//                         activeIcon === icon.id ? "active" : ""
//                      }`}
//                      onClick={() => handleIconClick(icon.id)}
//                   >
//                      <div className="icon-img-container">
//                         <img
//                            src={icon.img}
//                            alt={icon.title}
//                            className="icon-image"
//                         />
//                      </div>
//                      <div className="icon-title">{icon.title}</div>
//                   </div>
//                ))}
//             </div>
//             <Pills filteredPills={filteredPills} displayPill={displayPill} />
//          </div>
//       </section>
//    );
// };

// export default IconSelection;
