import {Platform} from 'react-native'
let markdown;
function setMarkdown(chapter, title) {
  if (Platform.OS === 'web') {
    markdown = require(`./usc/${title}/${chapter}`)
  } else {
    markdown = `https://raw.githubusercontent.com/federal-courts-software-factory/uscode/master/United%20States%20Code/${encodeURIComponent(title)}/${encodeURIComponent(chapter)}`
  }
 

}

export { markdown, setMarkdown };

