// import React, { useEffect } from "react";

// const facebookAppId = process.env.GATSBY_FB_APP_ID;

// function CustomerChat() {
//   useEffect(() => {
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         xfbml: true,
//         version: "v10.0",
//       });
//     };
//     (function (d, s, id) {
//       var js,
//         fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s);
//       js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "facebook-jssdk");
//   });
//   return (
//     <>
//       <div id="fb-root" />
//       <div
//         className="fb-customerchat"
//         attribution="page_inbox"
//         page_id={facebookAppId}
//       />
//     </>
//   );
// }

// export default CustomerChat;



// *** Code for Messenger Embed ***
//
// <!-- Messenger Chat Plugin Code -->
//     <div id="fb-root"></div>

//     <!-- Your Chat Plugin code -->
//     <div id="fb-customer-chat" class="fb-customerchat">
//     </div>

//     <script>
//       var chatbox = document.getElementById('fb-customer-chat');
//       chatbox.setAttribute("page_id", "509656605804238");
//       chatbox.setAttribute("attribution", "page_inbox");
//       window.fbAsyncInit = function() {
//         FB.init({
//           xfbml            : true,
//           version          : 'v10.0'
//         });
//       };

//       (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));
//     </script>