var depts = [{"id":1,"nom":"AIN","reg":21},
{"id":2,"nom":"AISNE","reg":18},
{"id":3,"nom":"ALLIER","reg":2},
{"id":4,"nom":"ALPES-DE-HAUTE-PROVENCE","reg":20},
{"id":5,"nom":"HAUTES-ALPES","reg":20},
{"id":6,"nom":"ALPES-MARITIMES","reg":20},
{"id":7,"nom":"ARDECHE","reg":21},
{"id":8,"nom":"ARDENNES","reg":7},
{"id":9,"nom":"ARIEGE","reg":15},
{"id":10,"nom":"AUBE","reg":7},
{"id":11,"nom":"AUDE","reg":12},
{"id":12,"nom":"AVEYRON","reg":15},
{"id":13,"nom":"BOUCHES-DU-RHONE","reg":20},
{"id":14,"nom":"CALVADOS","reg":3},
{"id":15,"nom":"CANTAL","reg":2},
{"id":16,"nom":"CHARENTE","reg":19},
{"id":17,"nom":"CHARENTE-MARITIME","reg":19},
{"id":18,"nom":"CHER","reg":6},
{"id":19,"nom":"CORREZE","reg":13},
{"id":20,"nom":"CORSE-DU-SUD","reg":8},
{"id":21,"nom":"COTE-D'OR","reg":4},
{"id":22,"nom":"COTES-D'ARMOR","reg":5},
{"id":23,"nom":"CREUSE","reg":13},
{"id":24,"nom":"DORDOGNE","reg":1},
{"id":25,"nom":"DOUBS","reg":9},
{"id":26,"nom":"DROME","reg":21},
{"id":27,"nom":"EURE","reg":10},
{"id":28,"nom":"EURE-ET-LOIR","reg":6},
{"id":29,"nom":"FINISTERE","reg":5},
{"id":30,"nom":"GARD","reg":12},
{"id":31,"nom":"HAUTE-GARONNE","reg":15},
{"id":32,"nom":"GERS","reg":15},
{"id":33,"nom":"GIRONDE","reg":1},
{"id":34,"nom":"HERAULT","reg":12},
{"id":35,"nom":"ILLE-ET-VILAINE","reg":5},
{"id":36,"nom":"INDRE","reg":6},
{"id":37,"nom":"INDRE-ET-LOIRE","reg":6},
{"id":38,"nom":"ISERE","reg":21},
{"id":39,"nom":"JURA","reg":9},
{"id":40,"nom":"LANDES","reg":1},
{"id":41,"nom":"LOIR-ET-CHER","reg":6},
{"id":42,"nom":"LOIRE","reg":21},
{"id":43,"nom":"HAUTE-LOIRE","reg":2},
{"id":44,"nom":"LOIRE-ATLANTIQUE","reg":17},
{"id":45,"nom":"LOIRET","reg":6},
{"id":46,"nom":"LOT","reg":15},
{"id":47,"nom":"LOT-ET-GARONNE","reg":1},
{"id":48,"nom":"LOZERE","reg":12},
{"id":49,"nom":"MAINE-ET-LOIRE","reg":17},
{"id":50,"nom":"MANCHE","reg":3},
{"id":51,"nom":"MARNE","reg":7},
{"id":52,"nom":"HAUTE-MARNE","reg":7},
{"id":53,"nom":"MAYENNE","reg":17},
{"id":54,"nom":"MEURTHE-ET-MOSELLE","reg":14},
{"id":55,"nom":"MEUSE","reg":14},
{"id":56,"nom":"MORBIHAN","reg":5},
{"id":57,"nom":"MOSELLE","reg":14},
{"id":58,"nom":"NIEVRE","reg":4},
{"id":59,"nom":"NORD","reg":16},
{"id":60,"nom":"OISE","reg":18},
{"id":61,"nom":"ORNE","reg":3},
{"id":62,"nom":"PAS-DE-CALAIS","reg":16},
{"id":63,"nom":"PUY-DE-DOME","reg":2},
{"id":64,"nom":"PYRENEES-ATLANTIQUES","reg":1},
{"id":65,"nom":"HAUTES-PYRENEES","reg":15},
{"id":66,"nom":"PYRENEES-ORIENTALES","reg":12},
{"id":67,"nom":"BAS-RHIN","reg":0},
{"id":68,"nom":"HAUT-RHIN","reg":0},
{"id":69,"nom":"RHONE","reg":21},
{"id":70,"nom":"HAUTE-SAONE","reg":9},
{"id":71,"nom":"SAONE-ET-LOIRE","reg":4},
{"id":72,"nom":"SARTHE","reg":17},
{"id":73,"nom":"SAVOIE","reg":21},
{"id":74,"nom":"HAUTE-SAVOIE","reg":21},
{"id":75,"nom":"PARIS","reg":11},
{"id":76,"nom":"SEINE-MARITIME","reg":10},
{"id":77,"nom":"SEINE-ET-MARNE","reg":11},
{"id":78,"nom":"YVELINES","reg":11},
{"id":79,"nom":"DEUX-SEVRES","reg":19},
{"id":80,"nom":"SOMME","reg":18},
{"id":81,"nom":"TARN","reg":15},
{"id":82,"nom":"TARN-ET-GARONNE","reg":15},
{"id":83,"nom":"VAR","reg":20},
{"id":84,"nom":"VAUCLUSE","reg":20},
{"id":85,"nom":"VENDEE","reg":17},
{"id":86,"nom":"VIENNE","reg":19},
{"id":87,"nom":"HAUTE-VIENNE","reg":13},
{"id":88,"nom":"VOSGES","reg":14},
{"id":89,"nom":"YONNE","reg":4},
{"id":90,"nom":"TERRITOIRE-DE-BELFORT","reg":9},
{"id":91,"nom":"ESSONNE","reg":11},
{"id":92,"nom":"HAUTS-DE-SEINE","reg":11},
{"id":93,"nom":"SEINE-ST-DENIS","reg":11},
{"id":94,"nom":"VAL-DE-MARNE","reg":11},
{"id":95,"nom":"VAL-D'OISE","reg":11},
{"id":96,"nom":"HAUTE-CORSE","reg":8}];

