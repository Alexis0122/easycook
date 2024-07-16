import React from "react";

const ExtractVideo = ({item}) => {

  const videoUrl = item.strYoutube;
  const videoID = extractYouTubeVideoID(videoUrl);

  return (
    <article className="link">
      {videoID ? (
        <iframe
          width="800"
          height="500"
          src={`https://www.youtube.com/embed/${videoID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`YouTube video player - Video ID: ${videoID}`}
        />
      ) : (
        <p>URL invalid</p>
      )}
    </article>
  )
}

function extractYouTubeVideoID(url){
  const urlID = new URL(url);
  return urlID.searchParams.get('v');
}

export default ExtractVideo;