import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";

// const ios = (Platform.OS = "ios");

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upComing, setUpComing] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={"mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row items-center justify-between mx-4">
          <Bars3CenterLeftIcon color={"white"} size={"30"} strokeWidth={"2"} />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon
              color={"white"}
              size={"30"}
              strokeWidth={"2"}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* trending crousal */}
        <TrendingMovies data={trending} />

        {/* Upcoming crousal */}
        <MovieList title="Upcoming" data={upComing} />

        {/* Top rated crousal */}
        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  );
}
