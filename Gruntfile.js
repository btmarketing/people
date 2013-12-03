module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
	  	connect: {
	    	server: {
	      		options: {
	        		port: 9001,
	        		base: '',
	      		}
	    	}
	  	},

		watch: {
	     	options: {
	        	livereload: 9001,
	      	},
	      	html: {
	        	files: ['index.html'],
	      	},
	      	js: {
	        	files: ['js/*.js'],
	      	},
	      	css: {
	        	files: ['css/style.css'],
	      	},
	   	}
	});

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);
};