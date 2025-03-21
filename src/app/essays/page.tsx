import Link from 'next/link';
import { FaCalendar, FaClock } from 'react-icons/fa';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esai | Website Pribadi",
  description: "Daftar artikel dan esai yang telah saya tulis",
};

export default function Essays() {
  const essays = [
    {
      title: 'Memulai dengan Next.js 14',
      description: 'Pengalaman dan pembelajaran dalam menggunakan Next.js 14 untuk pengembangan website modern.',
      date: '19 Maret 2024',
      category: 'Web Development',
      slug: 'memulai-dengan-nextjs-14',
    },
    {
      title: 'Belajar Tailwind CSS',
      description: 'Mengoptimalkan pengembangan UI dengan Tailwind CSS dan best practices yang perlu diketahui.',
      date: '15 Maret 2024',
      category: 'CSS',
      slug: 'belajar-tailwind-css',
    },
    {
      title: 'Tips Menjadi Frontend Developer',
      description: 'Kumpulan tips dan pengalaman dalam perjalanan menjadi seorang Frontend Developer.',
      date: '10 Maret 2024',
      category: 'Career',
      slug: 'tips-frontend-developer',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Essays</h1>
      
      <div className="space-y-12">
        {essays.map((essay) => (
          <article key={essay.slug} className="group">
            <Link href={`/essays/${essay.slug}`}>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span>{essay.date}</span>
                  <span>•</span>
                  <span>{essay.category}</span>
                </div>
                
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {essay.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  {essay.description}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}