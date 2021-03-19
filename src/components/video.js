import React, { useState, useEffect } from 'react';

async function getId(country) {
  console.log({ country });
  const apiKey = 'AIzaSyD5CgXghZNM-FAkGeub8IFvm0RqkLX9MRQ';
  const link = `https://www.googleapis.com/youtube/v3/search?maxResults=1&key=${apiKey}&type=video&q=${country}`;
  const url = link;
  const res = await fetch(url);
  const data = await res.json();
  const id = data.items[0].id.videoId;
  return id;
}

export const CountryVideo = ({ country }) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getId(country).then((id) => setUrl('https://www.youtube.com/embed/' + id));
  }, [country]);

  if (url === null) {
    return (
      <div
        style={{ width: '800px', height: '450px', backgroundColor: 'gray' }}
      ></div>
    );
  }

  return (
    <iframe
      title="Country video"
      width="800"
      height="450"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen="allowfullscreen"
    ></iframe>
  );
};
