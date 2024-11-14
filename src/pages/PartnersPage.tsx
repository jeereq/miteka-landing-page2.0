import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, Building2, Users, Award, Star } from 'lucide-react';

const categories = ['Tous', 'Conseil', 'Formation', 'Technologie', 'Marketing'];

const partners = [
  {
    slug: 'meeteka-consulting',
    name: 'Meet\'eka Consulting',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Cabinet de conseil spécialisé dans l\'accompagnement des entreprises congolaises dans leur transformation digitale.',
    category: 'Conseil',
    expertise: ['Transformation Digitale', 'Innovation', 'Stratégie'],
    services: [
      {
        name: 'Accompagnement Startup',
        description: 'Programme personnalisé pour startups en phase de croissance',
        price: '250.000 FC/mois'
      },
      {
        name: 'Conseil en Innovation',
        description: 'Développement de solutions innovantes',
        price: 'Sur devis'
      }
    ],
    stats: [
      { label: 'Clients', value: '50+' },
      { label: 'Projets', value: '100+' },
      { label: 'Experts', value: '15+' }
    ]
  },
  {
    slug: 'meeteka-academy',
    name: 'Meet\'eka Academy',
    logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Centre de formation d\'excellence dédié au développement des compétences digitales en RDC.',
    category: 'Formation',
    expertise: ['Formation', 'Coaching', 'Développement'],
    services: [
      {
        name: 'Formation Leadership',
        description: 'Programme intensif de développement du leadership',
        price: '150.000 FC'
      },
      {
        name: 'Coaching Personnalisé',
        description: 'Accompagnement individuel',
        price: '100.000 FC/session'
      }
    ],
    stats: [
      { label: 'Apprenants', value: '200+' },
      { label: 'Formations', value: '20+' },
      { label: 'Formateurs', value: '10+' }
    ]
  }
];

export function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Nos <span className="text-highlight">Partenaires</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Découvrez notre réseau d'experts et de professionnels dédiés à votre réussite.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Rechercher un partenaire..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-highlight text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPartners.map((partner, index) => (
            <Link
              key={index}
              to={`/partenaires/${partner.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-black/5 hover:border-highlight transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-highlight transition-colors">
                      {partner.name}
                    </h2>
                    <span className="px-3 py-1 bg-black/5 rounded-full text-sm">
                      {partner.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {partner.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {partner.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/5 rounded-full text-sm"
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {partner.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-xl p-4 group-hover:bg-highlight/10 transition-colors"
                    >
                      <p className="text-2xl font-bold group-hover:text-highlight">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {partner.services.map((service, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
                    >
                      <div>
                        <h3 className="font-medium mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-500">
                          {service.description}
                        </p>
                      </div>
                      <span className="text-highlight font-bold whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <span className="inline-flex items-center gap-2 text-black group-hover:text-highlight transition-colors">
                    Voir les détails
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}