import ScrollAnimator from "./ScrollAnimator";

export default function Footer() {
  return (
    <footer className="bg-on-surface text-surface py-20 px-6">
      <ScrollAnimator>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h4 className="font-headline text-2xl italic mb-8">LINEA</h4>
            <p className="font-body text-surface/60 text-sm leading-relaxed mb-8">
              Crafting high-end bespoke furniture for individuals who appreciate
              the intersection of architectural precision and organic beauty.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="font-label text-xs uppercase tracking-[0.3em] mb-6">
              Navigation
            </h5>
            <ul className="space-y-3 font-body text-sm text-surface/80">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  The Atelier
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Bespoke Process
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Journal
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Showroom
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-label text-xs uppercase tracking-[0.3em] mb-6">
              Enquiries
            </h5>
            <p className="font-body text-sm text-surface/80">
              atelier@lineaprestige.com
              <br />
              +34 912 345 678
            </p>
            <div className="pt-4 flex gap-6">
              <span className="material-symbols-outlined text-surface/40 hover:text-primary cursor-pointer transition-colors">
                public
              </span>
              <span className="material-symbols-outlined text-surface/40 hover:text-primary cursor-pointer transition-colors">
                camera
              </span>
              <span className="material-symbols-outlined text-surface/40 hover:text-primary cursor-pointer transition-colors">
                mail
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-label text-[10px] uppercase tracking-widest text-surface/40">
            © 2024 Linea Prestige. All rights reserved.
          </span>
          <span className="font-label text-[10px] uppercase tracking-widest text-surface/40">
            Crafted in Madrid
          </span>
        </div>
      </ScrollAnimator>
    </footer>
  );
}
