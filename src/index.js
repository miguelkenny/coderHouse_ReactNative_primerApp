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
      value: task,
      checked: false
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

  function onCheck(index) {
    const newItems = [...tasks];
    newItems[index].checked = !newItems[index].checked;
    setTasks(newItems);
  }

  const Item = ({ item, name, checked, onCheck }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Pressable style={styles.checkboxBase} onPress={() => onCheck()}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginRight: 10 }}>{name}</Text>
          {checked && <Text>✔️</Text>}
        </View>
      </Pressable>
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
        renderItem={({ item, index }) => (
          <Item item={item} name={item.name} checked={item.checked} onCheck={() => onCheck(index)} />)}
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
