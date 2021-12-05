import React from "react";
import IndexPageTemplate from '../templates/IndexPageTemplate';

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  
  const data = entry.getIn(['data']).toJS();
  if (data?.image) data.image = getAsset(data.image);
  if (data?.body) data.body = widgetFor('body');
  
  return data ? <IndexPageTemplate {...data} /> : <div>Loading ...</div>;
};

export default IndexPagePreview;