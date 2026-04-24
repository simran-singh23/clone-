import { Link } from "react-router-dom";

const quickActions = [
  {
    title: "Your Orders",
    desc: "Track packages, edit or cancel eligible orders.",
    to: "/orders",
  },
  {
    title: "Returns and Refunds",
    desc: "Start a return, request a replacement, or review refund status.",
    to: "/footer/returns",
  },
  {
    title: "Manage Prime",
    desc: "Check Prime-style benefits and subscription details.",
    to: "/prime",
  },
  {
    title: "Payment Settings",
    desc: "Review checkout and payment-related options.",
    to: "/pay",
  },
  {
    title: "Account Settings",
    desc: "Update sign-in details and account preferences.",
    to: "/login",
  },
  {
    title: "Sell on Amazon",
    desc: "Explore seller onboarding and business tools.",
    to: "/sell",
  },
];

const supportTopics = [
  "Delivery timelines and order tracking",
  "Returns, refunds, and replacement requests",
  "Prime membership and shopping benefits",
  "Payment methods and checkout issues",
];

const helpResources = [
  {
    title: "Need account help?",
    desc: "Go to sign in and account settings to update your details securely.",
    to: "/login",
  },
  {
    title: "Looking for today’s offers?",
    desc: "Browse ongoing deals and featured savings in one place.",
    to: "/deals",
  },
  {
    title: "Need category support?",
    desc: "Explore electronics, fashion, and home sections from the storefront.",
    to: "/electronics",
  },
];

function CustomerService() {
  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-[#131921] via-[#1f3a5f] to-[#f59e0b] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Customer Service
            </p>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">
              Hello, what can we help you with today?
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
              Find quick support for orders, returns, payments, Prime benefits,
              and account access without jumping through too many pages.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/orders"
                className="rounded-full bg-yellow-400 px-5 py-2.5 font-semibold text-black transition hover:bg-yellow-300"
              >
                View Your Orders
              </Link>
              <Link
                to="/footer/returns"
                className="rounded-full border border-white/30 px-5 py-2.5 font-semibold text-white transition hover:border-yellow-300 hover:text-yellow-200"
              >
                Start a Return
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-200">
              Popular Help
            </p>
            <div className="mt-5 space-y-3">
              {supportTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-100"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700">
            Support is available for orders, account access, and refund journeys.
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-slate-700">
            Use the quick actions below to jump straight into the right page.
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-slate-700">
            Footer links now open dedicated pages for company, social, and help info.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Quick actions</h2>
            <p className="mt-2 text-sm text-slate-600">
              Pick the section that best matches your issue.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {card.desc}
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-700">
                Open section
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-14 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Recommended help</h2>
          <div className="mt-5 grid gap-4">
            {helpResources.map((resource) => (
              <Link
                key={resource.title}
                to={resource.to}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <h3 className="font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {resource.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Still need help?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Try the footer pages for company details, support guidance, social
            updates, or return to the homepage to continue browsing products.
          </p>
          <div className="mt-6 grid gap-3">
            <Link
              to="/footer/about"
              className="rounded-2xl bg-white/10 px-4 py-3 text-sm transition hover:bg-white/15"
            >
              Visit About page
            </Link>
            <Link
              to="/footer/returns"
              className="rounded-2xl bg-white/10 px-4 py-3 text-sm transition hover:bg-white/15"
            >
              Read returns guidance
            </Link>
            <Link
              to="/"
              className="rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerService;
