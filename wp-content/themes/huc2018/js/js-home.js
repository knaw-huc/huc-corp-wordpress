var elemWidth = document.getElementById("getW").offsetWidth;
document.getElementById("grid").style.width = elemWidth+"px";

var divName = 'grid';
var coorsBackup = [];
var radius = '1.5';
var perRingAmountArray = [];


// ROW  X
var divWidth = document.getElementById(divName).clientWidth;
var divWidthMid = divWidth/2;

// COLS Y
var divHeight = document.getElementById(divName).clientHeight;
var divHeightMid = divHeight/2;

var itemsPosition= 'absolute';

var coorsArr = [];
// painting
coorsArr[0] = [[247.55998992919922,269.37000274658203],[247.55998992919922,264.5529327392578],[247.55998992919922,259.73583984375],[247.55998992919922,254.9187469482422],[247.55998992919922,250.10167694091797],[247.55998992919922,245.28460693359375],[247.55998992919922,240.46751403808594],[247.55998992919922,235.65042114257812],[247.55998992919922,230.8333511352539],[247.55998992919922,226.0162811279297],[247.55998992919922,221.19918823242188],[247.55998992919922,216.38209533691406],[247.55998992919922,211.56502532958984],[247.55998992919922,206.74795532226562],[247.55998992919922,201.9308624267578],[247.55998992919922,197.11376953125],[247.55998992919922,192.29669952392578],[247.55998992919922,187.47961807250977],[247.55998992919922,182.66253662109375],[247.55998992919922,177.84545516967773],[247.55998992919922,173.02837371826172],[247.55998992919922,168.2112922668457],[247.55998992919922,163.3942108154297],[247.55998992919922,158.57712936401367],[247.55998992919922,153.76004791259766],[247.55998992919922,148.94296646118164],[247.55998992919922,144.12588500976562],[247.55998992919922,139.3088035583496],[247.55998992919922,134.4917221069336],[247.55998992919922,129.67464065551758],[247.55998992919922,124.85755920410156],[247.55998992919922,120.04047775268555],[247.55998992919922,115.22339630126953],[247.55998992919922,110.40631484985352],[247.55998992919922,105.5892333984375],[247.55998992919922,100.77215194702148],[247.55998992919922,95.95507049560547],[247.55998992919922,91.13798904418945],[247.55998992919922,86.32090759277344],[247.55998992919922,81.50382614135742],[247.55998992919922,76.6867446899414],[247.55998992919922,71.8696517944336],[247.55998992919922,67.05258178710938],[247.55998992919922,62.235511779785156],[247.55998992919922,57.418418884277344],[247.55998992919922,52.60132598876953],[247.55998992919922,47.78425598144531],[247.55998992919922,42.967185974121094],[247.55998992919922,38.15009307861328],[247.55998992919922,33.33300018310547],[251.2525177001953,30.10934543609619],[253.13582611083984,25.757271766662598],[252.94285583496094,21.002590656280518],[250.6768569946289,16.810119152069092],[246.83049774169922,13.972015857696533],[242.12422943115234,13.151956558227539],[237.53759765625,14.480306625366211],[234.00862884521484,17.696999073028564],[229.82215118408203,18.81002426147461],[225.0050811767578,18.81002426147461],[220.18798828125,18.810022830963135],[215.3708953857422,18.810022830963135],[210.55382537841797,18.81002140045166],[205.73675537109375,18.81002140045166],[200.91966247558594,18.810019969940186],[196.10256958007812,18.810019969940186],[191.2854995727539,18.81001853942871],[186.4684295654297,18.81001853942871],[181.65133666992188,18.810017108917236],[176.83424377441406,18.810017108917236],[172.01717376708984,18.81001567840576],[167.20010375976562,18.81001567840576],[162.3830108642578,18.810014247894287],[157.56591796875,18.810014247894287],[152.74884796142578,18.810012817382812],[147.93177795410156,18.810012817382812],[143.11468505859375,18.810011386871338],[138.29759216308594,18.810011386871338],[133.48052215576172,18.810009956359863],[128.6634521484375,18.810009956359863],[123.84635925292969,18.81000852584839],[119.02926635742188,18.81000852584839],[114.21217346191406,18.810007095336914],[109.39512634277344,18.810007095336914],[104.57803344726562,18.81000566482544],[99.76094055175781,18.810004234313965],[94.94388771057129,18.810004234313965],[90.12679481506348,18.81000280380249],[85.30970191955566,18.81000280380249],[80.49260902404785,18.810001373291016],[75.67551612854004,18.810001373291016],[70.85846900939941,18.80999994277954],[66.35826301574707,18.12943696975708],[63.01974105834961,14.705679416656494],[58.51186180114746,13.1163969039917],[53.79154586791992,13.719244480133057],[49.77809143066406,16.306686401367188],[47.308462142944336,20.393754959106445],[46.89171123504639,25.15089511871338],[48.61911392211914,29.602752685546875],[52.13477897644043,32.83402633666992],[52.44001007080078,37.46967315673828],[52.44001007080078,42.286720275878906],[52.44001007080078,47.10381317138672],[52.44001007080078,51.92090606689453],[52.44001007080078,56.737998962402344],[52.44001007080078,61.555091857910156],[52.44001007080078,66.37213897705078],[52.44001007080078,71.1892318725586],[52.44000434875488,76.0063247680664],[52.44000434875488,80.82337188720703],[52.44000434875488,85.64046478271484],[52.44000434875488,90.45755767822266],[52.44000434875488,95.27465057373047],[52.44000434875488,100.09174346923828],[52.44000434875488,104.9087905883789],[52.44000434875488,109.72588348388672],[52.44000434875488,114.54297637939453],[52.44000434875488,119.36002349853516],[52.44000434875488,124.17711639404297],[52.44000434875488,128.99420928955078],[52.44000434875488,133.8113021850586],[52.44000434875488,138.6283950805664],[52.44000434875488,143.44544219970703],[52.44000434875488,148.26253509521484],[52.44000434875488,153.07962799072266],[52.44000434875488,157.89667510986328],[52.44000434875488,162.7137680053711],[52.44000434875488,167.5308609008789],[52.44000434875488,172.34795379638672],[52.44000434875488,177.16504669189453],[52.44000434875488,181.98209381103516],[52.44000434875488,186.79918670654297],[52.44000434875488,191.61627960205078],[52.44000434875488,196.4333267211914],[52.44000434875488,201.25041961669922],[52.439998626708984,206.06751251220703],[52.439998626708984,210.88460540771484],[52.439998626708984,215.70169830322266],[52.439998626708984,220.51874542236328],[52.439998626708984,225.3358383178711],[52.439998626708984,230.1529312133789],[52.439998626708984,234.96997833251953],[52.439998626708984,239.78707122802734],[52.439998626708984,244.60416412353516],[52.439998626708984,249.42125701904297],[52.439998626708984,254.23834991455078],[52.439998626708984,259.0553970336914],[52.439998626708984,263.8724899291992],[52.439998626708984,268.68958282470703],[49.00170135498047,271.9898986816406],[46.953277587890625,276.2804260253906],[47.04847812652588,281.0053024291992],[49.11980438232422,285.31885528564453],[52.893035888671875,288.2501220703125],[57.570058822631836,289.22003173828125],[62.195566177368164,288.0340805053711],[65.82219314575195,284.9278793334961],[70.17784881591797,284.06998443603516],[74.99494171142578,284.06998443603516],[79.8120346069336,284.06998443603516],[84.62908172607422,284.06998443603516],[89.44622039794922,284.06998443603516],[94.26326751708984,284.06998443603516],[99.08040618896484,284.06998443603516],[103.89745330810547,284.06998443603516],[108.7145004272461,284.06998443603516],[113.5316390991211,284.06998443603516],[118.34868621826172,284.06998443603516],[123.16573333740234,284.06998443603516],[127.98287200927734,284.06998443603516],[132.79991912841797,284.06998443603516],[137.6169662475586,284.06998443603516],[142.4341049194336,284.06998443603516],[147.25115203857422,284.06998443603516],[152.06829071044922,284.07000732421875],[156.88533782958984,284.07000732421875],[161.70238494873047,284.07000732421875],[166.51952362060547,284.07000732421875],[171.3365707397461,284.07000732421875],[176.1537094116211,284.07000732421875],[180.97075653076172,284.07000732421875],[185.78780364990234,284.07000732421875],[190.60494232177734,284.07000732421875],[195.42198944091797,284.07000732421875],[200.2390365600586,284.07000732421875],[205.0561752319336,284.07000732421875],[209.87322235107422,284.07000732421875],[214.69026947021484,284.07000732421875],[219.50740814208984,284.07000732421875],[224.32445526123047,284.07000732421875],[229.14159393310547,284.07000732421875],[233.7894058227539,284.6879425048828],[237.265869140625,287.8942337036133],[241.80917358398438,289.2923583984375],[246.4863510131836,288.5174560546875],[250.42943572998047,285.8185272216797],[252.7730712890625,281.65631103515625],[253.0378646850586,276.88748931884766],[251.1738052368164,272.49110412597656],[69.54000091552734,239.33999633789062],[74.25484657287598,238.4527816772461],[78.90883255004883,237.28580474853516],[83.49274635314941,235.8684539794922],[87.98715591430664,234.18907928466797],[92.36349678039551,232.22298431396484],[96.58035278320312,229.93549346923828],[100.57855224609375,227.28531646728516],[104.27438735961914,224.22882843017578],[107.55440139770508,220.73137664794922],[110.27986907958984,216.78799438476562],[112.31106948852539,212.44709014892578],[113.55370330810547,207.8184814453125],[113.99785995483398,203.04574584960938],[113.66845321655273,198.26456451416016],[112.57738494873047,193.59564971923828],[110.95729064941406,189.08047485351562],[109.03802490234375,184.68280792236328],[107.00505065917969,180.33607864379883],[105.00582504272461,175.9738426208496],[103.16655349731445,171.54219818115234],[101.59799194335938,167.00822067260742],[100.39653396606445,162.3639907836914],[99.50991439819336,157.64815521240234],[98.54642486572266,152.947265625],[97.5575065612793,148.25161743164062],[96.6027603149414,143.54891967773438],[95.72908973693848,138.8305778503418],[94.97798538208008,134.09125900268555],[94.39204788208008,129.3288230895996],[94.02000045776367,124.54512405395508],[93.91838264465332,119.74833297729492],[94.1564998626709,114.95684051513672],[94.81764793395996,110.20591735839844],[95.99570274353027,105.55716705322266],[97.78349304199219,101.10859680175781],[100.24197006225586,96.99394226074219],[103.12689971923828,93.15943908691406],[106.0865478515625,89.38233375549316],[109.14452362060547,85.68448448181152],[112.32617568969727,82.09263038635254],[115.65697860717773,78.63883209228516],[119.16196060180664,75.36228561401367],[122.86550903320312,72.31244087219238],[126.78887557983398,69.55179405212402],[130.94509506225586,67.1572036743164],[135.33154678344727,65.21786499023438],[139.92069625854492,63.826887130737305],[144.65415573120117,63.06217002868652],[149.44790267944336,62.964752197265625],[154.21020126342773,63.524396896362305],[158.88840866088867,64.5900707244873],[163.5425033569336,65.75886154174805],[168.17254257202148,67.01931953430176],[172.76520538330078,68.40947914123535],[177.29656219482422,69.98711013793945],[181.72238159179688,71.83874702453613],[185.9615478515625,74.08245849609375],[189.88350677490234,76.84034729003906],[193.351318359375,80.15064239501953],[196.33834075927734,83.90264511108398],[198.86705017089844,87.97770309448242],[200.9128646850586,92.31564331054688],[202.4850082397461,96.84726333618164],[203.61737823486328,101.50871658325195],[204.35657501220703,106.24887084960938],[204.753662109375,111.03018951416016],[204.85679626464844,115.82709503173828],[204.74029541015625,120.62411499023438],[204.81802368164062,125.42155838012695],[205.08041381835938,130.212890625],[205.40631866455078,135.00046920776367],[205.70896911621094,139.78954696655273],[205.9170913696289,144.58353424072266],[205.9658432006836,149.38162994384766],[205.79399871826172,154.1766471862793],[205.34092712402344,158.95301055908203],[204.54705047607422,163.68430709838867],[203.35883331298828,168.3318328857422],[201.73489379882812,172.84523391723633],[199.69757080078125,177.18873596191406],[197.38309478759766,181.3912696838379],[194.73690032958984,185.39222717285156],[191.69541549682617,189.10077667236328],[188.32366561889648,192.5142059326172],[185.12685012817383,196.0839614868164],[182.99147415161133,200.36103057861328],[181.95712280273438,205.0385513305664],[181.89709854125977,209.82778930664062],[182.89321517944336,214.5110092163086],[184.93756484985352,218.84076690673828],[187.87122344970703,222.6277084350586],[191.45518112182617,225.81019592285156],[195.47296142578125,228.4277114868164],[199.7691421508789,230.5605010986328],[204.2434844970703,232.29116821289062],[208.8328857421875,233.68959045410156],[213.4977035522461,234.81250762939453],[218.21234893798828,235.7043914794922]];

