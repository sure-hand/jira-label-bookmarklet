# jira-label-bookmarklet
Bookmarklet showing popup to simplify setting Jira labels reflecting the status of Jira case

To start using it, create a new Bookmark in Chrome or Firefox and add following as the URL

```
javascript:(function loadBookmarklet(){var script=document.createElement("script");script.src="https://raw.githubusercontent.com/sure-hand/jira-label-bookmarklet/master/jira-label-bookmarklet.js";script.type="text/javascript";document.body.appendChild(script);}
());
