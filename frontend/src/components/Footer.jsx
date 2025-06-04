import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-semibold text-white">Prem Poudel</h3>
            <p className="text-sm mt-2 max-w-xs mx-auto md:mx-0">
              ML/AI Enthusiast · Full Stack Developer · Lifelong Learner
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm max-w-xs mx-auto md:mx-0">
              <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
              <li><a href="#blogs" className="hover:text-teal-400 transition">Blogs</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Get in Touch</h4>
            <p className="text-sm max-w-xs mx-auto md:mx-0">iamprem@gmail.com</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 max-w-xs mx-auto md:mx-0">
              <a
                href="https://github.com/prem-poudel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="hhttps://www.linkedin.com/in/prem-poudel/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="https://www.facebook.com/iamprem024/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Prem Poudel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
