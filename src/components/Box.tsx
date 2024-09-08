import React from 'react';
import Card from "../components/card";

interface BoxProps {
  startColumn?: number;
  startRow?: number;
  spanColumn?: number;
  spanRow?: number;
  content?: string;
}

const Box = ({
  startColumn = 1,
  startRow = 1,
  spanColumn = 2,
  spanRow = 2,
  content = 'Default Content',
}: BoxProps) => {
  const gridArea = `${startRow} / ${startColumn} / span ${spanRow} / span ${spanColumn}`;

  return (
    <div className={`rounded-3xl`} style={{ gridArea }}>
      <Card content={content}/>
    </div>
  );
};

export default Box;
