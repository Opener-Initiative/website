import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import openerLogoWhite from "@/assets/logo_primary_white.svg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" aria-hidden="true" />

      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
            <img
              src={openerLogoWhite}
              alt="Opener"
              className="h-44 lg:h-64 w-auto mx-auto"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            An <strong>open reference implementation</strong> of the NR+ protocol stack. From the community, for the community.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 hover:brightness-100">
              <a href="#get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://github.com/Opener-Initiative" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">Open Source</div>
              <div className="text-sm text-primary-foreground/70 mt-1">licensed under Apache 2.0</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">5G Technology</div>
              <div className="text-sm text-primary-foreground/70 mt-1">for mMTC and URLLC</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">License-exempt</div>
              <div className="text-sm text-primary-foreground/70 mt-1">spectrum in the 1.9 GHz band</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-[-1px] left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
