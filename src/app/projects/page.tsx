import Image from "next/image";
import { Metadata } from "next";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Proyek | Website Pribadi",
  description: "Daftar proyek yang telah saya selesaikan",
};

export default function Projects() {
  const projects = [
    {
      title: 'Personal Website',
      description: 'Website portfolio pribadi yang dibuat menggunakan Next.js 14 dan Tailwind CSS. Menampilkan informasi tentang diri, proyek, dan artikel teknis.',
      image: '/projects/personal website.jpeg',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/farizge/website-pribadi',
      live: 'https://farizge.vercel.app',
    },
    {
      title: 'E-Learning Platform',
      description: 'Platform pembelajaran online dengan fitur kursus, quiz, dan tracking progress. Menggunakan React untuk frontend dan Node.js untuk backend.',
      image: '/projects/e-learning.jpeg',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/farizge/elearning-platform',
      live: 'https://elearning-demo.vercel.app',
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur kategori, deadline, dan kolaborasi tim. Dibuat dengan React Native untuk platform mobile.',
      image: '/projects/task management app.jpeg',
      tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      github: 'https://github.com/farizge/task-management',
    },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
        <p className="text-xl text-gray-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan, baik untuk pembelajaran
          maupun pengembangan skill.
        </p>
      </section>

      <section className="grid gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Source Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}