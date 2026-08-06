import { useEffect, useRef, useState } from "react";
import { BookOpen, FolderGit2, MessagesSquare, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NoBreak } from "./NoBreak";

const Contribute = () => {
  const contributeListRef = useRef(null);
  const [contributeRevealed, setContributeRevealed] = useState(true);
  useEffect(() => {
    const el = contributeListRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) setContributeRevealed(true);
        else if (!entry.isIntersecting) setContributeRevealed(false);
      },
      { threshold: [0, 0.2] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How to Contribute</h2>
          <p className="text-lg text-muted-foreground">
            The Opener Initiative is a growing community for technical exchange around NR+ and stack development, and we
            aim to keep the barrier to participation low. Whether you're a seasoned wireless engineer or just getting
            started, there's a place for you.
          </p>
        </div>

        <div ref={contributeListRef} className="space-y-6 max-w-3xl mx-auto">
          <div
            className={`flex items-start gap-4 ${contributeRevealed ? "animate-in fade-in-0 slide-in-from-bottom-3 duration-500 fill-mode-both" : "opacity-0"}`}
          >
            <div className="shrink-0 w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
              <FolderGit2 className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Optionally share your implementation of ETSI <NoBreak>TS 103 636</NoBreak> with other members, publicly or privately within
              the organization. Contributors are free to choose the license that best suits their existing work.
            </p>
          </div>
          <div
            className={`flex items-start gap-4 ${contributeRevealed ? "animate-in fade-in-0 slide-in-from-bottom-3 duration-500 fill-mode-both delay-150" : "opacity-0"}`}
          >
            <div className="shrink-0 w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
              <MessagesSquare className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Engage in technical discussions and community activities such as workshops or plugtests, working towards a
              unified reference stack implementation.
            </p>
          </div>
          <div
            className={`flex items-start gap-4 ${contributeRevealed ? "animate-in fade-in-0 slide-in-from-bottom-3 duration-500 fill-mode-both delay-300" : "opacity-0"}`}
          >
            <div className="shrink-0 w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Contribute code, expertise, feedback, or testing support. All forms of participation are welcome.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button variant="tech" size="lg" asChild>
            <a
              href="https://github.com/Opener-Initiative/opener?tab=contributing-ov-file#contributing-to-opener"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen />
              Read the Contribution Guidelines
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
