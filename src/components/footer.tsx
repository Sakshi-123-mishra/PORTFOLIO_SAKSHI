import { Link } from "react-router-dom";

import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5"
      )}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <p className="text-white text-md font-bold flex text-center sm:text-left">
          &copy; Sakshi Mishra 2025. All rights reserved.
        </p>

        {/* Social Links */}
        <ul className="list-none flex flex-row gap-6">
          {SOCIALS.map((social) => (
            <li
              key={social.name}
              className="group cursor-pointer"
              title={social.name}
            >
              <Link to={social.link} target="_blank" rel="noreferrer noopener">
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="h-7 w-7 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-200" 
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
