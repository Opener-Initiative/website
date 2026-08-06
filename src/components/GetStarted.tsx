import { Button } from "@/components/ui/button";
import { Github, Lightbulb, ScrollText } from "lucide-react";
import { NoBreak } from "./NoBreak";

const resources = [
  {
    icon: ScrollText,
    title: "Standards Documents",
    description: (
      <>
        Read the <NoBreak>DECT-2020 NR</NoBreak> specification, the ETSI <NoBreak>TS 103 636</NoBreak> series that defines the protocol Opener implements.
      </>
    ),
    buttons: [
      {
        label: "Browse ETSI Standards",
        href: "https://www.etsi.org/standards-search#keyword=DECT-2020",
        variant: "tech" as const,
      },
    ],
  },
  {
    icon: Github,
    title: "Source Code",
    description: "Clone the Opener repository. Report issues, open pull requests, and try the sample applications.",
    buttons: [
      {
        label: "Sample Applications",
        href: "https://github.com/Opener-Initiative/opener-samples",
        variant: "ghost" as const,
      },
      { label: "View Repository", href: "https://github.com/Opener-Initiative/opener", variant: "tech" as const },
    ],
  },
  {
    icon: Lightbulb,
    title: "Proposals",
    description: "Explore the ideas shaping the stack's direction, and help refine them before they become code.",
    buttons: [
      { label: "Read Proposals", href: "https://opener-initiative.github.io/proposals/", variant: "tech" as const },
    ],
  },
];

const GetStarted = () => {
  return (
    <section id="get-started" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Get Started</h2>
          <p className="text-lg text-muted-foreground">
            Ready to join the open NR+ revolution? Here's how to get started.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{resource.description}</p>
              <div className="flex flex-col gap-2">
                {resource.buttons.map((button, btnIndex) => (
                  <Button key={btnIndex} variant={button.variant} size="sm" asChild>
                    <a href={button.href} target="_blank" rel="noopener noreferrer">
                      {button.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
