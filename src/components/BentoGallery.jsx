import ScrollAnimator, { StaggerContainer, StaggerItem } from "./ScrollAnimator";
import ProgressiveImage from "./ProgressiveImage";

const galleryItems = [
  {
    alt: "Living Room Library",
    label: "The Penthouse Library",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0mc83g-pcexUwyeAFyRvJXvq0n-ODKEeZli0UXUmaRc-X0TEKAVQpUvyMKie9JyXkkVXepda5efaw4k9vfdgrCVPR-Stm1kBo5Ze6-0IlWB85cHONAdVMCQW8FYBIn-Mwe_ZqNcyJMfdLL1idlmwiuva3uRBDnReAyF2LDUpomheo7moHCn2lqAH3fuKFo1ikQj37vE08wu2xWCSK_xGf7MldcFb6l0RVjlQArvQ7JrskKaYV2g8FJtbCXMpb0HZE7obwwbSN12M",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    alt: "Dining Collection",
    label: "Dining in Oak",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiDuhi9q5b8lKy44S5-qF9MArT1whWq0cDxB1vAfw4MLePs-yE9yfLPlotrOWudXTm0Ihuz6Mj6Jtz0PCQZuLBrODAe8THMu81HNze5qWGJ9-OVNyfBYvCUMdMN-MsNO0le70CetAtpSNNi9pkeJtZpHjVR5jYHUsPIKETM4cJnTIJgI3DYK4dxeee5tVnSx8kXjTJshaM2vrfJ9T5gkVUn7S-qi8OaWFEdEZoJJnKliK3-SbyGXx8rAezJ4ksfcm_hW9b9XWNFc4",
    span: "md:col-span-2",
  },
  {
    alt: "Material Texture",
    label: null,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3vvlH5hBIRZ2wFbS31MrQnSl2ztiDv7t7RfXccn4CT40BD9-YWPZMqqvQ0zOq4YIDs2LN0i2hW6KY3jebkMlgZhC8ce2Nd5yjeicLCc_Tp1VjgnT7tG4wPs63zKBTJynVVgkncHSBSI0e-kcxPcN8Fe0eAOHMaWS7Fx-kobeLbLETUmCLH_Yq2q1s5pGlciszYD9S--NYfQedvJSKU6Oh26NBCCW4IKhHNVfYIrmGZkv10VTbn77-6PEsyNwQI7T3-mu3OxmlNfQ",
    span: "",
  },
  {
    alt: "Bespoke Bedroom",
    label: null,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQUGGAWdnkN2wOLYvH2bYdWVGFPA2zPiIeB1DVpoRarKX1TrY-7gnT4bJ2-UhKLWh6op0TCx_wZmpOF-SwU40ke9_d1G_gPvtW8capAG9qcYNbD5q9J4wAkyyobaf7tAI-AAckwczSWK75FdEaI1F845WyVCKVI9uxZ9JBCBhp7dfuCItmcux9L8YdP7QKj8oTZzznFTUSTpmnWxhn9zm4Nm7GFNcyFG2DNPXkg72l0v5iDTobUMOUpNNT3tiyFeAUcoY3mKoRNrE",
    span: "",
  },
];

export default function BentoGallery() {
  return (
    <section className="py-24 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimator>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="font-label text-xs tracking-widest text-primary uppercase">
                The Curator's Selection
              </span>
              <h2 className="font-headline text-4xl mt-2">Bespoke Living</h2>
            </div>
            <a
              className="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              View All Projects
            </a>
          </div>
        </ScrollAnimator>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]"
          staggerDelay={0.12}
        >
          {galleryItems.map((item) => (
            <StaggerItem
              key={item.alt}
              className={`${item.span} relative group overflow-hidden bg-surface-container-highest`}
            >
              <ProgressiveImage
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.src}
              />
              {item.label && (
                <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-on-primary font-headline text-xl">
                    {item.label}
                  </span>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
