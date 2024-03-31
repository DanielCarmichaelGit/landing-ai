import React from 'react';

const CodeRenderer = ({ code }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: code,
      }}
    />
  );
};

export default CodeRenderer;