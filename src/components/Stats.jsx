export default function Stats() {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ]

  return (
    <section className="py-16 px-4 bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/30 gap-10 sm:gap-0">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center sm:px-20">
            <span className="text-5xl font-bold text-white">{stat.value}</span>
            <span className="text-white/80 text-sm mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
