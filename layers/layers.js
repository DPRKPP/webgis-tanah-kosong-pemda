var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIWorldTopo_2 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_3 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Pencarian_4 = new ol.format.GeoJSON();
var features_Pencarian_4 = format_Pencarian_4.readFeatures(json_Pencarian_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pencarian_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pencarian_4.addFeatures(features_Pencarian_4);
var lyr_Pencarian_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pencarian_4, 
                style: style_Pencarian_4,
                popuplayertitle: 'Pencarian',
                interactive: false,
                title: '<img src="styles/legend/Pencarian_4.png" /> Pencarian'
            });
var format_titikkoordinat_5 = new ol.format.GeoJSON();
var features_titikkoordinat_5 = format_titikkoordinat_5.readFeatures(json_titikkoordinat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikkoordinat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikkoordinat_5.addFeatures(features_titikkoordinat_5);
var lyr_titikkoordinat_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikkoordinat_5, 
                style: style_titikkoordinat_5,
                popuplayertitle: 'titik koordinat',
                interactive: true,
                title: '<img src="styles/legend/titikkoordinat_5.png" /> titik koordinat'
            });
var format_polygonkejaksaan_6 = new ol.format.GeoJSON();
var features_polygonkejaksaan_6 = format_polygonkejaksaan_6.readFeatures(json_polygonkejaksaan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonkejaksaan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonkejaksaan_6.addFeatures(features_polygonkejaksaan_6);
var lyr_polygonkejaksaan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonkejaksaan_6, 
                style: style_polygonkejaksaan_6,
                popuplayertitle: 'polygonkejaksaan',
                interactive: true,
                title: '<img src="styles/legend/polygonkejaksaan_6.png" /> polygonkejaksaan'
            });
var format_koordinatsr_7 = new ol.format.GeoJSON();
var features_koordinatsr_7 = format_koordinatsr_7.readFeatures(json_koordinatsr_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koordinatsr_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koordinatsr_7.addFeatures(features_koordinatsr_7);
var lyr_koordinatsr_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koordinatsr_7, 
                style: style_koordinatsr_7,
                popuplayertitle: 'koordinatsr',
                interactive: true,
                title: '<img src="styles/legend/koordinatsr_7.png" /> koordinatsr'
            });
var format_SekolahRakyat_8 = new ol.format.GeoJSON();
var features_SekolahRakyat_8 = format_SekolahRakyat_8.readFeatures(json_SekolahRakyat_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahRakyat_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahRakyat_8.addFeatures(features_SekolahRakyat_8);
var lyr_SekolahRakyat_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahRakyat_8, 
                style: style_SekolahRakyat_8,
                popuplayertitle: 'Sekolah Rakyat',
                interactive: true,
                title: '<img src="styles/legend/SekolahRakyat_8.png" /> Sekolah Rakyat'
            });
var format_TPUTJKUPANG1_9 = new ol.format.GeoJSON();
var features_TPUTJKUPANG1_9 = format_TPUTJKUPANG1_9.readFeatures(json_TPUTJKUPANG1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPUTJKUPANG1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPUTJKUPANG1_9.addFeatures(features_TPUTJKUPANG1_9);
var lyr_TPUTJKUPANG1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPUTJKUPANG1_9, 
                style: style_TPUTJKUPANG1_9,
                popuplayertitle: 'TPUTJKUPANG1',
                interactive: true,
                title: '<img src="styles/legend/TPUTJKUPANG1_9.png" /> TPUTJKUPANG1'
            });
var format_TanahTPUTJKupang_10 = new ol.format.GeoJSON();
var features_TanahTPUTJKupang_10 = format_TanahTPUTJKupang_10.readFeatures(json_TanahTPUTJKupang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahTPUTJKupang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahTPUTJKupang_10.addFeatures(features_TanahTPUTJKupang_10);
var lyr_TanahTPUTJKupang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahTPUTJKupang_10, 
                style: style_TanahTPUTJKupang_10,
                popuplayertitle: 'Tanah TPU TJ Kupang',
                interactive: true,
                title: '<img src="styles/legend/TanahTPUTJKupang_10.png" /> Tanah TPU TJ Kupang'
            });
var format_tanahdishub_11 = new ol.format.GeoJSON();
var features_tanahdishub_11 = format_tanahdishub_11.readFeatures(json_tanahdishub_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tanahdishub_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tanahdishub_11.addFeatures(features_tanahdishub_11);
var lyr_tanahdishub_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tanahdishub_11, 
                style: style_tanahdishub_11,
                popuplayertitle: 'tanah dishub',
                interactive: true,
                title: '<img src="styles/legend/tanahdishub_11.png" /> tanah dishub'
            });
var format_titik_12 = new ol.format.GeoJSON();
var features_titik_12 = format_titik_12.readFeatures(json_titik_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_12.addFeatures(features_titik_12);
var lyr_titik_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_12, 
                style: style_titik_12,
                popuplayertitle: 'titik',
                interactive: true,
                title: '<img src="styles/legend/titik_12.png" /> titik'
            });
