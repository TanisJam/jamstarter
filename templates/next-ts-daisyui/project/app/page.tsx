import { Hero } from '@/molecules/Hero';
import { LINKS } from '@/app/_lib/links';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container mx-auto">
      <Hero />
      <section className="flex flex-col items-center  gap-2">
        <div className="collapse bg-base-200 rounded-sm ">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">🚀 Next.js</div>
          <div className="collapse-content">
            <p>
              A React framework for server-side rendering and static site
              generation.
            </p>
            <Link
              href={LINKS.nextJs}
              className="btn btn-sm bg-orange-600 text-base-300 hover:text-base-content mt-2"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="collapse bg-base-200 rounded-sm">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            🔷 TypeScript
          </div>
          <div className="collapse-content">
            <p>
              A typed superset of JavaScript that enhances code quality and
              maintainability.
            </p>
            <Link
              href={LINKS.typeScript}
              className="btn btn-sm bg-orange-600 text-base-300 hover:text-base-content mt-2"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="collapse bg-base-200 rounded-sm">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            🌬️ Tailwind CSS
          </div>
          <div className="collapse-content">
            <p>A utility-first CSS framework for rapid UI development.</p>
            <Link
              href={LINKS.tailwindCss}
              className="btn btn-sm bg-orange-600 text-base-300 hover:text-base-content mt-2"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="collapse bg-base-200 rounded-sm">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">🌼 DaisyUI</div>
          <div className="collapse-content">
            <p>A collection of customizable UI components for Tailwind CSS.</p>
            <Link
              href={LINKS.daisyUi}
              className="btn btn-sm bg-orange-600 text-base-300 hover:text-base-content mt-2"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="collapse bg-base-200 rounded-sm">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            ⚛️ Atomic Design
          </div>
          <div className="collapse-content">
            <p>
              A methodology for creating scalable and maintainable user
              interfaces.
            </p>
            <Link
              href={LINKS.atomicDesign}
              className="btn btn-sm bg-orange-600 text-base-300 hover:text-base-content mt-2"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
