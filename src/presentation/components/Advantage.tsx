import { motion } from 'framer-motion';
import { Advantage } from '../../domain/entities';

interface AdvantageProps {
  advantages: Advantage[];
}

export function AdvantageSection({ advantages }: AdvantageProps) {
  return (
    <section id="advantage" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-firm-accent font-display text-sm tracking-[0.2em] uppercase block mb-4"
          >
            02 / Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-firm-text max-w-3xl"
          >
            The Samrat Juris Advantage
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 lg:p-10 border border-firm-border bg-firm-bg hover:border-firm-accent transition-colors duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-firm-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="text-firm-accent/30 font-display text-6xl font-bold absolute top-6 right-8">
                0{index + 1}
              </span>
              <h3 className="font-display text-xl font-bold text-firm-text mb-6 relative z-10 pr-12">
                {adv.title}
              </h3>
              <p className="text-firm-muted leading-relaxed relative z-10">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
