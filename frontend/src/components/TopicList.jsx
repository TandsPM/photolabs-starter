import React from "react";
import TopicListItem from './TopicListItem';

import "../styles/TopicList.scss";

const TopicList = ({ topics, handleTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem key={topic.id} topicId={topic.id} title={topic.title} handleTopic={handleTopic} />
      ))}
    </div>
  );
};

export default TopicList;