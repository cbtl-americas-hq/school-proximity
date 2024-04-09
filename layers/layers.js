var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Proximity_1 = new ol.format.GeoJSON();
var features_Proximity_1 = format_Proximity_1.readFeatures(json_Proximity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proximity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proximity_1.addFeatures(features_Proximity_1);
var lyr_Proximity_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proximity_1, 
                style: style_Proximity_1,
                interactive: true,
    title: 'Proximity<br />\
    <img src="styles/legend/Proximity_1_0.png" /> 5-Minutes<br />\
    <img src="styles/legend/Proximity_1_1.png" /> 7-Minutes<br />'
        });
var format_Cafe_2 = new ol.format.GeoJSON();
var features_Cafe_2 = format_Cafe_2.readFeatures(json_Cafe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafe_2.addFeatures(features_Cafe_2);
var lyr_Cafe_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafe_2, 
                style: style_Cafe_2,
                interactive: true,
                title: '<img src="styles/legend/Cafe_2.png" /> Cafe'
            });
var format_SchoolWithin7MinuteWalkTime_3 = new ol.format.GeoJSON();
var features_SchoolWithin7MinuteWalkTime_3 = format_SchoolWithin7MinuteWalkTime_3.readFeatures(json_SchoolWithin7MinuteWalkTime_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchoolWithin7MinuteWalkTime_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchoolWithin7MinuteWalkTime_3.addFeatures(features_SchoolWithin7MinuteWalkTime_3);
var lyr_SchoolWithin7MinuteWalkTime_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SchoolWithin7MinuteWalkTime_3, 
                style: style_SchoolWithin7MinuteWalkTime_3,
                interactive: true,
                title: '<img src="styles/legend/SchoolWithin7MinuteWalkTime_3.png" /> School Within 7 Minute Walk Time'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Proximity_1.setVisible(true);lyr_Cafe_2.setVisible(true);lyr_SchoolWithin7MinuteWalkTime_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Proximity_1,lyr_Cafe_2,lyr_SchoolWithin7MinuteWalkTime_3];
lyr_Proximity_1.set('fieldAliases', {'storeid': 'storeid', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Cafe_2.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', });
lyr_SchoolWithin7MinuteWalkTime_3.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', 'near_edu': 'near_edu', 'layer': 'layer', 'path': 'path', });
lyr_Proximity_1.set('fieldImages', {'storeid': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Cafe_2.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', });
lyr_SchoolWithin7MinuteWalkTime_3.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', 'near_edu': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Proximity_1.set('fieldLabels', {'storeid': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Cafe_2.set('fieldLabels', {'id': 'no label', 'storeid': 'no label', 'store_name': 'no label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', });
lyr_SchoolWithin7MinuteWalkTime_3.set('fieldLabels', {'id': 'no label', 'storeid': 'no label', 'store_name': 'no label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', 'near_edu': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SchoolWithin7MinuteWalkTime_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});