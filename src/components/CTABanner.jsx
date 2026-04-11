export default function CTABanner() {
  return (
    <section className="py-20 px-4 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-purple-100 text-sm leading-relaxed mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.<br />
          Start your free trial today.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-5">
          {/* Filled white button */}
          <button className="btn bg-white text-purple-700 font-semibold px-7 py-3 rounded-full border-none hover:bg-purple-50 text-sm">
            Explore Products
          </button>
          {/* Outline white button */}
          <button className="btn border border-white text-white font-semibold px-7 py-3 rounded-full bg-transparent hover:bg-white/10 text-sm">
            View Pricing
          </button>
        </div>

        <p className="text-purple-200 text-xs">
          14-day free trial &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Cancel anytime
        </p>

      </div>
    </section>
  )
}
