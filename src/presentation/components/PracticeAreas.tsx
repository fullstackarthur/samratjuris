import { motion } from 'framer-motion';
import { PracticeArea } from '../../domain/entities';

interface PracticeAreasProps {
  areas: PracticeArea[];
}

export function PracticeAreas({ areas }: PracticeAreasProps) {
  return (
    <section id="practice" className="relative py-32 lg:py-40 bg-firm-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-firm-accent font-display text-sm tracking-[0.2em] uppercase block mb-4"
          >
            03 / Practice Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-firm-text max-w-3xl"
          >
            Specialized Verticals
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-firm-border">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-firm-surface p-10 lg:p-14 group hover:bg-firm-bg transition-colors duration-500"
            >
              <h3 className="font-display text-2xl font-bold text-firm-text mb-8 group-hover:text-firm-accent transition-colors">
                {area.category}
              </h3>
              <ul className="space-y-4">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-firm-muted">
                    <span className="w-1.5 h-1.5 bg-firm-accent mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
