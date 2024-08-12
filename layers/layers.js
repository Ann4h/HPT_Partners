ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3187893.493439, -544878.716126, 5665638.427065, 636164.874318]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NumberofHPTpartners_1 = new ol.format.GeoJSON();
var features_NumberofHPTpartners_1 = format_NumberofHPTpartners_1.readFeatures(json_NumberofHPTpartners_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumberofHPTpartners_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberofHPTpartners_1.addFeatures(features_NumberofHPTpartners_1);
var lyr_NumberofHPTpartners_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumberofHPTpartners_1, 
                style: style_NumberofHPTpartners_1,
                popuplayertitle: "Number of HPT partners",
                interactive: true,
    title: 'Number of HPT partners<br />\
    <img src="styles/legend/NumberofHPTpartners_1_0.png" /> No partners<br />\
    <img src="styles/legend/NumberofHPTpartners_1_1.png" /> 1 - 3<br />\
    <img src="styles/legend/NumberofHPTpartners_1_2.png" /> 3 - 6<br />\
    <img src="styles/legend/NumberofHPTpartners_1_3.png" /> 6 - 9<br />\
    <img src="styles/legend/NumberofHPTpartners_1_4.png" /> 9 - 12<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_NumberofHPTpartners_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NumberofHPTpartners_1];
lyr_NumberofHPTpartners_1.set('fieldAliases', {'ADM1_EN': 'County: ', 'Partners': 'Partners', 'Total': 'Number of partners: ', });
lyr_NumberofHPTpartners_1.set('fieldImages', {'ADM1_EN': 'TextEdit', 'Partners': 'TextEdit', 'Total': 'TextEdit', });
lyr_NumberofHPTpartners_1.set('fieldLabels', {'ADM1_EN': 'inline label - visible with data', 'Partners': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_NumberofHPTpartners_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});