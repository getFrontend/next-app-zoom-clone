import Image from "next/image";

interface LoaderProps {
  isSmall?: boolean;
}

const Loader = ({ isSmall }: LoaderProps) => {
  return (
    <div className={`flex-center w-full ${isSmall ? "h-full" : "h-screen"}`}>
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
