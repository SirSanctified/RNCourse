import { useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import GoalInput from './components/GoalInput'
import Item from './components/Item'

export default function App() {
  const [goals, setGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onGoalSubmit = (goal) => {
    const item = {goal: goal, id: goals.at(-1)?.id + 1 || 0 }
    if (item.goal !== "") setGoals(currentGoals => [...currentGoals, item])
  }

  const deleteGoal = (id) => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id))
  }

    const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
      <View>
        <Button color={'purple'} title='Add New Goal' onPress={() => setIsModalVisible(true)}/>
        <GoalInput onGoalSubmit={onGoalSubmit} visible={isModalVisible} closeModal={closeModal}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({item}) => <Item item={item} deleteGoal={deleteGoal}/>}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<Text style={{fontSize: 30, fontWeight: '900', color: '#52510f', textDecorationStyle: 'dashed', textDecorationLine: 'underline', marginBottom: 16}}>Your Goals List</Text>}
      />
      </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e085a',
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  goalsContainer: {
    flex: 5,
    paddingTop: 16
  },
});
