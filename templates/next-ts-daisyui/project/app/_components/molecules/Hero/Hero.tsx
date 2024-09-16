export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-content text-neutral text-center  min-w-full py-8 sm:p-12 md:p-24">
        <div className="max-w-2xl bg-white/25 backdrop-blur-md p-8 md:px-16 md:py-12 rounded-sm">
          <h1 className="mb-5 text-6xl font-bold font-bona_nova"> {{name}} </h1>
          <h2 className="mb-5 text-4xl font-bold font-bona_nova">
            Next.js TypeScript Tailwind DaisyUI
          </h2>
          <p className=" text-lg font-medium">
            A solid foundation for building modern web applications using a
            powerful stack.
          </p>
        </div>
      </div>
    </div>
  );
}
