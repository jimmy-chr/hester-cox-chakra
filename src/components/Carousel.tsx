import {
  Box,
  Flex,
  Text,
  Image,
  Stack,
  HStack,
  TextProps,
  SystemProps,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";

type CarouselProps = {
  slides: {
    img: string;
    alt: string;
    label?: string;
    description?: string;
  }[];
  maxW: string[];
  float?: SystemProps["float"] | undefined;
  marginRight?: string;
};

const Carousel = ({ slides, maxW, float, marginRight }: CarouselProps) => {
  const SLIDE_CHANGE_THRESHOLD = 100;
  const arrowStyles: TextProps = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const slidesCount = slides.length;
  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  }, []);
  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, []);
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setDragging(true);
    setDragStartX(e.clientX);
    e.preventDefault();
  }, []);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging) {
        const diffX = e.clientX - dragStartX;
        setDragOffset(diffX);
        e.preventDefault();
      }
    },
    [dragging, dragStartX]
  );
  const handleMouseUp = useCallback(() => {
    if (dragging) {
      setDragging(false);
      if (Math.abs(dragOffset) > SLIDE_CHANGE_THRESHOLD) {
        const slideChange = dragOffset > 0 ? prevSlide : nextSlide;
        slideChange();
      }
      setDragOffset(0);
    }
  }, [dragging, dragOffset, prevSlide, nextSlide]);

  // Do not move first slide to the right and last slide to the left
  const slideOffset =
    currentSlide === 0
      ? Math.min(dragOffset, 0)
      : currentSlide === slidesCount - 1
      ? Math.max(dragOffset, 0)
      : dragOffset;
  const carouselStyle = {
    transition: dragging ? "none" : "all .5s",
    ml: `calc(-${currentSlide * 100}% + ${slideOffset}px)`,
  };
  return (
    <Flex
      maxW={maxW}
      height="auto"
      alignItems="center"
      justifyContent="center"
      style={{
        cursor: dragging ? "grabbing" : "auto",
      }}
      onMouseLeave={handleMouseUp}
      float={float}
      marginRight={marginRight}
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex
          w="full"
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          {...carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" flex="none" paddingX={1}>
              <Image
                src={slide.img}
                alt={slide.alt}
                boxSize="full"
                height="auto"
                backgroundSize="cover"
                borderRadius="0.5em"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setCurrentSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Carousel;
