import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to my profile"
        onPress={() => navigation.navigate("Profile", { name: "Sya'ifudin Hudha" })}
      />
      <Button
        title="Go to my customer's list"
        onPress={() => navigation.navigate("CustomerList")}
      ></Button>
      <Text onPress={() => navigation.navigate("Login")}>Logout</Text>
    </View>
  );
};

export default HomeScreen;
