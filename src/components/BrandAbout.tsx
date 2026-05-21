"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function BrandAbout() {
  return (
    <section
      aria-label="About Miraly Foods"
      className="py-6 md:py-8 bg-brand-bg/40 border-y border-primary/5"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-5 max-w-5xl mx-auto text-center md:text-left"
        >
          <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Leaf size={18} />
          </div>

          <p className="flex-1 text-text-body text-[13px] md:text-sm leading-relaxed font-serif italic">
            <span className="font-bold not-italic text-primary-dark">
              Miraly Foods
            </span>{" "}
            — trusted manufacturer &amp; exporter of premium organic food
            products. Delivering quality, sustainable food solutions to global
            markets with a commitment to excellence.
          </p>

          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-1.5 text-primary font-bold text-xs md:text-[13px] uppercase tracking-wider hover:text-primary-dark transition-colors group whitespace-nowrap"
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
