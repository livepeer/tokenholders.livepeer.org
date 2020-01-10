/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { AspectImage, Text } from "@theme-ui/components";

export default ({
  image = null,
  country = null,
  name = null,
  description = null
}) => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        background: "white",
        border: "1px solid",
        borderColor: "black",
        textAlign: "center",
        boxShadow: "8px 8px 0px rgba(0, 235, 135, 0.7)"
      }}
    >
      <Box
        sx={{
          maxWidth: 160,
          maxHeight: 160,
          ml: "auto",
          mr: "auto",
          mb: 2,
          position: "relative",
          "&:after": {
            content: '""',
            backgroundImage: `url(/img/flags/${country}.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: 42,
            height: 42,
            borderRadius: 1000,
            position: "absolute",
            right: 0,
            bottom: 0
          }
        }}
      >
        <AspectImage
          ratio={1 / 1}
          sx={{
            height: "100%",
            width: "100%",
            border: "1px solid black",
            borderRadius: 1000,
            position: "relative"
          }}
          src={image}
        />
      </Box>
      <Text sx={{ fontSize: 4 }}>{name}</Text>
      <Text sx={{ color: "muted" }}>{description}</Text>
    </Box>
  );
};
