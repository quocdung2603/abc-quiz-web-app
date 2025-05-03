import React, { useState, useRef } from "react";

interface DraggableFloatDivProps {
  onClick: () => void;
}

const DraggableFloatDiv: React.FC<DraggableFloatDivProps> = ({ onClick }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && divRef.current) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={divRef}
      className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-lg cursor-move transition-all duration-300 hover:shadow-xl"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-2">Bảng xếp hạng</h3>
      <p>Nhấn để xem chi tiết</p>
    </div>
  );
};

export default DraggableFloatDiv;
