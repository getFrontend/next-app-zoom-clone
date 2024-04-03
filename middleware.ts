import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  "/dashboard",
  "/upcoming",
  "/meeting(.*)",
  "/previous",
  "/recordings",
  "/personal-room",
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
