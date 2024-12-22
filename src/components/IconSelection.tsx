import { useDispatch } from "react-redux";
import { IconData } from "../data";
import { filterPills } from "../features/pillSlice";
import Pills from "./Pills";
import "../styles/icon-styles/icon-styles.scss";
import horizontalDragg from "../hooks/horizontalDragg";

const IconSelection = () => {
   const dispatch = useDispatch();
   const iconRef = horizontalDragg();

   const handleIconClick = (iconId: number) => {
      dispatch(filterPills(iconId));
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
                  <div className="icon-img-container">
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
            <Pills />
         </div>
      </section>
   );
};

export default IconSelection;
