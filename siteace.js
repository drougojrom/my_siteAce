Websites = new Mongo.Collection("websites");

if (Meteor.isClient) {
	
// On the Client
Comments.ui.config({
   template: 'bootstrap'
});


//var counter = 0;

// routing

Router.configure({
  layoutTemplate:"ApplicationLayout"
});

Router.route('/', function () {
  this.render('welcome', {
  	to:"main"

  });
});


Router.route("/website_list", function () {
  this.render("navbar", {
    to:"navbar"
  });
  this.render("website_list",{
    to:"main"
  });
});

Router.route("/website_list/:_id", function () {
  this.render("navbar", {
    to:"navbar"
  });
  this.render("website",{
    to:"main",
    data: function(){
      return Websites.findOne({_id:this.params._id});
    }
  });
});
// end routing

	/////
	// template helpers 
	/////
//



// accounts config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"

});


	



	// helper function that returns all available websites
	Template.website_list.helpers({
		websites:function(){
			return Websites.find({});
		}
	});

	Template.body.helpers({username:function(){
		if(Meteor.user()){
			return Meteor.user().username;
		} else {
			return "anonymous user";
		}
		console.log(Meteor.user());
		}
	});


	/////
	// template events 
	/////

	Template.website_list.helpers({
		websites:function(){
			return Websites.find({}, {sort:{rating: -1}});

		}


	})


	Template.website_item.events({

	"click .js-upvote":function(event){
			
			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var max_value = 0;
			var website_id = this._id;
			var rating = max_value + 1;
			if (rating == 1) {
				alert("You have given your vote. If you want to make it negative, push the button with down-vote.")
			}
			console.log(rating);
			console.log("Up voting website with id "+website_id);
			// put the code in here to add a vote to a website!
			Websites.update({_id:website_id},
							{$set: {rating:rating}});
			
			


			return false;// prevent the button from reloading the page
		}, 
		
	"click .js-downvote":function(event){
			
			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			var max_value = 0;
			var rating = max_value - 1;
			if (rating == -1) {
				alert("You have given your vote. If you want to make it positive, push the button with up-vote.")
			}
			console.log(rating);
			console.log("Down voting website with id "+website_id);
			Websites.update({_id:website_id},
							{$set: {rating:rating}});

			

			return false;// prevent the button from reloading the page
		}
	})

	Template.website_form.events({
		"click .js-toggle-website-form":function(event){
			$("#website_form").toggle('slow');
		}, 
		"submit .js-save-website-form":function(event){

			// here is an example of how to get the url out of the form:
			var url = event.target.url.value;
			var title = event.target.title.value;
			var description = event.target.description.value;
			

			console.log("The url they entered is: "+url);

			
			//  put your website saving code in here!	
			if(Meteor.user){
				Websites.insert({
					url:url,
					title:title,
					description:description,
					createdOn: new Date()
				});

			}
			return false;// stop the form submit from reloading the page

		}
	});
}



