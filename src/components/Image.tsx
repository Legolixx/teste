import { JSONData } from "@xata.io/client";
import { ImgRecord } from "@/utils/xata";

interface Props {
  images: JSONData<ImgRecord>[];
}

export default function VideoComp({ images }: Props) {
  const playVideo = (event) => {
    event.target.play();
  };

  return (
    <div>
      {images.map((image) => (
        <video
          key={image.id}
          width={1000}
          height={1000}
          controls
          preload="none"
          autoPlay
          muted
          loop
          playsInline // Add playsInline attribute
          onClick={playVideo}
        >
          <source src={image.img?.url ?? ''} type="video/mp4" />
          <track
            src={image.img?.url ?? ''}
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}
