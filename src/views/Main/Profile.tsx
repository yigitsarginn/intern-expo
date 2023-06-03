import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Text";
import React from "react";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { rhs, rs } from "@/style/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import Option from "@/components/Option";
import { t } from "@/lang";

export const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topFooter}>
        <Icon icon="user-circle" color="black" size={100} />
        <Text color="Dark" fontFamily="PlusJakartaSans_700Bold">
          Lorem Ipsum
        </Text>
        <Text color="Dark50" fontFamily="PlusJakartaSans_400Regular">
          University-Department
        </Text>
        <Text color="Dark50" fontFamily="PlusJakartaSans_400Regular">
          Location: City, Country
        </Text>
        <View style={styles.buttonFooter}>
          <Button style={styles.msgButton}>
            <Text
              variant="small"
              fontFamily="PlusJakartaSans_700Bold"
              style={styles.textButton}
            >
              Message
            </Text>
          </Button>
          <Icon icon="three-dot" color="black" size={35} />
        </View>
      </View>
      <Option title="About" about={t("lorem_long")} />
      <Option
        title="Education"
        university={t("karabuk_uni")}
        department={t("comp_eng")}
        year="2017-2021"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topFooter: {
    width: "100%",
    alignItems: "center",
  },
  msgButton: {
    width: "80%",
    height: rhs(30),
  },
  textButton: {},
  buttonFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
