import Image from "next/image";

const items = [
  { src: "/project-01.png", alt: "Project dashboard" },
  { src: "/project-02.png", alt: "User profile UI" },
  { src: "/project-03.png", alt: "Education dashboard" },
  { src: "/project-04.png", alt: "Map and routing" },
];

const Products = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Projects
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          We have been providing great flooring for service problem solutions
          and finished the task.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={it.src}
              alt={it.alt}
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
