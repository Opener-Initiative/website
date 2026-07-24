import { useState } from "react";
import { cn } from "@/lib/utils";

const layers = [
  {
    id: "application",
    name: "Application Profiles",
    shortName: "APP",
    standard: "ETSI TS 103 874 series",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-600 dark:text-amber-400",
    glow: "via-amber-500",
    ringColor: "bg-amber-500",
    description: "Recommend how the technology is configured for specific application domains.",
    details: [
      "Use-case-specific configuration profiles",
      "Interoperability across manufacturers",
      "Smart metering and building automation profile",
      "IPv6 application profile",
    ],
  },
  {
    id: "convergence",
    name: "Convergence Layer",
    shortName: "CVG",
    standard: "ETSI TS 103 636-5",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-600 dark:text-purple-400",
    glow: "via-purple-500",
    ringColor: "bg-purple-500",
    description: "Provides an end-to-end path between applications and adapts their data to the radio interface.",
    details: [
      "Identification and multiplexing of higher-layer data",
      "Support for IPv6 and non-IP traffic",
      "Flow control and in-order delivery",
      "End-to-end ciphering and integrity protection",
    ],
  },
  {
    id: "dlc",
    name: "Data Link Control",
    shortName: "DLC",
    standard: "ETSI TS 103 636-5",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    textColor: "text-teal-600 dark:text-teal-400",
    glow: "via-teal-500",
    ringColor: "bg-teal-500",
    description: "Routes packets across the network and handles delivery on each link.",
    details: [
      "Uplink, downlink, and device-to-device packet routing",
      "Segmentation and reassembly of higher-layer data",
      "Automatic retransmission of lost packets",
      "Traffic prioritization by QoS",
    ],
  },
  {
    id: "mac",
    name: "Medium Access Control",
    shortName: "MAC",
    standard: "ETSI TS 103 636-4",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    textColor: "text-red-600 dark:text-red-400",
    glow: "via-red-500",
    ringColor: "bg-red-500",
    description: "Coordinates channel access and manages device connections locally.",
    details: [
      "Radio resource allocation and channel access",
      "Beacon signalling, device association, and mobility",
      "Logical-channel multiplexing and mapping",
      "Link-level ciphering and integrity protection",
    ],
  },
  {
    id: "phy",
    name: "Physical Layer",
    shortName: "PHY",
    standard: "ETSI TS 103 636-3",
    color: "from-slate-600 to-slate-700",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/30",
    textColor: "text-slate-600 dark:text-slate-400",
    glow: "via-slate-600",
    ringColor: "bg-slate-600",
    description: "Handles radio transmission using OFDM with cyclic prefix and HARQ.",
    details: [
      "CP-OFDM waveform with TDMA/FDMA and TDD",
      "Flexible bandwidth, from 1.7 to 221 MHz",
      "Turbo coding with fast HARQ retransmission",
      "Up to 8×8 MIMO with beamforming",
    ],
  },
];

