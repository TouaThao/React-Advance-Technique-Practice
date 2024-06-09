import React from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

function VirtualizedList() {
  const Row = ({ index, style }) => <div style={style}>{items[index]}</div>;
  return (
    <List height={400} itemCount={items.length} itemSize={35} width={300}>
      {Row}
    </List>
  );
}

export default VirtualizedList;
