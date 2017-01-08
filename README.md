# FrontEndDev_Assignment13.2
###Assignment 13.2 of the AcadGild Front End Web Dev Course

● Create one form in a component and if form is not saved and user clicks back button or other link of application.  
Show one popup to user for confirmation that:  
“Your data hasn’t saved. Are you sure, to leave this?”

Notes:
* Run `npm run serve` to start app
* Roles link was placed to show 'PageNotFound' page
* Used Hash style URL (because typing in the path directly was not working and  
 when I refreshed the browser it redirected me to 404 page.)
* Implemented route guard by implementing CanDeactivate interface.  
 Called a confirm() in the canDeactivate() method 
 