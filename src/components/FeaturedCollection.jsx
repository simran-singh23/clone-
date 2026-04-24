import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6&skip=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products ?? []);
        
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fff3d6] via-white to-[#d8ecff] shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[0.9fr_1.4fr] md:px-8 md:py-10">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em]
              
              text-amber-700">
                Fresh Clickables
              </p>
              <h2 className="mt-3 max-w-sm text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                New picks right above the footer
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 md:text-base">
              Upgrade your everyday
              </p>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 md:text-base">
              Big savings start here
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-900 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                  Live Source
                </p>
                <p className="mt-2 text-xl font-bold">buyyy now</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Click Flow
                </p>
                <p className="mt-2 text-xl font-bold text-slate-900">Card to page</p>
              </div>
              <div className="rounded-2xl bg-amber-400 p-4 text-slate-950">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-700">
                  Best For
                </p>
                <p className="mt-2 text-xl font-bold">Discovery</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {loading &&
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm"
                >
                  <div className="h-40 animate-pulse rounded-2xl bg-slate-200" />
                  <div className="mt-4 h-4 animate-pulse rounded bg-slate-200" />
                  <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-slate-100" />
                </div>
              ))}

            {!loading &&
              products.map((item) => (
                <Link
                  key={item.id}
                  to={`/spotlight/${item.id}`}
                  className="group overflow-hidden rounded-3xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description.slice(0, 72)}...
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-xl font-black text-emerald-600">
                          ${item.price}
                        </p>
                        <p className="text-xs text-slate-500">
                          Rating {item.rating}
                        </p>
                      </div>

                      <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-amber-500 group-hover:text-slate-950">
                        Open
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
