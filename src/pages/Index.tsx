import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import ProtocolStack from "@/components/ProtocolStack";
import OpenSource from "@/components/OpenSource";
import Governance from "@/components/Governance";
import Contribute from "@/components/Contribute";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="technology">
          <Technology />
        </section>
        <OpenSource />
        <ProtocolStack />
        <section id="principles">
          <Governance />
        </section>
        <section id="contribute">
          <Contribute />
        </section>
        <GetStarted />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
