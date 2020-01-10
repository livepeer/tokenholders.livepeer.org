/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Box, Text } from "@theme-ui/components";
import Ink from "react-ink";

export default ({
  outline = false,
  headerImage = null,
  icon = null,
  title = null,
  subtitle = null,
  body
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        bg: outline ? "transparent" : "translucent",
        border: outline ? "1px solid #dadce0" : 0,
        cursor: "pointer",
        borderRadius: outline ? 6 : 0,
        width: "100%",
        boxShadow: outline ? "none" : "0px 0px 60px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Ink />
      {headerImage && (
        <Box
          as="header"
          sx={{
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
            px: 3,
            py: 4,
            bg: "primary",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: [130],
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: headerImage ? `url(${headerImage})` : "none"
          }}
        />
      )}
      <Box sx={{ pt: 3, pb: 3, px: 3 }}>
        <Box sx={{ mb: body ? 2 : 0 }}>
          {icon && <Box sx={{ mb: 1 }}>{icon}</Box>}
          {title && <Styled.h5 as="h3">{title}</Styled.h5>}
          {subtitle && (
            <Text sx={{ color: "muted", fontSize: 1, mb: 1 }}>{subtitle}</Text>
          )}
        </Box>
        {body && <Text sx={{ color: "muted" }}>{body}</Text>}
      </Box>
    </Box>
  );
};
