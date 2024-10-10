import { useEffect, useState } from 'react';
import Box from "./Box";

const RightSection = () => {
  const boxes = [
    { startRow: 13, spanRow: 20, startColumn: 1, spanColumn: 13, content: "Box 12" },
    { startRow: 21, spanRow: 12, startColumn: 14, spanColumn: 36, content: "Box 13" },
    { startRow: 33, spanRow: 35, startColumn: 22, spanColumn: 22, content: "Box 14" },
    { startRow: 51, spanRow: 8, startColumn: 14, spanColumn: 8, content: "Box 15" },
    { startRow: 33, spanRow: 10, startColumn: 44, spanColumn: 30, content: "Box 16" },
    { startRow: 43, spanRow: 18, startColumn: 44, spanColumn: 18, content: "Box 17" },
    { startRow: 43, spanRow: 40, startColumn: 62, spanColumn: 12, content: "Box 18" },
  ];

  const smBoxes = [
    { startRow: 11, spanRow: 20, startColumn: 3, spanColumn: 15, content: "Small Box 16" },
    { startRow: 8, spanRow: 3, startColumn: 7, spanColumn: 6, content: "Box 17" },
    { startRow: 9, spanRow: 2, startColumn: 13, spanColumn: 5, content: "18" },
    { startRow: 9, spanRow: 15, startColumn: 18, spanColumn: 3, content: "Small Box 14" },
    { startRow: 5, spanRow: 4, startColumn: 13, spanColumn: 8, content: "Small Box 15" },
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
    <div className="grid grid-cols-100 grid-rows-100 gap-4">
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

export default RightSection;
