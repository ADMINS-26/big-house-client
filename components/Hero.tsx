/* eslint-disable @next/next/no-img-element */
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section style={{ paddingTop: "clamp(56px, 8.073vw, 155px)" }}>
      <div className="site-container">
        <div
          className="grid rounded-2xl overflow-hidden"
          style={{ minHeight: "68vh" }}
        >
          <img
            src="/images/Hero.png"
            alt="Большой дом"
            className="[grid-area:1/1] w-full h-full object-cover"
          />
          <div className="[grid-area:1/1] w-full h-full bg-black/40" />
          <div
            className="[grid-area:1/1] flex items-center"
            style={{
              paddingLeft: "clamp(20px, 8.073vw, 155px)",
              paddingRight: "clamp(20px, 2.5vw, 48px)",
              paddingTop: "clamp(20px, 2.5vw, 48px)",
              paddingBottom: "clamp(20px, 2.5vw, 48px)",
            }}
          >
            <div className="max-w-5xl">
              <FadeIn>
                <h1
                  className="font-display font-[400] text-[#F4F1EB] mb-6"
                  style={{
                    fontSize: "clamp(32px, 5.208vw, 100px)",
                    lineHeight: "clamp(16px, 2.604vw, 50px)",
                  }}
                >
                  Большой&nbsp;дом&nbsp;–
                </h1>
              </FadeIn>
              <FadeIn delay={100}>
                <p
                  className="font-display font-[200] text-[#F4F1EB] mb-8"
                  style={{
                    fontSize: "clamp(14px, 1.563vw, 30px)",
                    lineHeight: "clamp(20px, 2.604vw, 50px)",
                  }}
                >
                  динамичная многопрофильная проектно-строительная компания,
                  работающая в следующих секторах
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="flex flex-wrap" style={{ gap: "clamp(16px, 2.083vw, 40px)" }}>
                  {["ТЕХНИЧЕСКИЙ", "ЖИЛОЙ", "КОММЕРЧЕСКИЙ"].map((sector) => (
                    <span
                      key={sector}
                      className="font-sans font-[400] uppercase text-white rounded-full bg-white/10 backdrop-blur-sm"
                      style={{
                        fontSize: "clamp(13px, 1.302vw, 25px)",
                        lineHeight: "clamp(13px, 1.302vw, 25px)",
                        paddingTop: "clamp(7px, 0.677vw, 13px)",
                        paddingBottom: "clamp(7px, 0.677vw, 13px)",
                        paddingLeft: "clamp(16px, 2.083vw, 40px)",
                        paddingRight: "clamp(16px, 2.083vw, 40px)",
                        outline: "1px solid rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <a
                  href="#join"
                  className="inline-block font-sans font-[200] text-[#1B4332] bg-[#F4F1EB] hover:opacity-90 transition-opacity rounded-[20px] mt-7"
                  style={{
                    fontSize: "clamp(13px, 1.302vw, 25px)",
                    lineHeight: "clamp(20px, 2.083vw, 40px)",
                    paddingTop: "clamp(3px, 0.26vw, 5px)",
                    paddingBottom: "clamp(3px, 0.26vw, 5px)",
                    paddingLeft: "clamp(16px, 2.083vw, 40px)",
                    paddingRight: "clamp(16px, 2.083vw, 40px)",
                  }}
                >
                  Оставить заявку
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
