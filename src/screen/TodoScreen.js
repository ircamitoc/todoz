import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const dummyData = [
  {
    id: "01",
    title: "Wash Car",
  },
  {
    id: "02",
    title: "Read a book",
  },
];

const TodoScreen = () => {
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 12,
          marginBottom: 12,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 65, marginHorizontal: 16 }}>
      <Text>TodoScreen</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 8,
          marginVertical: 34,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

      <FlatList data={dummyData} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
