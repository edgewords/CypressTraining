// This uses a plugin called cypress-audit which utilises googles lighthouse api
//seems to only work in headless & ONLY with chrome
// so use: npx cypress run --browser chrome --headless --spec cypress\integration\performance\*.spec.js 
describe('Performance Tests', function () {
    it('should check performance - standard options', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
        cy.lighthouse(); //Performance
        cy.pa11y(); //Accessibility
    });

    it.only('should check performance - custom options', function () {
        const customThresholds = {
            performance: 75,
            accessibility: 95,
            'best-practices': 93,
            seo: 90,
            'first-meaningful-paint': 2000,
            'interactive': 3000,
            'speed-index': 3000
        };
        const desktopConfig = {
            formFactor: 'desktop',
            screenEmulation: {
                mobile: false,
                width: 1920,
                height: 1080,
                deviceScaleFactor: 1,
                disabled: false,
            }
        };

        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/');
        cy.lighthouse(customThresholds, desktopConfig); //Performance
        cy.pa11y(); //Accessibility
    });
});