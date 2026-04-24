import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SpotlightProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="p-6 text-lg font-semibold">Loading spotlight...</div>;
  }

  if (!product || product.message) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900">Product not found</h2>
        <Link
          to="/"
          className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-slate-950 via-slate-800 to-amber-600 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.05fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Product Spotlight
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                Category: {product.category}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                Brand: {product.brand || "Premium Pick"}
              </span>
              <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black">
                Rating {product.rating}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="text-4xl font-black text-emerald-300">
                ${product.price}
              </p>
              <p className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-100">
                {product.discountPercentage}% off
              </p>
              <p className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-100">
                Stock {product.stock}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-yellow-400 px-5 py-3 font-semibold text-black transition hover:bg-yellow-300">
                Add to cart
              </button>
              <Link
                to="/"
                className="rounded-full border border-white/30 px-5 py-3 font-semibold text-white transition hover:border-amber-200 hover:text-amber-100"
              >
                Continue shopping
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl sm:col-span-2">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-80 w-full rounded-[1.5rem] object-cover"
              />
            </div>

            {(product.images ?? []).slice(0, 2).map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-lg"
              >
                <img
                  src={image}
                  alt={product.title}
                  className="h-40 w-full rounded-[1.25rem] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Why this stands out</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Rating
              </p>
              <p className="mt-2 text-3xl font-black text-slate-900">
                {product.rating}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Reviews
              </p>
              <p className="mt-2 text-3xl font-black text-slate-900">
                {product.reviews?.length ?? 0}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Availability
              </p>
              <p className="mt-2 text-3xl font-black text-slate-900">
                {product.availabilityStatus || "In stock"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-amber-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Quick jump</h2>
          <div className="mt-5 grid gap-3">
            <Link
              to="/new"
              className="rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-amber-400"
            >
              See more new releases
            </Link>
            <Link
              to="/electronics"
              className="rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-amber-400"
            >
              Explore electronics
            </Link>
            <Link
              to="/service"
              className="rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-amber-400"
            >
              Need customer support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpotlightProduct;
