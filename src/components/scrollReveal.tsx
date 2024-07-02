import bgImg from "../assets/bg2.png";
import Reveal from "./reveal";

export default function ScrollReveal() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center bg-no-repeat h-screen text-white flex items-center"
    >
      <div className="w-3/5 space-y-5">
        <div>
          <Reveal duration={0.9}>
            <div className="ps-32">
              <h1 className="text-3xl font-bold ">Welcome to</h1>
            </div>
          </Reveal>

          <Reveal duration={0.9}>
            <div className="ps-32">
              <h1 className="text-3xl font-bold">Thamrin Group</h1>
            </div>
          </Reveal>
        </div>

        <Reveal duration={1.9}>
          <div className="ps-32">
            <p className="text-sm">
              Thamrin Group is a leading company in South Sumatra and Bengkulu,
              with several business units operating in the{" "}
              <span className="font-bold">Automotive</span>,{" "}
              <span className="font-bold">Retail</span>,{" "}
              <span className="font-bold">Real Estate</span>,{" "}
              <span className="font-bold">Hotel</span>,{" "}
              <span className="font-bold">Bank</span>, and{" "}
              <span className="font-bold">Food & Beverage</span> sectors.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
