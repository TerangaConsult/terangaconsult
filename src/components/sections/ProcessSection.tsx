import React from 'react';

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-white text-primary">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Notre Processus
        </h2>
        <p className="text-center text-primary/70 max-w-2xl mx-auto mb-16">
          Une approche structurée en 4 étapes pour transformer votre établissement
        </p>
        
        {/* Roadmap - Version desktop */}
        <div className="hidden md:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Ligne de progression horizontale */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-primary/20 -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-4 gap-6">
              {/* Étape 1 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 mb-6 flex items-center justify-center text-2xl font-bold text-primary">
                    1
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-primary">Audit & Diagnostic</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Analyse de votre présence en ligne</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Étude de votre e-réputation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Benchmark concurrentiel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Étape 2 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 mb-6 flex items-center justify-center text-2xl font-bold text-primary">
                    2
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-primary">Stratégie</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Plan d'action personnalisé</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Objectifs mesurables</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Calendrier d'implémentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 mb-6 flex items-center justify-center text-2xl font-bold text-primary">
                    3
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-primary">Mise en œuvre</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Accompagnement pas à pas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Formation de vos équipes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Déploiement des actions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Étape 4 */}
              <div className="relative">
                <div className="flex flex-col items-center">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 mb-6 flex items-center justify-center text-2xl font-bold text-primary">
                    4
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold mb-3 text-primary">Suivi & Optimisation</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Analyse des performances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Rapports détaillés</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Ajustements stratégiques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Roadmap - Version mobile (verticale) */}
        <div className="md:hidden">
          <div className="relative max-w-md mx-auto">
            {/* Ligne de progression verticale */}
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-primary/20"></div>
            
            <div className="space-y-16">
              {/* Étape 1 */}
              <div className="relative">
                <div className="flex">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
                    1
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md ml-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Audit & Diagnostic</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Analyse de votre présence en ligne</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Étude de votre e-réputation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Benchmark concurrentiel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Étape 2 */}
              <div className="relative">
                <div className="flex">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
                    2
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md ml-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Stratégie</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Plan d'action personnalisé</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Objectifs mesurables</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Calendrier d'implémentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Étape 3 */}
              <div className="relative">
                <div className="flex">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
                    3
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md ml-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Mise en œuvre</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Accompagnement pas à pas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Formation de vos équipes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Déploiement des actions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Étape 4 */}
              <div className="relative">
                <div className="flex">
                  {/* Point avec numéro */}
                  <div className="w-16 h-16 rounded-full bg-secondary z-10 flex items-center justify-center text-2xl font-bold text-primary shrink-0">
                    4
                  </div>
                  {/* Contenu */}
                  <div className="bg-white border border-primary/10 rounded-lg p-6 shadow-md ml-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">Suivi & Optimisation</h3>
                    <ul className="text-sm space-y-2 text-primary/80">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Analyse des performances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Rapports détaillés</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Ajustements stratégiques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a href="#contact" className="bg-secondary text-primary px-8 py-3 rounded-lg inline-block hover:bg-secondary/90 transition-colors">
            Démarrer votre transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 