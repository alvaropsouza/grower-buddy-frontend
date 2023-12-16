import { Image } from "antd";

export function HomeCarousel({ image }: { image: string }) {
  return (
    <div className="mx-3 p-2">
      <Image height={250} width={250} src={image} alt="" />
    </div>
  );
}
