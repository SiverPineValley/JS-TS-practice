const title = (titleScript) => {
    console.log('\x1b[36m%s\x1b[0m', titleScript);
};

const printPretty = (str, func) => {
    console.log('\x1b[35m(%s): \x1b[0m',str,func);
}

module.exports =  { title, printPretty };