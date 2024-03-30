import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center relative">
      <SignIn />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    </main>
  );
};

export default SignInPage;
