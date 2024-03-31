import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={75}
        height={75}
      />
    </div>
  );
};

export default Loader;
