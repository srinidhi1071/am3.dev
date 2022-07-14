import { HandIcon } from "@heroicons/react/solid";

const Banner = () => (
  <div className="w-full mt-44 md:mt-56 px-5 md:px-3 py-4">
    <div className="text-3xl font-semibold tracking-wider _translate flex flex-col md:flex-row">
      <span className="font-light pr-4">{"<helloWorld/> "}</span>
      I&apos;m Ajay Manish
      <span className="md:-mt-8 mt-0 text-brand py-4 md:py-0">
        <HandIcon className="h-12 _wave origin-center" />
      </span>
    </div>
    <div className="pt-6 font-medium text-xl tracking-wider leading-9 text-primary-light max-w-screen-md _translate transition-transform delay-300">
      Full Stack Developer based in India.
      <br />I help companies to create human-friendly mobile apps & web
      experiences using{" "}
      <span className="font-semibold text-brand">React, </span>
      <span className="font-semibold text-brand">Node </span>and
      <span className="font-semibold text-brand"> Rust</span>
    </div>
  </div>
);

export default Banner;
