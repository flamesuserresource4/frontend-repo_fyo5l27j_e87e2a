import { motion } from "framer-motion";

export default function Hero({ onPrimaryCTAClick }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-6 inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium tracking-wide text-black/70">
            London • Architecture & Construction Intelligence
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Reduce construction risk before it becomes cost.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-black/70">
            AICHITECT helps stakeholders make confident, data-backed decisions from
            design to delivery.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={onPrimaryCTAClick}
              className="group inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              Book a Discovery Call
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <a
              href="#solution"
              className="text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
            >
              Explore the approach
            </a>
          </div>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 -z-0 opacity-60 blur-2xl">
        <div className="mx-auto h-64 w-2/3 rounded-full bg-gradient-to-r from-sky-200 to-emerald-200" />
      </div>
    </section>
  );
}
