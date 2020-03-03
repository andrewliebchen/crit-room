export default {
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  borderRadius: [0, 2, 4, 8, 16],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "blue",
    secondary: "purple",
    muted: "#f6f6f6"
  },
  shadows: {
    card: "0 2px 10px rgba(0, 0, 0, 0.2)"
  },
  buttons: {
    primary: {
      bg: "primary",
      borderRadius: 2,
      color: "white",
      cursor: "pointer"
    }
  },
  link: {
    color: "primary",
    cursor: "pointer"
  },
  label: {
    mb: 1,
    textTransform: "capitalize",
    fontSize: 1,
    fontWeight: "bold"
  },
  input: {
    borderRadius: 2,
    "&:focus": {
      outline: "none",
      borderColor: "primary"
    }
  },
  variants: {
    card: {
      p: 3,
      bg: "background",
      boxShadow: "card",
      borderRadius: 3
    },
    listItem: {
      p: 2,
      mx: -2,
      borderRadius: 2,
      cursor: "pointer"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary"
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
    }
  }
};
