import React, { useRef, useState } from "react";
import { View } from "react-native";
import {styles} from './CustomCarousel.styles';
import Carousel, { Pagination } from "react-native-snap-carousel";
import { CarouselProps } from "react-native-snap-carousel/lib/typescript/carousel/types";

const CustomCarousel: React.FC<Partial<CarouselProps<any>>> = (props) => {
  const carouselRef: any = useRef();
  const [activeSlider, setActiveSlider] = useState(0);

  return (
<View style={styles.CarouselContentStyle}>
      <Carousel
        ref={(c: Carousel<{ name: string }>) => (carouselRef.current = c)}
        {...(props as CarouselProps<any>)}
        onSnapToItem={(index) => setActiveSlider(index)}
      />
      <Pagination
          dotsLength={props.data?.length}
          activeDotIndex={activeSlider}
          dotStyle={styles.PaginationActiveDot}
          inactiveDotStyle={styles.PaginationInActiveDot}
          inactiveDotOpacity={0.5}
          inactiveDotScale={0.5}
        /></View>
  );
};

export default CustomCarousel;
