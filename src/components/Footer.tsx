
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800/90 backdrop-blur-sm text-white py-8 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-2">
          Made with <Heart className="inline w-5 h-5 text-pink-500" /> by Hira Sajid
        </p>
        <p className="text-gray-400">© 2024 All rights reserved</p>
      </div>
    </footer>
  );
};
