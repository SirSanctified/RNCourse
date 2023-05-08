import { useState } from "react"
import { TextInput, View, Button, StyleSheet, Modal, Image } from "react-native"

const GoalInput = ({onGoalSubmit, visible, closeModal}) => {
  const [goal, setGoal] = useState('')

  const onGoalChange = (value) => {
    setGoal(value)
  }

  const onGoalSubmitHandler = () => {
    onGoalSubmit(goal)
    setGoal('')
    closeModal()
  }
  return (
    <Modal visible={visible} animationType='fade'>
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.webp')}></Image>
      <TextInput
        placeholder='Your course goal!'
        autoFocus={true}
        style={styles.textInput}
        onChangeText={text => onGoalChange(text)}
        value={goal}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button color={'red'} title='Cancel' onPress={closeModal}/>
        </View>
        <View style={styles.button}>
          <Button color={'purple'} title='Add Goal' onPress={onGoalSubmitHandler}/>
        </View>
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#3116b6'
  },
  textInput: {
    marginBottom: 30,
    width: '100%',
    padding: 16,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 5,
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    alignSelf: 'center',
    borderRadius: 50,
  }
})

export default GoalInput