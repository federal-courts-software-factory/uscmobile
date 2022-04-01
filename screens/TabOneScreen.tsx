// Example of Collapsible/Accordion/Expandable List View in React Native
// https://aboutreact.com/collapsible-accordion-expandable-view/

// import React in our code
import React, { useState } from 'react';
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
import Collapsible from 'react-native-collapsible';

//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
import { Text, ListItem, Divider, Avatar } from 'react-native-elements';
//Dummy content to show
//You can also use dynamic data by calling web service
// const CONTENT = [
//   {
//     title: 'Title 01 - General Provisions',
//     content: [
//       {title: "Chapter 1 - Presidential Election"},
//       {title: "CHAPTER 2-OFFICE AND COMPENSATION OF PRESIDENT"},
//       {title: "Chapter 4 - Delegation of Functions"}
//     ]
//   },
//   {
//     title: 'Title 02 - The Congress',
//     content: [
//       {title: "Chapter 1 - Presidential Election"},
//       {title: "CHAPTER 2 - OFFICE AND COMPENSATION OF PRESIDENT"},
//       {title: "Chapter 4 - Delegation of Functions"}
//     ]
//   },
//   {
//     title: 'Title 03 - The President',
//     content: [
//       {title: "Chapter 1 - Presidential Election", link: "Chapter 1"},
//       {title: "CHAPTER 2-OFFICE AND COMPENSATION OF PRESIDENT", link: "Chapter 2"},
//       {title: "Chapter 4 - Delegation of Functions", link: "Chapter 3"}
//     ]
//   },
// ];

//To make the selector (Something like tabs)
const SELECTORS = [
  { title: 'Title 1', value: 0 },
  { title: 'Title 2', value: 1 },
  { title: 'Title 3', value: 2 },
  { title: 'Reset all' },
];

const App = () => {
  // Ddefault active selector
  const [activeSections, setActiveSections] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animated.View
      key={_}
      entering={FadeInUp}
      exiting={FadeInDown}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <ListItem.Title>{section.name} <ListItem.Chevron/></ListItem.Title>
        <Divider />
      </Animated.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    const navigation = useNavigation();

    return (
      <Animated.View
       key={_}
        duration={1200}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        entering={FadeInUp}
        exiting={FadeInDown}
      
        transition="backgroundColor">
        <Animated.Text
          entering={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.children.map((item, i) =>
          <>
    
      <Animated.View
      key={i}
      style={[isActive ? styles.active : styles.inactive]}
>
          
<ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate('TabTwo', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      }}
      pad={20}
    >

      <ListItem.Content>
        <ListItem.Title>
          <Text>{item.name}</Text>
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
      
        </Animated.View>
       
        </>
)
          }
        </Animated.Text>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>


          <View style={{ backgroundColor: '#000', height: 1, marginTop: 10 }} />
          <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>
              Multiple Expand Allowed?
            </Text>
            <Switch
              value={multipleSelect}
              onValueChange={(multipleSelect) =>
                setMultipleSelect(multipleSelect)
              }
            />
          </View>
          <Text style={styles.selectTitle}>
            Please select below option to expand
          </Text>

          {/*Code for Selector starts here*/}
          <View style={styles.selectors}>
            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => setSections([selector.value])}
                //on Press of any selector sending the selector value to
                // setSections function which will expand the Accordion accordingly
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }>
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {/*Code for Selector ends here*/}

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT.children}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={renderHeader}
            //Header Component(View) to render
            renderContent={renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={setSections}
            //setting the state of active sections
          />
          {/*Code for Accordion/Expandable List ends here*/}
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
