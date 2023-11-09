import { View, Text } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();

  function handelClick(item) {
    navigation.navigate("Movie", item);
  }

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handelClick={handelClick} />
        )}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handelClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handelClick(item)}>
      <Image
        source={require("../assets/moviePoster1.png")}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
