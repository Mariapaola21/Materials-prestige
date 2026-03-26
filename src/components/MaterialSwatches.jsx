export default function MaterialSwatches() {
  const swatches = [
    { color: "#5d4037", name: "Smoked Oak" },
    { color: "#d7ccc8", name: "White Ash" },
    { color: "#3e2723", name: "American Walnut" },
    { color: "#f5f5f5", name: "Carrara Stone", border: true },
  ];

  return (
    <section className="py-24 bg-surface text-center">
      <h3 className="font-headline text-2xl mb-12">The Material Palette</h3>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {swatches.map((swatch) => (
          <div key={swatch.name} className="flex flex-col items-center gap-4">
            <div
              className={`w-20 h-20 rounded-none shadow-sm ${
                swatch.border ? "border border-outline/10" : ""
              }`}
              style={{ backgroundColor: swatch.color }}
            />
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
              {swatch.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
