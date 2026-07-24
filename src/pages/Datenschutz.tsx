import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container px-4 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground">The website's privacy policy will be published here.</p>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Datenschutz;
