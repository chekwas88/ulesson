import styled, { css } from "styled-components";
import theme, { devices } from "../theme";


export const Header = styled.header`
    height: ${(props) => props.height || "4rem"};
    background-color: ${theme.colors.dark};
    padding-top: ${(props) => props.paddingTop || 0};
    padding-left: ${(props) => props.paddingLeft || 0};
    padding-right: ${(props) => props.paddingRight || 0};
    padding-bottom: ${(props) => props.paddingBottom || 0};
    margin-top: ${(props) => props.marginTop || 0};
    margin-left: ${(props) => props.marginLeft || 0};
    margin-right: ${(props) => props.marginRight || 0};
    margin-bottom: ${(props) => props.marginBottom || 0};
    display: ${(props) => props.display || "flex"};
    flex-direction: ${(props) => props.flexDirection || "column"};
    width: ${(props) => props.width || "100%"};
    color: ${(props) => props.color || "inherit"};

    ${(props) =>
        props.borderColor &&
        css`
            border-color: ${props.borderColor};
        `};

    ${(props) =>
        props.textTransform &&
        css`
            text-transform: ${props.textTransform};
    `};

    ${(props) =>
        props.borderBottomWidth &&
        css`
            border-style: solid;
            border-bottom-width: ${props.borderBottomWidth};
        `};

    ${(props) =>
        props.borderTopWidth &&
        css`
            border-style: solid;
            border-top-width: ${props.borderTopWidth};
        `};

    ${(props) =>
        props.hideHeader &&
        css`
            display: none;
        `}
`;

export const Headline = styled.h1`
    color: ${(props) => props.color || "inherit"};
    font-weight: ${(props) => props.fontWeight || theme.sizes.bold};
    font-size: ${(props) => props.fontSize || theme.sizes.headlineFontSize};
    
    letter-spacing: ${(props) => props.letterSpacing || theme.sizes.headlineLetterSpacing};
    ${(props) =>
        props.textTransform &&
        css`
            text-transform: ${props.textTransform};
        `};

    ${(props) =>
    props.fontFamily &&
    css`
        font-family: ${props.fontFamily};
    `};
    @media ${devices.tablet} {
        font-size: ${(props) => props.tabletHeadlineFontSize || "1.5rem"};
    }

    @media ${devices.mobileLarge} {
        font-size: ${(props) => props.mobileHeadlineFontSize || "1.5rem"};

    }
`;

export const Span = styled.span`
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `};
   

        ${(props) =>
        props.color &&
        css`
            color: ${props.color};
        `};
    ${(props) =>
        props.fontWeight &&
        css`
            font-weight: ${props.fontWeight};
        `};

    
    ${(props) =>
        props.padding &&
        css`
            padding: ${props.padding};
    `};

    ${(props) =>
        props.borderRadius &&
    css`
        border-radius: ${props.borderRadius};
    `};

        
   
    ${(props) =>
        props.transform &&
        css`
            text-transform: ${props.transform};
        `};

    ${(props) =>
    props.textAlign &&
    css`
        text-align: ${props.textAlign};
    `};

    

    ${(props) =>
        props.marginRight &&
        css`
            margin-right: ${props.marginRight};
        `};

    ${(props) =>
        props.marginLeft &&
        css`
            margin-left: ${props.marginLeft};
    `};


    ${(props) =>
        props.opacity &&
        css`
            opacity: ${props.opacity};
        `};
    display: ${(props) => props.display || "flex"};
    color: ${(props) => props.color || "inherit"};
