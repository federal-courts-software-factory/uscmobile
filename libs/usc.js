let markdown;
function setMarkdown(chapter, title) {
  markdown = require(`../libs/usc/${title}/${chapter}`)
console.log(chapter, title, markdown)

}

export { markdown, setMarkdown };

