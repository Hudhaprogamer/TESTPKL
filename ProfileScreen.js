import { Button, Text, View, StyleSheet, Image } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  const imageUrl = "./latar.png";
  return (
    <View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>
          Welcome to {route.params.name}'s profile
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>Name: {route.params.name}</Text>
          <Text style={styles.description}>
            Email: Hudarahmadani@gmail.com
          </Text>
          <Text style={styles.description}>
            Address: Plaosantimur 102/17
          </Text>
          <Text style={styles.description}>Phone Number: 0895320433255</Text>
        </View>
      </View>
      <Text>Tulis bio di sini</Text>
      <Text>Tampilkan portofolio di sini</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontsize: 40,
  },
  titleArea: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 3,
    padding: 6,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
});
export default ProfileScreen;