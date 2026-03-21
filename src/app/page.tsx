import Hero from "@/components/Hero";
import OnboardingOverlay from "@/components/OnboardingOverlay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-(--val-navy)">
      <OnboardingOverlay />
      <Hero />
      {/* Additional sections will go here */}
    </main>
  );
}