var regions = [{"id":1,"nom":"ALSACE"},
{"id":2,"nom":"AQUITAINE"},
{"id":3,"nom":"AUVERGNE"},
{"id":4,"nom":"BASSE-NORMANDIE"},
{"id":5,"nom":"BOURGOGNE"},
{"id":6,"nom":"BRETAGNE"},
{"id":7,"nom":"CENTRE"},
{"id":8,"nom":"CHAMPAGNE-ARDENNE"},
{"id":9,"nom":"CORSE"},
{"id":10,"nom":"FRANCHE-COMTE"},
{"id":11,"nom":"HAUTE-NORMANDIE"},
{"id":12,"nom":"ILE-DE-FRANCE"},
{"id":13,"nom":"LANGUEDOC-ROUSSILLON"},
{"id":14,"nom":"LIMOUSIN"},
{"id":15,"nom":"LORRAINE"},
{"id":16,"nom":"MIDI-PYRENEES"},
{"id":17,"nom":"NORD-PAS-DE-CALAIS"},
{"id":18,"nom":"PAYS-DE-LA-LOIRE"},
{"id":19,"nom":"PICARDIE"},
{"id":20,"nom":"POITOU-CHARENTES"},
{"id":21,"nom":"PROVENCE-ALPES-COTE-D'AZUR"},
{"id":22,"nom":"RHONE-ALPES"}]

var colors = ['rgb(166,206,227)','rgb(31,120,180)','rgb(178,223,138)','rgb(51,160,44)','rgb(251,154,153)','rgb(227,26,28)','rgb(253,191,111)','rgb(255,127,0)','rgb(202,178,214)','rgb(106,61,154)','rgb(255,255,153)','rgb(177,89,40)','rgb(141,211,199)','rgb(255,255,179)','rgb(190,186,218)','rgb(251,128,114)','rgb(128,177,211)','rgb(253,180,98)','rgb(179,222,105)','rgb(252,205,229)','rgb(217,217,217)','rgb(188,128,189)','rgb(204,235,197)','rgb(255,237,111)']