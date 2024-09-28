import React from 'react';
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

    return (
    <div className="grid grid-cols-100 grid-rows-100 gap-4 md:grid-cols-50 sm:grid-cols-20 w-full">
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

export default CenterSection;
