import { theme } from "../../lib/theme";
import { Styles } from "react-burger-menu";

export const bmBugerStyles: Styles = {
  bmBurgerBars: {
    background: theme.colors.primary,
    height: "2px"
  },
  bmBurgerButton: {
    position: "fixed",
    width: "24px",
    height: "18px",
    right: "24px",
    top: "24px"
  },
  bmCross: {
    background: theme.colors.primary,
    width: "2px",
    height: "24px"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    right: "24px",
    top: "20px"
  },
  bmItemList: {},
  bmMenuWrap: {},
  bmMenu: {
    background: theme.colors.primary,
    padding: "40px"
  },
  bmMorphShape: {
    fill: theme.colors.background
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};
