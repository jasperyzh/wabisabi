export default class FacebookGraphApi {
  constructor() {
    const appId = "1332272103607638";

    window.fbAsyncInit = function() {
      FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: "v4.0"
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    FB.getLoginStatus(function(response) {
      // statusChangeCallback(response);
      console.log(response);
    });

    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    // function checkLoginState() {
    //   FB.getLoginStatus(function(response) {
    //     statusChangeCallback(response);
    //   });
    // }

    this.events();
  }

  events() {
    // console.log("facebook events here");
  }

  getPosts() {
    FB.api(
      "/me",
      "GET",
      {
        fields:
          "posts.limit(6){is_published,object_id,caption,description,created_time,id,link,message,name,picture,status_type,type}"
      },
      response => {
        console.log(response);
        // Insert your code here
      }
    );
  }
}
