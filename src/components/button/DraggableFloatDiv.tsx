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
      className="absolute bg-gradient-to-br from-blue-500 via-purple-500 to-yellow-400 text-white p-6 rounded-2xl shadow-2xl cursor-move transition-all duration-300 hover:shadow-3xl hover:scale-105 border-2 border-white/60 select-none min-w-[220px] min-h-[100px] flex flex-col items-center justify-center"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={onClick}
    >
      <div className="w-10 h-1 rounded-full bg-white/60 mb-3" />
      <h3 className="text-xl font-extrabold mb-1 drop-shadow">Bảng xếp hạng</h3>
      <p className="text-base font-medium text-white/90">
        Nhấn để xem chi tiết
      </p>
    </div>
  );
};

export default DraggableFloatDiv;
