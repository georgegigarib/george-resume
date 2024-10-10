import { useEffect, useState } from 'react';
import Box from "./Box";
import { useTranslation } from 'react-i18next';


const CenterSection = () => {
const { t } = useTranslation()


    const boxes = [
        { startRow: 28, spanRow: 28, startColumn: 12, spanColumn: 22, content: t('hello') },
        { startRow: 56, spanRow: 9, startColumn: 25, spanColumn: 9, content: "Box 8" },
        { startRow: 51, spanRow: 16, startColumn: 34, spanColumn: 22, content: "Box 9" },
        { startRow: 33, spanRow: 18, startColumn: 34, spanColumn: 57, content: "Box 10" },
        { startRow: 18, spanRow: 15, startColumn: 48, spanColumn: 16, content: "Box 11" },
    ];

    const smBoxes = [
        { startRow: 14, spanRow: 18, startColumn: 1, spanColumn: 6, content: "Small Box 7" },
        { startRow: 10, spanRow: 7, startColumn: 7, spanColumn: 13, content: "Small Box 8" },
        { startRow: 17, spanRow: 20, startColumn: 7, spanColumn: 10, content: "Small Box 9" },
        { startRow: 17, spanRow: 3, startColumn: 17, spanColumn: 13, content: "Small Box 10" },
        { startRow: 20, spanRow: 4, startColumn: 17, spanColumn: 6, content: "sBox 11" },
        { startRow: 7, spanRow: 10, startColumn: 20, spanColumn: 15, content: "Small Box 12" },
      ];
    
      const [activeBoxes, setActiveBoxes] = useState(boxes);
      const updateBoxes = () => {
        const width = window.innerWidth;
        if (width <= 768) {
          setActiveBoxes(smBoxes);
        } else {
          setActiveBoxes(boxes);
        }
      };
    
      useEffect(() => {
        updateBoxes();
    
        window.addEventListener('resize', updateBoxes);
        return () => {
          window.removeEventListener('resize', updateBoxes);
        };
      }, []);
    
      return (
        <div className="grid  grid-cols-2 grid-rows-20 lg:grid-cols-100 lg:grid-rows-100 gap-4">
          {activeBoxes.map((box, index) => (
            <Box 
              key={index}
              startRow={box.startRow}
              startColumn={box.startColumn}
              spanRow={box.spanRow}
              spanColumn={box.spanColumn}
              content={box.content} 
            />
          ))}
        </div>
      );
    }

export default CenterSection;
