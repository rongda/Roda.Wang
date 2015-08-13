//包装函数
module.exports = function(grunt){
	//配置任务,所有插件的配置信息
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		jshint:{
			build:['docs/js/*.js'],
			options:{
				jshintrc:'.jshintrc'
			}
		},
		uglify:{
			options:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			buildFullPage:{
				src:'docs/js/jquery.fullPage.js',
				dest:'dist/js/jquery.fullPage.min.js'
			},
			buildJquery:{
				src:'docs/js/jquery-1.9.1.js',
				dest:'dist/js/jquery-1.9.1.min.js'
			},
			buildResponsiveNav:{
				src:'docs/js/responsive-nav.js',
				dest:'dist/js/responsive-nav.min.js'
			},
			buildRodaWang:{
				src:'docs/js/Roda.Wang.js',
				dest:'dist/js/Roda.Wang.min.js'
			}
		},
		csslint:{
			build:['docs/css/*.css'],
			options:{
				csslintrc:'.csslintrc'
			}
		},
		cssmin:{
			options:{
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			buildFullPage:{
				src:'docs/css/jquery.fullPage.css',
				dest:'dist/css/jquery.fullPage.min.css'
			},
			buildResponsiveNav:{
				src:'docs/css/responsive-nav.css',
				dest:'dist/css/responsive-nav.min.css'
			},
			buildRodaWang:{
				src:'docs/css/Roda.Wang.css',
				dest:'dist/css/Roda.Wang.min.css'
			}
		},
		watch:{//
			build:{
				files:['docs/js/*.js','docs/css/*.css'],
				tasks:['uglify','cssmin'],
				options:{spawn:false}
			}
		}
	});

	//grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	//grunt.loadNpmTasks("grunt-contrib-csslint");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask('default',['uglify','cssmin','watch']);
};