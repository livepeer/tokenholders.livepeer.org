import { Global } from "@emotion/core";
import React, { memo } from "react";
import { useThemeUI, ThemeProvider as TP, Styled } from "theme-ui";

const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading"
};

export const theme = {
  initialColorMode: "dark",
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  fonts: {
    body: "Akkurat",
    heading: "Akkurat",
    monospace: "AkkuratMono"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600
  },
  lineHeights: {
    body: 1.9,
    heading: 1.3
  },
  breakpoints: ["480px", "672px", "1160px"],
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em"
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading"
    }
  },
  colors: {
    text: "#333",
    muted: "rgba(0, 0, 0, .6)",
    background: "#fff",
    white: "#fff",
    primary: "#131418",
    secondary: "#faf5ef",
    accent: "#00EB88",
    translucent: "rgba(255, 255, 255, .4)",
    red: "#d32f2f",
    yellow: "#fbc02d",
    blue: "#0062eb",
    skyBlue: "#5bc2ee",
    teal: "#00bfb2",
    border: "rgba(255, 255, 255, .16)",
    modes: {}
  },
  links: {
    nav: {
      fontWeight: "normal",
      fontFamily: "monospace",
      color: "primary",
      textDecoration: "none"
    }
  },
  buttons: {
    primary: {
      fontSize: 1,
      cursor: "pointer",
      color: "background",
      bg: "primary",
      borderRadius: 0,
      fontFamily: "monospace",
      py: 1,
      px: 3,
      letterSpacing: "1px",
      fontWeight: 400,
      outline: "none"
    },
    secondary: {
      cursor: "pointer",
      color: "text",
      textTransform: "uppercase",
      bg: "accent",
      borderRadius: 0,
      fontFamily: "monospace",
      py: "6px",
      px: 3,
      fontSize: 1,
      letterSpacing: "1px",
      fontWeight: 400,
      outline: "none"
    },
    outline: {
      fontSize: 1,
      borderColor: "primary",
      border: "1px solid",
      cursor: "pointer",
      color: "primary",
      bg: "background",
      borderRadius: 0,
      fontFamily: "monospace",
      py: "6px",
      px: 3,
      letterSpacing: "1px",
      fontWeight: 400,
      outline: "none"
    },
    danger: {
      borderRadius: 6,
      cursor: "pointer",
      backgroundColor: "rgba(211, 47, 47, .1)",
      transition: ".2s background-color",
      color: "red",
      outline: "none",
      "&:hover": {
        transition: ".2s background-color",
        backgroundColor: "rgba(211, 47, 47, .2)"
      }
    },
    rainbow: {
      color: "text",
      outline: "none",
      background:
        "linear-gradient(260.35deg, #F1BC00 0.25%, #E926BE 47.02%, #9326E9 97.86%)"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    a: {
      color: "primary",
      textDecoration: "underline"
    },
    h1: {
      ...heading,
      fontSize: 7
    },
    h2: {
      ...heading,
      fontSize: 6
    },
    h3: {
      ...heading,
      fontSize: 5
    },
    h4: {
      ...heading,
      fontSize: 4
    },
    h5: {
      ...heading,
      fontSize: 3
    },
    h6: {
      ...heading,
      fontSize: 2
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      margin: "0 0 16px"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    },
    Container: {
      p: 3
    }
  }
};

const ThemeProvider = memo(({ children, ...props }) => (
  <TP theme={theme} {...props}>
    <Styled.root>{children}</Styled.root>
  </TP>
));

const Reset = () => (
  <Global
    styles={{
      body: {
        margin: "0"
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0
      },
      small: {
        fontSize: "100%"
      },
      a: {
        color: "#333"
      },
      button: {
        border: 0,
        padding: 0,
        fontSize: "100%",
        backgroundColor: "transparent"
      },
      ".react-reveal": {
        opacity: 0
      }
    }}
  />
);

export { useThemeUI as useTheme, Reset, ThemeProvider };
