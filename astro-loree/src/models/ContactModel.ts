export interface SocialLink {
    name: string;
    url: string;
    icon?: string;
}

export interface ContactDetails {
    email: string;
    phone: string;
    social: SocialLink[];
}

export class ContactModel {
    contactDetails: ContactDetails;

    constructor() {
        this.contactDetails = {
            email: 'aurelie.magontier@loreedesign.com',
            phone: '+33 (0)6 61 31 60 06',
            social: [
                { name: 'Instagram', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Facebook', url: '#' }
            ]
        };
    }

    getDetails(): ContactDetails {
        return this.contactDetails;
    }
}
