import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Build Your Brand
            <br />
            With <span className="text-primary">#1 Hiring Expert</span>
            <br />
            <a href="#" className="text-primary underline">
              Freelancer
            </a>{" "}
            World
          </h1>

          <p className="text-gray-600 max-w-xl">
            Work with the best freelance talent from around the world on our
            secure flexible and cost-effective platform hiring expert freelancer
            world and you can contact us if you don’t understand about this
            application for your asking in here
          </p>

          <div>
            <a
              href="#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={640}
              height={480}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
