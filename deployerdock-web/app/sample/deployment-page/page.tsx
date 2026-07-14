import { redirect } from "next/navigation";

// Redirect to the actual Vite build served from Next.js public/
export default function SampleDeploymentPage() {
  redirect("/sample-deployment/");
}
