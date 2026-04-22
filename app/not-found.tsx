import Image from "next/image";
import { TigerButton } from "@/components/ui/tiger-button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 max-w-lg">
        <div className="flex justify-center mb-8">
          <Image
            src="/tiger-circle-logo.png"
            alt="Tiger BioSciences"
            width={80}
            height={80}
            className="opacity-40"
          />
        </div>
        <h1 className="text-h1 text-foreground mb-4">
          404
        </h1>
        <p className="text-lead text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <TigerButton href="/">Back to Home</TigerButton>
      </div>
    </main>
  );
}
