import { motion } from "framer-motion";
import { Shield, CheckCircle, LineChart } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Risk Intelligence",
    desc: "Identify and resolve design and compliance risks early.",
  },
  {
    icon: CheckCircle,
    title: "Design Assurance",
    desc: "Validate feasibility and performance from concept stage.",
  },
  {
    icon: LineChart,
    title: "Delivery Clarity",
    desc: "Unify every stakeholder around one verified source of truth.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Our Solution: Predict, Plan, and Protect.
          </h3>
          <p className="mt-5 text-black/70">
            Replace uncertainty with evidence. We combine technical rigor with clear
            communication so decisions move forward with confidence.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * idx, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-black/10 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                <item.icon size={22} />
              </div>
              <h4 className="mt-5 text-lg font-semibold text-black">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-black/70">{item.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-100 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
