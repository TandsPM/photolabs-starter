import React from "react";
import TopicListItem from './TopicListItem';

import "../styles/TopicList.scss";

const TopicList = ({ topics, onClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem key={topic.id} {...topic} onClick={onClick} />
      ))}
    </div>
  );
};

export default TopicList;
