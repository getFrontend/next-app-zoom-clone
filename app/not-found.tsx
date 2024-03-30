import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-green-1 font-bold text-7xl max-md:text-4xl">
        Not found – 404!
      </h1>
      <div className="mt-16">
        <Link href="/" className="text-white">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
