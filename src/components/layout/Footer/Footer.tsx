import Link from 'next/link';
import { Typography } from '../../common/Typography';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaBed,
  FaSearch,
  FaUser 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Mobile Sticky Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 md:hidden z-50">
        <div className="flex items-center justify-between h-16 px-6 border-t border-gray-700">
          <Link href="/search" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <FaSearch className="text-xl mb-1" />
            <span className="text-xs font-medium">Search</span>
          </Link>
          
          <Link href="/hotels" className="flex flex-col items-center relative">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center -mt-8 shadow-lg border-4 border-gray-900 transform hover:scale-105 transition-transform">
              <FaBed className="text-2xl text-white" />
            </div>
            <span className="text-xs font-medium text-white mt-1">Hotels</span>
          </Link>
          
          <Link href="/profile" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <FaUser className="text-xl mb-1" />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </div>

      {/* Main Footer - Hidden on Mobile */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Typography variant="h3" className="text-white mb-4">
                LuxStay
              </Typography>
              <Typography variant="body2" className="mb-4">
                Your ultimate destination for luxury hotel bookings worldwide. Experience comfort and elegance at its finest.
              </Typography>
            </div>

            {/* Quick Links */}
            <div>
              <Typography variant="h4" className="text-white mb-4">
                Quick Links
              </Typography>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/hotels" className="hover:text-blue-400 transition-colors">
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <Typography variant="h4" className="text-white mb-4">
                Contact Us
              </Typography>
              <ul className="space-y-2">
                <li>📍 123 Luxury Avenue</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ contact@luxstay.com</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <Typography variant="h4" className="text-white mb-4">
                Follow Us
              </Typography>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <Typography variant="body2">
              © {currentYear} LuxStay. All rights reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </>
  );
}