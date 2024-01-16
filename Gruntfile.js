module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["Gruntfile.js", "src/js/*.js", "src/js/**/*.js"],
                tasks: ["concat"]
            },
            css: {
                files: ["src/css/*.scss", "src/css/**/*.scss"],
                tasks: ["sass"]
            }
        },

        concat: {
            dist: {
                src: ["src/js/*.js", "src/js/**/*.js"],
                dest: "dist/js/app.js"
            }
        },

        sass: {
            dist: {
                files: {
                    'dist/css/main.css': "src/css/main.scss"
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-concat");

    // default task
    grunt.registerTask('default', ['sass', 'concat', 'watch']);
}