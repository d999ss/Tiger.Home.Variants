import { MoonIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function HeroLuna({
  title = "Transform your ideas into reality with Luna",
  description = "Experience the perfect blend of elegance and functionality. Luna brings your vision to life with stunning design and powerful features.",
  mockup = (
    <Screenshot
      srcLight="/dashboard-light.png"
      srcDark="/dashboard-dark.png"
      alt="Luna app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear border-border/30">
      <MoonIcon className="mr-2 size-3 text-brand" />
      <span className="text-muted-foreground">Powered by moonlight</span>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Started",
      variant: "default",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom relative overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      {/* Moonlight gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="/10 /10 to-transparent absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-radial-to-r blur-3xl" />
        <div className="/5 /5 to-transparent absolute top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-radial-to-r blur-3xl" />
        <div className="/5 /5 to-transparent absolute top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-radial-to-r blur-3xl" />
      </div>

      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="text-display from-foreground /80 to-foreground dark:/60 animate-appear relative z-10 inline-block bg-linear-to-r bg-clip-text text-balance text-transparent drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
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
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

