import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam" 
        timeAgo="Today at 4:45PM"
        content="NICE Blog1!!!!"
        imgSrc={faker.image.avatar()}
        />  {/* do NOT use the curly-braces! */}
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00PM"
        content="NICE Blog2!!!!"
        imgSrc={faker.image.avatar()}
        />  {/* do NOT use the curly-braces! */}
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 9:45PM"
        content="NICE Blog3!!!!"
        imgSrc={faker.image.avatar()}
        />  {/* do NOT use the curly-braces! */}

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))