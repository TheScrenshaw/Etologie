function initMap()
{
    var latlng = new google.maps.LatLng(50.0541181,14.369028500000013);
    var latlng2 = new google.maps.LatLng(50.1791277,14.420233000000053);
    var latlng3 = new google.maps.LatLng(50.068894,14.424494699999968);
    var myOptions =
    {
        zoom: 17,
        center: latlng,
        mapTypeId: "roadmap"
    };

    var myOptions2 =
    {
        zoom: 17,
        center: latlng2,
        mapTypeId: "roadmap"
    };

    var myOptions3 =
    {
        zoom: 17,
        center: latlng3,
        mapTypeId: "roadmap"
    };

    var map = new google.maps.Map(document.getElementById("map-fhs"), myOptions);

    var map2 = new google.maps.Map(document.getElementById("map-nudz"), myOptions2);

    var map3 = new google.maps.Map(document.getElementById("map-prf"), myOptions3);

    var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map,
        title:"Fakulta humanitních studií"
   });

    var myMarker2 = new google.maps.Marker(
    {
        position: latlng2,
        map: map2,
        title:"Národní ústav duševního zdraví"
    });

    var myMarker3 = new google.maps.Marker(
    {
        position: latlng3,
        map: map3,
        title:"Přírodovědecká fakulta Karlovy university"
    });

}
