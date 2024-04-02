import React, { useEffect, useRef } from 'react';

const GeneratedCodeContainerHTML = ({ htmlCode }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
          ${htmlCode}
    `);
    iframeDoc.close();
  }, [htmlCode]);

  return (
    <iframe
      ref={iframeRef}
      title="Generated Code Container"
      style={{ width: '100%', height: '100%', border: 'none' }}
    />
  );
};

export default GeneratedCodeContainerHTML;