const rndSeeds = [
    [2232722, 5095314, 6861607],
    [8646855, 9319987, 4721332],
    [9391969, 8624840, 4945318],
    [2923432, 7401883, 7216359],
    [261735, 1837431, 9474827],
    [4300853, 4471646, 6048736],
    [9571663, 3264618, 4443787],
    [7947605, 9542675, 6924762],
    [4814799, 4558980, 210902],
    [9403817, 2978784, 2089197],
    [8830370, 9923390, 3576930],
    [1190321, 8547985, 4127555],
    [6535256, 8366974, 2655599],
    [3613139, 5660648, 788301],
    [6513746, 7069852, 630522],
    [4477781, 8079401, 8302926],
    [2608813, 6686356, 1621394],
    [3556149, 5934687, 1913455],
    [2191253, 1423509, 1141964],
    [612836, 7925145, 356477],
    [2074738, 2619995, 7891243],
    [7833288, 8332214, 2443431],
    [8009442, 7927690, 3934670],
    [9156062, 7919559, 3835014],
    [9376477, 7214691, 403086],
    [781515, 3970218, 4808174],
    [68908, 601320, 5160816],
    [5113000, 9456284, 7350468],
    [2195141, 2721069, 8605852],
    [9155934, 2611216, 63185],
    [5790096, 804902, 6734896],
    [8570247, 885579, 8454584],
    [3846017, 4422514, 3334155],
    [493666, 9204626, 7365138],
    [698316, 3171389, 946854],
    [2246533, 323272, 2231450],
    [3827397, 2443592, 6487583],
    [2154028, 7464684, 6233051],
    [2983865, 8137715, 1140767],
    [2574588, 4515521, 5145274],
    [2951473, 5082947, 9928917],
    [566983, 6921548, 7805062],
    [8514835, 6363425, 8706719],
    [4041158, 2929978, 6098667],
    [8019918, 6654522, 7279241],
    [456280, 2261941, 1471236],
    [7785353, 8004599, 4443728],
    [1504399, 4592657, 3593807],
    [6930218, 4296075, 2404803],
    [3600719, 8797223, 660772],
    [71193, 1932634, 941473],
    [9943727, 8692074, 5932505],
    [4665737, 8679853, 5351589],
    [724125, 5533452, 904048],
    [6166179, 5440468, 9913661],
    [4766307, 8554453, 7490693],
    [8483401, 2586126, 8955545],
    [1417572, 5815121, 4085221],
    [3957047, 6129106, 1277861],
    [5274282, 4191932, 6279177],
    [3017078, 2981242, 2484982],
    [8949453, 303511, 4362835],
    [7500193, 5046076, 5787244],
    [8611747, 9986838, 2368891],
    [3398903, 6633500, 2558534],
    [7190175, 6916504, 800656],
    [9006473, 3277883, 3431324],
    [6267540, 1471324, 2566173],
    [2806473, 7891618, 7823458],
    [3651326, 7044654, 7162896],
    [2992360, 4930992, 3605580],
    [981181, 8235797, 5004700],
    [8943225, 9735003, 6452000],
    [2871465, 8232822, 4330755],
    [35177, 5096694, 8918378],
    [5707569, 9745571, 5135059],
    [9504129, 3758240, 785251],
    [4251917, 8973245, 6768664],
    [8575059, 7363229, 2943734],
    [6188598, 247700, 5042545],
    [2969727, 6891423, 7367138],
    [7594690, 3487607, 5335161],
    [1040272, 6828572, 4090971],
    [7196943, 3404763, 1053172],
    [2079483, 1734968, 2526749],
    [507230, 3781077, 1626185],
    [6144396, 7656481, 4754309],
    [3697637, 7167971, 4254146],
    [9583969, 7145064, 548593],
    [4281641, 5988991, 2126610],
    [5886274, 5475847, 4562140],
    [9690726, 6661725, 3692964],
    [1564176, 5833073, 6177160],
    [1489655, 8132864, 1856763],
    [8140345, 2553637, 2871597],
    [3091821, 2053467, 9567573],
    [8224535, 3677453, 2063567],
    [9236584, 3982371, 9972841],
    [5502671, 95988, 5302222],
    [3767428, 4578335, 3842027],
];
const getHash = (grid) => {
    let hash = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const plainI = 10 * i + j;
            hash ^= rndSeeds[plainI][grid[i][j] + 1];
        }
    }
    return hash;
};
export { getHash };
