"use client";
import "lite-youtube-embed";

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => {
  return (
    <lite-youtube
      videoid={id}
      playlabel={title}
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
      }}
    >
      <a
        href={`https://youtube.com/watch?v=${id}`}
        className="lty-playbtn"
        title={title}
      >
        <span className="lyt-visually-hidden">Reproducir video: {title}</span>
      </a>
    </lite-youtube>
  );
};

export default YouTubeEmbed;
