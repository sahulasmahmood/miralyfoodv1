import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

// Mobile is intentionally compact (single flowing paragraph with inline icon,
// brand, and Read more) so hero (~200px) + this ribbon leaves room for the
// first product row's name/price/qty controls above the fold on small phones.
export default function BrandAbout() {
  return (
    <section
      aria-label="About Miraly Foods"
      className="py-3 md:py-10 bg-brand-bg/40 border-y border-primary/5"
    >
      <div className="container-custom">
        {/* Mobile: single flowing paragraph */}
        <p className="md:hidden text-text-heading text-[12px] leading-snug font-serif italic font-semibold">
          <span className="inline-flex items-center justify-center align-text-bottom w-5 h-5 mr-1.5 rounded-full bg-primary/10 text-primary not-italic">
            <Leaf className="w-3 h-3" />
          </span>
          <span className="font-bold not-italic text-primary-dark">
            Miraly Foods
          </span>{" "}
          is a trusted manufacturer and exporter of premium organic food
          products, delivering quality and healthy products across global
          markets. We specialize in natural, sustainable, and export-quality
          food solutions with a commitment to excellence and customer
          satisfaction worldwide.{" "}
          <Link
            href="/about"
            className="not-italic font-bold text-primary uppercase tracking-wider text-[11px] whitespace-nowrap hover:text-primary-dark"
          >
            Read more →
          </Link>
        </p>

        {/* Desktop: icon + paragraph + CTA in a row */}
        <div className="hidden md:flex items-center gap-5 max-w-6xl mx-auto">
          <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Leaf className="w-[18px] h-[18px]" />
          </div>

          <p className="flex-1 text-text-heading text-[15px] leading-relaxed font-serif italic font-semibold">
            <span className="font-bold not-italic text-primary-dark">
              Miraly Foods
            </span>{" "}
            is a trusted manufacturer and exporter of premium organic food
            products, delivering quality and healthy products across global
            markets. We specialize in natural, sustainable, and export-quality
            food solutions with a commitment to excellence and customer
            satisfaction worldwide.
          </p>

          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-1.5 text-primary font-bold text-[13px] uppercase tracking-wider hover:text-primary-dark transition-colors group whitespace-nowrap"
          >
            Read more
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
