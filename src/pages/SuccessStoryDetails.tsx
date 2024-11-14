import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import { LineChart, Target, Users, Lightbulb, Calendar } from 'lucide-react';

const successStories = {
  'beauty-brand-success': {
    title: 'Success Story: Natural Beauty Co.',
    subtitle: 'De startup locale à leader du marché des cosmétiques naturels',
    image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    date: '2024-03-15',
    duration: '12 mois',
    industry: 'Cosmétiques',
    challenge: 'Natural Beauty Co. cherchait à se développer au-delà de son marché local tout en maintenant son engagement envers des produits naturels et durables.',
    solution: 'Une stratégie digitale complète combinant e-commerce, marketing de contenu et engagement communautaire.',
    results: [
      {
        title: 'Croissance Explosive',
        description: 'Augmentation de 400% des ventes en ligne en 12 mois.',
        icon: LineChart
      },
      {
        title: 'Efficacité Opérationnelle',
        description: 'Réduction de 60% du temps de traitement des commandes.',
        icon: Target
      },
      {
        title: 'Engagement Client',
        description: 'Création d\'une communauté de 250K+ followers engagés.',
        icon: Users
      },
      {
        title: 'Innovation Produit',
        description: 'Lancement de 5 nouvelles gammes de produits basées sur les retours clients.',
        icon: Lightbulb
      }
    ],
    steps: [
      {
        title: 'Analyse et Stratégie',
        description: 'Audit complet de la présence digitale et définition des objectifs.'
      },
      {
        title: 'Optimisation E-commerce',
        description: 'Refonte de la plateforme e-commerce pour une meilleure expérience utilisateur.'
      },
      {
        title: 'Marketing Digital',
        description: 'Mise en place d\'une stratégie marketing multicanal.'
      },
      {
        title: 'Engagement Communautaire',
        description: 'Création d\'une communauté active autour de la marque.'
      }
    ],
    testimonial: {
      content: "Meet'eka a transformé notre vision du digital. Leur expertise nous a permis de passer d'une marque locale à un acteur majeur du marché.",
      author: 'Sarah Johnson',
      role: 'CEO, Natural Beauty Co.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  },
  'tech-startup-success': {
    title: 'InnovTech Solutions',
    subtitle: 'Innovation technologique et expansion internationale',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    date: '2024-02-20',
    duration: '18 mois',
    industry: 'Technologie',
    challenge: 'InnovTech Solutions avait besoin d\'accélérer son développement international tout en maintenant sa culture d\'innovation.',
    solution: 'Une approche intégrée combinant transformation digitale, formation des équipes et développement commercial.',
    results: [
      {
        title: 'Expansion Internationale',
        description: 'Présence établie dans 5 nouveaux marchés.',
        icon: LineChart
      },
      {
        title: 'Performance Équipe',
        description: 'Productivité augmentée de 75%.',
        icon: Target
      },
      {
        title: 'Innovation',
        description: '3 nouveaux brevets déposés.',
        icon: Lightbulb
      },
      {
        title: 'Croissance Équipe',
        description: 'Équipe doublée en 18 mois.',
        icon: Users
      }
    ],
    steps: [
      {
        title: 'Audit Initial',
        description: 'Évaluation complète des processus et opportunités.'
      },
      {
        title: 'Stratégie d\'Expansion',
        description: 'Définition des marchés cibles et plan d\'action.'
      },
      {
        title: 'Implémentation',
        description: 'Déploiement progressif et ajustements.'
      },
      {
        title: 'Optimisation',
        description: 'Amélioration continue des processus.'
      }
    ],
    testimonial: {
      content: "L'accompagnement de Meet'eka a été déterminant dans notre succès international.",
      author: 'Marc Dubois',
      role: 'CTO, InnovTech Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  }
};

interface ResultIconProps {
  icon: React.ElementType;
}

const ResultIcon = ({ icon: Icon }: ResultIconProps) => (
  <div className="w-12 h-12 bg-highlight rounded-xl flex items-center justify-center">
    <Icon className="w-6 h-6 text-white" />
  </div>
);

export function SuccessStoryDetails() {
  const { slug } = useParams<{ slug: string }>();
  const story = successStories[slug as keyof typeof successStories];

  if (!story) {
    return <div>Success story non trouvée</div>;
  }

  return (
    <div className="min-h-screen pt-20">
      <BackButton />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
            <div className="p-6 sm:p-8 lg:p-12 text-white">
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
                  <Calendar className="w-4 h-4" />
                  {story.date}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {story.duration}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {story.industry}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {story.title}
              </h1>
              <p className="text-xl text-white/90">{story.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Le Challenge</h2>
            <p className="text-gray-600">{story.challenge}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">Notre Solution</h2>
            <p className="text-gray-600">{story.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Résultats Clés</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {story.results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-black/5 hover:border-highlight transition-colors"
              >
                <ResultIcon icon={result.icon} />
                <h3 className="text-xl font-bold mt-4 mb-2">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Notre Approche</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {story.steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 border-2 border-black/5"
              >
                <span className="absolute -top-4 -right-4 w-8 h-8 bg-highlight text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <img
              src={story.testimonial.image}
              alt={story.testimonial.author}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            />
            <div>
              <blockquote className="text-xl sm:text-2xl mb-6">
                "{story.testimonial.content}"
              </blockquote>
              <div>
                <p className="font-bold">{story.testimonial.author}</p>
                <p className="text-white/80">{story.testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}