import { Wallet } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('signup')}
          >
            <Wallet className="w-8 h-8 text-[#CF6DFC]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF] bg-clip-text text-transparent">
              DT Money
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Tracker', 'Goals', 'Insights', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate('signup')}
                className="text-gray-700 hover:text-[#CF6DFC] transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('signup')}
              className="px-6 py-2 text-[#CF6DFC] hover:text-[#BDB96A] transition-colors font-medium"
            >
              Login
            </button>
            <button
              onClick={() => onNavigate('signup')}
              className="px-6 py-2 bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF] text-white rounded-full hover:shadow-lg transition-all font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
