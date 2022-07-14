const Work = () => (
  <div className="w-full h-full flex flex-col md:flex-row justify-between items-center px-5 md:px-3 tracking-wider py-16">
    <div className="w-full h-full md:pr-6 py-4 md:py-0">
      <div className="text-primary font-semibold text-2xl italic">
        <span className="font-normal text-base pr-3 text-brand">03 —</span>
        Technologies
      </div>
      <div className="py-3 tracking-widest text-primary-light leading-7">
        Here are a few technologies I&apos;ve been working with recently:
        <br />
        <br />
        <ul>
          <li className="font-semibold"> JavaScript</li>
          <li className="font-semibold"> React</li>
          <li className="font-semibold"> Node.js</li>
          <li className="font-semibold"> Rust</li>
          <li className="font-semibold"> HTML & CSS</li>
        </ul>
      </div>
    </div>
    <div className="w-full h-full md:pr-6 py-4 md:py-0">
      <div className="text-primary font-semibold text-2xl italic">
        <span className="font-normal text-base pr-3 text-brand">04 —</span>
        Works
      </div>
      <div className="py-3 tracking-widest text-primary-light leading-7">
        I&apos;ll be excited to showcase all my works in person or on the call.
        <br />
        <br />
        It&apos;s not about being lazy or something or not caring to show a
        couple of screenshots. It’s about solving the complex tasks.
        <br />
        <br />I know that no one will read the text so long in a portfolio. I
        love to show and explain the cases, but it is the act, not screenshots
        with texts.
      </div>
    </div>
  </div>
);

export default Work;
