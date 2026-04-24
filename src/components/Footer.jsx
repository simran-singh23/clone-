import { Link, useNavigate } from "react-router-dom";

const footerSections = [
  {
    title: "Get to Know Us",
    links: [
      { label: "About", to: "/footer/about" },
      { label: "Careers", to: "/footer/careers" },
      { label: "Press", to: "/footer/press" },
    ],
  },
  {
    title: "Connect with Us",
    links: [
      { label: "Facebook", to: "/footer/facebook" },
      { label: "Twitter", to: "/footer/twitter" },
      { label: "Instagram", to: "/footer/instagram" },
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      { label: "Sell Products", to: "/sell" },
      { label: "Affiliate", to: "/footer/affiliate" },
      { label: "Advertise", to: "/footer/advertise" },
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      { label: "Your Account", to: "/login" },
      { label: "Returns", to: "/footer/returns" },
      { label: "Help", to: "/service" },
    ],
  },
];

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="mt-10 bg-[#131a22] text-white">
      <button
        type="button"
        className="w-full bg-[#37475a] px-4 py-3 text-center text-sm font-medium transition hover:bg-[#485769]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </button>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm md:grid-cols-4">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-base font-bold">{section.title}</h3>
            <div className="space-y-2">
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-gray-300 transition hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-gray-300 md:flex-row">
          <div>
            <p className="font-semibold text-white">Amazon Clone Support Hub</p>
            <p className="text-xs text-gray-400">
              Explore help pages, account support, and footer info sections.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/service"
              className="rounded-full border border-white/20 px-4 py-2 text-white transition hover:border-yellow-400 hover:text-yellow-300"
            >
              Customer Service
            </Link>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-black transition hover:bg-yellow-300"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-gray-400">
        © 2026 Amazon clone. Crafted for a smoother shopping-style experience.
      </div>
    </footer>
  );
}

export default Footer;
