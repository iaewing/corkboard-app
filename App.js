import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BookmarksList from "./Components/Bookmarks";
import CreateBookmark from "./Components/CreateBookmark";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BookmarksList />
      <CreateBookmark />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