var format_DishubSHP1_13 = new ol.format.GeoJSON();
var features_DishubSHP1_13 = format_DishubSHP1_13.readFeatures(json_DishubSHP1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DishubSHP1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DishubSHP1_13.addFeatures(features_DishubSHP1_13);
var lyr_DishubSHP1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DishubSHP1_13, 
                style: style_DishubSHP1_13,
                popuplayertitle: 'DishubSHP1',
                interactive: true,
                title: '<img src="styles/legend/DishubSHP1_13.png" /> DishubSHP1'
            });
var format_TanahterminalTypeC_14 = new ol.format.GeoJSON();
var features_TanahterminalTypeC_14 = format_TanahterminalTypeC_14.readFeatures(json_TanahterminalTypeC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahterminalTypeC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahterminalTypeC_14.addFeatures(features_TanahterminalTypeC_14);
var lyr_TanahterminalTypeC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahterminalTypeC_14, 
                style: style_TanahterminalTypeC_14,
                popuplayertitle: 'Tanah terminal Type C',
                interactive: true,
                title: '<img src="styles/legend/TanahterminalTypeC_14.png" /> Tanah terminal Type C'
            });
var format_SHPBandes_15 = new ol.format.GeoJSON();
var features_SHPBandes_15 = format_SHPBandes_15.readFeatures(json_SHPBandes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPBandes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPBandes_15.addFeatures(features_SHPBandes_15);
var lyr_SHPBandes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPBandes_15, 
                style: style_SHPBandes_15,
                popuplayertitle: 'SHPBandes',
                interactive: true,
                title: '<img src="styles/legend/SHPBandes_15.png" /> SHPBandes'
            });
var format_TanahBandesPemda_16 = new ol.format.GeoJSON();
var features_TanahBandesPemda_16 = format_TanahBandesPemda_16.readFeatures(json_TanahBandesPemda_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahBandesPemda_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahBandesPemda_16.addFeatures(features_TanahBandesPemda_16);
var lyr_TanahBandesPemda_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahBandesPemda_16, 
                style: style_TanahBandesPemda_16,
                popuplayertitle: 'Tanah Bandes/Pemda',
                interactive: true,
                title: '<img src="styles/legend/TanahBandesPemda_16.png" /> Tanah Bandes/Pemda'
            });
var group_Bandespemda = new ol.layer.Group({
                                layers: [lyr_SHPBandes_15,lyr_TanahBandesPemda_16,],
                                fold: 'open',
                                title: 'Bandes/pemda'});
var group_Terminaltypec = new ol.layer.Group({
                                layers: [lyr_DishubSHP1_13,lyr_TanahterminalTypeC_14,],
                                fold: 'close',
                                title: 'Terminal type c'});
var group_dishub = new ol.layer.Group({
                                layers: [lyr_tanahdishub_11,lyr_titik_12,],
                                fold: 'close',
                                title: 'dishub'});
var group_perluasantpu = new ol.layer.Group({
                                layers: [lyr_TPUTJKUPANG1_9,lyr_TanahTPUTJKupang_10,],
                                fold: 'close',
                                title: 'perluasan tpu'});
var group_sr = new ol.layer.Group({
                                layers: [lyr_koordinatsr_7,lyr_SekolahRakyat_8,],
                                fold: 'open',
                                title: 'sr'});
