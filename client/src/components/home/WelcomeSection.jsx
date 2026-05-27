import FamilyOwnedIcon from "../../assets/family_owned.png";
import ProfessionalIcon from "../../assets/professional.png";
import DedicatedHover from "../../assets/dedicated_hover.png";
import ReadMoreIcon from "../../assets/read_more.png";

function WelcomeSection() {
  const cards = [
    {
      title: "FAMILY OWNED",
      desc: "In our continual dedication to exceed our customers'.",
      icon: FamilyOwnedIcon,
      active: false,
    },
    {
      title: "DEDICATED TO YOU",
      desc: "We have grown from that first sale to now selling hundreds of Infiniti's per year in the greater Toronto area.",
      icon: DedicatedHover,
      active: true,
    },
    {
      title: "FRIENDLY AND PROFESSIONAL",
      desc: "Our Infiniti service business is one of the largest..",
      icon: ProfessionalIcon,
      active: false,
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="inline-block border-b border-gray-400 pb-2 text-4xl font-bold uppercase text-[#5d3d8e]">
            Welcome To Markham Infiniti
          </h2>

          <div className="h-0 w-0 border-l-16 border-r-16 border-t-14 border-l-transparent border-r-transparent border-t-gray-400" />

          <p className="mt-5 max-w-6xl text-lg leading-8 text-gray-500">
            Markham Infiniti is a family owned business in Toronto that has been
            servicing the GTA market since Infiniti was introduced. Agincourt
            Infiniti was one of the original fifteen Infiniti dealers appointed
            in Canada in 1990, and in October 2007 we relocated to Unionville,
            Ontario under our new name "Markham Infiniti".
          </p>
        </div>

        {/* Diamond Cards */}
        <div className="mt-28 mb-16 flex flex-col items-center justify-center gap-24 md:flex-row md:flex-wrap md:gap-20 lg:flex-row lg:gap-28">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center group"
            >
              {card.active && (
                <div className="absolute z-20 flex rotate-45 items-center justify-center bg-[#e7dff3] transition-all duration-300 h-[70px] w-[70px] -top-[76px] left-[111px] md:h-[81px] md:w-[81px] md:-top-[88px] md:left-[128px] lg:h-[96px] lg:w-[96px] lg:-top-[104px] lg:left-[152px]">
                  <img
                    src={card.icon}
                    alt=""
                    className="-rotate-45 w-7 md:w-8 lg:w-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div
                className={`relative rotate-45 border transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl h-[190px] w-[190px] md:h-[220px] md:w-[220px] lg:h-[260px] lg:w-[260px] ${
                  card.active
                    ? "border-[#5d3d8e] bg-[#5d3d8e] hover:bg-[#4c3176]"
                    : "border-gray-200 bg-[#ececec] hover:border-gray-300 hover:bg-[#e2e2e2]"
                }`}
              >
                <div className="absolute inset-0 flex -rotate-45 flex-col items-center justify-center px-4 md:px-5 lg:px-8 text-center">
                  {!card.active && (
                    <img
                      src={card.icon}
                      alt=""
                      className="mb-2 md:mb-3 lg:mb-4 w-10 md:w-12 lg:w-16 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <h3
                    className={`mb-1.5 md:mb-2 lg:mb-3 text-xs md:text-sm lg:text-lg font-bold uppercase transition-colors duration-300 ${
                      card.active ? "text-white" : "text-gray-600 group-hover:text-purple-700"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-[10px] md:text-[11px] lg:text-xs leading-normal md:leading-relaxed lg:leading-6 transition-colors duration-300 ${
                      card.active ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {card.desc}
                  </p>

                  {card.active && (
                    <>
                      <div className="my-2 lg:my-4 h-px w-20 lg:w-28 bg-white/40" />

                      <button className="flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-sm font-semibold text-white transition-all duration-300 hover:scale-105 cursor-pointer">
                        Read More
                        <img
                          src={ReadMoreIcon}
                          alt=""
                          className="w-3 lg:w-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;