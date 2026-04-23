import Reveal from "./Reveal";

const Ready = () => {
  return (
    <section className="py-20 px-4">
      {/* - items-center: vertically aligns text and button on desktop 
        - md:flex-row: switches from stack to side-by-side
        - text-center md:text-left: centers text on mobile for better balance
      */}
      <Reveal>
        <div className="max-w-7xl mx-auto p-8 md:p-16 rounded-3xl bg-amber-500 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-amber-100">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-3xl md:text-4xl pb-4 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-amber-50 text-lg font-medium max-w-md">
              Lets help you grow, connect, and succeed in the digital space.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-stone-900 hover:bg-black transition-colors font-bold text-lg text-white py-4 px-10 rounded-2xl shadow-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Ready;