// infra
coorsArr[1] =[[119.49000549316406,0],[119.49001693725586,4.999992370605469],[119.49001693725586,10.000007629394531],[119.49001693725586,15],[119.49001693725586,19.99999237060547],[119.49001693725586,25.00000762939453],[119.49001693725586,30],[119.49001693725586,34.99999237060547],[119.49001693725586,40.00000762939453],[119.49001693725586,45],[119.49001693725586,49.99999237060547],[119.49001693725586,55.00000762939453],[119.49001693725586,60],[119.49001693725586,64.99999237060547],[119.49001693725586,70.00000762939453],[119.49001693725586,75],[119.49001693725586,79.99999237060547],[119.49001693725586,85.00000762939453],[119.49001693725586,90],[119.49001693725586,94.99999237060547],[119.49001693725586,99.99998474121094],[119.49001693725586,105],[119.49001693725586,110.00000381469727],[119.49001693725586,114.99999618530273],[119.49001693725586,120],[119.49001693725586,125.00000381469727],[119.49001693725586,129.99999618530273],[119.49001693725586,135],[119.49001693725586,140.00000381469727],[119.49001693725586,144.99999618530273],[119.49001693725586,150],[119.49001693725586,155.00000381469727],[119.49001693725586,159.99999618530273],[119.49001693725586,165],[119.49000549316406,170.00000381469727],[119.49000549316406,174.99999618530273],[119.49000549316406,180],[119.49000549316406,185.00000381469727],[119.49000549316406,189.99999618530273],[119.49000549316406,195],[119.49000549316406,199.99999237060547],[119.49000549316406,205.00000762939453],[119.49000549316406,210],[119.49000549316406,214.99999237060547],[119.49000549316406,220.00000762939453],[119.49000549316406,225],[119.49000549316406,229.99999237060547],[119.49000549316406,235.00000762939453],[119.49000549316406,240],[119.49000549316406,244.99999237060547],[119.49000549316406,250.00000762939453],[119.49000549316406,255],[119.49000549316406,259.99999237060547],[119.49000549316406,265.00000762939453],[119.49000549316406,270],[119.49000549316406,274.99999237060547],[119.49000549316406,280.00000762939453],[119.49000549316406,285],[119.49000549316406,289.99999237060547],[119.49000549316406,295.00000762939453],[3.210000157356262,217.8600082397461],[8.148811340332031,217.8600082397461],[13.087623596191406,217.8600082397461],[18.02643585205078,217.8600082397461],[22.965248107910156,217.8600082397461],[27.90406036376953,217.8600082397461],[32.842872619628906,217.8600082397461],[37.78168487548828,217.8600082397461],[42.720497131347656,217.8600082397461],[47.659332275390625,217.8600082397461],[52.59814453125,217.8600082397461],[57.536956787109375,217.8600082397461],[62.47576904296875,217.8600082397461],[67.41458129882812,217.8600082397461],[72.3533935546875,217.8600082397461],[77.29220581054688,217.8600082397461],[82.23101806640625,217.8600082397461],[87.16983032226562,217.8600082397461],[92.108642578125,217.8600082397461],[97.04745483398438,217.8600082397461],[101.98626708984375,217.8600082397461],[106.92507934570312,217.8600082397461],[111.8638916015625,217.8600082397461],[116.80270385742188,217.8600082397461],[121.74151611328125,217.8600082397461],[126.68033981323242,217.8600082397461],[131.6191520690918,217.8600082397461],[136.55796432495117,217.8600082397461],[141.49677658081055,217.8600082397461],[146.43558883666992,217.8600082397461],[151.3744010925293,217.8600082397461],[156.31321334838867,217.8600082397461],[161.25202560424805,217.8600082397461],[166.19083786010742,217.8600082397461],[171.1296501159668,217.8600082397461],[176.06847381591797,217.8600082397461],[181.00728607177734,217.8600082397461],[185.94609832763672,217.8600082397461],[190.8849105834961,217.8600082397461],[195.82372283935547,217.8600082397461],[200.76253509521484,217.8600082397461],[205.70134735107422,217.8600082397461],[210.6401596069336,217.8600082397461],[215.57897186279297,217.8600082397461],[220.51778411865234,217.8600082397461],[225.45659637451172,217.8600082397461],[230.3954086303711,217.8600082397461],[235.33422088623047,217.8600082397461],[240.27303314208984,217.8600082397461],[245.21184539794922,217.8600082397461],[250.1506805419922,217.8600082397461],[255.08949279785156,217.8600082397461],[260.02830505371094,217.8600082397461],[264.9671173095703,217.8600082397461],[269.9059295654297,217.8600082397461],[274.84474182128906,217.8600082397461],[279.78355407714844,217.8600082397461],[284.7223663330078,217.8600082397461],[289.6611785888672,217.8600082397461],[119.49000549316406,109.08000183105469],[124.50417709350586,109.08000183105469],[129.51833724975586,109.08000183105469],[134.53250885009766,109.08000183105469],[139.54666900634766,109.08000183105469],[144.56084060668945,109.08000183105469],[149.57500076293945,109.08000183105469],[154.58917236328125,109.08000183105469],[159.60333251953125,109.08000183105469],[164.61750411987305,109.08000183105469],[169.63167572021484,109.08000183105469],[174.64583587646484,109.08000183105469],[179.65999603271484,109.08000183105469],[184.67416763305664,109.08000183105469],[189.68833923339844,109.08000183105469],[194.70249938964844,109.08000183105469],[199.71665954589844,109.08000183105469],[204.73084259033203,109.08000183105469],[209.74500274658203,109.08000183105469],[214.75916290283203,109.08000183105469],[219.77334594726562,109.08000183105469],[224.78750610351562,109.08000183105469],[229.80166625976562,109.08000183105469],[234.81582641601562,109.08000183105469],[239.82998657226562,109.08000183105469],[244.84416961669922,109.08000183105469],[249.85832977294922,109.08000183105469],[254.8725128173828,109.08000183105469],[259.8866729736328,109.08000183105469],[264.9008331298828,109.08000183105469],[269.9149932861328,109.08000183105469],[274.9291534423828,109.08000183105469],[279.9433364868164,109.08000183105469],[284.9574966430664,109.08000183105469],[289.9716796875,109.08000183105469],[294.98583984375,109.08000183105469],[172.56000137329102,109.08000183105469],[176.3082275390625,105.8964614868164],[180.05647659301758,102.71293258666992],[183.80470275878906,99.52940368652344],[187.55294036865234,96.34587478637695],[191.30116653442383,93.16235733032227],[195.0494155883789,89.97882270812988],[198.7976531982422,86.7952938079834],[202.54589080810547,83.61175918579102],[206.29412841796875,80.42823028564453],[210.04234313964844,77.24470710754395],[213.79058074951172,74.06117820739746],[217.538818359375,70.87764358520508],[221.28705596923828,67.69412040710449],[225.03529357910156,64.51058578491211],[228.78353118896484,61.327056884765625],[232.53176879882812,58.14352798461914],[236.2800064086914,54.959999084472656],[240.0282440185547,51.77647018432617],[243.77645874023438,48.59294128417969],[247.52469635009766,45.4094123840332],[251.27293395996094,42.22587776184082],[255.02117156982422,39.042351722717285],[258.7694091796875,35.85882568359375],[262.5176467895508,32.67529106140137],[266.26588439941406,29.491762161254883],[270.01412200927734,26.308236122131348],[273.7623596191406,23.12470293045044],[277.5105972290039,19.941176891326904],[281.2588119506836,16.757649421691895],[285.0070495605469,13.574114799499512],[288.75528717041016,10.39058804512024],[292.50352478027344,7.207061290740967],[296.2517623901367,4.023526668548584],[205.70999908447266,109.08000183105469],[205.70999908447266,114.0245475769043],[205.70999908447266,118.9690933227539],[205.70999908447266,123.91363906860352],[205.70999908447266,128.85818481445312],[205.70999908447266,133.80273056030273],[205.70999908447266,138.74727630615234],[205.70999908447266,143.69182205200195],[205.70999908447266,148.63636779785156],[205.70999908447266,153.58091354370117],[205.70999908447266,158.52545928955078],[205.70999908447266,163.4700050354004],[205.70999908447266,168.41455078125],[205.70999908447266,173.3590965270996],[205.70999908447266,178.30364227294922],[205.70999908447266,183.24818801879883],[205.70999908447266,188.19273376464844],[205.70999908447266,193.13726806640625],[205.70999908447266,198.08182525634766],[205.70999908447266,203.02638244628906],[205.70999908447266,207.97091674804688],[205.70999908447266,212.9154510498047],[119.49000549316406,217.8600082397461],[117.10440444946289,213.5028305053711],[114.71880340576172,209.1456069946289],[112.33320236206055,204.7884292602539],[109.94761276245117,200.4312286376953],[107.5620002746582,196.07400512695312],[105.17641067504883,191.71682739257812],[102.79079818725586,187.35961532592773],[100.40520858764648,183.00241470336914],[98.01960754394531,178.64522552490234],[95.63400077819824,174.28801345825195],[93.24840545654297,169.93082427978516],[90.8628044128418,165.57361221313477],[88.47720336914062,161.21641159057617],[86.09160804748535,156.85922241210938],[83.70600128173828,152.50201034545898],[81.32040596008301,148.1448097229004],[78.93479919433594,143.7876091003418],[76.54919815063477,139.4304084777832],[74.16360282897949,135.0732192993164],[71.77800178527832,130.7160186767578],[69.39240074157715,126.35880661010742],[67.00679969787598,122.00160598754883],[64.6212043762207,117.64441680908203],[62.23560333251953,113.28721618652344],[59.85000228881836,108.93000411987305],[57.46440124511719,104.57280349731445],[55.078800201416016,100.21560287475586],[52.69320487976074,95.85841369628906],[50.30760383605957,91.50120735168457],[47.92199993133545,87.14400672912598],[45.53639888763428,82.78680038452148],[43.150803565979004,78.42961120605469],[40.76520252227783,74.0724048614502],[38.37959861755371,69.7152042388916],[35.99399757385254,65.35800361633301],[33.608402252197266,61.00080871582031],[31.222801208496094,56.64360809326172],[28.837200164794922,52.28640174865723],[26.45159912109375,47.92920112609863],[24.066003799438477,43.57200908660889],[21.680397033691406,39.21479415893555],[19.294800281524658,34.8576021194458],[16.909204959869385,30.500410079956055],[14.523598194122314,26.143198013305664],[12.138001441955566,21.786004543304443],[9.752405405044556,17.428811073303223],[7.366798639297485,13.071599006652832],[4.981202960014343,8.714405536651611],[2.5955958366394043,4.357192754745483],[112.56000137329102,216.3899917602539],[114.29691696166992,221.20834350585938],[118.73075866699219,223.76541137695312],[123.76754379272461,222.86636352539062],[127.05329132080078,218.94749450683594],[127.0612678527832,213.8250503540039],[123.7701187133789,209.90602111816406],[118.73175430297852,209.02521514892578],[114.30493927001953,211.5842056274414],[198.24000549316406,216.3899917602539],[199.95233917236328,221.28543090820312],[204.4126739501953,223.77200317382812],[209.44800567626953,222.86775970458984],[212.7322769165039,218.9476089477539],[212.7981948852539,213.7185516357422],[209.45560455322266,209.87228393554688],[204.4094467163086,209.01622009277344],[199.98394775390625,211.5823974609375],[165.27000045776367,108.93000411987305],[167.00954818725586,113.74413299560547],[171.44221115112305,116.2910385131836],[176.47546005249023,115.40034484863281],[179.76137924194336,111.48554992675781],[179.7692642211914,106.3670539855957],[176.47800064086914,102.45209884643555],[171.44253158569336,101.57231140136719],[167.0174674987793,104.12834930419922],[112.56000137329102,109.08000183105469],[113.73022842407227,113.13825988769531],[116.92158508300781,115.8936767578125],[121.09396362304688,116.48206329345703],[124.92432403564453,114.73069381713867],[127.20090866088867,111.18667602539062],[127.21937942504883,106.95751190185547],[124.92530822753906,103.42730712890625],[121.09415817260742,101.67549133300781],[116.92437744140625,102.27691268920898],[113.74249649047852,105.03767395019531]];

