import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/projects(.*)",
]);

export default clerkMiddleware(
  async (auth, req) => {
    const isDemoMode = req.nextUrl.searchParams.get("demo") === "true";
    if (isProtectedRoute(req) && !isDemoMode) await auth.protect();
  },
  {
    publicRoutes: [
      "/",
      "/sign-in(.*)",
      "/register",
      "/forgot-password",
      "/reset-password",
      "/demo(.*)",
      "/sample(.*)",
    ],
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    // "/(api|trpc)(.*)",
  ],
};
