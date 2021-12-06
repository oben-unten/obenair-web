import React from "react";
import VereinTemplate from '../templates/VereinTemplate';

const VereinPreview = ({ entry, widgetFor }) => {
  
  const data = entry.getIn(['data']).toJS();
  if (data?.body) data.body = widgetFor('body');
  
  return data ? <VereinTemplate {...data} /> : <div>Loading ...</div>;
};

export default VereinPreview;