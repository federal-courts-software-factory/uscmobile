const PATH = require('path');
const dirTree = require('directory-tree');
var fs = require('fs');
var outputFilename = './xy.json';
const tree = dirTree('./libs/usc/', {normalizePath: true, extensions:/\.md$/}, null, (item, PATH, stats) => {
 return item
});


fs.writeFile(outputFilename, JSON.stringify(tree, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 