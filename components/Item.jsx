import { View, Text, StyleSheet, Pressable } from 'react-native';

const Item = ({item, deleteGoal}) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable android_ripple={{color: "#54f5f3"}} onPress={() => deleteGoal(item.id)} style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalItem}>{item.goal}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#cccccc',
    marginVertical: 4,
    borderRadius: 5,
  },
  goalItem: {
    padding: 8,
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5
  }
})
export default Item