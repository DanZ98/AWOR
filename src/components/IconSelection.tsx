import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconData } from "../data";
import { filterPills } from "../features/pillSlice";
import { RootState } from "../redux/store";
import Pills from "./Pills";
import "../styles/icon-styles/icon-styles.scss";
import horizontalDragg from "../hooks/horizontalDragg";

const IconSelection = () => {
   const [activeIcon, setActiveIcon] = useState<number | null>(null);
   const [showPills, setShowPills] = useState<boolean>(true);
   const pillsfilter = useSelector((state: RootState) => state.pills.filteredPills);
   const dispatch = useDispatch();
   const iconRef = horizontalDragg();

   const handleIconClick = (iconId: number) => {
      if (activeIcon === iconId) {
         setShowPills(!showPills);
      } else {
         setActiveIcon(iconId);
         setShowPills(true);
         dispatch(filterPills(iconId));
      }
   };

   return (
      <section>
         <div className="icon" ref={iconRef}>
            {IconData.map((icon) => (
               <div
                  className="icon-container"
                  key={icon.id}
                  onClick={() => handleIconClick(icon.id)}
               >
                  <div
                     className={`icon-img-container ${
                        activeIcon === icon.id ? "active" : ""
                     }`}
                  >
                     <img
                        src={icon.img}
                        alt={icon.title}
                        className="icon-image"
                        draggable="false" /* Prevent dragging */
                     />
                  </div>
                  <div className="icon-title">{icon.title}</div>
               </div>
            ))}
         </div>
         {showPills && <Pills filteredPillsz={pillsfilter} />}
      </section>
   );
};

export default IconSelection;
