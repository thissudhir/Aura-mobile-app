import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { images } from "../constants";
import { router } from "expo-router";
const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px] h-[215px]" />
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <Text className="text-2xl font-psemibold text-white mt-2">{title}</Text>
      <CustomButton
        title="Create Video"
        containerStyles="w-full my-5"
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmptyState;
