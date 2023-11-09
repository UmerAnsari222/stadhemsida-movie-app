import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";

import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2, 3, 4, 5, 6]);

  const moveName = "Captain America";

  useEffect(() => {}, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center  mt-10 px-4">
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={"28"} strokeWidth={2.5} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon
              size={"35"}
              color={isFavorite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={require("../assets/moviePoster1.png")}
            style={{ width, height: height * 0.55, objectFit: "cover" }}
          />
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>

        <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
          {/* title */}
          <Text className="text-white text-center text-3xl font-bold tracking-widest">
            {moveName}
          </Text>

          {/* status, release year, runtime */}
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Released • 2020 • 170 min
          </Text>

          {/* genres  */}
          <View className="flex-row justify-center mx-4 space-x-2">
            <Text className="text-neutral-400 font-semibold text-base text-center">
              Action •
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
              Thrill •
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
              Comedy
            </Text>
          </View>

          {/* description */}
          <Text className="text-neutral-400 mx-4 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            dignissimos consectetur, eligendi cumque eveniet optio asperiores
            libero necessitatibus doloribus accusantium animi assumenda, atque
            dolores at voluptate facere nisi pariatur reiciendis.
          </Text>
        </View>
      </View>

      <Cast cast={cast} />
    </ScrollView>
  );
}
