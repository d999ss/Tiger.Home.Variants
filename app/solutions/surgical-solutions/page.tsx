"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const benefits = [
  { title: "Convenience", description: "Home delivery ensures patients receive their dressings without additional clinic visits." },
  { title: "Compliance", description: "Through concierge service, physicians select items unique for each patient, making it easier for patients to follow post-surgical care protocols." },
  { title: "Comfort", description: "Patients recover in the comfort of their own home with professional-grade materials." }
];

const productTypes = [
  {
    title: "Collagen Dressing",
    description: "The collagen dressings are porous collagen membranes which are designed to be permeable and breathable, with fluid control similar to skin. They are flexible, pliable, elastic, and durable for ease of application."
  },
  {
    title: "Collagen Powder",
    description: "The particles have a high surface area, allowing them to effectively penetrate and deliver the maximum amount of collagen into the wound surface."
  },
  {
    title: "Silicone Composite Dressing",
    description: "The silicone composite dressings are absorbent, have a non-traumatic border, and provide an ideal cover for wounds of many types. These dressings are indicated as a secondary dressing to cover primary dressings. They assist in protecting the wound, including from germs that may cause infection. These dressings are waterproof."
  },
  {
    title: "Island Composite Dressing",
    description: "These dressings contain a non-adherent contact layer that covers the wound site. It consists of a soft absorbent pad that collects exudate and protects the wound from trauma. It also has a non-woven backing with an adhesive border that is gentle and holds the pad in place. The island composite dressing also has a waterproof backing to keep wounds dry and keep external contaminants out."
  }
];

const featuredProduct = {
  name: "HealPACK™",
  tagline: "Complete Post-Surgical Care",
  description: "HealPACK™ is our comprehensive post-surgical dressing solution delivered directly to your patient's home. Each unique configuration contains professional-grade wound care materials, selected by your physician, with clear instructions for comfortable, convenient at-home care.",
  href: "/products/healpack",
  image: "/images/catalog-logos/healpack.png"
};

const featuredProduct2 = {
  name: "carePAC™",
  tagline: "Home Wound Care Delivery System",
  description: "carePAC™ is a premium line of wound care dressings packaged in daily kits, trusted by physicians nationwide to enhance patient healing and improve compliance. Each physician-prescribed, patient-specific order is shipped directly to the patient, ensuring seamless continuity of care and saving your practice time and resources.",
  href: "/products/carepac",
  image: "/images/catalog-logos/carepac.png"
};

const relatedProducts = [
  { title: "caregraFT™", href: "/products/caregraft", description: "Full thickness allograft supporting wound closure in surgical applications." },
  { title: "completeFT®", href: "/products/completeft", description: "Full-thickness tissue graft for comprehensive surgical wound care." }
];


export default function SurgicalSolutions() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[100dvh] md:h-[860px] flex items-end pb-6 md:items-center md:pb-0 justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/surgical-dressings.webp"
            alt="Surgical Dressings"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#231010]/42" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(35,16,16,0.58) 0%, rgba(35,16,16,0.28) 44%, rgba(35,16,16,0.14) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(239,237,234,0.96) 0%, rgba(239,237,234,0.52) 42%, rgba(239,237,234,0) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
          <div className="mx-auto max-w-[760px] rounded-[16px] bg-white/84 p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-10">
            <h1 className="font-display font-light text-[#231010] text-[clamp(36px,5.5vw,72px)] mb-6">
              Surgical Dressings
            </h1>
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/88 leading-[1.8] max-w-2xl mx-auto">
              An innovative product solution that enhances post surgery care. Delivered to your patient&apos;s door for treatment in the comfort of their home.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Patient-Centered Care</span>
            <h2 className="text-h1 text-foreground">Benefits of Home Delivery</h2>
            <p className="mx-auto mt-6 max-w-3xl text-[14.6px] leading-[26px] font-light text-[#231010]/68">
              A more streamlined post-surgical experience for both patients and practices, centered on convenience, compliance, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="h-full border-t border-[#231010]/10 px-2 pt-6">
                  <div className="mb-6 h-[2px] w-12 bg-[#8C1D18]/20" />
                  <h3 className="mb-3 font-display text-[32px] leading-[1.05] font-light tracking-[-0.4px] text-[#231010]">
                    {item.title}
                  </h3>
                  <p className="text-[14.6px] leading-[26px] font-light text-[#231010]/64">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Featured Solution</span>
            <h2 className="text-h1 text-foreground font-semibold">HealPACK™ and carePAC™ include a wide variety of products that support wound closure</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
              <h3 className="text-h1 font-light mb-4">{featuredProduct.name}</h3>
              {featuredProduct.tagline ? (
                <p className="text-lead text-brand mb-6">{featuredProduct.tagline}</p>
              ) : null}
              <p className="font-body text-foreground/80 leading-relaxed mb-8">{featuredProduct.description}</p>
              <Button variant="primary" size="md" asChild>
                <Link href={featuredProduct.href} className="cursor-pointer">
                  View Product
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product 2 — carePAC™ */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Featured Solution</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
              <h3 className="text-h1 font-light mb-4">{featuredProduct2.name}</h3>
              {featuredProduct2.tagline ? (
                <p className="text-lead text-brand mb-6">{featuredProduct2.tagline}</p>
              ) : null}
              <p className="font-body text-foreground/80 leading-relaxed mb-8">{featuredProduct2.description}</p>
              <Button variant="primary" size="md" asChild>
                <Link href={featuredProduct2.href} className="cursor-pointer">
                  View Product
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featuredProduct2.image}
                  alt={featuredProduct2.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h1 text-foreground">Product Types</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {productTypes.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="h-full border-t border-[#231010]/10 px-2 pt-6">
                  <h3 className="text-h3 font-light mb-3">{product.title}</h3>
                  <p className="font-body text-muted-foreground">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-h1 text-foreground">Explore the wound care portfolio</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedProducts.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link href={product.href} className="group block h-full">
                  <div className="h-full border-t border-[#231010]/10 px-2 pt-6 hover:border-[#D2A62C]/40 transition-colors duration-200">
                    <h3 className="text-h3 font-light group-hover:text-brand transition-colors">{product.title}</h3>
                    <p className="font-body text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                      Learn More
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
