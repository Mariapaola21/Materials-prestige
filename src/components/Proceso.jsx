import ScrollAnimator, { StaggerContainer, StaggerItem } from "./ScrollAnimator";

const steps = [
  {
    number: "01",
    icon: "chat",
    title: "Consulta",
    description:
      "Escuchamos su visión. Analizamos el espacio, sus necesidades y sueños para crear un brief a medida.",
  },
  {
    number: "02",
    icon: "architecture",
    title: "Diseño",
    description:
      "Nuestro equipo desarrolla renders 3D fotorrealistas y muestras de materiales para su aprobación.",
  },
  {
    number: "03",
    icon: "handyman",
    title: "Fabricación",
    description:
      "Artesanos especializados ejecutan cada pieza con técnicas tradicionales y tecnología de precisión.",
  },
  {
    number: "04",
    icon: "check_circle",
    title: "Instalación",
    description:
      "Entrega e instalación impecable con supervisión directa. Su espacio cobra vida.",
  },
];

export default function Proceso() {
  return (
    <section className="py-32 bg-surface px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimator>
          <div className="text-center mb-20">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary block mb-4">
              De la Visión a la Realidad
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-light text-on-surface">
              Nuestro Proceso
            </h2>
          </div>
        </ScrollAnimator>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          staggerDelay={0.15}
        >
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="group relative">
                {/* Connection line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[-calc(50%-32px)] h-[1px] bg-outline-variant/20 w-[calc(100%-16px)]" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 border border-primary/15 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <span className="material-symbols-outlined text-primary/60 text-2xl">
                      {step.icon}
                    </span>
                    <span className="absolute -top-3 -right-3 font-label text-[10px] text-primary/50 bg-surface px-1">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl mb-3 text-on-surface">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
