import { Image } from "antd";

export function HomeCarousel({ image }: { image: string }) {
  return (
    <div className="p-2">
      <Image
        height={230}
        width={230}
        src={image}
        alt=""
        className="rounded-sm object-cover"
      />
    </div>
  );
}
