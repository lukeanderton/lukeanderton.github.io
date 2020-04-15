
mergeInto(LibraryManager.library, {

    GetUserLocationX: function() {
        var x = document.getElementById("demo");
        function getLocation() {
            if (navigator.geolocation) {
                var lat = navigator.geolocation.getCurrentPosition(showPosition);
                return lat;
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
            //x.innerHTML = "Latitude: " + position.coords.latitude + 
            //"<br>Longitude: " + position.coords.longitude; 
            var lat = position.coords.latitude;
            return lat;
        }

        var lat = getLocation();
        return lat;
    },

    GetUserLocationY: function() {
        var x = document.getElementById("demo");
        function getLocation() {
            if (navigator.geolocation) {
                var lon = navigator.geolocation.getCurrentPosition(showPosition);
                return lon;
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
            //x.innerHTML = "Latitude: " + position.coords.latitude + 
            //"<br>Longitude: " + position.coords.longitude; 
            var lon = position.coords.longitude;
            return lon;
        }

        var lon = getLocation();
        return lon;
    },
});
