# TaskTrack

### The Task Management Platform that's Just Like Other Girls

![Demo Image](/docs/demo_image.png)

## What is TaskTrack?

TaskTrack is a simple and privacy friendly task management platform
. TaskTrack is not meant to be very different from other platforms
like it, rather it is solely being created so that I can learn how to effectively setup a full-stack application.

### Goals:

-   Make a simple task management platform akin to Todist
-   Methodically create a schema for user data & authentication
-   Learn how to use a Javascript in a full-stack environment

### Features to include:

-   Task management
-   Due dates
-   Should be done by dates
-   Projects
-   Sections
-   Inbox containing the day's tasks
-   Upcoming section
-   Filters / Labels / Tags
-   User authentication and authorization
-   Activity streak?
-   Themes
-   Async update of tasks?
-   Play sound when completing tasks

### Features to add later:

-   add profile photo for user
-   deletion of account
-   default home tab
-   smart understand recognition when adding tasks
-   reminders with ntfy.sh
-   backup, just export the user's json file
-   setup secutiry rules for db
-   store dark mode choice in localstorage
-   add "add task" button to <TaskBoard /> component
-   change which info is showed on individual task
-   Schema
    -   add description for each projeect
    -   add description for tasks when adding them
    -   color for each task (set one by default, change it when selecting task)
-   when route is "/app/[pid]" fix what the document title is
-   clicking on inbox should route to "/app", this should be the default page
-   clicking the logo should just go to /app
-   make drop down when clicking on name
-   implement dark theme
    -   make toggle work
    -   use daycula colors
-   implement search bar (maybe? idk seems complicated)
-   inbox should be a project in and of itself
-   today should show all of today's tasks
-   implement modal for editing tasks (or maybe just do it inplace)

### MANDATORY CHANGES BEFORE ALPHA

-   Change hardcorded values in Main.jsx when creating <Task/> objects
-   Give projects a default colour value
-

### References

[Todist.com](https://todoist.com) is where 99% of my inspiration is coming from.

Datebase Schema:

Features to implement when building with next Javascript

-   getStaticProps for fetching external data when statically generating at build time
-   selectively use static generation on general pages but not on the dashboard page that shows specific tasks
-   use getServerSideProps to use server side rendering, use this on the dashboard page
-   when you click the dot in the projects on the sidebar, open a color picker that allows the user to set a color for the project

### Notes

-   Folder structure is as follows:
    -   pages/
    -   src/
        -   sections/
        -   components/
    -   Accordion Item -> Main -> Check if project id valid -> Handles
