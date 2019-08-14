# Best-Selling-Books React App
I made this app to expand my reading horizons. By combining the New York Times Best Sellers API and GoodReads API, the app allows the user to see current and past best sellers lists from a range of genres hosted by the NYT. The GoodReads API allows for book ratings, search results on titles and authors and links to buy books or access further information on a title or author.

## Usability
-The site offers the most up to date New York Times Best Sellers Lists in a variety of genres.
### Date Driven
-The user can go backwards in time to access any week of the New York Time's best sellers lists.
### Searchable
-Thanks to the GoodReads API the user can search for titles and authors not limited to those who have only been on the NYT Best Sellers List.
### Ratings
-The GoodReads Api also allows users to get an idea of how readers rate the books on the NYT Best Sellers Lists.
### Further Information
-Users can also follow links to buy or read further reviews on books they are interested in.

## Notes
-The NYT API may restrict access for a short amount of time (~15 - 20 sec) if you make a number of immediate consecutive requests.
So don't be alarmed if you get an error screen after clicking a bunch, just wait 30 seconds and refresh the page.

-Another somewhat odd behavior you might run into with the NYT API, is during their list updates. They update some lists weekly and during that time the books may not appear on the site for the latest week. As soon as NYT updates with the books (which takes about a half hour in my experience) the books will be updated on this site as well.

-Also when NYT updates their lists they also show for a week in the future for some reason, so don't be alarmed if you see the datepicker show a date in the future, it's based of the current date of the NYT's lists.

Feel free to message me if you run into any problems


-Dan
