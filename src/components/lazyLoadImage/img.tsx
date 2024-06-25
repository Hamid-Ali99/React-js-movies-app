import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }: { src: any; className?: string }) => {
  return (
    <div>
      <LazyLoadImage
        alt=""
        className={className || ""}
        src={src}
        effect="blur"
      />
    </div>
  );
};

export default Img;
