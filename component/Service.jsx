import Cards from "./Cards";
import Reveal from "./Reveal";

const Service = () => {
  return (
    <div id="services" className="pt-32 px-6 text-center">
      <Reveal>
        <div className="font-bold pb-6 text-amber-500">Our services</div>

        <div className="text-3xl pb-6 font-medium">What we do</div>

        <div className="text-stone-600 max-w-2xl mx-auto">
          We operate across multiple sectors to serve your everyday digital
          needs
        </div>

        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cards
            title="YourSub"
            Describe="Buy data, Pay bills, and manage subscriptions seamlessly."
            explore="Explore YourSub"
            href={"https://yoursub.org"}
          />

          <Cards
            title="Tech Space"
            Describe="A modern workspace with internet access, browsing and cyber cafe services."
            explore="Check coordinates"
            href="https://maps.app.goo.gl/gT29b2f1NorAVjUbA?g_st=awb"
          />

          <Cards
            title="Marketing & Optimization"
            Describe="Grow your brand with digital marketing, SEO, and strategic promotion"
            explore="See Services"
            href={"#"}
          />
        </div>
      </Reveal>
    </div>
  );
};

export default Service;
