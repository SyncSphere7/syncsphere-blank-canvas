import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">We couldn’t find that page</h1>
        <p className="mt-4 text-ink-soft">It may have moved when we updated our website.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Go to the homepage</Link>
          <Link href="/contact" className="btn-outline">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