`;

export const Paragraph = styled.p`
    margin-top: ${(props) => props.marginTop || 0};
    margin-left: ${(props) => props.marginLeft || 0};
    margin-right: ${(props) => props.marginRight || 0};
    margin-bottom: ${(props) => props.marginBottom || 0};
    
    ${(props) =>
        props.padding &&
        css`
            padding: ${props.padding};
        `};
    ${(props) =>
    props.fontFamily &&
    css`
        font-family: ${props.fontFamily};
    `};

    ${(props) =>
        props.margin &&
        css`
            margin: ${props.margin};
        `};

    ${(props) =>
    props.opacity &&
    css`
        opacity: ${props.opacity};
    `};


    ${(props) =>
        props.paddingLeft &&
        css`
            padding-left: ${props.paddingLeft};
        `};

    ${(props) =>
        props.paddingRight &&
        css`
            padding-right: ${props.paddingRight};
        `};
    
    
    ${(props) =>
        props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `};
    ${(props) =>
        props.fontWeight &&
        css`
            font-weight: ${props.fontWeight};
        `};
    ${(props) =>
        props.letterSpacing &&
        css`
            letter-spacing: ${props.letterSpacing};
        `};
    ${(props) =>
        props.wordSpacing &&
        css`
            word-spacing: ${props.wordSpacing};
        `};
    ${(props) =>
        props.transform &&
        css`
            text-transform: ${props.transform};
        `};

    ${(props) =>
        props.textOverflow &&
        css`
            text-overflow: ${props.textOverflow};
        `}

    ${(props) =>
        props.lineHeight &&
        css`
            line-height: ${props.lineHeight};
        `};
    ${(props) =>
        props.height &&
        css`
            height: ${props.height};
        `};

    ${(props) =>
        props.wordWrap &&
        css`
            word-wrap: ${props.wordWrap};
        `};
    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `};

    color: ${(props) => props.color || "inherit"};
    

    ${(props) =>
        props.sentenceCase &&
        css`
            text-transform: lowercase !important;
            &::first-letter {
                text-transform: uppercase !important;
            }
        `}


    
    @media ${devices.mobileLarge} {
        font-size: ${(props) => props.mobileFontSize || props.fontSize};
        ${(props) =>
        props.mobileWidth &&
            css`
                width: ${props.mobileWidth || props.tabletWidth || props.width};
            `};

        ${(props) =>
        props.mobileHeight &&
            css`
                height: ${props.mobileHeight || props.tabletHeight || props.height};
            `};
        
    }
    
