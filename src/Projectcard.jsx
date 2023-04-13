import React from "react";
const Projectcard = (props) => {
  return (
    <section id="Project">
      <h1 className="text-4xl font-Poppins  drop-shadow-lg text-center   m-14">{props.title}</h1>
      <div className=" rounded-2xl w-[400px] h-[300px] bg-white text-black px-10 py-5">
        <img className="rounded-lg" src={props.img} alt="" />

        <h1 className="text-lg pt-2">{props.name}</h1>
        <p className="text-sm text-slate-500 mt-2">{props.description}</p>
        <button className=" mt-3 mx-64 px-4 py-1 rounded-xl ease-in-out delay-100   hover:opacity-90 border border-blue hover:bg-blue hover:text-white">
          <a href={[props.link]} target="_blank">
            Visit{" "}
          </a>
        </button>
      </div>
    </section>
  );
};

export default Projectcard;