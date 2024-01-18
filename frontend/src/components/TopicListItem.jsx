import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topicId, title, handleTopic }) => {
  const handleClick = () => {
    console.log(topicId);
    // handleTopic(topicId);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {title}
    </div>
  );
};

export default TopicListItem;