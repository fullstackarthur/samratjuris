import { motion } from 'framer-motion';
import { AudienceProfile } from '../../domain/entities';
import { Rocket, Gem, ShieldCheck } from 'lucide-react';

interface AudienceProps {
  audiences: AudienceProfile[];
}

const iconMap: Record<string, React.ReactNode> = {
  'For Startup Founders & Enterprises': <Rocket className="w-6 h-6" />,
  'For High-Net-Worth Individuals': <Gem className="w-6 h-6" />,
  'For Individuals Seeking Justice': <ShieldCheck className="w-6 h-6" />,
};

export function Audience({ audiences }: AudienceProps) {
  return (
    <section id="clients" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-firm-accent font-display text-sm tracking-[0.2em] uppercase block mb-4"
          >
            04 / Our Clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-firm-text max-w-3xl"
          >
            Audience-Specific Expertise
          </motion.h2>
        </div>

        <div className="space-y-px bg-firm-border">
          {audiences.map((aud, index) => (
            <motion.div
              key={aud.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-firm-bg p-10 lg:p-16 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 group hover:bg-firm-surface transition-colors duration-500"
            >
              <div className="flex items-center gap-4 lg:w-1/3 shrink-0">
                <div className="p-3 border border-firm-border text-firm-accent group-hover:bg-firm-accent group-hover:text-firm-bg transition-colors duration-300">
                  {iconMap[aud.title] || <div className="w-6 h-6" />}
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-firm-text">
                  {aud.title}
                </h3>
              </div>
              <p className="text-firm-muted text-lg leading-relaxed lg:w-2/3">
                {aud.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
