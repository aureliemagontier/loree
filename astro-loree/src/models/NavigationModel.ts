export interface NavItem {
    label: string;
    href: string;
    isActive: boolean;
}

export class NavigationModel {
    items: NavItem[];

    constructor() {
        this.items = [
            { label: 'Accueil', href: '#accueil', isActive: true },
            { label: 'À Propos', href: '#presentation', isActive: false },
            { label: 'Services', href: '#services', isActive: false },
            { label: 'Packs', href: '#tarifs', isActive: false },
            { label: 'Contact', href: '#contact', isActive: false }
        ];
    }

    getItems(): NavItem[] {
        return this.items;
    }
}
