import { useState } from "react";

const categories = [
  "Todos",
  "Cocinas de Autor",
  "Vestidores",
  "Ebanistería",
  "Mobiliario",
];

const projects = [
  {
    title: "Puerta Principal",
    category: "Ebanistería",
    aspect: "aspect-[4/3]",
    colSpan: "md:col-span-5",
    titleSize: "text-2xl",
    offset: "",
    src: "/puerta.png",
    alt: "Puerta principal de madera con laterales de vidrio",
  },
  {
    title: "Repisa Curva",
    category: "Mobiliario",
    aspect: "aspect-[4/3]",
    colSpan: "md:col-span-7",
    titleSize: "text-2xl",
    offset: "md:mt-8",
    src: "/repisa.png",
    alt: "Repisa curva de madera con estantes de vidrio y columna decorativa",
  },
  {
    title: "Closet Integral",
    category: "Vestidores",
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-4",
    titleSize: "text-2xl",
    offset: "",
    src: "/closet.png",
    alt: "Closet integral de madera con escritorio incorporado",
  },
  {
    title: "Dormitorio Doble",
    category: "Mobiliario",
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-4",
    titleSize: "text-2xl",
    offset: "md:mt-16",
    src: "/cama.png",
    alt: "Dormitorio con camas de madera oscura y cabecero tapizado",
  },
  {
    title: "Mueble de Baño",
    category: "Ebanistería",
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-4",
    titleSize: "text-2xl",
    offset: "",
    src: "/mueble1.png",
    alt: "Mueble de baño flotante blanco con espejo y lavabo",
  },
  {
    title: "Cocina de Autor",
    category: "Cocinas de Autor",
    aspect: "aspect-[16/7]",
    colSpan: "md:col-span-6",
    titleSize: "text-2xl",
    offset: "",
    src: "/cocina.png",
    alt: "Cocina de autor con acabados en madera",
  },
  {
    title: "Cocinas Premium",
    category: "Cocinas de Autor",
    aspect: "aspect-[16/7]",
    colSpan: "md:col-span-6",
    titleSize: "text-2xl",
    offset: "md:mt-8",
    src: "/cocinas.png",
    alt: "Cocina premium con isla central",
  },
  {
    title: "Closets a Medida",
    category: "Vestidores",
    aspect: "aspect-[16/7]",
    colSpan: "md:col-span-6",
    titleSize: "text-2xl",
    offset: "",
    src: "/closets.png",
    alt: "Closets a medida con organización interior",
  },
  {
    title: "Mueble Auxiliar",
    category: "Mobiliario",
    aspect: "aspect-[16/7]",
    colSpan: "md:col-span-6",
    titleSize: "text-2xl",
    offset: "md:mt-8",
    src: "/mueble2.png",
    alt: "Mueble auxiliar de madera con detalles artesanales",
  },
  {
    title: "Puertas Dobles",
    category: "Ebanistería",
    aspect: "aspect-[21/9]",
    colSpan: "md:col-span-12",
    titleSize: "text-3xl",
    offset: "mt-4",
    src: "/puerta_doble.png",
    alt: "Puertas dobles de madera con diseño arquitectónico",
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className={`${project.colSpan} group cursor-pointer ${project.offset}`}
    >
      <div
        className={`relative overflow-hidden ${project.aspect} mb-6 bg-[#f0ebe3]`}
      >
        <img
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          alt={project.alt}
          src={project.src}
        />
        <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3
            className={`font-headline ${project.titleSize} font-light text-on-surface`}
          >
            {project.title}
          </h3>
          <p className="font-body text-xs text-on-surface-variant uppercase tracking-widest mt-1">
            {project.category}
          </p>
        </div>
        <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
          arrow_forward
        </span>
      </div>
    </div>
  );
}

export default function ProyectosDestacados() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto relative">
      {/* Decorative ambient vertical lines */}
      <div className="hidden md:block fixed top-0 left-0 w-1/4 h-full pointer-events-none border-r border-outline-variant/5 z-0" />
      <div className="hidden md:block fixed top-0 right-0 w-1/4 h-full pointer-events-none border-l border-outline-variant/5 z-0" />

      {/* Editorial Header Section */}
      <div className="mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Portfolio d'Excellence
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-light leading-tight tracking-tight text-on-surface">
              Proyectos <br />
              <span className="italic pl-12 md:pl-20">Destacados</span>
            </h1>
          </div>
          <div className="md:max-w-xs">
            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
              Una curaduría de nuestras obras más recientes donde la
              arquitectura y la carpintería de autor se fusionan en espacios de
              vida únicos.
            </p>
          </div>
        </div>
      </div>

      {/* Categories / Filters */}
      <nav className="mb-16 overflow-x-auto hide-scrollbar relative z-10">
        <ul className="flex items-center gap-12 border-b border-outline-variant/20 pb-4">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`font-label text-xs uppercase tracking-widest block transition-colors duration-300 ${
                  activeCategory === cat
                    ? "text-primary font-semibold border-b border-primary pb-4 -mb-[17px]"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Gallery Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="mt-24 text-center relative z-10">
        <button className="bg-primary text-on-primary px-12 py-5 font-label text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all active:scale-95">
          Cargar más obras
        </button>
      </div>
    </section>
  );
}
