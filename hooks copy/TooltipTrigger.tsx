import { CSSProperties, ReactNode, useRef } from "react";
import { useTooltip } from "./TooltipContext";

const TooltipTrigger = ({ children, info, className = '' }: { children: ReactNode, info: string, className?: string }) => {
    const { showTooltip, hideTooltip } = useTooltip();
    const tooltipRef = useRef<HTMLDivElement>(null);
  
    const handleMouseEnter = () => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        const screenWidth = window.innerWidth;

        const style: CSSProperties = {
          left: 0,
          top: 0,
          transform: ''
        };


        if (rect.x - 100 < 0) {
          style.left = Math.ceil(rect.x + rect.width + 5);
          style.top = rect.top + rect.height/2 + +window.scrollY;
          style.transform = 'translateY(-50%)';
        } else if (Math.ceil(rect.x + rect.width) > screenWidth - 100) {
          style.left = Math.ceil(rect.x  - 10)  ;
          style.top = rect.top + rect.height/2 + +window.scrollY;
          style.transform = 'translate(-100%, -50%)';
        } else if(Math.ceil(rect.top) < 50){
          style.left = Math.ceil(rect.x + rect.width/2  );
          style.top = rect.bottom + 5 +window.scrollY;
          style.transform = 'translateX(-50%)';
        } else {
          style.left = Math.ceil(rect.x + rect.width/2  );
          style.top = rect.bottom   +window.scrollY;
          style.transform = 'translate(-50%, -210%)';
        }
        showTooltip(info, className, style);
      }
    };
  
    const handleMouseLeave = () => {
      hideTooltip();
    };
 
    return (
      <div
        className=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={tooltipRef}
      >
        {children}
      </div>
    );
  };
  
  export default TooltipTrigger;