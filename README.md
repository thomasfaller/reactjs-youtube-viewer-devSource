# reactjs-youtube-viewer-devSource
This is the development code behind my ReactJs YouTube viewer.

The static build is available on the following repo: [reactjs-youtube-viewer](https://github.com/thomasfaller/reactjs-youtube-viewer)
Live demo: [link](https://thomasfaller.github.io/reactjs-youtube-viewer/)
--
The different components are organized as follow:
+ App.js
 - SearchBar.js
 - VideoDetail.js
 + VideoList.js
  - VideolistItem.js
  
### App

App is the parent component injected into the #root tag of my `index.HTML` file for output.
It is styled through one stylesheet `App.css`.
I'm planning on doing another version of this app using [Styled Components](https://www.styled-components.com/)

### SearchBar

SearchBar is the `<input>` field visitors can search through. It is a controlled input as recommended by ReactJs [best practices](https://reactjs.org/docs/forms.html#controlled-components). I added `lodash` throttle method to prevent the search from being retrigger instantly when typing with the following line:
```
const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
```
### VideoDetail

VideoDetail is the component that displays the selected/main video to play through an `<iframe>` tag.

### VideoList

VideoList is the component that will render the `<ul>` element with all the results from the API.

### VideoListItem

This is the individual `<li>` items from the search results. I used the `String.substring()` method to reduce the descriptions and titles to create excerpts.

---

### Data flow

 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
## API

I used the [youtube-search-api](https://www.npmjs.com/package/youtube-api-search) built on [Axios](https://www.npmjs.com/package/axios).

