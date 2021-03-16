import React from 'react'; 
import {Button, ProgressViewIOSComponent, TextInput, View} from 'react-native';

const MyTextInput = (props) => {
    let [currentText, changedText] = React.useState('Placeholder');

    sendNewGoal = () => {
        
        const txt = currentText;
        // send text to parent component
        props.goalAddedCallBack(txt);
    }

    textChange = (txt) => {
        changedText(currentText = txt);
    }

    return (
        <View>
             <TextInput 
                onChangeText = { text => textChange(text) }
                value = { currentText }
            />
             <Button 
             title = "Add Goal + "
             onPress = { () => sendNewGoal() }> </Button>   
        </View>

    );
}

export default MyTextInput;