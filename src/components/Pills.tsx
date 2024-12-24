import "../styles/pills-styles/pills-styles.scss";

interface Pill {
   id: number;
   title: string;
}

const Pills = ({ filteredPillsz }: { filteredPillsz: Array<Pill> }) => {
   return (
      <div className="pills">
         <p className="pills-container"
         //  ref={iconRef}
          >
            {filteredPillsz.map((item) => (
               <a
                  href="https://www.youtube.com/"
                  key={item.id}
                  className="pills-link"
               >
                  {item.title}
               </a>
            ))}
         </p>
      </div>
   );
};

export default Pills;
