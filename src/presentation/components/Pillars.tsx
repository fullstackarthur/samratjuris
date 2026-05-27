import { motion } from 'framer-motion';
import { Scale, Target, Shield } from 'lucide-react';
import { Pillar } from '../../domain/entities';

interface PillarsProps {
  pillars: Pillar[];
}

const iconMap: Record<string, React.ReactNode> = {
  Law: <Scale className="w-8 h-8" />,
  Strategy: <Target className="w-8 h-8" />,
  Resolution: <Shield className="w-8 h-8" />,
};

export function Pillars({ pillars }: PillarsProps) {
  return (
    <section className="relative py-24 bg-firm-surface border-y border-firm-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-firm-border">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-firm-surface p-10 lg:p-14 group hover:bg-firm-bg transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-firm-accent/40 font-display text-5xl font-bold group-hover:text-firm-accent/60 transition-colors">
                  0{index + 1}
                </span>
                <div className="text-firm-accent">{iconMap[pillar.title] || <div className="w-8 h-8" />}</div>
              </div>
              <h3 className="font-display text-2xl font-bold text-firm-text mb-4 uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-firm-muted leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
