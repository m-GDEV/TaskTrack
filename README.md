# TaskTrack
### The Task Management Platform that's Just Like Other Girls

![Demo Image](/demo_image.png)

## What is TaskTrack?

TaskTrack is a simple and privacy friendly task management platform
. TaskTrack is not meant to be very different from other platforms
like it, rather it is solely being created so that I can learn how to effectively setup a full-stack application.

### Goals:
* Make a simple task management platform akin to Todist
* Methodically create a schema for user data & authentication
* Learn how to use a Javascript in a full-stack environment

### Features to include:
* Task management
* Due dates
* Should be done by dates
* Projects
* Sections
* Inbox containing the day's tasks
* Upcoming section
* Filters / Labels / Tags
* User authentication and authorization
* Activity streak?
* Themes
* Async update of tasks?


### References

[Todist.com](https://todoist.com) is where 99% of my inspiration is coming from. 

Datebase Schema:
- Data
	- One document per user
		- User info section
			- email, password hash, phone number, username
		- Projects
			- All tasks in project with section attribute
		- Miscellaneous
			- Favourite projects
			- Settings



Features to implement when building with next Javascript
- getStaticProps for fetching external data when statically generating at build time
- selectively use static generation on general pages but not on the dashboard page that shows specific tasks
- use getServerSideProps to use server side rendering, use this on  the dashboard page
- 

