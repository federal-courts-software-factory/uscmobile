// Example of Collapsible/Accordion/Expandable List View in React Native
// https://aboutreact.com/collapsible-accordion-expandable-view/

// import React in our code
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import CONTENT from '../libs/usc.json';

// import all the components we are going to use
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

//import for the animation of Collapse and Expand
import Animated, { useSharedValue, useAnimatedStyle, Layout, FadeInUp, FadeInDown } from 'react-native-reanimated';

//import for the collapsible/Expandable view
import { Text, List, Divider, Avatar } from 'react-native-paper';

const App = () => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = React.useState(false);

  const handlePress = (chapter, title, path, name) =>  { 
    navigation.navigate('TabTwo', {
      chapter: chapter,
      title: title,
      path: path,
      name: name
    })
  }
  
  const initialData = {
    "path": "./libs/usc/",
    "name": "usc",
    "children": [
        {
            "path": "TITLE 01-GENERAL PROVISIONS",
            "name": "TITLE 01-GENERAL PROVISIONS",
            "children": [
                {
                    "path": "TITLE 01-GENERAL PROVISIONS/CHAPTER 1-RULES OF CONSTRUCTION",
                    "name": "CHAPTER 1-RULES OF CONSTRUCTION.md"
                },
                {
                    "path": "TITLE 01-GENERAL PROVISIONS/CHAPTER 2-ACTS AND RESOLUTIONS; FORMALITIES OF ENACTMENT; REPEALS; SEALING OF INSTRUMENTS",
                    "name": "CHAPTER 2-ACTS AND RESOLUTIONS; FORMALITIES OF ENACTMENT; REPEALS; SEALING OF INSTRUMENTS.md"
                },
                {
                    "path": "TITLE 01-GENERAL PROVISIONS/CHAPTER 3-CODE OF LAWS OF UNITED STATES AND SUPPLEMENTS; DISTRICT OF COLUMBIA CODE AND SUPPLEMENTS",
                    "name": "CHAPTER 3-CODE OF LAWS OF UNITED STATES AND SUPPLEMENTS; DISTRICT OF COLUMBIA CODE AND SUPPLEMENTS.md"
                }
            ]
        }
      ]
    }

  //const [data,setData]=useState([]);
  const [data,setData]=useState(initialData)
  const getData=()=>{
    fetch('https://raw.githubusercontent.com/federal-courts-software-factory/uscode/master/usc.json')
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setData(myJson);
      //console.log(myJson.children);
    });
  }
  
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#000', height: 1, marginTop: 10 }} />
          {data.children.map((item, i) => {
            return (
              <List.Accordion
              key={i}
              title={item.name}
              left={props => <List.Icon {...props} icon="file" />}
              >
                {item.children.map((l,  i) => <List.Item key={i} onPress={() => handlePress(l.name, item.name, l.path, l.name)} title={l.name.replace(".md", "")} />)}     
              </List.Accordion>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );

};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