// screen
coorsArr[2] =[[268.8300018310547,25.890000343322754],[262.80198669433594,25.889966011047363],[256.7739944458008,25.889966011047363],[250.74597930908203,25.889968872070312],[244.71798706054688,25.889968872070312],[238.68997192382812,25.889968872070312],[232.66195678710938,25.88997173309326],[226.63396453857422,25.88997173309326],[220.60594940185547,25.88997173309326],[214.5779571533203,25.88997459411621],[208.54994201660156,25.88997459411621],[202.5219268798828,25.88997459411621],[196.49393463134766,25.88997459411621],[190.4659194946289,25.88997745513916],[184.43791580200195,25.88997745513916],[178.409912109375,25.88997745513916],[172.38190841674805,25.88998031616211],[166.3539047241211,25.88998031616211],[160.32588958740234,25.88998031616211],[154.2978858947754,25.88998317718506],[148.26988220214844,25.88998317718506],[142.24187850952148,25.88998317718506],[136.21387481689453,25.889986038208008],[130.18585968017578,25.889986038208008],[124.15785598754883,25.889986038208008],[118.12985229492188,25.889988899230957],[112.10184860229492,25.889988899230957],[106.07384490966797,25.889988899230957],[100.04582977294922,25.889991760253906],[94.01782608032227,25.889991760253906],[87.98982238769531,25.889991760253906],[81.96181869506836,25.889994621276855],[75.9338150024414,25.889994621276855],[69.90579986572266,25.889994621276855],[63.8778076171875,25.889994621276855],[57.84979248046875,25.889997482299805],[51.82177734375,25.889997482299805],[45.793785095214844,25.889997482299805],[39.765769958496094,25.890000343322754],[33.73871326446533,25.929104804992676],[27.97386360168457,27.545059204101562],[23.302745819091797,31.291391372680664],[20.463602542877197,36.56275177001953],[19.83000898361206,42.529014587402344],[19.83000898361206,48.5570068359375],[19.83000898361206,54.58502197265625],[19.830007553100586,60.613037109375],[19.830007553100586,66.64102935791016],[19.830007553100586,72.6690444946289],[19.830007553100586,78.69703674316406],[19.830007553100586,84.72505187988281],[19.830007553100586,90.75306701660156],[19.83000612258911,96.78105926513672],[19.83000612258911,102.80907440185547],[19.83000612258911,108.83706665039062],[19.83000612258911,114.86508178710938],[19.83000612258911,120.89309692382812],[19.830004692077637,126.92108917236328],[19.830004692077637,132.94910430908203],[19.830004692077637,138.9770965576172],[19.830004692077637,145.00511169433594],[19.830004692077637,151.0331268310547],[19.830004692077637,157.06111907958984],[19.830003261566162,163.0891342163086],[19.830003261566162,169.11712646484375],[19.830003261566162,175.1451416015625],[19.830003261566162,181.17315673828125],[19.830003261566162,187.201171875],[19.830001831054688,193.22914123535156],[19.830001831054688,199.2571563720703],[19.830001831054688,205.28517150878906],[20.31353759765625,211.27207946777344],[22.954851150512695,216.64519500732422],[27.484479904174805,220.56134033203125],[33.18509101867676,222.39083862304688],[39.209896087646484,222.48001098632812],[45.237911224365234,222.48001098632812],[51.265926361083984,222.48001098632812],[57.29389572143555,222.48001098632812],[63.3219108581543,222.48001098632812],[69.34992599487305,222.48001098632812],[75.3779411315918,222.48001098632812],[81.40595626831055,222.48001098632812],[87.43392562866211,222.48001098632812],[93.46194076538086,222.48001098632812],[99.48995590209961,222.48001098632812],[105.51797103881836,222.48001098632812],[110.18999862670898,223.83599853515625],[110.18999862670898,229.8639678955078],[110.18999862670898,235.89198303222656],[110.18999862670898,241.9199981689453],[110.18999862670898,247.94801330566406],[106.77397155761719,250.5600128173828],[100.74600219726562,250.5600128173828],[94.71798706054688,250.5600128173828],[88.68997192382812,250.5600128173828],[82.66195678710938,250.5600128173828],[81.33000183105469,255.25607299804688],[83.05403137207031,259.5600128173828],[89.08204650878906,259.5600128173828],[95.11006164550781,259.5600128173828],[101.13807678222656,259.5600128173828],[107.16609191894531,259.5600128173828],[113.19406127929688,259.5600128173828],[119.22207641601562,259.5600128173828],[125.25009155273438,259.5600128173828],[131.27810668945312,259.5600128173828],[137.30612182617188,259.5600128173828],[143.33409118652344,259.5600128173828],[149.3621063232422,259.5600128173828],[155.39012145996094,259.5600128173828],[161.4181365966797,259.5600128173828],[167.44615173339844,259.5600128173828],[173.47412109375,259.5600128173828],[179.50213623046875,259.5600128173828],[185.5301513671875,259.5600128173828],[191.55816650390625,259.5600128173828],[197.586181640625,259.5600128173828],[203.61415100097656,259.5600128173828],[209.6421661376953,259.5600128173828],[215.67018127441406,259.5600128173828],[218.6699981689453,256.5318145751953],[218.61378479003906,250.5600128173828],[212.5858154296875,250.5600128173828],[206.55780029296875,250.5600128173828],[200.52978515625,250.5600128173828],[194.50177001953125,250.5600128173828],[189.81000137329102,249.2237091064453],[189.81000137329102,243.19573974609375],[189.81000137329102,237.167724609375],[189.81000137329102,231.13970947265625],[189.81000137329102,225.1116943359375],[193.2063446044922,222.48001098632812],[199.23435974121094,222.48001098632812],[205.2623748779297,222.48001098632812],[211.29029846191406,222.48001098632812],[217.3183135986328,222.48001098632812],[223.34632873535156,222.48001098632812],[229.3743438720703,222.48001098632812],[235.40235900878906,222.48001098632812],[241.4303741455078,222.48001098632812],[247.45838928222656,222.48001098632812],[253.4864044189453,222.48001098632812],[259.51441955566406,222.48001098632812],[265.5424346923828,222.48001098632812],[271.55548095703125,222.23297882080078],[277.1070098876953,219.99153900146484],[281.3412094116211,215.75749969482422],[283.58287811279297,210.20594787597656],[283.8300018310547,204.19287872314453],[283.8300018310547,198.16486358642578],[283.8300018310547,192.13684844970703],[283.8300018310547,186.10884475708008],[283.8300018310547,180.08082962036133],[283.8300018310547,174.05281448364258],[283.8300018310547,168.0248908996582],[283.8300018310547,161.99687576293945],[283.8300018310547,155.9688606262207],[283.8300018310547,149.94084548950195],[283.8300018310547,143.9128303527832],[283.8300018310547,137.88481521606445],[283.8300018310547,131.8568000793457],[283.8300018310547,125.82878494262695],[283.8300018310547,119.8007698059082],[283.8300018310547,113.77275466918945],[283.8300018310547,107.7447395324707],[283.8300018310547,101.71681594848633],[283.8300018310547,95.68880081176758],[283.8300018310547,89.66078567504883],[283.8300018310547,83.63277053833008],[283.8300018310547,77.60475540161133],[283.8300018310547,71.57674026489258],[283.8300018310547,65.54872512817383],[283.8300018310547,59.52070999145508],[283.8300018310547,53.49269485473633],[283.8300018310547,47.464768409729004],[283.8300018310547,41.436753273010254],[282.8436813354492,35.52934741973877],[279.62816619873047,30.478471755981445],[274.69757080078125,27.081095695495605],[40.560001373291016,192.3300018310547],[46.50260066986084,191.08980560302734],[52.297760009765625,189.27967071533203],[57.87146759033203,186.87517547607422],[63.07848930358887,183.75979614257812],[67.65512466430664,179.78298568725586],[71.17544746398926,174.85552597045898],[73.17084503173828,169.14247512817383],[73.47019958496094,163.0960464477539],[72.10921096801758,157.1916961669922],[69.78014373779297,151.58514404296875],[67.21531105041504,146.0797119140625],[64.93258094787598,140.4535789489746],[63.334327697753906,134.59963989257812],[62.1734504699707,128.63833236694336],[60.93685340881348,122.69194793701172],[59.83436393737793,116.71958541870117],[59.023298263549805,110.70133209228516],[58.67421340942383,104.63993453979492],[59.01362228393555,98.58056259155273],[60.349422454833984,92.66589546203613],[63.015878677368164,87.22916221618652],[66.66986846923828,82.37849235534668],[70.52842140197754,77.68888664245605],[74.67026710510254,73.24850463867188],[79.18680953979492,69.19183158874512],[84.1622257232666,65.71743965148926],[89.63722801208496,63.10902786254883],[95.53171920776367,61.70114707946777],[101.59073638916016,61.71925735473633],[107.52985382080078,62.9699764251709],[113.40148544311523,64.52210998535156],[119.19184112548828,66.35183715820312],[124.78843688964844,68.70100593566895],[129.8913917541504,71.97147560119629],[134.04798889160156,76.37940216064453],[137.17434310913086,81.57483100891113],[139.28021621704102,87.26358032226562],[140.4807014465332,93.21244239807129],[140.95003509521484,99.26502227783203],[140.92330169677734,105.33786392211914],[141.19052124023438,111.40490341186523],[141.57410430908203,117.46635818481445],[141.77796936035156,123.53592681884766],[141.5723648071289,129.6042022705078],[140.74528884887695,135.61752319335938],[139.10760498046875,141.46010971069336],[136.59536361694336,146.98482513427734],[133.4256706237793,152.1598663330078],[129.4420280456543,156.7338409423828],[125.47928237915039,161.30400466918945],[123.77120590209961,167.091796875],[124.24314880371094,173.11150360107422],[126.94689559936523,178.50833129882812],[131.32684707641602,182.6836280822754],[136.6033058166504,185.6711654663086],[142.30247497558594,187.75754928588867],[148.2023048400879,189.1904640197754],[179.18999862670898,81.17999839782715],[185.16000366210938,81.17999839782715],[191.12999725341797,81.17999839782715],[197.09999084472656,81.17999839782715],[203.07000732421875,81.17999839782715],[209.04000091552734,81.17999839782715],[215.00999450683594,81.17999839782715],[220.98001098632812,81.17999839782715],[226.95000457763672,81.17999839782715],[232.9199981689453,81.17999839782715],[238.8900146484375,81.17999839782715],[244.8600082397461,81.17999839782715],[179.18999862670898,96.66000366210938],[185.16000366210938,96.66000366210938],[191.12999725341797,96.66000366210938],[197.09999084472656,96.66000366210938],[203.07000732421875,96.66000366210938],[209.04000091552734,96.66000366210938],[215.00999450683594,96.66000366210938],[220.98001098632812,96.66000366210938],[226.95000457763672,96.66000366210938],[232.9199981689453,96.66000366210938],[238.8900146484375,96.66000366210938],[244.8600082397461,96.66000366210938],[179.18999862670898,111.77999496459961],[185.16000366210938,111.77999496459961],[191.12999725341797,111.77999496459961],[197.09999084472656,111.77999496459961],[203.07000732421875,111.77999496459961],[209.04000091552734,111.77999496459961],[215.00999450683594,111.77999496459961],[220.98001098632812,111.77999496459961],[226.95000457763672,111.77999496459961],[232.9199981689453,111.77999496459961],[238.8900146484375,111.77999496459961],[244.8600082397461,111.77999496459961],[179.18999862670898,126.93000411987305],[185.06666564941406,126.93000411987305],[190.94333267211914,126.93000411987305],[196.81999969482422,126.93000411987305],[202.6966552734375,126.93000411987305],[208.57333374023438,126.93000411987305],[214.45001220703125,126.93000411987305],[220.32666778564453,126.93000411987305],[226.2033233642578,126.93000411987305],[179.18999862670898,142.41000366210938],[185.16000366210938,142.41000366210938],[191.12999725341797,142.41000366210938],[197.09999084472656,142.41000366210938],[203.07000732421875,142.41000366210938],[209.04000091552734,142.41000366210938],[215.00999450683594,142.41000366210938],[220.98001098632812,142.41000366210938],[226.95000457763672,142.41000366210938],[232.9199981689453,142.41000366210938],[238.8900146484375,142.41000366210938],[244.8600082397461,142.41000366210938],[179.18999862670898,157.56000137329102],[186.49500274658203,157.56000137329102],[193.79999542236328,157.56000137329102],[201.10501098632812,157.56000137329102]];



