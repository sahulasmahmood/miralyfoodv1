"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

// Mobile padding/text is intentionally tight: hero (~200px) + this section must
// stay short enough that the first row of FeaturedProducts peeks above the fold.
export default function BrandAbout() {
  return (
    <section
      aria-label="About Miraly Foods"
      className="py-4 md:py-10 bg-brand-bg/40 border-y border-primary/5"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Leaf size={16} className="md:hidden" />
              <Leaf size={18} className="hidden md:block" />
            </div>
            <span className="font-bold text-primary-dark text-sm md:text-base md:hidden">
              Miraly Foods
            </span>
          </div>

          <p className="flex-1 text-text-heading text-[12.5px] md:text-[15px] leading-snug md:leading-relaxed font-serif italic font-semibold">
            <span className="hidden md:inline font-bold not-italic text-primary-dark">
              Miraly Foods
            </span>{" "}
            <span className="md:hidden">— </span>
            is a trusted manufacturer and exporter of premium organic food
            products, delivering quality and healthy products across global
            markets. We specialize in natural, sustainable, and export-quality
            food solutions with a commitment to excellence and customer
            satisfaction worldwide.
          </p>

          <Link
            href="/about"
            className="self-end md:self-auto shrink-0 inline-flex items-center gap-1.5 text-primary font-bold text-[11px] md:text-[13px] uppercase tracking-wider hover:text-primary-dark transition-colors group whitespace-nowrap"
          >
            Read more
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
