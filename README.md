siteAce v.0.1

Here I want to introduce my first project in Meteor.
First of all, if you want it work on your own local machine, 
you need to have the following list of packages.

accounts-password     1.1.4  Password support for accounts
<br/>
accounts-ui           1.1.6  Simple templates to add login widgets to an app
<br/>
arkham:comments-ui    0.2.12* Simple templates for disqus-like comment functionality
<br/>
blaze-html-templates  1.0.1  Compile HTML templates into reactive UI 
<br/>
easy:search           2.0.5* Easy-to-use search with Blaze Components
<br/>
ecmascript            0.1.6* Compiler plugin that supports ES2015+
<br/>
es5-shim              4.1.14  Shims and polyfills to improve ECMAScript 5
<br/>
insecure              1.0.4  (For prototyping only) Allow all database writes
<br/>
iron:router           1.0.12  Routing specifically designed for Meteor
<br/>
jquery                1.11.4  Manipulate the DOM using CSS selectors
<br/>
meteor-base           1.0.1  Packages that every Meteor app needs
<br/>
mobile-experience     1.0.1  Packages for a great mobile user experience
<br/>
mongo                 1.1.3  Adaptor for using MongoDB and Minimongo over DDP
<br/>
session               1.1.1  Session variable
<br/>
standard-minifiers    1.0.2  Standard minifiers used with Meteor apps by default
<br/>
tracker               1.0.9  Dependency tracker to allow reactive callbacks
<br/>
twbs:bootstrap        3.3.6  The most popular front-end framework for developers

Problems: 
1) I still have insecure package. Need to remove it and change .js file for better security.
2) I`ve also found out that my search package doesn`t work as it planned
3) It would be a good idea to implement some social share package