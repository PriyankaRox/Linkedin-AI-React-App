import React from "react";

const AIIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="absolute right-2 top-2 cursor-pointer" onClick={onClick}>
      <img src="path-to-ai-icon.svg" alt="AI" className="w-6 h-6" />
    </div>
  );
};

export default AIIcon;
