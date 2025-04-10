export default function ParallaxSectionWithContent(props) {
  const bgImg = props.bgImg;

  return (
    <div
      className="relative bg-center bg-cover full h-60 w-[88%] max-w-[1110px]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id=""
    ></div>
  );
}
