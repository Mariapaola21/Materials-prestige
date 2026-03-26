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
    title: "Casa Monolito",
    category: "Cocina de Autor",
    aspect: "aspect-[16/9]",
    colSpan: "md:col-span-8",
    titleSize: "text-2xl",
    offset: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuEbuM81lHQe44UXFoCBTaVarZeEjVmbtyio2M5xX__T53egd_3b5JdZasWlmUtKsHuMjkIHxkOgPrf9BglmSdbmbBoYOcLjWVvcs7zkiE23khCUMHSfj02CWihiLB-4T2H5M5e5kvGhiAi6Fwc7YfZUBqrxIBpaXVDXU8es7_9V10-7QIBYiZwKOmViXzfkgaPiq1ETHel-7QSatuZnLbb2YGJJqnOw_dIvEiMaVXy5HwsYGCVHBVHsUTTOvRARo2hEgkuibmWWE",
    alt: "High-end minimalist kitchen with dark oak cabinetry and white marble island",
  },
  {
    title: "Atelier Vestidor",
    category: "Vestidores",
    aspect: "aspect-[3/4]",
    colSpan: "md:col-span-4",
    titleSize: "text-2xl",
    offset: "md:mt-12",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXrsO_7gV99VQ8tzQzS-eVN2FJ4x-gysErNso6gI_dcvsq2xVZEo-caMvlf8j0raNe-oDQmtgnaw9fpz1iFqAIHds3B2sN8t2vxXnl5aj9Pp1vSaxpvEUsOoatoU5EdBO_d0puIPly3Nz375_gQAPk0_TTAt2C2m0xiVGSrTENWIQYDugTTQ8gDysW-6odchglZpfGM7L-1w3BmlBEoNnP4sMZ2H2_je-LfpcBEgPJv4Adi-m_i9iDpUDxJk2wlnTr1l-HIP3jN6c",
    alt: "Bespoke walk-in closet with integrated LED lighting and warm walnut wood textures",
  },
  {
    title: "Escalera Astral",
    category: "Ebanistería",
    aspect: "aspect-square",
    colSpan: "md:col-span-4",
    titleSize: "text-2xl",
    offset: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW8XGL_QM1zLBpr4fRUVBYrHGmjHci_-VYOLy-P72PZf3GEI-v0qK8J6X5dmwnXiy-yIrKiBJ1fH2mYtmL5PbvtUoQUG10QxpJrBHMJ0Gg1fWuaL_ZepelGpxvh9w5hTPXsJF9aE5w6UWLsKD81o2BPJ0TGuiRlpVLnVSnU9t2xAWFOqPojOKSKgZZYZKFztzyKIAfPPKRKY_OIlwCq3R6PkmNRrnCVifEjhbMFETuw7H3nlm3GKddDDKB63n5x-x7PyH4d8LPTD8",
    alt: "Architectural wooden staircase with seamless joinery and natural light",
  },
  {
    title: "Biblioteca Nocturna",
    category: "Mobiliario",
    aspect: "aspect-square",
    colSpan: "md:col-span-4",
    titleSize: "text-2xl",
    offset: "md:-mt-24",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR5YKViT-_vJ7QHjRJ-nv5FqM--8bkfBaSRK8UzT7amK4TcggIV9Ybswe4FqLhGFF5hi1iOP4aQZQYj6HcquEiHJAFsjqvbjzWwGOwT-Nigwt1RxSvJaPJHaYMWbxBQc9RKXBWDn6gTwRuPt0vERxaNOPNw7VcWsyCIH4Ozn_BtB6-uP1Zd9jwcFi9GMTuQwFvSWV41NsjfFHdNHJ7jeLyw27apTvTjg2gL1vp5ezgELrANhet4qBsoX9K3jPQ5ar2u_JSFYa4URc",
    alt: "Modern minimalist library with floor-to-ceiling bookshelves in matte charcoal wood",
  },
  {
    title: "Detalle No. 04",
    category: "Procesos",
    aspect: "aspect-[4/5]",
    colSpan: "md:col-span-4",
    titleSize: "text-2xl",
    offset: "",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf3KHZ_1eLcqYS7bcvrNGpTvVMA6z0kW8-ObMoDM4KmNFZGRWX8vi9nWpKNae7jntKw94M6ZxkgW3dq7CKew2XjffrHkfeQ2QEiQqBgT9K5l5sHPOvSC9lO4mt_zveaSPjKCQ8_0Vm_sAZDGoVSizYccmMQT7I2gje0qBVINXBviia2q6lAFbSrAz-1zvox6ee3xJt00Pbbh1x8dImLAhnhTo03ynbZHdxqEKHFzj9dfpVIPxBfB2iemevLcWAMsfa8tjd3Ao0nto",
    alt: "Close up of handcrafted wooden joinery on a custom dining table",
  },
  {
    title: "Penthouse Horizonte",
    category: "Proyecto Integral",
    aspect: "aspect-[21/9]",
    colSpan: "md:col-span-12",
    titleSize: "text-3xl",
    offset: "mt-12",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4iFQiezPf1lMvDJML505Ima064csEyELbwd8ThT_GMkh9D0y0wjUEhYncbLQV5FmA8xhFZ-G1Oywgw3sJPtEuY9ZAGyQZVY0GOz2apHW-agOhqgc8RBTLZTmlfGkW9X6N7mWISq4S8-vxQoMLI4jsURTHP4Ma6ig17agKUcO3auMzdIWhTBTz5WAkxdgw1Wy9tCXEXm9nEFgBrbTthTYy3oiGI6jCfw4Zp8KUi1-WqcZDH9b5anwgNbwImYbTumf_VZPtzNQGRpc",
    alt: "Wide shot of a luxury penthouse interior with custom wood paneling",
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className={`${project.colSpan} group cursor-pointer ${project.offset}`}
    >
      <div
        className={`relative overflow-hidden ${project.aspect} mb-6 bg-surface-container`}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
