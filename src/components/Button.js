import * as React from "react";
import theme from "../theme";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    display: flex;
    appearance: appearance-none;
    justify-content: center;
    align-items: center;
    border-style: solid;
    padding-left: ${(props) => props.paddingLeft || ".5rem" };
    padding-right: ${(props) => props.paddingRight || ".5rem" };
    padding-top: ${(props) => props.paddingTop || ".5rem" };
    padding-bottom: ${(props) => props.paddingBottom || ".5rem" };
    border-width: ${(props) => props.borderWidth || "0"};
    border-color: ${(props) => props.borderColor || theme.colors.orange };
    border-radius: ${(props) => props.borderRadius || ".5rem"};
    background-color: ${(props) => props.backgroundColor || theme.colors.orange };
    color: ${(props) => props.color || theme.colors.white};
    font-size: ${(props) => props.fontSize || ".75rem"};
    font-weight: ${(props) => props.fontWeight || "500"};
    text-transform: ${(props) => props.transform || "capitalize"};
    min-height: ${(props) => props.minHeight || "1rem"};
    transition: transform 0.15s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.hoverBackground || props.backgroundColor}
       
    }

    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.55;

            &:hover {
                cursor: not-allowed;
            }
        `};

    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `};

    ${(props) =>
    props.minWidth &&
    css`
        min-width: ${props.minWidth};
    `};

    ${(props) =>
        props.height &&
        css`
            height: ${props.height};
        `};

    ${(props) =>
        props.wide &&
        css`
            width: 100%;
        `};
`;

 const Button = ({children, onClick, showLoading = false, ...props}) => {

   const  _onClick = () => {
        onClick && onClick();
    }
    const childComponent = showLoading ? "Please Wait..." : children;

    return <StyledButton disabled={showLoading} onClick={_onClick} {...props}>{childComponent}</StyledButton>;
}

export default Button;
