import {
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

console.log(Date.now().toString());

const TodoScreen = () => {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [editedTodo, setEditedTodo] = useState(null);

	const handleAddTodo = () => {

		if (todo === "") {
      alert("Please add some text.")
		}

		setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
		setTodo("");
	};

	const handleDeleteTodo = (id) => {
		const updatedTodoList = todoList.filter((todo) => todo.id !== id);

		setTodoList(updatedTodoList);
	};


	const handleEditTodo = (todo) => {
		setEditedTodo(todo);
		setTodo(todo.title);
	};

	const handleUpdateTodo = () => {
		const updatedTodos = todoList.map((item) => {
			if (item.id === editedTodo.id) {
				return { ...item, title: todo };
			}

			return item;
		});
		setTodoList(updatedTodos);
		setEditedTodo(null);
		setTodo("");
	};

	const renderTodos = ({ item, index }) => {
		return (
			<View
				style={{
					backgroundColor: "#1e90ff",
					borderRadius: 6,
					paddingHorizontal: 20,
					paddingVertical: 8,
					marginBottom: 12,
					flexDirection: "row",
					alignItems: "center",
					elevation: 8
				}}
			>
				<Text
					style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
				>
					{item.title}
				</Text>

				<IconButton
					icon="pencil"
					iconColor="#fff"
					onPress={() => handleEditTodo(item)}
				/>
				<IconButton
					icon="trash-can"
					iconColor="#fff"
					onPress={() => handleDeleteTodo(item.id)}
				/>
			</View>
		);
	};
	return (
		<View style={{ marginHorizontal: 16, marginTop: 80 }}>
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

			{editedTodo ? (
				<TouchableOpacity
					style={{
						backgroundColor: "#000",
						borderRadius: 6,
						paddingVertical: 12,
						marginVertical: 34,
						alignItems: "center",
            elevation: 8
					}}
					onPress={() => handleUpdateTodo()}
				>
					<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
						Save
					</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={{
						backgroundColor: "#FF725E",
						borderRadius: 6,
						paddingVertical: 8,
						marginVertical: 34,
						alignItems: "center",
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 3,
					}}
					onPress={() => handleAddTodo()}
				>
					<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 32 }}>
						+
					</Text>
				</TouchableOpacity>
			)}

			<FlatList data={todoList} renderItem={renderTodos} />

			{todoList.length <= 0 && <Fallback />}
		</View>
	);
};

export default TodoScreen;
