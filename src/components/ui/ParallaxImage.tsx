"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Moves the image slightly opposite to scroll direction
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, height: "130%", top: "-15%" }} className="absolute inset-0 w-full">
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </motion.div>
    </div>
  );
}
