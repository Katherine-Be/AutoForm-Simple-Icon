class Overlay {
    constructor() {
        this.logoText = "";
        this.logoTextColor = "";
    }

    render() {
        return `
            <text x="50" y="50" text-anchor="middle" fill="${this.logoTextColor}" font-size="20">${this.logoText}</text>
        `;
    }
};

module.exports = {Overlay};