export default function Maderas() {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5 space-y-8">
        <h2 className="font-headline text-4xl text-on-surface tracking-wide leading-tight">
          Maderas de Autor
        </h2>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed">
          Nuestra selección comienza en los bosques gestionados de forma
          sostenible de Europa y Norteamérica. Cada veta cuenta una historia de
          décadas; cada nudo es un testimonio de la autenticidad que solo la
          naturaleza puede esculpir.
        </p>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed">
          Tratamos el Roble y el Nogal con aceites naturales que permiten a la
          madera respirar, manteniendo su tacto orgánico y su calidez
          arquitectónica.
        </p>
        <div className="pt-6 border-l-2 border-primary pl-6">
          <span className="font-label text-primary uppercase tracking-widest text-xs block mb-2">
            Curaduría
          </span>
          <p className="font-headline italic text-2xl text-on-surface">
            "No fabricamos muebles, preservamos el legado del bosque en su hogar."
          </p>
        </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface-container group">
          <img
            alt="Dark Walnut texture"
            className="w-full h-full object-cover grayscale-[10%] group-hover:scale-110 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJDlt-WiQNkJ21xt2q4Lw0k-nm_oK2K7Eq_E11R5iB-JYGmgGwZbdlTfYB5mVfjdDHRPFKNKEK3PJT0xeJIIQihPw2VoqpR9yXYNy-MKZ0MAI6_YkJ0qAxVGz40XZfJ82vRZHnMvDIhCBVTxA6LtUYVt9Ug_Y5PEjkyjDFi-n1I8VBB1pZUrIZj8oHUTK1ijoieqIEBjYR8vedhJIXJutAJSv1lb9XNcv1n6VXcVbWjLrZTbL-iuHxDUW3J0ePRA4JFjJHQEbfB7c"
          />
          <div className="p-4 bg-surface-container-lowest relative z-10 -mt-16 mx-4">
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Colección Sombría
            </p>
            <p className="font-headline text-lg">Nogal Americano</p>
          </div>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface-container mt-12 md:mt-24 group">
          <img
            alt="Light Oak texture"
            className="w-full h-full object-cover grayscale-[10%] group-hover:scale-110 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaFoI_jyTvFUWgcGBHmOSm8n_ZJQpSO93rc2UlkFTyAR71J0gMs2QxGgSHc9AN6wfbnC6hYz4BJoiZIYwP9NbVQ8FubgdsLV_o73OpquAkEs17jVQvORqk2_iNIDHz76G9rbNK7_BCC247IcWR0Ddjfwl11YMsQkGVkiN56FdwTSgrIWImONApjdWFgoBrcimh8DxgOb2gdNuqVCS0EnVaC5FfY23LoMnEBiyOr7vA4Vt3TKCdcNZUo5jxu_gl75WO4j5-ZqLAOVQ"
          />
          <div className="p-4 bg-surface-container-lowest relative z-10 -mt-16 mx-4">
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              Colección Claridad
            </p>
            <p className="font-headline text-lg">Roble Europeo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
