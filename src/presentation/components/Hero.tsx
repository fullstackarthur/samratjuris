import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-firm-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase border border-firm-border text-firm-muted">
              Hyderabad &bull; Delhi
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-firm-text leading-[0.9]"
          >
            SAMRAT
            <br />
            <span className="text-firm-accent">JURIS</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-5 text-firm-muted font-display text-lg sm:text-2xl tracking-[0.15em] uppercase"
          >
            <span>Law</span>
            <span className="w-2 h-2 bg-firm-accent rotate-45" />
            <span>Strategy</span>
            <span className="w-2 h-2 bg-firm-accent rotate-45" />
            <span>Resolution</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-10 max-w-2xl text-firm-muted text-lg leading-relaxed"
          >
            A modern, agile Indian law firm engineered for the pace of the new economy.
            High-caliber legal representation across corporate, civil, and personal law.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#philosophy"
              className="px-8 py-4 bg-firm-accent text-firm-bg font-display font-semibold text-sm tracking-wider uppercase hover:bg-firm-accent-hover transition-colors"
            >
              Explore Our Firm
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-firm-border text-firm-text font-display font-semibold text-sm tracking-wider uppercase hover:border-firm-accent hover:text-firm-accent transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-firm-border to-transparent" />
    </section>
  );
}
