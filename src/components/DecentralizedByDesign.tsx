import { RadioTower, Share2 } from "lucide-react";

const DecentralizedByDesign = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">Decentralized by Design</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike 3GPP cellular communication networks, NR+ does not rely on centralized infrastructure and uses
                context-based rather than fixed device roles. In addition to the flexibility of nomadic ad-hoc
                deployments, users benefit from low costs and reduced operational complexity, as networks can be
                deployed and maintained independently of a mobile network operator.
              </p>
              <div className="border-l-2 border-secondary/50 pl-5">
                <p className="text-base text-muted-foreground italic">
                  "DECT-2020 NR as a technology foundation is targeted for local area wireless applications, which can
                  be deployed anywhere by anyone at any time. The technology supports autonomous and automatic operation
                  with minimal maintenance effort."
                </p>
                <p className="text-base font-medium text-foreground mt-3">— ETSI TS 103 636-1</p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-card rounded-xl border border-border p-6 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="float-left mr-[14px] w-[50px] h-[50px] rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <RadioTower className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Wide Spectrum Access</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Beyond IMT and ISM bands, NR+ has access to license-exempt spectrum in the 1880–1930 MHz range, parts
                  of which are assigned exclusively to DECT technologies in many markets. EU Implementing Decision
                  2025/2425 harmonizes shared use of the 3.8–4.2 GHz band, opening it to future NR+ deployments subject
                  to national assignments.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group">
                <div className="float-left mr-[14px] w-[50px] h-[50px] rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Share2 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Flexible Network Topologies</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  NR+ supports point-to-point links, star networks, and mesh topologies in the form of clustered trees,
                  covering a wide range of use cases, from wireless professional audio to large-scale IoT sensor
                  deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecentralizedByDesign;
