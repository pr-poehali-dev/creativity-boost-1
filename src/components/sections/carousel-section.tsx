import { motion } from "framer-motion"

const portfolioItems = [
  "https://cdn.poehali.dev/projects/67e807a1-55a6-49bb-b972-fec08d3c96e0/files/02fafdd8-b106-4d00-9e62-bfeb008c7e5a.jpg",
  "https://cdn.poehali.dev/projects/67e807a1-55a6-49bb-b972-fec08d3c96e0/files/7e68dcb1-a42f-4d4e-8d7a-6245ecc91205.jpg",
  "https://cdn.poehali.dev/projects/67e807a1-55a6-49bb-b972-fec08d3c96e0/files/2af530e1-fa53-46bd-8028-601818340f46.jpg",
  "https://cdn.poehali.dev/projects/67e807a1-55a6-49bb-b972-fec08d3c96e0/files/3258e0b3-99db-40e4-890c-3cd9cf85779d.jpg",
  "https://cdn.poehali.dev/projects/67e807a1-55a6-49bb-b972-fec08d3c96e0/files/e81d7806-1d4f-401e-9106-310fa5bf7954.jpg",
  "https://cdn.poehali.dev/projects/67e807a1-55a6-49bb-b972-fec08d3c96e0/files/d5ef8af2-86e4-4b53-b1ae-42b881fc8017.jpg",
  "https://cdn.poehali.dev/projects/67e807a1-55a6-49bb-b972-fec08d3c96e0/files/af0616a1-4b3e-4a22-a9e5-2509e948384c.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Объекты, которые меняют горизонт.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Пример портфолио ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}