var coors = coorsArr[0];

var genSvgStart = '<svg width="100%" height="90%">';
var genSvgEnd = '</svg>';
var genSvgbody = '';

var useGroups = false;
if (perRingAmountArray.length != 0) {
  var useGroups = true;
}



// build the grid

if (useGroups) { // if uses groups (rings)
  genSvgbody = '<g class="group" id="group0">';
  var j=0;
}

for (var c = 0; c < coors.length; c++) {


    if (useGroups && (perRingAmountArray[j] == c)) {// if uses groups (rings)
      j++;
      genSvgbody = genSvgbody+'</g><g class="group" id="group'+j+'">';
    }
    genSvgbody = genSvgbody+'<circle cx="50%" cy="50%" r="'+radius+'" class="gridDot" id="gridDot'+c+'" />';
}

if (useGroups) {// if uses groups (rings)
  genSvgbody = genSvgbody+'</g>';
}



// injest grid svg in to html
var genSvg =genSvgStart+genSvgbody+genSvgEnd;
document.getElementById(divName).innerHTML = genSvg;


//function to change item position
function gridItemPos(idName, itemId, x, y, scale) {

  document.getElementById(idName+itemId).style.transform = 'translate('+x+'px,'+y+'px) scale('+scale+','+scale+')';
}

