module.exports= (grunt)=> {
     grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
    })
    grunt.registerTask("copyFiles",()=> {
        grunt.config("copy",{
            main:{
                expand:true,
                cwd:"src",
                src:"**",
                dest:"dist/"
            }
        })
        grunt.task.run("copy");
    })

    grunt.registerTask("cleanFiles",()=> {
        grunt.config("clean",{
            clean:["dist/*"]
        })
        grunt.task.run("clean");
    })
  
    grunt.loadNpmTasks("grunt-contrib-copy");  // load pre-defined module 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask("default",["copyFiles"]);
}