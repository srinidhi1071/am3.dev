const Contact = () => (
  <div className="w-full h-full flex flex-col justify-between items-center px-5 md:px-3 tracking-wider py-16">
    <div className="w-full h-full md:pr-6 py-4 md:py-0">
      <div className="text-primary font-semibold text-2xl italic">
        <span className="font-normal text-base pr-3 text-brand">05 —</span>
        Contact
      </div>
      <div className="py-3 tracking-widest text-primary-light leading-7">
        I&apos;m currently not looking for any opportunities.
        <br /> I can, however, be involved in your next exciting project. My
        inbox is always open. Whether for a potential project or just to say
        hello.
        <br />
        <div className="font-semibold py-3 italic">hello@am3.dev</div>
      </div>
    </div>
    <div className="mt-44 md:mt-0 font-light w-full text-center text-secondary-light italic">
      Made with love in India. &copy;{" "}
      <span className="block md:inline">Ajay Manish Vanaparthi</span>
      <span className="pt-3 block">https://am3.dev [or] https://ajay.work</span>
    </div>
  </div>
);

export default Contact;
