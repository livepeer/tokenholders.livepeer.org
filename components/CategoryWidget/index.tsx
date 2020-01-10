/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Link } from "react-scroll";

export default ({
  categories,
  activeCategory,
  setActiveCategory,
  ...props
}) => {
  return (
    <Box
      sx={{
        position: ["relative", "relative", "sticky"],
        top: [0, 0, 100],
        p: 3,
        border: "1px solid",
        borderColor: "black",
        boxShadow: "8px 8px 0px rgba(0, 235, 135, 0.7)"
      }}
      {...props}
    >
      <Box>
        {categories.map((category, i) => (
          <Link
            key={i}
            onSetActive={() => setActiveCategory(category)}
            to={category}
            spy
            smooth
          >
            <Box
              sx={{
                cursor: "pointer",
                fontSize: 1,
                float: "left",
                clear: "left",
                px: 1,
                textTransform: "capitalize",
                mb: i === categories.length - 1 ? 0 : 2,
                fontFamily: "monospace",
                color: activeCategory === category ? "white" : "primary",
                bg: activeCategory === category ? "primary" : "transparent"
              }}
            >
              {category}
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};
