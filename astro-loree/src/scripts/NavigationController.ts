export class NavigationController {
    private sectionIds: string[];
    private currentSectionId: string;
    private prevBtn: HTMLElement | null;
    private nextBtn: HTMLElement | null;

    constructor(sectionIds: string[]) {
        this.sectionIds = sectionIds;
        this.currentSectionId = sectionIds[0];
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');

        this.init();
    }

    private init(): void {
        this.setupArrowNavigation();
        this.setupNavLinks();
        this.setupScrollSpy();
        this.setupButtons();
    }

    private updateNavBar(sectionId: string): void {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href')?.slice(1) === sectionId) {
                link.classList.add('active');
            }
        });
    }

    private goToSectionById(sectionId: string): void {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            this.currentSectionId = sectionId;
            this.updateNavBar(sectionId);
        }
    }

    private getCurrentSectionIndex(): number {
        return this.sectionIds.indexOf(this.currentSectionId);
    }

    private setupArrowNavigation(): void {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const currentIndex = this.getCurrentSectionIndex();
                let nextIndex = currentIndex - 1;
                if (nextIndex < 0) {
                    nextIndex = this.sectionIds.length - 1;
                }
                this.goToSectionById(this.sectionIds[nextIndex]);
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const currentIndex = this.getCurrentSectionIndex();
                let nextIndex = currentIndex + 1;
                if (nextIndex >= this.sectionIds.length) {
                    nextIndex = 0;
                }
                this.goToSectionById(this.sectionIds[nextIndex]);
            });
        }
    }

    private setupNavLinks(): void {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href) {
                    const sectionId = href.slice(1);
                    this.goToSectionById(sectionId);
                }
            });
        });

        // Handle internal links like "L'Orée" hover links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            if (!link.classList.contains('nav-link')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    if (href) {
                        const sectionId = href.slice(1);
                        this.goToSectionById(sectionId);
                    }
                });
            }
        });
    }

    private setupScrollSpy(): void {
        window.addEventListener('scroll', () => {
            // Throttling or debouncing could be added here for performance
            let closestSection = this.sectionIds[0];
            let closestDistance = Infinity;

            this.sectionIds.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    const distance = Math.abs(section.offsetLeft - window.scrollX);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = id;
                    }
                }
            });

            if (this.currentSectionId !== closestSection) {
                this.currentSectionId = closestSection;
                this.updateNavBar(closestSection);
            }
        });
    }

    private setupButtons(): void {
        const ctaBtn = document.querySelector('.cta-button');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', (e) => {
                e.preventDefault();

                // If it's the contact form submit, don't scroll to presentation
                if (ctaBtn.getAttribute('type') === 'submit') return;

                this.goToSectionById('presentation');
            });
        }

        // Contact form
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
                (contactForm as HTMLFormElement).reset();
            });
        }

        // Pricing buttons
        document.querySelectorAll('.pricing-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const card = (e.target as Element).closest('.pricing-card');
                const plan = card?.querySelector('h3')?.textContent;
                if (plan) {
                    alert(`Vous avez sélectionné le plan: ${plan}`);
                }
            });
        });
    }
}
