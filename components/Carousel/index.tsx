/** @jsx jsx */
import React from "react";
import { jsx, Box, Container, Styled, Flex } from "theme-ui";
import { Grid, Text } from "@theme-ui/components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot
} from "pure-react-carousel";
import ArrowLeftIcon from "../../public/img/arrow-left.svg";
import ArrowRightIcon from "../../public/img/arrow-right.svg";

export default ({
  title = null,
  subtitle = null,
  slides = [],
  naturalSlideWidth,
  naturalSlideHeight,
  ...props
}) => {
  return (
    <Container sx={{ py: 0 }} {...props}>
      <Box sx={{ pb: 6 }}>
        <Styled.h2 sx={{ textAlign: "center", mb: 2 }}>{title}</Styled.h2>
        <Text
          sx={{
            maxWidth: 500,
            textAlign: "center",
            margin: "0 auto",
            color: "muted"
          }}
        >
          The Livepeer project is a community effort. Here are just a few of the
          contributors who are helping us make livepeer a reality.
        </Text>
      </Box>
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
        totalSlides={slides.length}
        visibleSlides={3}
        step={3}
      >
        <Slider>
          {slides.map((slide, i) => (
            <Slide key={i} index={i}>
              <Box sx={{ mx: 2 }}>{slide}</Box>
            </Slide>
          ))}
        </Slider>
        <Flex
          sx={{
            mt: 2,
            justifyContent: "center",
            ".carousel__dot--selected": { bg: "accent" },
            alignItems: "center"
          }}
        >
          <ButtonBack
            sx={{
              mr: 4,
              border: "2px solid black",
              justifyContent: "center",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center"
            }}
          >
            <ArrowLeftIcon />
          </ButtonBack>
          {slides.map(
            (_, i) =>
              i % 3 === 0 && (
                <Dot
                  sx={{
                    mr: 2,
                    border: "2px solid black",
                    width: 12,
                    height: 12
                  }}
                  key={i}
                  slide={i}
                >
                  <Box />
                </Dot>
              )
          )}
          <ButtonNext
            sx={{
              ml: 2,
              border: "2px solid black",
              justifyContent: "center",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center"
            }}
          >
            <ArrowRightIcon />
          </ButtonNext>
        </Flex>
      </CarouselProvider>
    </Container>
  );
};
