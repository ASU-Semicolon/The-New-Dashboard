import React from "react";
import "./Button.style.css";
import classNames from "classnames";

/**
 * A customizable button component.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} [props.type='button'] - The HTML button type attribute.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {'primary' | 'secondary' | 'warning'} [props.select='secondary'] - The button style type.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {boolean} [props.rounded=true] - Whether the button has rounded corners.
 * @param {boolean} [props.outline=true] - Whether the button has an outline style.
 * @param {boolean} [props.small=true] - Whether the button has a small size.
 * @param {boolean} [props.large=false] - Whether the button has a large size.
 * @param {boolean} [props.tinyRadius=false] - Whether the button has a tiny border radius.
 * @param {function} [props.onClick=() => {}] - The function to call when the button is clicked.
 * @returns {JSX.Element} - The Button component.
 */

function Button({
    type = "button",
    children,
    select = "secondary",
    disabled = false,
    rounded = true,
    outline = true,
    small = true,
    large = false,
    tinyRadius = false,
    onClick = () => {},
}) {
    const classes = classNames({
        button: true,
        primary: select === "primary",
        secondary: select === "secondary",
        warning: select === "warning",
        rounded: rounded,
        outline: outline,
        small: small,
        large: large,
    });

    const textColor = outline
        ? select === "primary"
            ? "#FBA312"
            : select === "secondary"
              ? "#ffffff"
              : select === "warning"
                ? "#9A1212"
                : "#ffffff"
        : "#000000";

    return (
        <>
            <button
                className={classes}
                type={type}
                style={{ color: textColor, borderRadius: tinyRadius && "2px" }}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
