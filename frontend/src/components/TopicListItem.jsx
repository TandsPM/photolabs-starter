import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topic, title, handleTopic }) => {
  const handleClick = (e) => {
    handleTopic(topic);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {title}
    </div>
  );
};

export default TopicListItem;