const ProtocolStack = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Protocol Stack Architecture</h2>
          <p className="text-lg text-muted-foreground">
            Opener implements the MAC and upper layers of the NR+ protocol stack. Hover over each layer to learn more.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Stack Visualization */}
            <div className="relative">
              {/* Connection lines animation */}
              <div className="relative">
                <div className="absolute -left-8 inset-y-0 w-1 hidden lg:block">
                  <div className="absolute inset-0 rounded-full bg-border" />
                  <div className="absolute inset-0 flex flex-col gap-3">
                    {layers.map((layer) => (
                      <div key={layer.id} className="relative flex-1">
                        <div
                          className={cn(
                            "absolute inset-x-0 -inset-y-8 rounded-full",
                            "bg-gradient-to-b from-transparent to-transparent",
                            "transition-opacity duration-500 motion-reduce:transition-none",
                            layer.glow,
                            activeLayer === layer.id ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {layers.map((layer, index) => (
                    <div
                      key={layer.id}
                      className={cn(
                        "group relative cursor-pointer transition-all duration-300",
                        activeLayer === layer.id ? "scale-105 z-10" : "hover:scale-102",
                      )}
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      onMouseLeave={() => setActiveLayer(null)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* Layer card */}
                      <div
                        className={cn(
                          "relative rounded-xl border-2 p-5 transition-all duration-300",
                          layer.id === "application" ? "border-amber-600/75 border-dashed" : layer.borderColor,
                          layer.bgColor,
                          activeLayer === layer.id
                            ? "shadow-lg border-opacity-100"
                            : "border-opacity-50 hover:border-opacity-75",
                        )}
                      >
                        {/* Gradient accent bar */}
                        <div
                          className={cn(
                            "absolute -left-[2px] -top-[2px] -bottom-[2px] w-3 rounded-l-xl rounded-r-none bg-gradient-to-b",
                            layer.color,
                          )}
                        />

                        <div className="flex items-center justify-between pl-4">
                          <div className="flex items-center gap-4">
                            {/* Layer badge */}
                            <div
                              className={cn(
                                "w-14 h-14 rounded-lg bg-gradient-to-br flex items-center justify-center font-mono font-bold text-sm text-primary-foreground shadow-sm",
                                layer.color,
                              )}
                            >
                              {layer.shortName}
                            </div>

                            <div>
                              <h3 className="font-semibold text-card-foreground">{layer.name}</h3>
                              <p className={cn("text-sm", layer.textColor)}>{layer.standard}</p>
                            </div>
                          </div>

                          {/* Animated indicator */}
                          <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              {activeLayer === layer.id && (
                                <span
                                  className={cn(
                                    "motion-safe:animate-ping absolute -inset-0.5 rounded-full opacity-50",
                                    layer.ringColor,
                                  )}
                                />
                              )}
                              <span
                                className={cn(
                                  "relative inline-flex h-2 w-2 rounded-full transition-all duration-300",
                                  activeLayer === layer.id
                                    ? "bg-gradient-to-r " + layer.color
                                    : "bg-muted-foreground/30",
                                )}
                              />
                            </span>
                            <svg
                              className={cn(
                                "w-5 h-5 transition-transform duration-300",
                                layer.textColor,
                                activeLayer === layer.id ? "translate-x-1" : "",
                              )}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        {/* Data flow animation */}
                        {activeLayer === layer.id && (
                          <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute -inset-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent skew-x-12" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Base indicator */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-secondary motion-safe:animate-pulse" />
                  Radio Interface (ETSI TS 103 636-2)
                </div>
              </div>
            </div>

            {/* Details Panel */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {activeLayer ? layers.find((l) => l.id === activeLayer)?.name : "Explore the Stack"}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeLayer
                      ? layers.find((l) => l.id === activeLayer)?.description
                      : "Hover over any layer to see detailed information about its functionality and key features."}
                  </p>
                </div>

                {activeLayer && (
                  <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                    <h4 className="text-sm font-medium text-foreground">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {layers
                        .find((l) => l.id === activeLayer)
                        ?.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 text-sm"
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            <div
                              className={cn(
                                "w-2 h-2 rounded-full shrink-0 bg-gradient-to-r",
                                layers.find((l) => l.id === activeLayer)?.color,
                              )}
                            />
                            <span className="text-foreground">{detail}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {!activeLayer && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                      <div className="text-2xl font-bold text-secondary mb-1">4</div>
                      <div className="text-sm text-muted-foreground">Protocol Layers</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-500/10 border border-slate-500/30">
                      <div className="text-2xl font-bold text-slate-600 dark:text-slate-400 mb-1">OFDM</div>
                      <div className="text-sm text-muted-foreground">Modulation</div>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">IPv6</div>
                      <div className="text-sm text-muted-foreground">Native Support</div>
                    </div>
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">Mesh</div>
                      <div className="text-sm text-muted-foreground">Topology</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolStack;
