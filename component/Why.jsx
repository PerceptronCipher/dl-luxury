import Reveal from "./Reveal";

import { MonitorCloud, MapPinned, Building2, Clock5 } from "lucide-react";

const Why = () => {
  return (
    <div className="pt-32 p-4 text-center">
      <Reveal>
        <div>
          <div className="font-bold pb-6 text-amber-500">Why Choose Us</div>

          <div className="text-3xl pb-6 font-medium">
            Why Bussinesses Choose DI Luxury.co Ltd
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-16 p-4">
            <div className="text-center border-l-0.5 p-4 shadow-xl">
              <div className="flex md:pb-2 justify-center items-center pb-6">
                <MonitorCloud size={40} color="orange" />
              </div>
              <div className="font-bold md:pb-2  pb-6">Reliable and Fast</div>
              <div className="text-stone-600">
                We deliver fast and secure services you can trust
              </div>
            </div>
            <div className="text-center shadow-xl border-l-0.5 md:border-l-0.5 p-4">
              <div className="flex md:pb-2 justify-center pb-6 items-center">
                <MapPinned size={40} color="orange" />
              </div>
              <div className="font-bold md:pb-2 pb-6">Customer Focused</div>
              <div className="text-stone-600">
                Our Customers are at the heart of everything we do
              </div>
            </div>
            <div className="text-center shadow-xl md:border-l-0.5 border-l-0.5 p-4">
              <div className="flex md:pb-2  justify-center pb-6 items-center">
                <Building2 size={40} color="orange" />
              </div>
              <div className="font-bold md:pb-2 pb-6">Expert Team</div>
              <div className="text-stone-600 text-sm">
                Skilled professionals dedicated to your satisfaction
              </div>
            </div>
            <div className="text-center shadow-xl border-l-0.5 p-4">
              <div className="flex md:pb-2 justify-center pb-6 items-center ">
                <Clock5 size={40} color="orange" />
              </div>
              <div className="font-bold md:pb-2 pb-6">Innovation Driven</div>
              <div className="text-stone-600">
                We leverage technology and trends to keep you ahead
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Why;
