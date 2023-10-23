import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

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
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = () => {
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo)=> todo.id !== id);
    setTodoList(updatedTodoList);
  }

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 12,
          paddingVertical: 12,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>
        <IconButton icon="pencil" iconColor="#fff" />
        <IconButton icon="trash-can" iconColor="#fff" onPress={()=>handleDeleteTodo(item.id)}/>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 65, marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 8,
          marginVertical: 34,
          alignItems: "center",
        }}
        onPress={() => handleAddTodo()}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>

      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
