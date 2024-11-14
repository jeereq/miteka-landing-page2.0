import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

const team = [
  {
    name: 'Blaise Mposo',
    role: 'Directeur Général',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Leader visionnaire avec une expertise dans la transformation digitale des entreprises africaines.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Sacré Mbiku',
    role: 'Lead Développeur & Coach',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Expert en développement full-stack avec plus de 8 ans d\'expérience. Spécialisé en architecture cloud et DevOps, il dirige des projets innovants tout en formant la nouvelle génération de développeurs.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Jeereq Minganda',
    role: 'Lead Développeur',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Architecte logiciel chevronné avec une expertise en React, Node.js et systèmes distribués. Pionnier dans l\'adoption des technologies blockchain et l\'IA.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Percy Kandodi',
    role: 'Chargé Marketing',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Stratège marketing créatif avec une expertise dans le développement de marques digitales.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (team.length - itemsPerPage + 1)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? team.length - itemsPerPage : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (team.length - itemsPerPage + 1)
    );
  };

  return (
    <section className="section-padding overflow-hidden" id="team">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Notre <span className="heading-highlight">Équipe</span>
        </h2>
        <p className="text-xl text-gray-600">
          Les experts derrière votre succès digital
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-highlight hover:text-white transition-colors duration-300"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-highlight hover:text-white transition-colors duration-300"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Team Cards Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full min-w-[calc(100%/3)] px-4"
            >
              <div className="group bg-white border-2 border-black rounded-3xl overflow-hidden hover:bg-highlight transition-colors duration-300 h-full">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3 group-hover:text-white/90 transition-colors">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-white/90 transition-colors line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-black/10 rounded-full hover:bg-black hover:text-white transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-black/10 rounded-full hover:bg-black hover:text-white transition-colors"
                      aria-label={`Twitter de ${member.name}`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: team.length - itemsPerPage + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-highlight' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}