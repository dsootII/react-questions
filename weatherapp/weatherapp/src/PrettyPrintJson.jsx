import React from 'react'

export default function PrettyPrintJSON ({ jsonData }) {
  const prettyJSON = JSON.stringify(jsonData, null, 2);

  return (
    <pre>
      <code>
        {prettyJSON}
      </code>
    </pre>
  );
};