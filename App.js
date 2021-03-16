import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MyTextInput from './components/text-input/TextInput';

export default function App() {

  console.log('Hello World');

  let [currentGoals, setGoals] = useState([]);

  const goalAdded = (newGoal) => {
    console.log('Adding Goal', newGoal);
    setGoals((currentGoals => [...currentGoals, newGoal]));

    console.log('Goals', currentGoals);
  }

  return (
    <View style={ styles.container }>
      <Text style = {styles.textTitle } >Hello React Native !</Text>
      <FlatList 
        style = { styles.goalsList }
        data = { [currentGoals] }
        renderItem = { ({ item }) =>  
          <View>
                <Text> { item } </Text>  
          </View>
      
        }
        keyExtractor = { (item, index) => index.toString()  }
        >
      </FlatList>
      <StatusBar style="auto" />
      <MyTextInput style = {styles.textInputComponent } goalAddedCallBack = { goalAdded }></MyTextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    flex: 1
  },

  textInputComponent: { 
    flex: 1
  },

  goalsList: {
    backgroundColor: '#fff',
    flex: 2,
    flexDirection: 'column'
  }
});
