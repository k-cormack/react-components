import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />  {/* do NOT use the curly-braces! */}
      <CommentDetail author="Alex" />  {/* do NOT use the curly-braces! */}
      <CommentDetail author="Jane" />  {/* do NOT use the curly-braces! */}

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))