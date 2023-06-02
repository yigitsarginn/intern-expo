import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import Divider from "@/components/CustomDivider/CustomDivider";
import tempData from "../../Data/tempRecommenden.json";
import JobPost from "@/components/JobPost/JobPost";
import CustomColors from "@/style/colors";

export const Results = () => {
  const renderItem = ({ item }) => <JobPost item={item} />;

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <SearchBar />
        <Divider />
        <Text style={styles.recInt}>Recommended Internships</Text>
        <View style={styles.RecContainer}>
          <FlatList
            data={tempData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CustomColors.Dark10,
  },
  recInt: {
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: CustomColors.LogoBlue,
  },
  RecContainer: {
    flex: 1,
    paddingVertical: 5,
    width: "100%",
    backgroundColor: "orange",
    alignItems: "center",
  },
});
