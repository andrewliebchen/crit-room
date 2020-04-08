const controlHeight = 36;
const baseControlStyles = {
  px: 2,
  py: 0,
  borderRadius: 2,
  cursor: "pointer",
  height: controlHeight,
  display: "flex"
};

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
    heading: 1.5
  },
  colors: {
    text: "rgba(0, 0, 0, 1)",
    secondaryText: "rgba(0, 0, 0, 0.5)",
    negative: "rgba(255, 124, 124, 1)",
    negativeBg: "rgba(255, 124, 124, 0.2)",
    background: "#fff",
    primary: "rgba(49, 124, 242, 1)",
    primaryBg: "rgba(49, 124, 242, 0.2)",
    primaryBgHover: "rgba(49, 124, 242, 0.4)",
    secondary: "purple",
    muted: "rgba(0, 0, 0, 0.1)"
  },
  shadows: {
    card: "0 2px 10px rgba(0, 0, 0, 0.2)"
  },
  buttons: {
    primary: {
      ...baseControlStyles,
      bg: "primaryBg",
      color: "primary",
      "&:hover": {
        bg: "primaryBgHover"
      }
    },
    secondary: {
      ...baseControlStyles,
      bg: "muted",
      color: "text"
    },
    negative: {
      ...baseControlStyles,
      bg: "negativeBg",
      color: "negative"
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
    bg: "muted",
    borderColor: "transparent",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      bg: "white"
    },
    "&:disabled": {
      color: "secondaryText",
      cursor: "disabled"
    }
  },
  select: {
    bg: "muted",
    borderRadius: 2,
    borderColor: "transparent",
    pointer: "cursor",
    "&:focus": {
      outline: "none",
      borderColor: "primary",
      bg: "white"
    }
  },
  text: {
    heading: {
      fontSize: 2
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
      cursor: "pointer",
      "&:hover": {
        bg: "primaryBg",
        color: "primary"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 2
    },
    a: {
      color: "primary",
      cursor: "pointer"
    },
    img: {
      maxWidth: "100%"
    }
  }
};