`;

export const Cell = styled.div`
    padding-top: ${(props) => props.paddingTop || 0};
    padding-left: ${(props) => props.paddingLeft || 0};
    padding-right: ${(props) => props.paddingRight || 0};
    padding-bottom: ${(props) => props.paddingBottom || 0};
    margin-top: ${(props) => props.marginTop || 0};
    margin-left: ${(props) => props.marginLeft || 0};
    margin-right: ${(props) => props.marginRight || 0};
    margin-bottom: ${(props) => props.marginBottom || 0};
    display: ${(props) => props.display || "flex"};
    flex-direction: ${(props) => props.flexDirection || "column"};
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    align-self: ${(props) => props.alignSelf || "stretch"};
    color: ${(props) => props.color || "inherit"};
    position: ${(props) => props.position || "relative"};
    /* border-style: ${(props) => props.borderStyle || "solid"}; */

    scroll-behavior: smooth;

    ${(props) =>
        props.scrollSnapAlign &&
        css`
            scroll-snap-align: ${props.scrollSnapAlign};
        `}

    ${(props) =>
        props.scrollSnapType &&
        css`
            scroll-snap-type: ${props.scrollSnapType};
        `}

    ${(props) =>
        props.overflow &&
        css`
            overflow: ${props.overflow};
        `};
        
        ${(props) =>
        props.overflowY &&
        css`
            overflow-y: ${props.overflowY};
        `};  

    ${(props) =>
        props.boxShadow &&
        css`
            box-shadow: ${props.boxShadow};
        `};

    ${(props) =>
        props.transform &&
        css`
            &:hover {
                transform: ${props.transform};
                transition: 0.3s ease-out;
            }
        `}

    ${(props) =>
        props.cursor &&
        css`
            cursor: ${props.cursor};
        `};

    ${(props) =>
        props.margin &&
        css`
            margin: ${props.margin};
        `};

    ${(props) =>
        props.opacity &&
        css`
            opacity: ${props.opacity};
        `};

    ${(props) =>
        props.padding &&
        css`
            padding: ${props.padding};
        `};

    ${(props) =>
        props.top &&
        css`
            top: ${props.top};
        `};

    ${(props) =>
        props.right &&
        css`
            right: ${props.right};
        `};

    ${(props) =>
        props.bottom &&
        css`
            bottom: ${props.bottom};
        `};
    
    ${(props) =>
        props.visibility &&
    css`
        visibility: ${props.visibility};
    `};
    ${(props) =>
        props.left &&
        css`
            left: ${props.left};
        `};

    ${(props) =>
        props.zIndex &&
        css`
            z-index: ${props.zIndex};
        `};

    ${(props) =>
        props.boxShadow &&
        css`
            box-shadow: ${props.boxShadow};
        `};

    ${(props) =>
        props.backgroundColor &&
        css`
            background-color: ${props.backgroundColor};
        `};
    ${(props) =>
        props.flex &&
        css`
            flex: ${props.flex};
        `};
    ${(props) =>
        props.flexWrap &&
        css`
            flex-wrap: ${props.flexWrap};
        `};
    ${(props) =>
        props.flexGrow &&
        css`
            flex-grow: ${props.flexGrow};
        `};
    ${(props) =>
        props.flexShrink &&
        css`
            flex-shrink: ${props.flexShrink};
        `};
    ${(props) =>
        props.height &&
        css`
            height: ${props.height};
        `};
    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `};

    ${(props) =>
        props.minHeight &&
        css`
            min-height: ${props.minHeight};
        `};
    ${(props) =>
        props.minWidth &&
        css`
            min-width: ${props.minWidth};
        `};
    
    ${(props) =>
        props.maxHeight &&
        css`
            max-height: ${props.maxHeight};
        `};
    ${(props) =>
        props.maxWidth &&
        css`
            max-width: ${props.maxWidth};
        `};   

    ${(props) =>
        props.borderColor &&
        css`
            border-color: ${props.borderColor};
        `};

    ${(props) =>
        props.borderWidth &&
        css`
            border-width: ${props.borderWidth};
        `};

    ${(props) =>
        props.borderBottomWidth &&
        css`
            border-bottom-width: ${props.borderBottomWidth};
        `};

    ${(props) =>
        props.border &&
        css`
            border: ${props.border};
        `};

    ${(props) =>
        props.borderTopWidth &&
        css`
            border-top-width: ${props.borderTopWidth};
        `};
    ${(props) =>
        props.borderLeftWidth &&
        css`
            border-left-width: ${props.borderLeftWidth};
        `};
    ${(props) =>
        props.borderRightWidth &&
        css`
            border-right-width: ${props.borderRightWidth};
        `};

    ${(props) =>
        props.borderTopWidth &&
        css`
            border-top-width: ${props.borderTopWidth};
        `};
    ${(props) =>
        props.borderTopWidth &&
        css`
            border-top-width: ${props.borderTopWidth};
        `};
    ${(props) =>
        props.borderRadius &&
        css`
            border-radius: ${props.borderRadius};
        `};


    @media ${devices.laptop} {
        ${(props) =>
            props.screenLargeFlexWrap &&
            css`
                flex-wrap: ${props.screenLargeFlexWrap};
            `};
        ${(props) =>
            props.screenLargeFlex &&
            css`
                flex: ${props.screenLargeFlex};
        `};
    
    }
    

    @media ${devices.tablet} {
         ${(props) =>
        props.tabletMargin &&
             css`
                 margin: ${props.tabletMargin};
             `};

        ${(props) =>
        props.tabletDisplay &&
             css`
                 display: ${props.tabletDisplay};
        `};
        ${(props) =>
        props.tabletGridTemplate &&
             css`
                grid-template-columns: ${props.tabletGridTemplate};
        `};
        ${(props) =>
        props.tabletPadding &&
            css`
                padding: ${props.tabletPadding};
            `};
        ${(props) =>
        props.tabletFlexWrap &&
        css`
            flex-wrap: ${props.tabletFlexWrap};
        `};
            
        ${(props) =>
        props.tabletWidth &&
            css`
                width: ${props.tabletWidth || props.width};
            `};

        ${(props) =>
        props.tabletHeight &&
            css`
                height: ${props.tabletHeight || props.height};
            `};

        ${(props) =>
        props.tabletJustifyContent &&
            css`
                justify-content: ${props.tabletJustifyContent};
            `};
        ${(props) =>
        props.tabletAlignItems &&
            css`
                align-items: ${props.tabletAlignItems};
            `};
        ${(props) =>
        props.tabletAlignSelf &&
            css`
                align-self: ${props.tabletAlignSelf};
            `};

        ${(props) =>
        props.tabletPosition &&
            css`
                position: ${props.tabletPosition};
            `};

        ${(props) =>
        props.tabletMinHeight &&
            css`
                min-height: ${props.tabletMinHeight};
            `};
    ${(props) =>
        props.tabletMinWidth &&
        css`
            min-width: ${props.tabletMinWidth};
        `};
    
    ${(props) =>
        props.tabletMaxHeight &&
        css`
            max-height: ${props.tabletMaxHeight};
        `};
    ${(props) =>
        props.tabletMaxWidth &&
        css`
            max-width: ${props.tabletMaxWidth};
        `};
        ${(props) =>
        props.tabletFlex &&
            css`
                flex: ${props.tabletFlex};
            `};
    }

    @media ${devices.mobileLarge} {
       
        ${(props) =>
        props.mobileScrollSnapType &&
            css`
                scroll-snap-type: ${props.mobileScrollSnapType};
            `};

         ${(props) =>
        props.mobileScrollSnapAlign &&
             css`
                 scroll-snap-align: ${props.mobileScrollSnapAlign};
             `};
        
        ${(props) =>
        props.mobileMargin &&
            css`
                margin: ${props.mobileMargin};
            `};

        ${(props) =>
        props.mobilePadding &&
            css`
                padding: ${props.mobilePadding};
            `};
        ${(props) =>
        props.mobileWidth &&
            css`
                width: ${props.mobileWidth || props.tabletWidth || props.width};
            `};

        ${(props) =>
        props.mobileHeight &&
            css`
                height: ${props.mobileHeight || props.tabletHeight || props.height};
            `};

        ${(props) =>
        props.mobileFlexDirection &&
            css`
                flex-direction: ${props.mobileFlexDirection};
            `};

        ${(props) =>
        props.mobileFlex &&
            css`
                flex: ${props.mobileFlex};
            `};


        ${(props) =>
        props.mobileJustifyContent &&
            css`
                justify-content: ${props.mobileJustifyContent};
            `};
        ${(props) =>
        props.mobileAlignItems &&
            css`
                align-items: ${props.mobileAlignItems};
            `};
        ${(props) =>
        props.mobileAlignSelf &&
            css`
                align-self: ${props.mobileAlignSelf};
            `};
        ${(props) =>
        props.mobilePosition &&
            css`
                position: ${props.mobilePosition};
            `};
        ${(props) =>
        props.mobileZIndex &&
            css`
                z-index: ${props.mobileZIndex};
            `};
        ${(props) =>
        props.mobileTop &&
            css`
                top: ${props.mobileTop};
            `};

    ${(props) =>
        props.mobileRight &&
        css`
            right: ${props.mobileRight};
        `};

    ${(props) =>
        props.mobileBottom &&
        css`
            bottom: ${props.mobileBottom};
        `};

    ${(props) =>
        props.mobileLeft &&
        css`
            left: ${props.mobileLeft};
        `};

        ${(props) =>
        props.mobileMinHeight &&
            css`
                min-height: ${props.mobileMinHeight};
            `};
    ${(props) =>
        props.mobileMinWidth &&
        css`
            min-width: ${props.mobileMinWidth};
        `};
    
    ${(props) =>
        props.mobileMaxHeight &&
        css`
            max-height: ${props.mobileMaxHeight};
        `};
    ${(props) =>
        props.mobileMaxWidth &&
        css`
            max-width: ${props.mobileMaxWidth};
        `};

    }

    &:hover {
        ${(props) =>
        props.hoverColor &&
            css`
                color: ${props.hoverColor};
            `};
        ${(props) =>
        props.hoverBackground &&
            css`
                background-color: ${props.hoverBackground};
            `};
        ${(props) =>
        props.hoverBorderColor &&
            css`
                border-color: ${props.hoverBorderColor};
            `}
        ${(props) =>
        props.hoverOpacity &&
            css`
                opacity: ${props.hoverOpacity};
            `};
    }
`;

