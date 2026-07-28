import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import ProtocolStack from "@/components/ProtocolStack";
import DecentralizedByDesign from "@/components/DecentralizedByDesign";
import GuidingPrinciples from "@/components/GuidingPrinciples";
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
        <DecentralizedByDesign />
        <ProtocolStack />
        <section id="principles">
          <GuidingPrinciples />
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
