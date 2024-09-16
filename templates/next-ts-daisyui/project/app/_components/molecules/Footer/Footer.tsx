import { TanisJam } from '@/atoms/Icons';

export default function Footer() {
  return (
    <footer className="mb-0.5 font-nanum_gothic font-normal uppercase container mx-auto bg-zinc-800 py-4 md:px-8  text-base-content text-center border border-b border-base-100">
      <p>
        &copy; 2024 - {{name}} -{' '}
        <span className="font-bold hover:animate-spin">
          <TanisJam className="animate-bounce hover:animate-spin inline-block w-6 h-6" />
        </span>
      </p>
    </footer>
  );
}
