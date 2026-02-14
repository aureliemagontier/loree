export interface PricingFeature {
    text: string;
    included: boolean;
}

export interface PricingPlan {
    name: string;
    price: string;
    frequency?: string;
    subtitle?: string;
    features: PricingFeature[];
    isFeatured: boolean;
    buttonText: string;
    buttonStyle: 'primary' | 'secondary';
}

export class PricingModel {
    plans: PricingPlan[];

    constructor() {
        this.plans = [
            {
                name: "L'Orée Connexion",
                price: "450€",
                frequency: "/mois",
                subtitle: "Community Management Professionnel",
                features: [
                    { text: "Community Management", included: true },
                    { text: "4 posts/semaine", included: true },
                    { text: "Modération réseaux", included: true },
                    { text: "Statistiques mensuelles", included: true }
                ],
                isFeatured: false,
                buttonText: "Sélectionner",
                buttonStyle: 'secondary'
            },
            {
                name: "L'Orée Web",
                price: "2000€",
                subtitle: "Site Web Complet & Professionnel",
                features: [
                    { text: "Site web complet", included: true },
                    { text: "Responsive design", included: true },
                    { text: "5-6 pages", included: true },
                    { text: "SEO optimisé", included: true },
                    { text: "Maintenance 3 mois", included: true }
                ],
                isFeatured: true,
                buttonText: "Sélectionner",
                buttonStyle: 'primary'
            },
            {
                name: "L'Orée Signature",
                price: "Sur devis",
                subtitle: "Solution Complète sur Mesure",
                features: [
                    { text: "Identité visuelle complète", included: true },
                    { text: "Logo + Charte graphique", included: true },
                    { text: "Tous les supports", included: true },
                    { text: "Communication intégrée", included: true }
                ],
                isFeatured: false,
                buttonText: "Devis",
                buttonStyle: 'secondary'
            }
        ];
    }

    getAll(): PricingPlan[] {
        return this.plans;
    }
}
