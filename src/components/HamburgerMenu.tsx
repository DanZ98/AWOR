import { useState } from "react";
import { HamburgerLinkType, HamburgerSubLinkType, HamburgerSubLink2Type } from "../data";
import "../styles/hamburger-styles/hamburger-styles.scss"

type HamburgerMenuProps = {
   isActive: boolean;
   onClose: () => void;
}

const HamburgerMenu = ({ isActive, onClose }: HamburgerMenuProps) => {
   
   const [activeLink, setActiveLink] = useState<number | null>(null);
   const [activeLink2, setActiveLink2] = useState<number | null>(null);

   const handleLinkClick = (linkId: number) => {
      setActiveLink(activeLink === linkId ? null : linkId);
   };
   
   const handleLinkClick2 = (linkId: number) => {
      setActiveLink2(activeLink2 === linkId ? null : linkId);
   };

   const linkRanges: { [key: number]: { start: number; end: number } } = {
      1: { start: 0, end: 0 },
      2: { start: 1, end: 4 },
      3: { start: 5, end: 10 },
      4: { start: 11, end: 14 },
      5: { start: 15, end: 23 },
      6: { start: 24, end: 27 },
      7: { start: 28, end: 31 },
      8: { start: 0, end: 0 },
   };

   const subLinkRanges: { [key: number]: { start: number; end: number } } = {
      1: { start: 1, end: 8 },
      2: { start: 9, end: 22 },
      3: { start: 23, end: 30 },
      4: { start: 31, end: 41 },
      5: { start: 42, end: 51 },
      6: { start: 52, end: 59 },
      7: { start: 60, end: 62 },
      8: { start: 63, end: 64 },
      9: { start: 65, end: 65 },
      10: { start: 66, end: 68 },
      11: { start: 69, end: 70 },
      12: { start: 71, end: 79 },
      13: { start: 80, end: 84 },
      14: { start: 85, end: 88 },
      15: { start: 0, end: 0 },
      16: { start: 89, end: 90 },
      17: { start: 91, end: 91 },
      18: { start: 92, end: 98 },
      19: { start: 99, end: 100 },
      20: { start: 101, end: 108 },
      21: { start: 109, end: 110 },
      22: { start: 111, end: 117 },
      23: { start: 118, end: 124 },
      24: { start: 125, end: 131 },
      25: { start: 132, end: 135 },
      26: { start: 136, end: 139 },
      27: { start: 140, end: 145 },
      28: { start: 146, end: 147 },
      29: { start: 148, end: 148 },
      30: { start: 149, end: 152 },
   };

   return (
      <div className={`hamburger ${isActive ? "is-active" : ""}`}>
         <div className="hamburger-closebtn" onClick={onClose}></div>
         <div className="hamburger-menu">
            <nav className="hamburger-nav">
               <ul className="hamburger-ul">
                  {HamburgerLinkType.map((link) => {

                     const range = linkRanges[link.id];
                     if (!range) return null; // Add this check

                     const filteredSubLinks = HamburgerSubLinkType.filter((subLink) => subLink.id >= range.start && subLink.id <= range.end);
                     
                     return (
                        <li key={link.id} className="hamburger-li">
                           <a className={`hamburger-link ${activeLink === link.id ? "active" : ""}`} href="#" onClick={() => handleLinkClick(link.id)}>
                              {link.title}
                           </a>
                           <ul className={`hamburger-submenu ${activeLink === link.id ? "active" : ""}`}>
                              {filteredSubLinks.map((subLink) => {
                                 
                                 const rangeSub = subLinkRanges[subLink.id];
                                 if (!rangeSub) return null; // Add this check

                                 const filteredSubLinks2 = HamburgerSubLink2Type.filter((subLink2) => subLink2.id >= rangeSub.start && subLink2.id <= rangeSub.end);
                                 
                                 return (
                                    <li key={subLink.id} className="hamburger-submenu-li">
                                       <a className={`hamburger-submenu-link ${activeLink2 === subLink.id ? "active" : ""}`} href="#" onClick={() => handleLinkClick2(subLink.id)}>
                                          {subLink.title}
                                       </a>
                                       <ul className={`hamburger-submenu2 ${activeLink2 === subLink.id ? "active" : ""}`}>
                                          {filteredSubLinks2.map((subLink2) => {
                                             return (
                                                <li key={subLink2.id} className="hamburger-submenu2-li">
                                                   <a className="hamburger-submenu2-link" href="#">
                                                      {subLink2.title}&nbsp;&nbsp;
                                                      {subLink2.showIcon && <i className="fa fa-wrench" aria-hidden="true"></i>}
                                                   </a>
                                                </li>
                                             )
                                          })}
                                       </ul>
                                    </li>
                                 )
                              })}
                           </ul>
                        </li>
                     );
                  })}
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default HamburgerMenu;
