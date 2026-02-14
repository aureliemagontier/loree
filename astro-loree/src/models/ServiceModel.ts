export interface ServiceItem {
    icon: string;
    title: string;
    description: string;
    details: string[];
    price?: string;
}

export class ServiceModel {
    services: ServiceItem[];

    constructor() {
        this.services = [
            {
                icon: '💬',
                title: 'Communication',
                description: 'Stratégie de communication adaptée à votre identité et vos objectifs.',
                details: ['Audit de communication', 'Stratégie personnalisée', 'Copywriting professionnel'],
                price: 'Mensuel : 150€ à 300€'
            },
            {
                icon: '🌐',
                title: 'Création Web',
                description: 'Sites web modernes et responsifs, conçus pour refléter votre univers.',
                details: ['Design personnalisé', 'Responsive design', 'SEO optimisé'],
                price: 'À partir de 2000€'
            },
            {
                icon: '👥',
                title: 'Community Manager',
                description: 'Gestion de vos réseaux sociaux avec contenu authentique.',
                details: ['Création de contenu', '4 posts/semaine', 'Modération et engagement'],
                price: '450€/mois'
            },
            {
                icon: '🎨',
                title: 'Identité Visuelle',
                description: 'Création d\'une identité visuelle cohérente et distinctive.',
                details: ['Logo unique', 'Charte graphique', 'Tous les supports'],
                price: 'Sur devis'
            }
        ];
    }

    getAll(): ServiceItem[] {
        return this.services;
    }
}
