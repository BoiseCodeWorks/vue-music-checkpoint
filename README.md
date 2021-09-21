# Vue-music

## Even more fun with Music!

Alright so it's checkpoint time again so `please don't stop the music...`

### The Setup - Rebuild what you know

You should have from the previous checkpoint a fully functional app that searches the iTunes API for all of your favorite music. However the current state of that application is lacking a certain flare.

It's time to level this app up with Vuejs. Your end goal should be an app which allows you to create playlists of your favorite songs that you can easily play at your discretion, without having to re-query the iTunes API.

Your previous project has iTunes service already get that pulled over, however you will be responsible for building out the components necessary to use it. So your first step is to rebuild the functionality of your original project first, where you can search the iTunes API and get the results drawn to the screen.

Once you get the to your iTunes component fully working it will be time to focus on adding a way for you to keep track of your favorite songs. You will be doing this another component, maybe call it 'my-tunes'

Managing your list of songs will likely be the trickiest part of the assignment. 

### Data Decisions? 

Before jumping right into writing the code, you should make some decisions on how you want to manage the data for your my-tunes server. 

For example you could very simply create a song Schema, then have a get all songs route. While this would work, it basically restricts the entire application to only one playlist of songs for all users. 

Another Idea would be to create users and set up auth (this is not required) and each user would have their playlist of songs saved with their id. But again this restricts them to only having a single list of songs, where as many applications of this nature will have many different playlists.

The most ideal (and the most work) would be to have unique users, all who have a collection of playlist Schema's they own, and those playlists are nothing more than an array of song objects.

Again, it is up to you how to manage this data, as long as it meets the requirements below.


### Step 1 - Server Side

Once you have settled on how you plan to organize and manage your data, get your server up and running. Create the schema's and routes to allow users to get, post, put and delete, then test them with postman to insure they work as anticipated.

### Step 2 - MyTunes Component

Before starting step 2 You should already have a component that is responsible for drawing the iTunes `searchResults` to the page replicating all the functionality of the first project. From your iTunes component you will need to add a button to each song as it is rendered to the page so you have the option of adding it to your playlist. That button will dispatch an action to your store, to send the data to your server.

From there you will need a new component to draw the `activePlaylist`

Also don't forget it would be useless to keep around a list if you couldn't still play the songs


### Helpful hints

 - You should have a total of 1 view (unless you have login) which will have the components for myTunes and iTunes.
 - Since both iTunes and myTunes will likely draw song elements mostly the same, consider making songs a component
 - Play a song, then search for more songs then hit play again… are you still hearing the old song? Consider using the `:key=""` on you v-for so that it uses something unique to each ***track***
 

### Requirements:
  - Visualization
      - Users have a Search component and a myTunes component seperate from each other on the page
  - Functionality
      - Retains functionality of first playlist
      - Persist your data with mongoDB
      - Add / Remove Tracks from Playlist


### BONUS IDEAS - Some enhancing features 
- User Auth
- Have your myTunes List slide in and out when wanting to access it
- Allow users to `reorder` their list with a promote, and demote option
- Implement dragging to reorder your songs and drag to add to favorites
- Play All will play all songs in the playlist back to back 
- Shuffle will play all songs from list in a random order



## Legal Overview

The content under the CodeWorks®, LLC Organization and all of the individual repos are soley intended for use by CodeWorks Instruction to deliver Educational content to CodeWorks Students.

---

## Copyright

© CodeWorks® LLC, 2021. Unauthorized use and/or duplication of this material without express and written permission from CodeWorks, LLC is strictly prohibited.


<img src="https://bcw.blob.core.windows.net/public/img/7815839041305055" width="125">