function coordinateItems(idName) {


  for(var i = 0; i < coors.length; i++){
    var x= coors[i][0];
    var y= coors[i][1];

    if(itemsPosition == 'absolute') {
      //asuming the image is 100x100

      x = x-(300/2);
      y = y-(300/2);
    }

    gridItemPos(idName, i, x, y, 1);
  }
}

coordinateItems('gridDot');

function shapeTween(number) {
  coors = shuffleArray(coorsArr[number]);
  randomCoors('near', 0);
  coordinateItems('gridDot');
}
  // var seti = setTimeout(function() {
  //   randomCoors('near', 0);
  //   coordinateItems('gridDot');
  // },3000);


  //setTimeout(coordinateItems, 3000, 'gridDot', 0);
  // coors = coorsArr[number];
  // randomCoors('near', 0);
  // coordinateItems('gridDot',0);


// setInterval(shapeTween, 4000, 1);
// setInterval(shapeTween, 8000, 2);
// setInterval(shapeTween, 16000, 0);

function animation() {
  setTimeout(shapeTween, 4000, 1);
  setTimeout(shapeTween, 8000, 2);
  setTimeout(shapeTween, 12000, 0);

  setTimeout(function() { document.getElementById('txt-content').innerHTML = 'We build infra'; },4000);
  setTimeout(function() { document.getElementById('txt-content').innerHTML = 'We combine the data'; },8000);
  setTimeout(function() { document.getElementById('txt-content').innerHTML = 'We collect data'; },12000);
}

function loopAnimation() {
  setInterval(animation, 16000);
}

animation();
loopAnimation();

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function randomCoors(total_near, randomDistortion) { // total > complete new coors / near > near current coors
  //var randomDistortion = 5;
  var ammount = coors.length;
  coorsBackup = coors;

  if (total_near == 'total') {
    for (var i = 0; i < ammount; i++) {
      coors[i][0] = randomInt((300-divWidth),divWidth);
      coors[i][1] = randomInt((300-divHeight),divHeight);
    }
  }
  if (total_near == 'near') {
    for (var i = 0; i < ammount; i++) {
      coors[i][0] = coors[i][0]+randomInt(0-randomDistortion, randomDistortion);
      coors[i][1] = coors[i][1]+randomInt(0-randomDistortion, randomDistortion);
    }
  }
}

// randon number
function randomInt(min,max) {
  min= min*10;
  max=max*10;
  var rand = (Math.floor(Math.random()*(max-min+1)+min)/10);

    return rand;

}