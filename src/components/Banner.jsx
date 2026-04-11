import bannerImg from '../assets/banner.png'
import playIcon from '../assets/play.png'

export default function Banner() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-[#e1e7ff] border-none text-purple-700 text-sm font-medium px-3 py-1.5 rounded-full w-fit">
            <span className="relative flex items-center justify-center w-5 h-5">
              <span className="absolute w-5 h-5 rounded-full bg-purple-200 opacity-60"></span>
              <span className="absolute w-3.5 h-3.5 rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative w-2 h-2 rounded-full bg-purple-700"></span>
            </span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold text-gray-900 leading-[117%]">Supercharge Your Digital Workflow</h1>

          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              className="btn text-white font-semibold px-6 py-3 rounded-full border-none bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]"
            >
              Explore Products
            </button>
            <button className="btn flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-full bg-transparent hover:bg-gray-50">
              <img src={playIcon} alt="Play" className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Digital Tools Banner"
            className="rounded-2xl w-full max-w-md object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
