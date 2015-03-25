$(document).ready(function(){
  GitHubActivity.feed({
    username: "dshcheung",
    // repository: "your-repo", // optional
    selector: "#feed",
    limit:  20// optional
  });
});