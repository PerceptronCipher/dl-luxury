import Reveal from "./Reveal";

const Hero = () => {
  return (
    <div className="bg-stone-50">
      {" "}
      <section
        id="home"
        className="pt-36 pb-12  md:pt-40 md:pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content Column */}
            <div className="text-center md:text-left md:w-1/2">
              <span className="inline-block text-amber-600 font-bold uppercase tracking-wider text-sm mb-4">
                Digital Solution Company in Africa
              </span>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
                Empowering Digital Solutions in{" "}
                <span className="text-amber-500">Africa</span>
              </h1>

              <p className="text-lg text-stone-600 mb-10 max-w-lg mx-auto md:mx-0">
                We provide seamless bill payments, modern tech workspaces, and
                result-driven marketing solutions tailored for individuals and
                businesses.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 transition-colors px-8 py-4 rounded-2xl font-bold text-white shadow-lg shadow-amber-200">
                  <a
                    href="https://wa.me/2348083165652"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Get Started
                  </a>
                </button>
                <button className="w-full sm:w-auto border-2 border-amber-500 hover:bg-amber-50 transition-colors px-8 py-4 rounded-2xl font-bold text-stone-900">
                  <a href="#services"> Explore Services</a>
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full hidden md:block md:w-1/2">
              <div className="relative">
                {/* Optional: Add a decorative background element */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <img
                  src="./building.jpg"
                  alt="Modern tech workspace building"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Hero;
