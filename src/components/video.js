import React, { useState, useEffect } from 'react';

async function getId(country) {
  console.log({ country });
  const apiKey = 'AIzaSyCF6cWGx7QTnDHBaRAuZjHqEm4i-Pr3OOM';
  const link = `https://www.googleapis.com/youtube/v3/search?maxResults=1&key=${apiKey}&type=video&q=${country}`;
  const url = link;
  const res = await fetch(url);
  const data = await res.json();
  const id = data.items[0].id.videoId;
  return id;
}

export const CountryVideo = ({ country }) => {
	const [ url, setUrl ] = useState(null);

	useEffect(
		() => {
			getId(country).then((id) => setUrl('https://www.youtube.com/embed/' + id));
		},
		[ country ]
	);

	if (url === null) {
		return <div style={{ width: '100%', height: '450px', backgroundColor: 'gray' }} />;
	}

	return (
    <div className="iframe-wrapper">
      <iframe
        title="Country video"
        width="100%"
        height="550px"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
      />
    </div>
		
	);
};
