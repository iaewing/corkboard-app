import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Text,
  View,
} from "react-native";

type Bookmark = {
  id: string,
  title: string,
  url: string,
};

const BookmarksList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBookmarks = async () => {
    try {
      const response = await fetch("http://10.0.0.70:9001/api/bookmarks");
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <View style={{ flex: 4, padding: 36, backgroundColor: "gray", width: '100%'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.url}, {item.tags}
            </Text>
          )}
        />
      )}
      <Button title="Refresh" onPress={getBookmarks} />
    </View>
  );
};

export default BookmarksList;
