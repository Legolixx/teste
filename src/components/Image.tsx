import { JSONData } from "@xata.io/client";
import { ImgRecord } from "@/utils/xata";

interface Props {
  images: JSONData<ImgRecord>[];
}
export default function VideoComp({ images }: Props) {
    return (
      <div>
        {images.map((image) => (
          <video key={image.id} width={500} height={500} controls preload="none" muted autoPlay playsInline loop className=" rounded-lg">
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
