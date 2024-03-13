// pseudocode
// read through each file
// get name and cut out .xml
// store names in array
// for each item in array -> run the vector-draggable-svg command with modified inputs
//  ./xml-files/{input}.xml {./svg-files/{input}.svg}

const fs = require("fs");
const { execSync } = require("child_process");

const xmlFolderPath = "./xml-files/";
const svgFolderPath = "./svg-files/";

const command = "npx vector-drawable-svg";
let namesArr = [];

// readdir reads all the file names and stores them in files
fs.readdir(xmlFolderPath, (err, files) => {
  // for each item inside of xmlFolderPath -> get its name and remove .xml -> push into array
  files.forEach((file) => {
    let fileName = file.replace(".xml", "");
    namesArr.push(fileName);
  });

  // for each item in array -> execute the npx code (AKA just ask the server to use that class and make its changes)
  namesArr.forEach((name) => {
    execSync(
      `${command} ${xmlFolderPath}${name}.xml ${svgFolderPath}${name}.svg`
    );
  });
});
