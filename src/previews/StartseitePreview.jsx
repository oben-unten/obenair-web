import React from "react";
import StartseiteTemplate from '../templates/StartseiteTemplate';

const StartseitePreview = ({ entry, getAsset, widgetFor }) => {
  
  const data = entry.getIn(['data']).toJS();
  if (data?.image) data.image = getAsset(data.image);
  if (data?.body) data.body = widgetFor('body');
  
  return data ? <StartseiteTemplate {...data} /> : <div>Loading ...</div>;
};

export default StartseitePreview;