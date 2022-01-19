import React from "react";
import ContentLoader from "react-content-loader";

const TodoItemLoader = (props) => {
  return (
    <ContentLoader
      speed={1}
      viewBox="0 0 600 72"
      backgroundColor="#384892"
      foregroundColor="#6a7ac3"
      {...props}
    >
      <rect x="-19" y="26" rx="0" ry="0" width="657" height="72" />
    </ContentLoader>
  );
};

export default TodoItemLoader;
