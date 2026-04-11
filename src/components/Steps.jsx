import userIcon from '../assets/user.png'
import packageIcon from '../assets/package.png'
import rocketIcon from '../assets/rocket.png'

const steps = [
  {
    number: '01',
    icon: userIcon,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: packageIcon,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: rocketIcon,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
]

export default function Steps() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get Started In 3 Steps</h2>
          <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center relative">
              {/* Number badge */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {step.number}
              </span>

              {/* Icon circle */}
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-5">
                <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
