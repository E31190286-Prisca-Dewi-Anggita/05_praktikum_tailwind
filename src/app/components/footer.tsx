import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mochammad Fariz</h3>
            <p className="text-gray-400">
              Mahasiswa Politeknik Negeri Malang<br />
              Jurusan Teknologi Informasi
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/essays" className="text-gray-400 hover:text-white transition-colors">
                  Essays
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/farizge" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/mochammad-fariz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://instagram.com/farizge_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mochammad Fariz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 