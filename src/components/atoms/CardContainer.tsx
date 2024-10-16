import { useRef, useState, createContext } from "react";
import { cn } from "../../utils/utils";


const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);


export const CardContainer = ({ children, className, containerClassName }: { children?: React.ReactNode; className?: string; containerClassName?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 150;
      const y = (e.clientY - top - height / 2) / 100;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
  
    const handleMouseEnter = () => {
      setIsMouseEntered(true);
      if (!containerRef.current) return;
    };
  
    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      setIsMouseEntered(false);
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
    return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <div
          className={cn('flex w-full h-full', containerClassName)}
          style={{
            perspective: '1000px',
          }}
        >
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn('w-full relative transition-all duration-200 ease-linear', className)}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {children}
          </div>
        </div>
      </MouseEnterContext.Provider>
    );
  };