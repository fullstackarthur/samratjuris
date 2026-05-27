import { AnimatedSection } from './AnimatedSection';

interface PhilosophyProps {
  description: string;
}

export function Philosophy({ description }: PhilosophyProps) {
  return (
    <section id="philosophy" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <AnimatedSection>
              <span className="text-firm-accent font-display text-sm tracking-[0.2em] uppercase block mb-4">
                01 / Philosophy
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-firm-text leading-tight">
                The Samrat Juris Identity
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-8 lg:pt-12">
            <AnimatedSection delay={0.2}>
              <p className="text-xl lg:text-2xl text-firm-muted leading-relaxed font-body">
                {description}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4} className="mt-10">
              <div className="h-px w-24 bg-firm-accent" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
