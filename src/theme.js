const colors = {
    background: "#E5E5E5",
    white: "#ffffff",
    dark: "#313848",
    transluscentRed: "#EA7052",
    orange: "#E48E45",
    green: "#4DA47E",
    purple: "#7B7FDA",
    transparent: "transparent",

}

const breakpoints = {
    mobileSmall: "320px",
    mobileMedium: "375px",
    mobileLarge: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopLarge: "1200px",
    desktop: "2560px",
};

const sizes = {
    maxWidth: "1200px",
    minWidth: "280px",
    largePadding: "64px",
    mediumPadding: "32px",
    smallPadding: "16px",
    navbarHeight: "60px",
    listMarginRight: "1rem",
    largeFontSize: "1.3rem",
    bold: "600",
    spacing: "2rem",
    headlineFontSize: "3rem",
    headlineLetterSpacing: "-1px",
    sideNavWidth: "200px",
    
};

export const devices = {
    mobileSmall: `(max-width: ${breakpoints.mobileSmall})`,
    mobileMedium: `(max-width: ${breakpoints.mobileMedium})`,
    mobileLarge: `(max-width: ${breakpoints.mobileLarge})`,
    tablet: `(max-width: ${breakpoints.tablet})`,
    laptop: `(max-width: ${breakpoints.laptop})`,
    laptopLarge: `(max-width: ${breakpoints.laptopLarge})`,
    desktop: `(max-width: ${breakpoints.desktop})`,
};

const theme = {
    colors,
    sizes,
    breakpoints,
}

export default theme;