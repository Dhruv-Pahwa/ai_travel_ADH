import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LogInContext } from "@/Context/LogInContext/Login";
import Marquee from "../ui/marquee";

function Hero({ heroRef }) {
  const { isAuthenticated } = useContext(LogInContext);

  const images = [
    { name: "Chichen Itza", src: "/hero/chichen.webp", link: "https://en.wikipedia.org/wiki/Chichen_Itza" },
    { name: "Christ the Redeemer", src: "/hero/christ.webp", link: "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)" },
    { name: "Colosseum", src: "/hero/colosseum.webp", link: "https://en.wikipedia.org/wiki/Colosseum" },
    { name: "Taj Mahal", src: "/hero/taj.webp", link: "https://en.wikipedia.org/wiki/Taj_Mahal" },
    { name: "Great Wall of China", src: "/hero/wall.webp", link: "https://en.wikipedia.org/wiki/Great_Wall_of_China" },
    { name: "Eiffel Tower", src: "/hero/tower.webp", link: "https://en.wikipedia.org/wiki/Eiffel_Tower" }
  ];

  const first = images.slice(0, Math.ceil(images.length / 2));
  const second = images.slice(Math.ceil(images.length / 2));

  return (
    <div ref={heroRef} className="flex items-center flex-col text-center justify-center min-h-screen py-10">
      <div className="text px-10 md:px-40 flex flex-col items-center justify-center gap-4">
        <div className="heading p-2 md:py-5">
          <h1 className="font-black text-3xl md:text-5xl bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-transparent">
            Embark on Electrifying <br /> Adventures with
          </h1>
          <h1 className="font-black text-5xl md:text-9xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-center text-transparent pb-4">
            PlanwiseAI
          </h1>
        </div>
        <h5 className="opacity-90 mx-auto text-center text-lg font-medium tracking-tight text-primary/80 md:text-xl">
          Your trusted trip planner and adventure guide.
        </h5>
        <div className="buttons flex flex-col gap-3 md:flex-row">
          <Link to="/plan-a-trip">
            <Button>{isAuthenticated ? "Let's Make Another Trip" : "Plan a Trip, It's Free"}</Button>
          </Link>
        </div>
        <div className="marquee relative flex w-[75vw] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <Marquee reverse  className="[--duration:60s]">
            {second.map((item, index) => (
              <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer"
                className="img cursor-pointer border hover:border-foreground transition-all overflow-hidden rounded-md w-[200px] md:w-[250px]">
                <img src={item.src} alt={item.name} className="h-full hover:scale-110 duration-300" loading="lazy" />
              </Link>
            ))}
          </Marquee>
          <Marquee  className="[--duration:60s]">
            {first.map((item, index) => (
              <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer"
                className="img cursor-pointer border hover:border-foreground transition-all overflow-hidden rounded-md w-[200px] md:w-[250px]">
                <img src={item.src} alt={item.name} className="h-full hover:scale-110 duration-300" loading="lazy" />
              </Link>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
      <PopularPlans />
    </div>
  );
}

function PopularPlans() {
  const plans = [
    { "name": "Maha Kumbh", "description": "Witness the world's largest spiritual gathering at the Ganges.", "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7dadc715800333.56297178b908b.jpg" },
    { "name": "La Tomatina", "description": "Join the world's biggest food fight in Spain.", "img": "https://i.pinimg.com/originals/e6/be/22/e6be226af20b77bff8c22c1e14939301.jpg" },
    { "name": "Rio Carnival", "description": "Experience the world's biggest carnival in Brazil.", "img": "https://c4.wallpaperflare.com/wallpaper/414/25/137/rio-carnival-wings-brazil-rio-de-janeiro-wallpaper-preview.jpg" }
  ];

  return (
    
    <div className="popular-plans py-10 px-5 md:px-20 text-center">
      <h2 className="font-black text-3xl md:text-5xl bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-transparent mb-10">Popular Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={plan.img} alt={plan.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <Link to={plan.name === "Maha Kumbh" ? "/public/mahakumbh.html" : plan.name === "Rio Carnival" ? "/public/rio.html" : plan.name === "La Tomatina" ? "/public/latomatina.html" : `/plans/${plan.name.toLowerCase().replace(/\s+/g, "-")}.html`} target="_blank" rel="noopener noreferrer">
                <Button className="mt-4">Explore Plan</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
