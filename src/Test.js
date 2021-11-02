import { Viewer } from '@toast-ui/react-editor';
import React, { createRef } from 'react';

const Test = ({ content }) => {
  const viewerRef = createRef();
  return (
    <div>
      <Viewer ref={viewerRef} initialValue={content} />
    </div>
  );
};

export default Test;
