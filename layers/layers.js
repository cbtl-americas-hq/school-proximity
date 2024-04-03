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
var format_WalkTimeIsochrones_1 = new ol.format.GeoJSON();
var features_WalkTimeIsochrones_1 = format_WalkTimeIsochrones_1.readFeatures(json_WalkTimeIsochrones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkTimeIsochrones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkTimeIsochrones_1.addFeatures(features_WalkTimeIsochrones_1);
var lyr_WalkTimeIsochrones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WalkTimeIsochrones_1, 
                style: style_WalkTimeIsochrones_1,
                interactive: true,
    title: 'Walk Time Isochrones<br />\
    <img src="styles/legend/WalkTimeIsochrones_1_0.png" /> 5-Minutes<br />\
    <img src="styles/legend/WalkTimeIsochrones_1_1.png" /> 7-Minutes<br />'
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
var format_CafeWithin510minWalk_3 = new ol.format.GeoJSON();
var features_CafeWithin510minWalk_3 = format_CafeWithin510minWalk_3.readFeatures(json_CafeWithin510minWalk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CafeWithin510minWalk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CafeWithin510minWalk_3.addFeatures(features_CafeWithin510minWalk_3);
var lyr_CafeWithin510minWalk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CafeWithin510minWalk_3, 
                style: style_CafeWithin510minWalk_3,
                interactive: true,
                title: '<img src="styles/legend/CafeWithin510minWalk_3.png" /> Cafe Within 5-10min Walk'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WalkTimeIsochrones_1.setVisible(true);lyr_Cafe_2.setVisible(true);lyr_CafeWithin510minWalk_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WalkTimeIsochrones_1,lyr_Cafe_2,lyr_CafeWithin510minWalk_3];
lyr_WalkTimeIsochrones_1.set('fieldAliases', {'storeid': 'storeid', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Cafe_2.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', });
lyr_CafeWithin510minWalk_3.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', 'near_edu': 'near_edu', 'layer': 'layer', 'path': 'path', });
lyr_WalkTimeIsochrones_1.set('fieldImages', {'storeid': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Cafe_2.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', });
lyr_CafeWithin510minWalk_3.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', 'near_edu': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WalkTimeIsochrones_1.set('fieldLabels', {'storeid': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Cafe_2.set('fieldLabels', {'id': 'no label', 'storeid': 'no label', 'store_name': 'no label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', });
lyr_CafeWithin510minWalk_3.set('fieldLabels', {'id': 'no label', 'storeid': 'no label', 'store_name': 'no label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', 'near_edu': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CafeWithin510minWalk_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});