google.charts.load('42', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ปี');
    data.addColumn('number', 'รวมทั้งสิ้น');
    data.addColumn('number', 'สำนักนายกรัฐมนตรีี');
    data.addColumn('number', 'กระทรวงการคลัง');
    data.addColumn('number', 'กระทรวงการท่องเที่ยวและกีฬา');
    data.addColumn('number', 'กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์');
    data.addColumn('number', 'กระทรวงคมนาคม');
    data.addColumn('number', 'กระทรวงดิจิทัลเพ่ือเศรษฐกิจและสังคม');
    data.addColumn('number', 'กระทรวงพลังงาน');
    data.addColumn('number', 'กระทรวงพาณิชย์');
    data.addColumn('number', 'กระทรวงมหาดไทย');
    data.addColumn('number', 'กระทรวงยุติธรรม');
    data.addColumn('number', 'กระทรวงแรงงาน');
    data.addColumn('number', 'กระทรวงวัฒนธรรม');
    data.addColumn('number', 'กระทรวงศึกษาธิการ');
    data.addColumn('number', 'กระทรวงสาธารณสุข');
    data.addColumn('number', 'กระทรวงอุตสาหกรรม');
    data.addColumn('number', 'หน่วยงานขององคก์รอิสระและองค์กรอัยการ');
    data.addColumn('number', 'รัฐวิสาหกิจ');





    data.addRows([
      [2547,2801935611,220000,21984848,120700,12810429,49504771,1552834266,377487000,200000,2468800,367909753,61183180,18819439,1277000,401606840,117664500,2225300,3264100,993000],
      [2548,2797748292,2429520,36387350,441400,23914700,108782370,202746620,377487000,138000,2548760,252897575,65223226,44120025,4602995,1201047360,159741380,3198876,3264100,605464660],
      [2549,2234020419,376400,51874600,27800,6043065,107975286,201558442,377487000,4936600,2754480,364599455,95925482,26801880,892200,270214671,403106430,2515720,3264100,76395250],
      [2550,8086752893,742200,45430618,27154000,5696410,5096518223,1712112000,377487000,200000,8584012,545892143,102377320,46492415,1584040,241908850,194859023,9072100,3264100,76395250],
      [2551,4666493340,564200,61737490,200000,3642070,2597388522,1145305000,377487000,200000,3196584,143392209,128940040,34443510,2283400,278903999,177200006,10339200,3264100,76395250],
      [2552,3185929634,742366,42883159,757200,6043065,1468361762,776860000,377487000,200000,3642846,204224725,121086590,33859287,1940700,10602000,143218454,3653600,3264100,76395250],
      [2553,2425342603,286600,42485650,599300,5934790,810485830,524824033,377487000,200000,3264616,689544261,129979680,24561435,1897760,656877567,51551753,9506368,3264100,76395250],
      [2554,2042065035,1996600,46727814,1082644,8484995,218799908,619311085,377487000,200000,3194656,175560287,118250600,25312162,2449680,203272052,182614168,10915079,3264100,76395250],
      [2555,1976392708,532100,39340270,5828404,4705425,249331642,732104500,377487000,200000,3818860,23863500,142965489,40083626,8409800,55704215,133481502,10339200,3264100,23743000],
      [2556,3144875924,500000,39521700,13035000,6121700,58339674,545849500,377487000,200000,4670400,1089609002,104946500,19230940,2005260,683182130,182031573,10339200,3264100,33202300],
      [2557,4420192108,532100,51184400,1653000,5115650,154041839,662876000,377487000,200000,4446340,1244451163,117694430,30566849,1328100,656877567,203445700,10339200,3264100,35496300],
      [2558,5983360042,532100,134671700,3781000,8258700,212105540,1279829850,377487000,598000,4150040,1248231720,151691851,41282158,1897760,1336850116,383222498,20400000,300000,144870600],
      [2559,6797058154,532100,76845000,599300,1651300,391240661,1539337500,377487000,933200,3196584,2349183453,93657900,2792500,10698100,1124015840,381442300,15163500,3264100,84027400],
      [2560,5455797890,532100,145347800,156550,6480800,103473300,2401915600,115654000,176500,2273000,127886300,104946500,13849200,457000,1173089600,114674800,91250400,14775400,68763100],
      [2561,5445794912,532100,174733900,43000,3939800,220055600,1581587900,404336900,200000,1831500,9467200,68836700,20809580,420100,1538717532,177200006,25723100,30625400,273479100],
      [2562,5654209034,204800,121002000,270100,17887200,275074900,1679467900,377487000,153000,1390000,46642300,56394700,18914300,56000,1583138134,114674800,20860600,135200,303254600]

    ]);

    var options = {
        width: "100%",
        height: 900,
        hAxis: {
            title: 'Time',
            format: '####'
        },
        vAxis: {
            title: 'งบประมาณ',
        },
        series: {
            1: { curveType: 'function' }
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('budget_ts'));
    chart.draw(data, options);
}