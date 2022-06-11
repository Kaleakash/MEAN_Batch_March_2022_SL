module.exports= (grunt)=> {
     grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
    })
    grunt.registerTask("first",()=> {
        console.log("Grunt first task execute");
    })
    grunt.registerTask("second",()=> {
        console.log("Grunt second task execute");
    })
    grunt.registerTask("third",()=> {
        console.log("Grunt third task execute");
    })
    // grunt.registerTask("default",()=> {
    //     console.log("Grunt default task execute");
    // })
    grunt.registerTask("default",["first","second","third"]);
}