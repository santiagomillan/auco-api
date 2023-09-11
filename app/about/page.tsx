import Image from 'next/image';
import React from 'react';

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <Image
        src="/photo.jpg"
        alt="Santiago Millan"
        width={400}
        height={400}
        className="rounded-full mb-6 mt-16 "
      />
      <h1 className="text-4xl font-bold text-gray-800">Hola, Soy Santiago Millan</h1>
      <h2 className="text-xl text-gray-600">Ing en Telecomunicaciones / Developer</h2>
      <div className="flex items-center mt-4">
        <a
          href="https://github.com/santiagomillan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 mr-4"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-andres-millan-pardo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
      </div>
      <div className="mt-8 max-w-3xl">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Acerca de mí</h2>
          <p className="text-gray-600">
            Soy un apasionado por la tecnología, me gusta estar constantemente aprendiendo y retándome profesionalmente. Como Ingeniero, busco ser participativo y proactivo en la toma de decisiones de los equipos, me veo liderando diferentes equipos para llevar a buen término los proyectos en los que trabajo. Estoy orientado a ser un Full stack Developer, ya que tengo conocimientos en las diferentes áreas del desarrollo. También tengo interés en la infraestructura y me encuentro aprendiendo diferentes tecnologías para mejorar mi perfil y mi seniority.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Lo que busco</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-16 ">
            <li>Nuevas oportunidades de crecimiento</li>
            <li>Continuar aprendiendo y ponerlo en práctica</li>
            <li>Mayores ingresos</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
 