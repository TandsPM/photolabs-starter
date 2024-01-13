import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ slug, title, onClick }) => {
  const handleClick = () => {
    onClick(slug);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {title}
    </div>
  );
};

export default TopicListItem;
