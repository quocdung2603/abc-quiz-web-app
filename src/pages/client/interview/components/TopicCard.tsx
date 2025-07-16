import React from "react";

const TopicCard: React.FC<{
  topic: { id: string; name: string };
  onClick: () => void;
}> = ({ topic, onClick }) => (
  <button
    className="bg-white border border-primary/20 rounded-lg shadow-md p-md flex items-center justify-center text-heading-3 text-primary font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:shadow-neon transition-default cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
    onClick={onClick}
    type="button"
  >
    {topic.name}
  </button>
);

export default TopicCard;
