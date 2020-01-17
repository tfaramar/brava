# Strava

Strava is a browser-based application allows runners and cyclists to track their workouts, and connect with other athletes. This application allows users to create and save outdoor workout routes, see stats for their workouts, and view the recent workouts of the athletes that they follow.

This rendition of Strava was built using React/Redux for the frontend and Ruby on Rails for the backend, with PostgresQL to manage the database. All styling was accomplished with Sass-compiled CSS, and I used the Mapbox API for all of my mapping needs. This project, as of January 17, 2019, was developed in approximately ten days. Please scroll down to see a list of features I plan to implement soon! 

[Take a look at the application here.](https://tatiana-strava-clone.herokuapp.com/#/)

## Current Features

* User authentication: users can securely create an account and login, or they can tour the site using a demo account
* A splash page introduces users to the website, and guides them to the login or signup pages
* Once logged in, the user is directed to their dashboard, where they can toggle their activity feed to show either their own activities or their activities in conjunction with the activities of those athletes that they follow
* Users can "give kudos to" the activities of their followees
* A logged-in user can create a route through an interactive map that will allow them to plot their points, and access the Mapbox Directions API to optimize their route based on the activity type — cycling or running

## Highlights

One of the challenges that I faced was finding a way to implement endless scrolling on the user's activity dashboard, while also allowing them to toggle an activities filter. I needed a way to qualify what activities the user wanted to see, and prepare the backend to shift the ids of the activities that were being requested based on how far the user had scrolled. In my resource controller, I implemented conditional behavior based on a feed type query param, and set the offset to whatever number was passed as a query param from the frontend.

```ruby
    def index
        @ids = [current_user.id]
        if !params[:my_feed]
            current_user.followees.each { |u| @ids.push(u.id) }
        end
        @activities = Activity.where(user_id: @ids)
            .order(created_at: :desc)
            .limit(5)
            .offset(params[:offset])
        render :index
    end
```

On the frontend, I created two actions for fetching multiple activities: one that represented a first request of a certain type of activity, and another that represented an incremented request of the same type of activity. In the React component that managed this request, I stored the offset value in the component's state, and incremented it whenever a user scrolled to the bottom of the feed HTML element. Similarly, whenever a user toggles the types of activities that they want to see, the offset is reset, the value for the `my_feed` query param is updated, and a new request is made. 

```javascript
    export const fetchActivities = (offset = 0, my_feed = false) => {
        let URL = `/api/activities?offset=${offset}`
        if (my_feed) {
            URL += `&my_feed=${my_feed}`
        }

        return $.ajax({
            url: URL,
            method: 'GET'
        });
    };
```


## Future features

* Use AWS S3 buckets to host user avatar images and activity-specific images
* Use the Mapbox Terrain plugin to calculate elevation for route-based workouts
* Modify the Route Builder to include instructions on how to interact with the map
* Create a form through which users can manually input an activity, and optionally assign a route to it
* User the ReCharts API to build a graph of the user's elevation gain over the course of their activity
* Create an activity-specific show page
* Implement user profile pages


