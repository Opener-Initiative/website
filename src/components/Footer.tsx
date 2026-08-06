import { Github, Linkedin } from "lucide-react";
import bmftrLogo from "@/assets/BMFTR_en_DTP_CMYK_gef_durch.svg?url";
import openerLogoWhite from "@/assets/logo_primary_white.svg?url";
import { NoBreak } from "./NoBreak";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img src={openerLogoWhite} alt="Opener" className="h-16 w-auto -ml-4" />
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              An open reference implementation of the NR+ protocol stack. From the community, for the community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Opener-Initiative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/opener-initiative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col items-end text-right">
            <a
              href="https://www.bmftr.bund.de/EN/Home/home_node.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="German Federal Ministry of Research, Technology and Space (BMFTR)"
            >
              <img
                src={bmftrLogo}
                alt="With funding from the German Federal Ministry of Research, Technology and Space (BMFTR)"
                className="w-[180px] h-auto"
              />
            </a>
            <p className="mt-4 max-w-md text-sm text-background/50">
              The Opener Initiative is supported by the <NoBreak>OpenDECT-X</NoBreak> project, funded by the German Federal Ministry of
              Research, Technology and Space (BMFTR) under grant no. 01MK26002A.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
          © 2026 Opener Initiative{" · "}
          <a href="/impressum/" className="text-background underline">
            Impressum
          </a>
          {" · "}
          <a href="/privacy-policy/" className="text-background underline">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
