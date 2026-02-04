'use client';

interface Props {
  url: string;
  title?: string;
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function VideoPlayer({ url, title = 'Video' }: Props) {
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return (
      <video
        src={url}
        controls
        className="w-full aspect-video rounded-lg"
        title={title}
      />
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
