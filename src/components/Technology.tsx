import { Check } from "lucide-react";

const mMTCFeatures = [
  "Up to 1 million devices/km²",
  "Years-long battery life for low-power sensors",
  "Non-IP and IPv6 traffic",
  "Mesh networking",
  "Random-access operation",
];

const URLLCFeatures = [
  "Sub-millisecond air-interface latency",
  "99.999% reliability target",
  "Scheduled access for bounded latency",
];

const Technology = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What is NR+?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NR+, formally DECT-2020 NR, is a radio interface technology specified by ETSI in the TS 103 636 series of
            standards. Since late 2021, the ITU-R recognizes it as part of the IMT-2020 (5G) family for fulfilling the
            requirements for the mMTC and URLLC usage scenarios. The technology serves a wide variety of use cases,
            powering large-scale, high-density network deployments as well as cable-replacement solutions for
            mission-critical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* mMTC Card */}
          <div className="group bg-card rounded-xl border border-border p-8 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <span className="text-sm font-bold text-secondary">mMTC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">Massive IoT</h3>
                <p className="text-sm text-muted-foreground">Machine-Type Communications</p>
              </div>
            </div>
            <ul className="space-y-4">
              {mMTCFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* URLLC Card */}
          <div className="group bg-card rounded-xl border border-border p-8 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <span className="text-sm font-bold text-secondary">URLLC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">Ultra-Reliable</h3>
                <p className="text-sm text-muted-foreground">Low-Latency Communications</p>
              </div>
            </div>
            <ul className="space-y-4">
              {URLLCFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
