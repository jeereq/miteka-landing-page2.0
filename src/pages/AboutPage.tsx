import React from 'react';
import { Users, Target, Award, Heart, Globe, Zap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans chaque projet pour contribuer au développement numérique de la RDC.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Nous privilégions les partenariats locaux et le développement des talents congolais.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Nous développons des solutions adaptées aux défis spécifiques du marché congolais.'
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'Nous œuvrons pour la transformation digitale des entreprises de la RDC et leur rayonnement international.'
  }
];

const milestones = [
  {
    year: '2023',
    title: 'Création à Kinshasa',
    description: 'Lancement de Meet\'eka avec une vision ambitieuse : devenir le leader de la transformation digitale en RDC.'
  },
  {
    year: '2023',
    title: 'Premiers Succès',
    description: 'Accompagnement réussi de nos premiers clients et développement de partenariats stratégiques.'
  },
  {
    year: '2024',
    title: 'Innovation & Formation',
    description: 'Lancement de Meet\'eka Academy pour former la nouvelle génération d\'entrepreneurs digitaux congolais.'
  },
  {
    year: '2024',
    title: 'Expansion',
    description: 'Développement de notre présence nationale et diversification de notre offre de services.'
  }
];

const stats = [
  { value: '50+', label: 'Entreprises Congolaises Accompagnées' },
  { value: '3+', label: 'Villes Principales' },
  { value: '95%', label: 'Satisfaction Client' },
  { value: '10M$+', label: 'Investissements Générés' }
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Kinshasa Business District"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Notre <span className="text-highlight">Histoire</span>
            </h1>
            <p className="text-xl text-gray-300">
              Depuis 2023, Meet'eka transforme le paysage digital de la RDC en accompagnant les entreprises congolaises dans leur croissance et leur transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-highlight" />
                <h2 className="text-3xl font-bold">Notre Mission</h2>
              </div>
              <p className="text-lg text-gray-600">
                Accompagner les entreprises congolaises dans leur transformation digitale, en leur fournissant des solutions innovantes adaptées au contexte local et un accompagnement personnalisé pour réaliser leur plein potentiel sur le marché national et international.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-highlight" />
                <h2 className="text-3xl font-bold">Notre Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                Devenir le catalyseur de la transformation digitale en RDC, en créant un écosystème numérique dynamique qui propulse l'innovation et la croissance des entreprises congolaises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Nos <span className="text-highlight">Valeurs</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10"
                >
                  <div className="w-12 h-12 bg-highlight rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-bold text-highlight mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Notre <span className="heading-highlight">Parcours</span>
          </h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-black/5 hover:border-highlight transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-3xl font-bold text-highlight">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Rejoignez les entreprises congolaises qui font confiance à Meet'eka pour leur croissance et leur transformation digitale.
          </p>
          <button className="px-8 py-4 bg-highlight text-white rounded-full font-bold hover:bg-black transition-all duration-300 hover:scale-105">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}