import Reveal from "./Reveal";

const Cards = ({ title, Describe, explore, href }) => {
  return (
    <div className="p-6 rounded-2xl bg-[#111113] hover:shadow-xl transition">
      <Reveal>
        <h3 className="text-xl text-stone-100 font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{Describe}</p>
        <button className="mt-4 text-yellow-500">
          {" "}
          <a href={href}>{explore} →</a>
        </button>
      </Reveal>
    </div>
  );
};

export default Cards;
