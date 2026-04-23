import Reveal from "./Reveal";

const About = () => {
  return (
    <div id="about" className="pt-32 p-6">
      <Reveal>
        <div className="text-center">
          <div className="font-bold pb-6 text-amber-500">About Us</div>
          <div className="text-3xl pb-6 font-medium">Who we are</div>
          <div className="text-stone-600 max-w-3xl mx-auto pb-6">
            D Luxury.co Limited is a Nigerian-based company offering innovative
            digital services across multiple industries. With operations in
            fintech, workspace solutions, and marketing, we are dedicated to
            helping businesses grow and adapt in a fast-changing digital world.
          </div>
          <div>
            <button className="mt-4 bg-amber-500 text-amber-50 py-2 px-4 font-bold rounded">
              Learn More About Us
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