var group_Kejaksaan = new ol.layer.Group({
                                layers: [lyr_titikkoordinat_5,lyr_polygonkejaksaan_6,],
                                fold: 'open',
                                title: 'Kejaksaan'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_ESRIWorldTopo_2.setVisible(true);lyr_GoogleSatelliteHybrid_3.setVisible(true);lyr_Pencarian_4.setVisible(true);lyr_titikkoordinat_5.setVisible(true);lyr_polygonkejaksaan_6.setVisible(true);lyr_koordinatsr_7.setVisible(true);lyr_SekolahRakyat_8.setVisible(true);lyr_TPUTJKUPANG1_9.setVisible(true);lyr_TanahTPUTJKupang_10.setVisible(true);lyr_tanahdishub_11.setVisible(true);lyr_titik_12.setVisible(true);lyr_DishubSHP1_13.setVisible(true);lyr_TanahterminalTypeC_14.setVisible(true);lyr_SHPBandes_15.setVisible(true);lyr_TanahBandesPemda_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_ESRIWorldTopo_2,lyr_GoogleSatelliteHybrid_3,lyr_Pencarian_4,group_Kejaksaan,group_sr,group_perluasantpu,group_dishub,group_Terminaltypec,group_Bandespemda];
lyr_Pencarian_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_titikkoordinat_5.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'gpxx_Waypo': 'gpxx_Waypo', 'wptx1_Wayp': 'wptx1_Wayp', 'ctx_Creati': 'ctx_Creati', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'zcoord': 'zcoord', });
lyr_polygonkejaksaan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'luas_m2': 'luas_m2', });
lyr_koordinatsr_7.set('fieldAliases', {'id': 'id', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_SekolahRakyat_8.set('fieldAliases', {'id': 'id', 'luas_m2': 'luas_m2', 'Nama': 'Nama', });
lyr_TPUTJKUPANG1_9.set('fieldAliases', {'id': 'id', 'latitude': 'latitude', 'longitude': 'longitude', 'field_4': 'field_4', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_TanahTPUTJKupang_10.set('fieldAliases', {'id': 'id', 'luas_m2': 'luas_m2', 'Nama': 'Nama', });
lyr_tanahdishub_11.set('fieldAliases', {'id': 'id', 'luas_m2': 'luas_m2', 'Nama': 'Nama', });
lyr_titik_12.set('fieldAliases', {'titik': 'titik', 'latitude': 'latitude', 'longitude': 'longitude', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_DishubSHP1_13.set('fieldAliases', {'titik': 'titik', 'latitude': 'latitude', 'longitude': 'longitude', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_TanahterminalTypeC_14.set('fieldAliases', {'id': 'id', 'luas_m2': 'luas_m2', 'Nama': 'Nama', });
lyr_SHPBandes_15.set('fieldAliases', {'Nama titik': 'Nama titik', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_TanahBandesPemda_16.set('fieldAliases', {'id': 'id', 'luas_m2': 'luas_m2', 'Nama': 'Nama', });
lyr_Pencarian_4.set('fieldImages', {'id': '', 'Nama': '', 'xcoord': '', 'ycoord': '', });
lyr_titikkoordinat_5.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheigh': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsd': '', 'dgpsid': '', 'gpxx_Waypo': '', 'wptx1_Wayp': '', 'ctx_Creati': '', 'xcoord': '', 'ycoord': '', 'zcoord': '', });
lyr_polygonkejaksaan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': '', 'luas_m2': '', });
lyr_koordinatsr_7.set('fieldImages', {'id': '', 'xcoord': '', 'ycoord': '', });
lyr_SekolahRakyat_8.set('fieldImages', {'id': 'TextEdit', 'luas_m2': 'TextEdit', 'Nama': '', });
lyr_TPUTJKUPANG1_9.set('fieldImages', {'id': '', 'latitude': '', 'longitude': '', 'field_4': '', 'xcoord': '', 'ycoord': '', });
lyr_TanahTPUTJKupang_10.set('fieldImages', {'id': 'TextEdit', 'luas_m2': 'TextEdit', 'Nama': '', });
lyr_tanahdishub_11.set('fieldImages', {'id': 'TextEdit', 'luas_m2': 'Range', 'Nama': '', });
lyr_titik_12.set('fieldImages', {'titik': '', 'latitude': '', 'longitude': '', 'xcoord': '', 'ycoord': '', });
lyr_DishubSHP1_13.set('fieldImages', {'titik': '', 'latitude': '', 'longitude': '', 'xcoord': '', 'ycoord': '', });
lyr_TanahterminalTypeC_14.set('fieldImages', {'id': 'TextEdit', 'luas_m2': 'Range', 'Nama': '', });
lyr_SHPBandes_15.set('fieldImages', {'Nama titik': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_TanahBandesPemda_16.set('fieldImages', {'id': 'TextEdit', 'luas_m2': 'Range', 'Nama': '', });
lyr_Pencarian_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_titikkoordinat_5.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsd': 'no label', 'dgpsid': 'no label', 'gpxx_Waypo': 'no label', 'wptx1_Wayp': 'no label', 'ctx_Creati': 'no label', 'xcoord': 'inline label - always visible', 'ycoord': 'inline label - always visible', 'zcoord': 'no label', });
lyr_polygonkejaksaan_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'luas_m2': 'inline label - always visible', });
lyr_koordinatsr_7.set('fieldLabels', {'id': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_SekolahRakyat_8.set('fieldLabels', {'id': 'no label', 'luas_m2': 'inline label - always visible', 'Nama': 'no label', });
lyr_TPUTJKUPANG1_9.set('fieldLabels', {'id': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'field_4': 'no label', 'xcoord': 'inline label - always visible', 'ycoord': 'inline label - always visible', });
lyr_TanahTPUTJKupang_10.set('fieldLabels', {'id': 'no label', 'luas_m2': 'inline label - always visible', 'Nama': 'no label', });
lyr_tanahdishub_11.set('fieldLabels', {'id': 'no label', 'luas_m2': 'inline label - always visible', 'Nama': 'no label', });
lyr_titik_12.set('fieldLabels', {'titik': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'xcoord': 'inline label - always visible', 'ycoord': 'inline label - always visible', });
lyr_DishubSHP1_13.set('fieldLabels', {'titik': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'xcoord': 'inline label - always visible', 'ycoord': 'inline label - always visible', });
lyr_TanahterminalTypeC_14.set('fieldLabels', {'id': 'no label', 'luas_m2': 'inline label - always visible', 'Nama': 'no label', });
lyr_SHPBandes_15.set('fieldLabels', {'Nama titik': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'xcoord': 'inline label - always visible', 'ycoord': 'inline label - always visible', });
lyr_TanahBandesPemda_16.set('fieldLabels', {'id': 'no label', 'luas_m2': 'inline label - always visible', 'Nama': 'no label', });
lyr_TanahBandesPemda_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});