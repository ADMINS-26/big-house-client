import SectionBlock from "./SectionBlock";
import FadeIn from "./FadeIn";
import { supabase } from "@/lib/supabase";

type House = {
  name: string;
  square: number;
  price: string;
  photo: string;
};

export default async function Services() {
  const { data } = await supabase
    .from("houses")
    .select("name, square, price, photo")
    .limit(4);

  const projects: House[] = data ?? [];

  return (
    <SectionBlock
      id="services"
      title="Мы выполним весь комплекс работ под ключ"
      number="02"
      subtitle="— от фундамента до внутренней отделки помещений"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, i) => (
          <FadeIn key={i} delay={i * 100}>
          <div
            className="relative rounded-[30px] overflow-hidden aspect-[3/4] cursor-pointer group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.photo}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F17]/70 via-[#0F1F17]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-5 flex flex-col gap-2">
              <p
                className="font-display font-[200] text-white"
                style={{ fontSize: "clamp(13px, 1.302vw, 25px)", lineHeight: "clamp(18px, 2.604vw, 50px)" }}
              >
                {project.name}, {project.square}м²
              </p>
              <span
                className="font-display font-[200] text-white self-start px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                style={{ fontSize: "clamp(12px, 1.146vw, 22px)", lineHeight: "clamp(12px, 1.146vw, 22px)" }}
              >
                цена: {project.price}
              </span>
            </div>
          </div>
          </FadeIn>
        ))}
      </div>
    </SectionBlock>
  );
}
