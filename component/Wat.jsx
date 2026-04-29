import { MonitorCloud, MapPinned, Building2, Clock5 } from "lucide-react";
import Reveal from "./Reveal";

// Simplified and fixed Wat.jsx
const Wat = () => {
  return (
    <div className="bg-stone-50">
      <section className="py-16 px-4 bg-stone-50 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <MonitorCloud size={40} />,
                title: "Reliable services",
                desc: "Fast, Secure and dependable Solutions",
              },
              {
                icon: <MapPinned size={40} />,
                title: "Based In Ilorin",
                desc: "Proudly headquartered in Nigeria",
              },
              {
                icon: <Building2 size={40} />,
                title: "Multi-Service",
                desc: "Fintech, Workspace & Marketing",
              },
              {
                icon: <Clock5 size={40} />,
                title: "Growing Brand",
                desc: "Committed to innovation",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4 text-amber-500">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
};
export default Wat;
