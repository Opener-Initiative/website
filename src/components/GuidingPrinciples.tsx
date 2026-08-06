import { NoBreak } from "./NoBreak";

const GuidingPrinciples = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Guiding Principles</h2>
          <p className="text-lg text-muted-foreground">
            Learn about the core principles that guide the development of Opener and shape the project's technical
            vision.
          </p>
        </div>

        <div className="space-y-4 max-w-[820px] mx-auto">
          <div className="relative overflow-hidden flex items-start gap-[26px] py-[26px] px-[30px] bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary"></div>
            <div className="shrink-0 min-w-[42px] text-[34px] font-bold leading-none text-secondary tabular-nums">
              01
            </div>
            <div>
              <h3 className="text-[19px] font-semibold text-card-foreground mb-2">Ready for commercial use</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Opener not only fosters academic research but is also suitable for integration into demanding commercial
                products. For this reason, we chose the <NoBreak>Apache 2.0</NoBreak> license for the project. <NoBreak>Apache 2.0</NoBreak> is a
                business-friendly, OSI-approved permissive software license with no copyleft provisions that restrict
                commercial use. In addition to broad usage rights, <NoBreak>Apache 2.0</NoBreak> includes an express grant of patent rights
                from contributors, providing legal protection and peace of mind for adopters.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden flex items-start gap-[26px] py-[26px] px-[30px] bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary"></div>
            <div className="shrink-0 min-w-[42px] text-[34px] font-bold leading-none text-secondary tabular-nums">
              02
            </div>
            <div>
              <h3 className="text-[19px] font-semibold text-card-foreground mb-2">Application- and vendor-agnostic</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Opener addresses the needs of applications across various domains and use cases, ranging from building
                automation or smart metering to professional audio. Built for Zephyr, the RTOS adopted across the NR+
                integrated hardware ecosystem, Opener is not tied to a specific silicon vendor or instruction set
                architecture. Where sensible, its design remains mindful of portability to other operating systems.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden flex items-start gap-[26px] py-[26px] px-[30px] bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary"></div>
            <div className="shrink-0 min-w-[42px] text-[34px] font-bold leading-none text-secondary tabular-nums">
              03
            </div>
            <div>
              <h3 className="text-[19px] font-semibold text-card-foreground mb-2">
                Interoperable and standards-compliant
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Opener complies with harmonized European norms and targets to pass ETSI-defined conformance tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
