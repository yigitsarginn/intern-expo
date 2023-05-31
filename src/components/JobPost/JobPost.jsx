import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./JobPost.style";

export default JobPost = ({ item }) => {
  return (
    <TouchableOpacity style={styles.ViewStyle}>
      <Text style={styles.TextStyle}>ID: {item.id}</Text>
      <Text>Name: {item.internship_name}</Text>
      <Text>Location: {item.internship_location}</Text>
      <Text>Industry: {item.industry}</Text>
      <Text>Post Time: {item.post_time}</Text>
    </TouchableOpacity>
  );
};
