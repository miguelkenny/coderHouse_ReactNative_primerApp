import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { styles } from "./styles";
import { useState } from 'react';
import { AddItem } from './components/add-item';
import { AddModal } from './components/modal';
import { Header } from './components/header';
import { Ionicons } from '@expo/vector-icons';

export default App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text);
  }

  const onHandlerSubmit = () => {
    setTasks([...tasks,
    {
      id: Math.random().toString(),
      value: task
    }
    ]);
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(item);
  }

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  const OnCheckedTask = ({ item }) => {
    const [checkedTask, setCheckedTask] = useState(false);
    return (
      <Pressable
        style={[styles.checkboxBase, checkedTask && styles.checkboxChecked]}
        onPress={() => tasks.find(task => task.id === item.id) && setCheckedTask(!checkedTask)}>
        {checkedTask && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <OnCheckedTask item={item} />
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  )

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>

      <Header />

      <AddItem
        placeholder={'Nueva tarea...'}
        onHandlerChange={onHandlerChange}
        task={task}
        buttonTitle={'Agregar'}
        onHandlerSubmit={onHandlerSubmit}
      />

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />

      <AddModal
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
      />
    </View>
  );
}
