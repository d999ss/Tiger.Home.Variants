import { MoonStarIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTALuna({
  title = "Ready to get started with Luna?",
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Started",
      variant: "default",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      {/* Luna-themed background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="/20 /20 to-transparent absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-to-r blur-3xl opacity-60 transition-all duration-700 group-hover:opacity-100" />
        <div className="/10 to-transparent absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-radial-to-r blur-3xl" />
        <div className="/10 to-transparent absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-radial-to-r blur-3xl" />
      </div>

      {/* Floating moon icon */}
      <div className="absolute top-8 right-8 animate-pulse opacity-20">
        <MoonStarIcon className="size-24 text-brand" />
      </div>

      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="from-foreground /70 to-foreground dark:/50 max-w-[640px] bg-linear-to-r bg-clip-text text-3xl leading-tight font-semibold text-transparent sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex justify-center gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
                className={cn(
                  button.variant === "default" &&
                    "bg-brand hover:bg-brand dark:bg-brand dark:hover:bg-brand",
                )}
              >
                <a href={button.href}>
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}

