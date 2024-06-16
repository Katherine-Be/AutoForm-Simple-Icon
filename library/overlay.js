class Overlay {
    constructor() {
        this.logoText = "";
        this.logoTextColor = "";
    }
    setLogoText(text) {
        this.logoText = text;
    }
    setLogoTextColor(color) {
        this.logoTextColor = color;
    }
    render() {
        return `
            <text x="150" y="100" text-anchor="middle" fill="${this.logoTextColor}" font-size="80">${this.logoText}</text>
        `;
    }
};

module.exports = Overlay;