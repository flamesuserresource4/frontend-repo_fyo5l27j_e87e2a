import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import ResultsCTA from "./components/ResultsCTA";

function App() {
  const handleDiscoveryClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Hero onPrimaryCTAClick={handleDiscoveryClick} />
      <Problem />
      <Solution />
      <ResultsCTA />

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-black/60">AICHITECT</p>
              <p className="mt-1 text-lg font-semibold text-black">Know more, risk less, and simply build.</p>
              <p className="mt-3 text-sm text-black/60">London, United Kingdom</p>
            </div>
            <div className="space-y-2">
              <a href="mailto:contact@aichitect.com" className="block text-sm text-black/80 hover:text-black">
                contact@aichitect.com
              </a>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="#"
                  className="text-black/70 underline-offset-4 hover:text-black hover:underline"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-black/70 underline-offset-4 hover:text-black hover:underline"
                  aria-label="X"
                >
                  X
                </a>
              </div>
              <p className="pt-2 text-xs text-black/50">© {new Date().getFullYear()} AICHITECT. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
