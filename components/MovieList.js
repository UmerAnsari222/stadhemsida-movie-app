import { View, Text } from "react-native";
import React from "react";
import { styles } from "../theme";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Image } from "react-native";

var { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }) {
  const navigation = useNavigation();

  const moveName = "Captain America";

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>

        <TouchableOpacity>
          <Text style={styles.text} className="text-lg">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={require("../assets/moviePoster1.png")}
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className="text-neutral-300 ml-1">
                  {moveName.length > 14
                    ? moveName.slice(0, 14) + "..."
                    : moveName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
