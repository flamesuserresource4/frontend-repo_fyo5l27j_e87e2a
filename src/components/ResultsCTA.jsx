import { motion } from "framer-motion";

function StatCard({ label, value, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
    >
      <div className="text-3xl font-semibold tracking-tight text-black">{value}</div>
      <div className="mt-2 text-sm font-medium text-black/80">{label}</div>
      <div className="mt-1 text-sm text-black/60">{detail}</div>
    </motion.div>
  );
}

export default function ResultsCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold tracking-tight text-black sm:text-3xl"
          >
            Proven results.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-black/70"
          >
            We help clients gain clarity, reduce rework, and protect budgets across
            complex programmes and individual builds.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Public Healthcare" value="77% saved" detail="Risk-led redesign for NHS scheme." />
          <StatCard label="Residential Delivery" value="£300k saved" detail="Detected conflicts before build." />
          <StatCard label="Programme Clarity" value="-43% delays" detail="Coordinated consultants around one truth." />
        </div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-r from-sky-50 to-emerald-50 p-8 sm:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-xl font-semibold text-black">Let’s de-risk your next project.</h4>
              <p className="mt-2 text-black/70">
                Schedule a consultation to map risk, align teams, and prioritise outcomes.
              </p>
            </div>
            <a
              href="mailto:contact@aichitect.com?subject=Discovery%20Call%20Request"
              className="group inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Schedule a Consultation
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
