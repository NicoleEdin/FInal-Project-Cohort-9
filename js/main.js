
// “use strict”;

// !function() {
//  var t = window.driftt = window.drift = window.driftt || [];
//  if (!t.init) {
//    if (t.invoked) return void (window.console && console.error && console.error(“Drift snippet included twice.“));
//    t.invoked = !0, t.methods = [ “identify”, “config”, “track”, “reset”, “debug”, “show”, “ping”, “page”, “hide”, “off”, “on” ],
//    t.factory = function(e) {
//      return function() {
//        var n = Array.prototype.slice.call(arguments);
//        return n.unshift(e), t.push(n), t;
//      };
//    }, t.methods.forEach(function(e) {
//      t[e] = t.factory(e);
//    }), t.load = function(t) {
//      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement(“script”);
//      o.type = “text/javascript”, o.async = !0, o.crossorigin = “anonymous”, o.src = “https://js.driftt.com/include/” + n + “/” + t + “.js”;
//      var i = document.getElementsByTagName(“script”)[0];
//      i.parentNode.insertBefore(o, i);
//    };
//  }
// }();
// drift.SNIPPET_VERSION = ‘0.3.1’;
// drift.load(‘yrsfzd6yxitc’);

// function userInput() {
//
// }

// function getPostcode() {
//
// // $('#submit').click(function(){
//
//   //Get Postcode
//   var number = $('#number').val();
//   var postcode = $('#postcode').val().toUpperCase();
//   // console.log(postcode);
//   // Get latitude & longitude
//   $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + postcode + '&sensor=false&key=AIzaSyALya-a0-ZILCwhmRmpOP1u5VwGIl4jCNE',
//             function(data) {
//               console.log(data);
//               var lat = data.results[0].geometry.location.lat;
//               var lng = data.results[0].geometry.location.lng;
//
//   //Get address
//   $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=false&key=AIzaSyALya-a0-ZILCwhmRmpOP1u5VwGIl4jCNE',
//             function(data) {
//               var address = data.results[0].address_components;
//               var street = address[1].long_name;
//               var town = address[2].long_name;
//               var county = address[3].long_name;
//
//   //Insert
//   $('#text').text(number + ', ' + street + ', ' + town + ', ' + county + ', ' + postcode);
//     });
//   });
// // });
// }


// console.log(userInput);
// var searchBar = document.getElementById("search-bar");
// var postcode = searchBar.value;
// console.log(postcode);
// function searchResults() {
//   var zip = document.getElementById("postcode").value;
//   // A meetup get request based on postcode cr82dw
//   // var url = "https://api.meetup.com/2/concierge?zip="+ zip +"&offset=0&format=json&photo-host=public&page=500&sig_id=268057217&sig=83b7b3dedd771a983de67776954d288d621f50af";
//   var url = "https://api.meetup.com/2/concierge?key=153616cc411c2b2e41d2a351f18c&sign=true&photo-host=public&zip=" + zip;
//
//   // To display results in a list
//   $.get(url, function(response) {
//     console.log(response);
//     var upcomingEvents = response.results;
//     var str = "<ul>"
//     upcomingEvents.forEach(function(upcomingEvent) {
//     str += "<li>" + upcomingEvent.name + "<br>" + upcomingEvent.description + "<br>" + upcomingEvent.event_url + "<br>" + "</li>";
//   });
//
//   str += '</ul>';
//   document.getElementById("events").innerHTML = str;
//   })
// }
