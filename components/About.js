const About = () => (
  <div className="w-full h-full flex flex-col md:flex-row justify-between items-center px-5 md:px-3 tracking-wider py-16">
    <div className="w-full md:w-3/4 h-full md:pr-6 py-4 md:py-0">
      <div className="text-primary font-semibold text-2xl italic">
        <span className="font-normal text-base pr-3 text-brand">01 —</span>About
      </div>
      <div className="py-3 tracking-widest text-primary-light leading-7">
        Hello! I&apos;m Ajay, a Full Stack Developer based in India who enjoys
        building things that give beautiful online experiences.
        <br /> I develop human-friendly mobile apps & web experiences that
        provide intuitive, pixel-perfect user interfaces with efficient and
        modern backends.
        <br />
        <br />
        Shortly after graduating in year 2014, I&apos;ve joined the development
        team at Tata Consultancy Services where I work on a wide variety of
        interesting and innovative projects for different Airliners across
        world.
      </div>
    </div>
    <div className="w-full md:w-1/4 h-full md:pl-6 py-4 md:py-0">
      <div className="text-primary font-semibold text-2xl italic">
        <span className="font-normal text-base pr-3 text-brand">02 —</span>
        Experience
      </div>
      <div className="py-3 tracking-wide text-primary-light">
        <div className="py-4">
          <div className="font-base pt-1 font-semibold hover:text-brand-dark italic">
            Software Engineer II
          </div>
          <div className="font-base pt-1">Allstate</div>
          <div className="text-sm pt-1 text-secondary">
            Allstate Solutions Private Limited
          </div>
          <div className="font-light text-secondary-light text-sm pt-2">
            JUN 2021 — PRESENT
          </div>
        </div>
        <div className="py-4">
          <div className="font-base pt-1 font-semibold hover:text-brand-dark italic">
            System Analyst
          </div>
          <div className="font-base pt-1">Andor Health</div>
          <div className="text-sm pt-1 text-secondary">
            Mahathi Software Private Limited
          </div>
          <div className="font-light text-secondary-light text-sm pt-2">
            FEB 2020 — JUN 2021
          </div>
        </div>
        <div className="py-4">
          <div className="font-base pt-1 font-semibold hover:text-brand-dark italic">
            System Engineer
          </div>
          <div className="font-base pt-1">TCS</div>
          <div className="text-sm pt-1 text-secondary">
            Tata Consultancy Services
          </div>
          <div className="font-light text-secondary-light text-sm pt-2">
            SEPT 2014 — APR 2017
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
