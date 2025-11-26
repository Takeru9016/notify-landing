import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
            <img src="/icon.png" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">Syngo</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Stay in sync with your favorite person. Shared todos, reminders,
              and stickers for two.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-primary transition"
                >
                  EULA Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:timetocode22@gmail.com"
                  className="text-gray-600 hover:text-primary transition"
                >
                  timetocode22@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Syngo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
