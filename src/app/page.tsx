import Image from 'next/image';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MySQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman'] },
    { category: 'Soft Skills', items: ['Team Collaboration', 'Problem Solving', 'Communication', 'Time Management'] },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-gray-600">
              Saya adalah mahasiswa semester 6 di Politeknik Negeri Malang, jurusan Teknologi Informasi. 
              Saya memiliki passion dalam pengembangan web dan mobile, dengan fokus khusus pada teknologi 
              frontend modern seperti React dan Next.js.
            </p>
            <p className="text-gray-600">
              Di luar kuliah, saya aktif mengembangkan proyek-proyek pribadi dan berkontribusi pada 
              komunitas pengembang. Saya percaya bahwa berbagi pengetahuan adalah cara terbaik untuk 
              belajar, itulah mengapa saya juga menulis artikel teknis di blog saya.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/profil.jpg"
              alt="About Prisca Dewi Anggita"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-600">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Politeknik Negeri Malang</h3>
          <p className="text-gray-600 mt-2">D4 Teknologi Informasi</p>
          <p className="text-gray-500">2021 - Sekarang</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• GPA: 3.8/4.0</li>
            <li>• Anggota aktif UKM Robotika</li>
            <li>• Asisten Laboratorium Pemrograman</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 