export const ImageCell = styled(Cell)`
    ${(props) =>
        props.backgroundImage &&
        css`
            background-image: url(${props.backgroundImage});
        `};
    width: ${(props) => props.width || "100%"};
    display: ${(props) => props.display || "flex"};
    flex-direction: ${(props) => props.flexDirection || "column"};
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    background-size: ${(props) => props.backgroundSize || "cover"};
    background-repeat: no-repeat;
    background-position: ${(props) => props.backgroundPosition || "center"};
    ${(props) =>
        props.borderRadius &&
        css`
            border-radius: ${props.borderRadius};
        `};

        
`;

export const Image = styled.img`
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    max-width: 100%;
    max-height: 100%;
    background-color: ${(props) => props.backgroundColor || theme.colors.transparent};
    ${(props) =>
        props.opacity &&
        css`
            opacity: ${props.opacity};
        `};

    ${(props) =>
        props.borderRadius &&
        css`
            border-radius: ${props.borderRadius};
        `};

    ${(props) =>
        props.boxShadow &&
        css`
            box-shadow: ${props.boxShadow};
        `};

    ${(props) =>
        props.objectFit &&
        css`
            object-fit: ${props.objectFit};
        `};
`;

export const Spacer = styled.div`
    display: block;
    ${(props) =>
        props.height &&
        css`
            height: ${props.height};
        `};
    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `};

    @media ${devices.tablet} {
        width: ${(props) => props.tabletWidth || props.width};
        height: ${(props) => props.tabletHeight || props.height};
    }

    @media ${devices.mobileLarge} {
        width: ${(props) => props.mobileWidth || props.width || "0"};
        height: ${(props) => props.mobileHeight || props.height || "0"};
    }
`;

export const Main = styled.div`
    width: 100%;
    ${(props) =>
        props.backgroundColor &&
        css`
            background-color: ${props.backgroundColor};
        `};

    ${(props) =>
        props.overflowX &&
        css`
            overflow-x: ${props.overflowX};
        `};

    ${(props) =>
        props.overflow &&
        css`
        overflow: ${props.overflow};
    `};

    ${(props) =>
        props.padding &&
        css`
            padding: ${props.padding};
        `};
    display: flex;
    padding-bottom: ${(props) => props.paddingBottom || "1rem"};
    flex-direction: ${(props) => props.flexDirection || "column"};

`;


