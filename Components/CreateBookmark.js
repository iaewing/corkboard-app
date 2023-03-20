import React, { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";

const CreateBookmark = () => {
  const [data, setData] = useState([]);
  const [bookmark, setBookmark] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([""]);

  const createBookmark = async () => {
    try {
      const response = await fetch("http://10.0.0.70:9001/api/1/bookmarks", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "1",
          title: title,
          url: bookmark,
        }),
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: 'pink', width: '100%'}}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Bookmark Name"
      />
      <TextInput
        value={bookmark}
        onChangeText={setBookmark}
        placeholder="Bookmark URL"
      />
      <TextInput
        value={tags}
        onChangeText={setTags}
        placeholder="Add, Tags, Here"
      />
      <Button title="Create Bookmark" onPress={createBookmark} />
    </View>
  );
};

export default CreateBookmark;
