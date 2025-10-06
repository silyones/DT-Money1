import { Brain, Shield, TrendingUp, Zap, ArrowRight, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Smart Allocation',
      description: 'Deep learning helps divide your money based on your goals',
      color: '#CF6DFC',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Real Data Integration',
      description: 'Connect with Fi Money MCP for accurate tracking',
      color: '#C1BFFF',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Goal Insights',
      description: 'Personalized recommendations for savings and lifestyle goals',
      color: '#BDB96A',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Privacy First',
      description: 'Your financial data stays safe and under your control',
      color: '#FDFBD4',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Freelance Designer',
      quote: 'DT Money helped me achieve my savings goals faster than I ever thought possible!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      quote: 'The AI-powered insights are incredible. It feels like having a personal financial advisor.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Small Business Owner',
      quote: 'Finally, a finance app that understands my priorities and helps me balance everything.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBD4]/30 to-white">
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF] bg-clip-text text-transparent">
                Smart Money,
              </span>
              <br />
              <span className="text-gray-800">Smarter Life</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              DT Money is your AI-powered financial companion that understands your goals and
              helps you smartly divide your money for a balanced, stress-free life.
            </p>

            <button
              onClick={() => onNavigate('signup')}
              className="group px-8 py-4 bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF] text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CF6DFC]/20 to-[#C1BFFF]/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#CF6DFC]/10 to-[#C1BFFF]/10 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#CF6DFC] to-[#C1BFFF] rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#BDB96A]/30 rounded-full w-32 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-24"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#BDB96A]/10 to-[#FDFBD4]/30 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#BDB96A] to-[#FDFBD4] rounded-full flex items-center justify-center text-white font-bold">
                      I
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#CF6DFC]/30 rounded-full w-40 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-28"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#C1BFFF]/10 to-[#FDFBD4]/20 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C1BFFF] to-[#CF6DFC] rounded-full flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-[#C1BFFF]/30 rounded-full w-36 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose DT Money?</h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to transform your financial life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#FDFBD4]/50 to-[#C1BFFF]/10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#BDB96A] text-[#BDB96A]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CF6DFC] to-[#C1BFFF] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF] rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already achieving their financial goals
          </p>
          <button
            onClick={() => onNavigate('signup')}
            className="px-8 py-4 bg-white text-[#CF6DFC] rounded-full text-lg font-semibold hover:shadow-xl transition-all"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}
