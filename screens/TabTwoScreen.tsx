
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Platform, Appearance, useColorScheme, View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import {markdown} from '../libs/usc.js'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!


function RenderMarkdown({md}) {

  let colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  if (colorScheme === 'dark') {
   return (
    <Markdown
    style={{
      body: {color: 'white'},
    }}
  >
 
{md ? md : null}

</Markdown>
   ) 
  } else {
    // render some light thing
    return (
      <Markdown
      style={styles}
    >
     {md ? md : null}
 
     </Markdown>
    ) 

  }
}

export default function TabTwoScreen({route}) {
  let colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


  const navigation = useNavigation();
  const [value, onChangeText] = React.useState(route.params.title);
  const { chapter, title } = route.params; 
  const [md, setMD] = useState();
  const url = `https://raw.githubusercontent.com/federal-courts-software-factory/uscode/master/United%20States%20Code/${encodeURIComponent(title)}/${encodeURIComponent(chapter)}`
  useEffect(() => {
    fetch(url)
        .then(data => data.text())
        .then(text => {               
            setMD(text);
            
        })
       
}, []);
React.useLayoutEffect(() => {
  navigation.setOptions({
    title: value === '' ? 'No title' : value,
  });
}, [navigation, value]);
  return (
    <>
        <StatusBar barStyle="dark-content" />
    <SafeAreaView style={[styles.container, themeContainerStyle, themeTextStyle]}>
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
  >
 
       {md && <RenderMarkdown md={md}/> }
   
      </ScrollView>
       </SafeAreaView>
   
       </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#fff',
  },
  heading1: {
    fontSize: 32,
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  heading2: {
    fontSize: 24,
  },
  heading3: {
    fontSize: 18,
  },
  heading4: {
    fontSize: 16,
  },
  heading5: {
    fontSize: 13,
  },
  heading6: {
    fontSize: 11,
  }
});




const copy =` ### **CHAPTER 1—RULES OF CONSTRUCTION**

### §1. Words denoting number, gender, and so forth
* In determining the meaning of any Act of Congress, unless the context indicates otherwise—

  * words importing the singular include and apply to several persons, parties, or things;

  * words importing the plural include the singular;

  * words importing the masculine gender include the feminine as well;

  * words used in the present tense include the future as well as the present;

  * the words "insane" and "insane person" shall include every idiot, insane person, and person non compos mentis;

  * the words "person" and "whoever" include corporations, companies, associations, firms, partnerships, societies, and joint stock companies, as well as individuals;

  * "officer" includes any person authorized by law to perform the duties of the office;

  * "signature" or "subscription" includes a mark when the person making the same intended it as such;

  * "oath" includes affirmation, and "sworn" includes affirmed;

  * "writing" includes printing and typewriting and reproductions of visual symbols by photographing, multigraphing, mimeographing, manifolding, or otherwise.

### §2. "County" as including "parish", and so forth
* The word "county" includes a parish, or any other equivalent subdivision of a State or Territory of the United States.

### §3. "Vessel" as including all means of water transportation
* The word "vessel" includes every description of watercraft or other artificial contrivance used, or capable of being used, as a means of transportation on water.

### §4. "Vehicle" as including all means of land transportation
* The word "vehicle" includes every description of carriage or other artificial contrivance used, or capable of being used, as a means of transportation on land.

### §5. "Company" or "association" as including successors and assigns
* The word "company" or "association", when used in reference to a corporation, shall be deemed to embrace the words "successors and assigns of such company or association", in like manner as if these last-named words, or words of similar import, were expressed.

### §6. Limitation of term "products of American fisheries"
* Wherever, in the statutes of the United States or in the rulings, regulations, or interpretations of various administrative bureaus and agencies of the United States there appears or may appear the term "products of American fisheries" said term shall not include fresh or frozen fish fillets, fresh or frozen fish steaks, or fresh or frozen slices of fish substantially free of bone (including any of the foregoing divided into sections), produced in a foreign country or its territorial waters, in whole or in part with the use of the labor of persons who are not residents of the United States.

### §7. Definition of "marriage" and "spouse"
* In determining the meaning of any Act of Congress, or of any ruling, regulation, or interpretation of the various administrative bureaus and agencies of the United States, the word "marriage" means only a legal union between one man and one woman as husband and wife, and the word "spouse" refers only to a person of the opposite sex who is a husband or a wife.

### §8. "Person", "human being", "child", and "individual" as including born-alive infant
* (a) In determining the meaning of any Act of Congress, or of any ruling, regulation, or interpretation of the various administrative bureaus and agencies of the United States, the words "person", "human being", "child", and "individual", shall include every infant member of the species homo sapiens who is born alive at any stage of development.

* (b) As used in this section, the term "born alive", with respect to a member of the species homo sapiens, means the complete expulsion or extraction from his or her mother of that member, at any stage of development, who after such expulsion or extraction breathes or has a beating heart, pulsation of the umbilical cord, or definite movement of voluntary muscles, regardless of whether the umbilical cord has been cut, and regardless of whether the expulsion or extraction occurs as a result of natural or induced labor, cesarean section, or induced abortion.

* (c) Nothing in this section shall be construed to affirm, deny, expand, or contract any legal status or legal right applicable to any member of the species homo sapiens at any point prior to being "born alive" as defined in this section.
`