#target Illustrator

//  script.name = layerExporter.jsx;
//  script.description = export the individual layers and sublayers in illustrator files;
//  script.requirements = an open document;
//  script.parent = Alex Zaharia;
//  script.elegant = false;


/**
* export .ai layers and sublayers as PNG
* @author Alex Zaharia
*/


if (app.documents.length>0) {
    main();
} else {
    alert('Cancelled by user');
}


function main() {
    var document = app.activeDocument;
    var afile = document.fullName;
    var filename = afile.name.split('.')[0];

    var folder = afile.parent.selectDlg("Exporting images...");

    if(folder != null) { 
        var activeABidx = document.artboards.getActiveArtboardIndex();
        var activeAB = document.artboards[activeABidx]; // active artboard        
        var abBounds = activeAB.artboardRect;// dimensions of artboard (4 corners)

        showAllLayers();
        var docBounds = document.visibleBounds;
        activeAB.artboardRect = docBounds;

        var options = new ExportOptionsPNG24();
        options.antiAliasing = true;
        options.transparency = true;
        options.artBoardClipping = true;

        var n = document.layers.length;
        hideAllLayers ();

        for(var i=n-1, k=0; i>=0; i--, k++) {
            var layer = document.layers[i];
            layer.visible = true;            

            var file = new File(folder.fsName + '/' + filename + '-' + layer.name + ".png");

            document.exportFile(file, ExportType.PNG24, options);
            layer.visible = false;
        }

        showAllLayers();
        activeAB.artboardRect = abBounds;
    }

    function showAllLayers() {
        forEach(document.layers, function(layer) {
            layer.visible = true;
        }); 
    }

    function hideAllLayers() {
        forEach(document.layers, function(layer) {
            layer.visible = false;
        });
    }


    function forEach(collection, fn) {
        for(var i = 0; i < collection.length; ++i) {
            fn(collection[i]);
        }
    }
}