import React from 'react'
import Box from "./Box";

const LeftSection = () => {
    const boxes = [
        { startRow: 40, spanRow: 48, startColumn: 1, spanColumn: 28, content: "Box 1" },
        { startRow: 27, spanRow: 13, startColumn: 20, spanColumn: 25, content: "Box 2" },
        { startRow: 40, spanRow: 18, startColumn: 29, spanColumn: 16, content: "Box 3" },
        { startRow: 45, spanRow: 17, startColumn: 45, spanColumn: 13, content: "Box 4" },
        { startRow: 21, spanRow: 24, startColumn: 45, spanColumn: 36, content: "Box 5" },
        { startRow: 10, spanRow: 11, startColumn: 55, spanColumn: 20, content: "Box 6" },
    ];    

    return (
        <div className="grid grid-cols-100 grid-rows-100 gap-4">
            {boxes.map((box, index) => (
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

export default LeftSection