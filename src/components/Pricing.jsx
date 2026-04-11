const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: 0,
    period: 'Month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: 29,
    period: 'Month',
    badge: 'Most Popular',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: 99,
    period: 'Month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-16 px-4 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div key={idx} className="relative flex flex-col">
              {/* Most Popular badge above Pro card */}
              {plan.badge && (
                <div className="flex justify-center mb-3">
                  <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`rounded-2xl p-7 flex flex-col gap-4 flex-1 transition-all duration-300 ease-out hover:-translate-y-2 ${
                  plan.highlight
                    ? 'text-white shadow-xl hover:shadow-2xl bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]'
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg'
                }`}
              >
                <div>
                  <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-0.5 ${plan.highlight ? 'text-purple-200' : 'text-gray-500'}`}>
                    {plan.subtitle}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>
                    /{plan.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-purple-200' : 'text-purple-600'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlight ? 'text-white' : 'text-gray-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn mt-auto py-3 rounded-full font-semibold text-sm w-full ${
                    plan.highlight
                      ? 'border border-white text-white bg-transparent hover:bg-white/10'
                      : 'text-white border-none bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
