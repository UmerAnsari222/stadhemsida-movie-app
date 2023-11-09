import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Cast({ cast }) {
  const character = "John wick";
  const personName = "Keanu Revies";

  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity key={index} className="mr-4 items-center">
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                  <Image
                    className="rounded-2xl h-24 w-20"
                    source={require("../assets/moviePoster1.png")}
                  />
                </View>
                <Text className="text-white text-xs mt-1">
                  {character.length > 10
                    ? character.slice(0, 10) + "..."
                    : character}
                </Text>
                <Text className="text-white text-xs mt-1">
                  {personName.length > 10
                    ? personName.slice(0, 10) + "..."
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
