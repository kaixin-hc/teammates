
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/logo-darkbackground.svg","height":"20"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('div',{attrs:{"tags":"environment--dg"}},[_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"sibling-or-child","href":"/devGuide/index.html"}},[_v("DEVELOPER GUIDE")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/showcase.html"}},[_v("SHOWCASE")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"highlight-on":"exact","href":"/about.html"}},[_v("ABOUT")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/MarkBind/markbind","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1)]),_v(" "),_m(0),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"setting-up-a-development-environment"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up-a-development-environment"}}),_v("Setting up a development environment"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-a-development-environment","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This is a step-by-step guide for setting up a development environment on your local machine.\nUsing this environment, you can contribute to the project by working on features, enhancements, bug fixes, etc.")]),_v(" "),_c('p',[_v("All the instructions in this document work for Linux, OS X, and Windows, with the following pointers:")]),_v(" "),_c('ul',[_c('li',[_v("Replace "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradlew.bat")]),_v(" if you are using Windows.")]),_v(" "),_c('li',[_v("All the commands are assumed to be run from the root project folder, unless specified otherwise.")]),_v(" "),_c('li',[_v("When a version is specified for any tool, install that version instead of the latest version available.")])]),_v(" "),_c('blockquote',[_c('p',[_v("If you encounter any problems during the setup process, please refer to our "),_c('a',{attrs:{"href":"/devGuide/troubleshooting-guide.html"}},[_v("troubleshooting guide")]),_v(" before posting a help request in our "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/issues"}},[_v("issue tracker")]),_v(".")])]),_v(" "),_c('h2',{attrs:{"id":"step-1-obtain-your-own-copy-of-the-repository"}},[_c('span',{staticClass:"anchor",attrs:{"id":"step-1-obtain-your-own-copy-of-the-repository"}}),_v("Step 1: Obtain your own copy of the repository"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#step-1-obtain-your-own-copy-of-the-repository","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Install Git.")]),_v(" "),_c('ol',[_c('li',[_v("(Optional but recommended) Install Sourcetree or other similar Git client.")])])]),_v(" "),_c('li',[_c('p',[_v("Fork our repo at "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates"}},[_v("https://github.com/TEAMMATES/teammates")]),_v(". Clone the fork to your hard disk.")])]),_v(" "),_c('li',[_c('p',[_v("Add a remote name (e.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("upstream")]),_v(") for your copy of the main repo. Fetch the remote-tracking branches from the main repo to keep it in sync with your copy.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs sh"}},[_c('span',[_v("git remote add upstream https://github.com/TEAMMATES/teammates.git\n")]),_c('span',[_v("git fetch upstream\n")])])]),_c('p',[_c('strong',[_v("Verification:")]),_v(" Use the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git branch -r")]),_v(" and the following lines should be part of the output:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v(" upstream/master\n")]),_c('span',[_v(" upstream/release\n")])])])]),_v(" "),_c('li',[_c('p',[_v("Set your "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch to track the main repo's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("master")]),_v(" branch.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs sh"}},[_c('span',[_v("git checkout master\n")]),_c('span',[_v("git branch -u upstream/master\n")])])])])]),_v(" "),_c('p',[_v("More information can be found at "),_c('a',{attrs:{"href":"https://help.github.com/articles/fork-a-repo/"}},[_v("this documentation")]),_v(".")]),_v(" "),_c('h2',{attrs:{"id":"step-2-install-necessary-tools-and-languages"}},[_c('span',{staticClass:"anchor",attrs:{"id":"step-2-install-necessary-tools-and-languages"}}),_v("Step 2: Install necessary tools and languages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#step-2-install-necessary-tools-and-languages","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("These tools are necessary regardless of whether you are developing front-end or back-end:")]),_v(" "),_c('ol',[_c('li',[_v("Install Java JDK 11.")])]),_v(" "),_c('p',[_v("If you want to develop front-end, you need to install the following:")]),_v(" "),_c('ol',[_c('li',[_v("Install Node.js (minimum version 12.11.1).")]),_v(" "),_c('li',[_v("(Optional but highly recommended) Install Angular CLI version 9 globally."),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs sh"}},[_c('span',[_v("npm install -g @angular/cli@9\n")])])]),_c('strong',[_v("Verification:")]),_v(" Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ng")]),_v(" and you should see a list of available Angular CLI commands.")])]),_v(" "),_c('h2',{attrs:{"id":"step-3-set-up-project-specific-settings-and-dependencies"}},[_c('span',{staticClass:"anchor",attrs:{"id":"step-3-set-up-project-specific-settings-and-dependencies"}}),_v("Step 3: Set up project-specific settings and dependencies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#step-3-set-up-project-specific-settings-and-dependencies","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Run this command to create the main config files (these are not under revision control because their contents vary from developer to developer):")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs sh"}},[_c('span',[_v("./gradlew createConfigs\n")])])]),_c('p',[_c('strong',[_v("Verification:")]),_v(" The file named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradle.properties")]),_v(" should be added to the project root directory.")])]),_v(" "),_c('li',[_c('p',[_v("Modify the following config file:")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gradle.properties")]),_v(" "),_c('ul',[_c('li',[_v("If you want to use a JDK other than the one specified in your PATH variable, add the value to the variable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("org.gradle.java.home")]),_v(".")]),_v(" "),_c('li',[_v("If you want to use a specific Google Cloud SDK installation, add the value to the variable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cloud.sdk.home")]),_v(". A minimum version of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("274.0.0")]),_v(" is required.")])])])])]),_v(" "),_c('li',[_c('p',[_v("Run this command to download the necessary tools for front-end development (if you are going to be involved):")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs sh"}},[_c('span',[_v("npm ci\n")])])]),_c('p',[_c('strong',[_v("Verification:")]),_v(" A folder named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("node_modules")]),_v(" should be added to the project root directory.")])])]),_v(" "),_c('p',[_c('strong',[_v("Q:")]),_v(" Can I set up the project in IDEs, e.g. Eclipse, IntelliJ?"),_c('br'),_v(" "),_c('strong',[_v("A:")]),_v(" You are welcome to; the core team have been using IntelliJ to a varying degree of success, and it is expected that any IDE that support Gradle-based Java project will work. However, IDE-based development (even with IntelliJ) is not actively supported/maintained by the team.")]),_v(" "),_c('h2',{attrs:{"id":"step-4-start-developing"}},[_c('span',{staticClass:"anchor",attrs:{"id":"step-4-start-developing"}}),_v("Step 4: Start developing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#step-4-start-developing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("If you have followed every step correctly, your development environment should be set up successfully.")]),_v(" "),_c('p',[_v("Proceed to the development routine as outlined in "),_c('a',{attrs:{"href":"/devGuide/development.html"}},[_v("this document")]),_v(".")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.0")]),_v(" on Sat, 15 Jan 2022, 8:03:52 UTC]")])])])}
}];
  