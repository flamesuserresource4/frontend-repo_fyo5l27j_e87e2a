import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Unknown risks cause known pain.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/70 sm:text-lg">
            Projects fail because of uncertainty — incomplete data, coordination gaps, and
            reactive decisions. We expose hidden risks before they become expensive problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
