document.addEventListener("DOMContentLoaded", () => {
  const verticesData = {
    DocumentType: "Test Example for D3 and ThreeJS",
    version: "3.1",
    pid: "",
    Unit: "ft",
    polygonsBySection: [
      {
        sectionId: "id16984393820630.1999854654356561",
        sectionName: "Section A1",
        polygons: [
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [476.875, 3152, 71.955] },
              { vertex: [476.875, 3152, 39.256] },
              { vertex: [415.5, 3339.5, 40.502] },
              { vertex: [277.187, 3762, 39.901] },
              { vertex: [0, 4609.25, 35.2] },
              { vertex: [0, 4609.25, 62.5] },
              { vertex: [0, 4609.25, 69.501] },
              { vertex: [277.187, 3762, 70.702] },
              { vertex: [415.5, 3339.5, 74.701] },
            ],
            points2D: [
              { vertex: [1738.72, -152.546] },
              { vertex: [1738.72, -185.245] },
              { vertex: [1541.355, -183.999] },
              { vertex: [1096.748, -184.6] },
              { vertex: [205.345, -189.301] },
              { vertex: [205.345, -162.001] },
              { vertex: [205.345, -155] },
              { vertex: [1096.748, -153.799] },
              { vertex: [1541.355, -149.8] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1356.75, 2876.75, 75.328] },
              { vertex: [1356.75, 2876.75, 38.455] },
              { vertex: [1170.812, 2935, 40.702] },
              { vertex: [814.875, 3046.75, 37.099] },
              { vertex: [488.937, 3149, 39.256] },
              { vertex: [488.937, 3149, 71.955] },
              { vertex: [814.875, 3046.75, 67.201] },
              { vertex: [1170.812, 2935, 76.702] },
            ],
            points2D: [
              { vertex: [2648.26, -149.173] },
              { vertex: [2648.26, -186.046] },
              { vertex: [2453.387, -183.799] },
              { vertex: [2080.356, -187.402] },
              { vertex: [1738.72, -185.245] },
              { vertex: [1738.72, -152.546] },
              { vertex: [2080.356, -157.3] },
              { vertex: [2453.387, -147.799] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1656.062, 2709.5, 72.771] },
              { vertex: [1656.062, 2709.5, 34.276] },
              { vertex: [1341.125, 2888.75, 38.455] },
              { vertex: [1341.125, 2888.75, 75.328] },
            ],
            points2D: [
              { vertex: [3010.708, -151.73] },
              { vertex: [3010.708, -190.225] },
              { vertex: [2648.26, -186.046] },
              { vertex: [2648.26, -149.173] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1637.75, 1607.5, 78.602] },
              { vertex: [1637.75, 1607.5, 34.983] },
              { vertex: [1635.75, 1842.5, 35.702] },
              { vertex: [1631, 2390.5, 30.4] },
              { vertex: [1628.062, 2726.5, 34.276] },
              { vertex: [1628.062, 2726.5, 72.771] },
              { vertex: [1631, 2390.5, 70.4] },
              { vertex: [1635.75, 1842.5, 78.901] },
            ],
            points2D: [
              { vertex: [4129.71, -145.899] },
              { vertex: [4129.71, -189.518] },
              { vertex: [3894.762, -188.799] },
              { vertex: [3346.851, -194.101] },
              { vertex: [3010.708, -190.225] },
              { vertex: [3010.708, -151.73] },
              { vertex: [3346.851, -154.101] },
              { vertex: [3894.762, -145.6] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [2725.75, 1280.25, 77.175] },
              { vertex: [2725.75, 1280.25, 34.618] },
              { vertex: [2055.375, 1482.75, 33.691] },
              { vertex: [1651.125, 1604.75, 34.983] },
              { vertex: [1651.125, 1604.75, 78.602] },
            ],
            points2D: [
              { vertex: [5252.19, -147.326] },
              { vertex: [5252.19, -189.883] },
              { vertex: [4551.982, -190.81] },
              { vertex: [4129.71, -189.518] },
              { vertex: [4129.71, -145.899] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [2738.875, 1276.5, 34.618] },
              { vertex: [2738.875, 1276.5, 77.175] },
              { vertex: [2880.937, 1116.5, 76.903] },
              { vertex: [3084, 887.5, 77.401] },
              { vertex: [3871.437, 0, 76.903] },
              { vertex: [3871.437, 0, 36.903] },
              { vertex: [3084, 887.5, 38.901] },
              { vertex: [2880.937, 1116.5, 34.901] },
            ],
            points2D: [
              { vertex: [5252.19, -189.883] },
              { vertex: [5252.19, -147.326] },
              { vertex: [5466.191, -147.598] },
              { vertex: [5772.213, -147.1] },
              { vertex: [6958.726, -147.598] },
              { vertex: [6958.726, -187.598] },
              { vertex: [5772.213, -185.6] },
              { vertex: [5466.191, -189.6] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [476.875, 3152, 172.684] },
              { vertex: [476.875, 3152, 159.524] },
              { vertex: [415.5, 3339.5, 160] },
              { vertex: [277.187, 3762, 159.202] },
              { vertex: [0, 4609.25, 153.7] },
              { vertex: [0, 4609.25, 172.5] },
              { vertex: [277.187, 3762, 170.6] },
              { vertex: [415.5, 3339.5, 177.7] },
            ],
            points2D: [
              { vertex: [1738.72, -51.817] },
              { vertex: [1738.72, -64.977] },
              { vertex: [1541.355, -64.501] },
              { vertex: [1096.748, -65.299] },
              { vertex: [205.345, -70.801] },
              { vertex: [205.345, -52.001] },
              { vertex: [1096.748, -53.901] },
              { vertex: [1541.355, -46.801] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [483.75, 3150.5, 159.524] },
              { vertex: [483.75, 3150.5, 172.684] },
              { vertex: [809.687, 3048.25, 164.002] },
              { vertex: [988, 2992.5, 159.025] },
              { vertex: [809.687, 3048.25, 158.7] },
            ],
            points2D: [
              { vertex: [1738.72, -64.977] },
              { vertex: [1738.72, -51.817] },
              { vertex: [2080.356, -60.499] },
              { vertex: [2267.208, -65.476] },
              { vertex: [2080.356, -65.801] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [476.875, 3152, 39.256] },
              { vertex: [476.875, 3152, 13.945] },
              { vertex: [415.5, 3339.5, 22.001] },
              { vertex: [277.187, 3762, 22.3] },
              { vertex: [0, 4609.25, 22.802] },
              { vertex: [0, 4609.25, 35.2] },
              { vertex: [277.187, 3762, 39.901] },
              { vertex: [415.5, 3339.5, 40.502] },
            ],
            points2D: [
              { vertex: [1738.72, -185.245] },
              { vertex: [1738.72, -210.556] },
              { vertex: [1541.355, -202.5] },
              { vertex: [1096.748, -202.201] },
              { vertex: [205.345, -201.699] },
              { vertex: [205.345, -189.301] },
              { vertex: [1096.748, -184.6] },
              { vertex: [1541.355, -183.999] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1356.75, 2876.75, 38.455] },
              { vertex: [1356.75, 2876.75, 23.013] },
              { vertex: [1170.812, 2935, 23.602] },
              { vertex: [814.875, 3046.75, 0] },
              { vertex: [488.937, 3149, 13.945] },
              { vertex: [488.937, 3149, 39.256] },
              { vertex: [814.875, 3046.75, 37.099] },
              { vertex: [1170.812, 2935, 40.702] },
            ],
            points2D: [
              { vertex: [2648.26, -186.046] },
              { vertex: [2648.26, -201.488] },
              { vertex: [2453.387, -200.899] },
              { vertex: [2080.356, -224.501] },
              { vertex: [1738.72, -210.556] },
              { vertex: [1738.72, -185.245] },
              { vertex: [2080.356, -187.402] },
              { vertex: [2453.387, -183.799] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1656.062, 2709.5, 34.276] },
              { vertex: [1656.062, 2709.5, 21.918] },
              { vertex: [1341.125, 2888.75, 23.013] },
              { vertex: [1341.125, 2888.75, 38.455] },
            ],
            points2D: [
              { vertex: [3010.708, -190.225] },
              { vertex: [3010.708, -202.583] },
              { vertex: [2648.26, -201.488] },
              { vertex: [2648.26, -186.046] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1637.75, 1607.5, 34.983] },
              { vertex: [1637.75, 1607.5, 11.707] },
              { vertex: [1635.75, 1842.5, 8.802] },
              { vertex: [1631, 2390.5, 20.902] },
              { vertex: [1628.062, 2726.5, 21.918] },
              { vertex: [1628.062, 2726.5, 34.276] },
              { vertex: [1631, 2390.5, 30.4] },
              { vertex: [1635.75, 1842.5, 35.702] },
            ],
            points2D: [
              { vertex: [4129.71, -189.518] },
              { vertex: [4129.71, -212.794] },
              { vertex: [3894.762, -215.699] },
              { vertex: [3346.851, -203.599] },
              { vertex: [3010.708, -202.583] },
              { vertex: [3010.708, -190.225] },
              { vertex: [3346.851, -194.101] },
              { vertex: [3894.762, -188.799] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1642.75, 1607.25, 11.707] },
              { vertex: [1642.75, 1607.25, 34.983] },
              { vertex: [2047.062, 1485.25, 33.691] },
              { vertex: [1946.25, 1515.5, 15.626] },
            ],
            points2D: [
              { vertex: [4129.71, -212.794] },
              { vertex: [4129.71, -189.518] },
              { vertex: [4551.982, -190.81] },
              { vertex: [4446.69, -208.875] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1637.75, 1608.5, 23.947] },
              { vertex: [1637.75, 1608.5, 18.453] },
              { vertex: [1635.687, 1843.25, 17.9] },
              { vertex: [1635.687, 1843.25, 22.9] },
            ],
            points2D: [
              { vertex: [4129.71, -200.554] },
              { vertex: [4129.71, -206.048] },
              { vertex: [3894.762, -206.601] },
              { vertex: [3894.762, -201.601] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [2725.75, 1280.25, 28.948] },
              { vertex: [2725.75, 1280.25, 21.097] },
              { vertex: [1651.125, 1604.75, 18.453] },
              { vertex: [1651.125, 1604.75, 23.947] },
            ],
            points2D: [
              { vertex: [5252.19, -195.553] },
              { vertex: [5252.19, -203.404] },
              { vertex: [4129.71, -206.048] },
              { vertex: [4129.71, -200.554] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [2739, 1276.5, 21.097] },
              { vertex: [2739, 1276.5, 28.948] },
              { vertex: [2881.062, 1116.25, 29.901] },
              { vertex: [3084.125, 887.5, 21.302] },
              { vertex: [2881.062, 1116.25, 21.601] },
            ],
            points2D: [
              { vertex: [5252.19, -203.404] },
              { vertex: [5252.19, -195.553] },
              { vertex: [5466.191, -194.6] },
              { vertex: [5772.213, -203.199] },
              { vertex: [5466.191, -202.9] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [3871.312, 0, 196.903] },
              { vertex: [3871.312, 0, 186.903] },
              { vertex: [3562.062, 348.75, 178.3] },
            ],
            points2D: [
              { vertex: [6958.726, -27.598] },
              { vertex: [6492.759, -46.201] },
              { vertex: [6958.726, -37.598] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2738.875, 1276.5, 175.687] },
              { vertex: [2880.937, 1116.5, 175.902] },
              { vertex: [3084, 887.5, 167.9] },
              { vertex: [3509.187, 408.25, 170.456] },
              { vertex: [3871.437, 0, 167.9] },
              { vertex: [3871.437, 0, 156.903] },
              { vertex: [3084, 887.5, 156.903] },
              { vertex: [2880.937, 1116.5, 166.401] },
              { vertex: [2738.875, 1276.5, 170.826] },
            ],
            points2D: [
              { vertex: [5252.19, -48.814] },
              { vertex: [5252.19, -53.675] },
              { vertex: [5466.191, -58.1] },
              { vertex: [5772.213, -67.598] },
              { vertex: [6958.726, -67.598] },
              { vertex: [6958.726, -56.601] },
              { vertex: [6412.894, -54.045] },
              { vertex: [5772.213, -56.601] },
              { vertex: [5466.191, -48.599] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2736.375, 1277.25, 170.826] },
              { vertex: [2521.75, 1342, 175.462] },
              { vertex: [2736.375, 1277.25, 175.687] },
            ],
            points2D: [
              { vertex: [5252.19, -53.675] },
              { vertex: [5252.19, -48.814] },
              { vertex: [5027.959, -49.039] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2738.875, 1276.5, 122.707] },
              { vertex: [2880.937, 1116.5, 120.4] },
              { vertex: [3084, 887.5, 123.402] },
              { vertex: [3871.437, 0, 112.9] },
              { vertex: [3871.437, 0, 76.903] },
              { vertex: [3084, 887.5, 77.401] },
              { vertex: [2880.937, 1116.5, 76.903] },
              { vertex: [2738.875, 1276.5, 77.175] },
            ],
            points2D: [
              { vertex: [5252.19, -101.794] },
              { vertex: [5252.19, -147.326] },
              { vertex: [5466.191, -147.598] },
              { vertex: [5772.213, -147.1] },
              { vertex: [6958.726, -147.598] },
              { vertex: [6958.726, -111.601] },
              { vertex: [5772.213, -101.099] },
              { vertex: [5466.191, -104.101] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2725.75, 1280.25, 77.175] },
              { vertex: [1651.125, 1604.75, 78.602] },
              { vertex: [1651.125, 1604.75, 146.893] },
              { vertex: [2433.5, 1368.5, 125.997] },
              { vertex: [2725.75, 1280.25, 122.707] },
            ],
            points2D: [
              { vertex: [5252.19, -147.326] },
              { vertex: [5252.19, -101.794] },
              { vertex: [4946.988, -98.504] },
              { vertex: [4129.71, -77.608] },
              { vertex: [4129.71, -145.899] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1637.75, 1607.5, 78.602] },
              { vertex: [1635.75, 1842.5, 78.901] },
              { vertex: [1631, 2390.5, 95.4] },
              { vertex: [1628.062, 2726.5, 89.87] },
              { vertex: [1628.062, 2726.5, 149.895] },
              { vertex: [1631, 2390.5, 144.101] },
              { vertex: [1635.75, 1842.5, 152.9] },
              { vertex: [1637.75, 1607.5, 146.893] },
            ],
            points2D: [
              { vertex: [4129.71, -145.899] },
              { vertex: [4129.71, -77.608] },
              { vertex: [3894.762, -71.601] },
              { vertex: [3346.851, -80.4] },
              { vertex: [3010.708, -74.606] },
              { vertex: [3010.708, -134.631] },
              { vertex: [3346.851, -129.101] },
              { vertex: [3894.762, -145.6] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1656.062, 2709.5, 89.87] },
              { vertex: [1341.125, 2888.75, 83.908] },
              { vertex: [1341.125, 2888.75, 156.142] },
              { vertex: [1656.062, 2709.5, 149.895] },
            ],
            points2D: [
              { vertex: [3010.708, -134.631] },
              { vertex: [3010.708, -74.606] },
              { vertex: [2648.26, -68.359] },
              { vertex: [2648.26, -140.593] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1356.75, 2876.75, 83.908] },
              { vertex: [1170.812, 2935, 80.702] },
              { vertex: [814.875, 3046.75, 67.201] },
              { vertex: [488.937, 3149, 84.189] },
              { vertex: [488.937, 3149, 142.094] },
              { vertex: [814.875, 3046.75, 158.7] },
              { vertex: [1170.812, 2935, 159.501] },
              { vertex: [1356.75, 2876.75, 156.142] },
            ],
            points2D: [
              { vertex: [2648.26, -140.593] },
              { vertex: [2648.26, -68.359] },
              { vertex: [2453.387, -65] },
              { vertex: [2080.356, -65.801] },
              { vertex: [1738.72, -82.407] },
              { vertex: [1738.72, -140.312] },
              { vertex: [2080.356, -157.3] },
              { vertex: [2453.387, -143.799] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [476.875, 3152, 84.189] },
              { vertex: [415.5, 3339.5, 94.002] },
              { vertex: [277.187, 3762, 97.201] },
              { vertex: [0, 4609.25, 136.502] },
              { vertex: [0, 4609.25, 153.7] },
              { vertex: [277.187, 3762, 159.202] },
              { vertex: [415.5, 3339.5, 132.5] },
              { vertex: [476.875, 3152, 142.094] },
            ],
            points2D: [
              { vertex: [1738.72, -140.312] },
              { vertex: [1738.72, -82.407] },
              { vertex: [1541.355, -92.001] },
              { vertex: [1096.748, -65.299] },
              { vertex: [205.345, -70.801] },
              { vertex: [205.345, -87.999] },
              { vertex: [1096.748, -127.3] },
              { vertex: [1541.355, -130.499] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2738.875, 1276.5, 169.193] },
              { vertex: [2880.937, 1116.5, 166.401] },
              { vertex: [3084, 887.5, 156.903] },
              { vertex: [3871.437, 0, 156.903] },
              { vertex: [3871.437, 0, 127.9] },
              { vertex: [3328.687, 611.75, 130.511] },
              { vertex: [3084, 887.5, 132.9] },
              { vertex: [2880.937, 1116.5, 129.901] },
              { vertex: [2738.875, 1276.5, 134.463] },
            ],
            points2D: [
              { vertex: [5252.19, -55.308] },
              { vertex: [5252.19, -90.038] },
              { vertex: [5466.191, -94.6] },
              { vertex: [5772.213, -91.601] },
              { vertex: [6140.873, -93.99] },
              { vertex: [6958.726, -96.601] },
              { vertex: [6958.726, -67.598] },
              { vertex: [5772.213, -67.598] },
              { vertex: [5466.191, -58.1] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2725.75, 1280.25, 134.463] },
              { vertex: [1651.125, 1604.75, 158.393] },
              { vertex: [1651.125, 1604.75, 183.837] },
              { vertex: [2725.75, 1280.25, 169.193] },
            ],
            points2D: [
              { vertex: [5252.19, -90.038] },
              { vertex: [5252.19, -55.308] },
              { vertex: [4129.71, -40.664] },
              { vertex: [4129.71, -66.108] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1637.75, 1607.5, 158.393] },
              { vertex: [1635.75, 1842.5, 163.402] },
              { vertex: [1631, 2390.5, 152.401] },
              { vertex: [1628.062, 2726.5, 165.583] },
              { vertex: [1628.062, 2726.5, 166.768] },
              { vertex: [1631, 2390.5, 181.401] },
              { vertex: [1635.75, 1842.5, 186.903] },
              { vertex: [1637.75, 1607.5, 183.837] },
            ],
            points2D: [
              { vertex: [4129.71, -66.108] },
              { vertex: [4129.71, -40.664] },
              { vertex: [3894.762, -37.598] },
              { vertex: [3346.851, -43.1] },
              { vertex: [3010.708, -57.733] },
              { vertex: [3010.708, -58.918] },
              { vertex: [3346.851, -72.1] },
              { vertex: [3894.762, -61.099] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1629.187, 2724.75, 165.583] },
              { vertex: [1616.75, 2731.75, 166.145] },
              { vertex: [1629.187, 2724.75, 166.768] },
            ],
            points2D: [
              { vertex: [3010.708, -58.918] },
              { vertex: [3010.708, -57.733] },
              { vertex: [2996.378, -58.356] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [476.562, 3152.75, 159.524] },
              { vertex: [476.562, 3152.75, 142.094] },
              { vertex: [415.187, 3340.25, 132.5] },
              { vertex: [415.187, 3340.25, 160] },
            ],
            points2D: [
              { vertex: [1738.72, -64.977] },
              { vertex: [1738.72, -82.407] },
              { vertex: [1541.355, -92.001] },
              { vertex: [1541.355, -64.501] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [481.187, 3151.25, 142.094] },
              { vertex: [481.187, 3151.25, 159.524] },
              { vertex: [807.187, 3049, 158.7] },
            ],
            points2D: [
              { vertex: [1738.72, -82.407] },
              { vertex: [1738.72, -64.977] },
              { vertex: [2080.356, -65.801] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [415.312, 3340, 160] },
              { vertex: [415.312, 3340, 132.5] },
              { vertex: [277.062, 3762.5, 159.202] },
            ],
            points2D: [
              { vertex: [1541.355, -64.501] },
              { vertex: [1096.748, -65.299] },
              { vertex: [1541.355, -92.001] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [476.875, 3152, 178.896] },
              { vertex: [476.875, 3152, 172.684] },
              { vertex: [415.5, 3339.5, 177.7] },
              { vertex: [277.187, 3762, 170.6] },
              { vertex: [0, 4609.25, 172.5] },
              { vertex: [0, 4609.25, 195] },
              { vertex: [277.187, 3762, 196.2] },
              { vertex: [415.5, 3339.5, 187.5] },
            ],
            points2D: [
              { vertex: [1738.72, -45.605] },
              { vertex: [1738.72, -51.817] },
              { vertex: [1541.355, -46.801] },
              { vertex: [1096.748, -53.901] },
              { vertex: [205.345, -52.001] },
              { vertex: [205.345, -29.501] },
              { vertex: [1096.748, -28.301] },
              { vertex: [1541.355, -37.001] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [481.187, 3151.25, 172.684] },
              { vertex: [481.187, 3151.25, 178.896] },
              { vertex: [807.187, 3049, 164.002] },
            ],
            points2D: [
              { vertex: [1738.72, -51.817] },
              { vertex: [1738.72, -45.605] },
              { vertex: [2080.356, -60.499] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [476.687, 3152.5, 201.765] },
              { vertex: [476.687, 3152.5, 198.352] },
              { vertex: [415.312, 3340, 192.001] },
              { vertex: [277.062, 3762.5, 201.2] },
              { vertex: [277.062, 3762.5, 214.202] },
              { vertex: [415.312, 3340, 204.501] },
            ],
            points2D: [
              { vertex: [1738.72, -22.736] },
              { vertex: [1738.72, -26.149] },
              { vertex: [1541.355, -32.5] },
              { vertex: [1096.748, -23.301] },
              { vertex: [1096.748, -10.299] },
              { vertex: [1541.355, -20] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [477.562, 3152.5, 198.352] },
              { vertex: [477.562, 3152.5, 201.765] },
              { vertex: [548.312, 3130.25, 200.738] },
            ],
            points2D: [
              { vertex: [1738.72, -26.149] },
              { vertex: [1738.72, -22.736] },
              { vertex: [1812.854, -23.763] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [816.875, 3046, 173.202] },
              { vertex: [1172.812, 2934.5, 159.501] },
              { vertex: [995.187, 2990.25, 159.025] },
              { vertex: [816.875, 3046, 164.002] },
            ],
            points2D: [
              { vertex: [2080.356, -51.299] },
              { vertex: [2453.387, -65] },
              { vertex: [2267.208, -65.476] },
              { vertex: [2080.356, -60.499] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [486.25, 3149.75, 179.634] },
              { vertex: [812.25, 3047.5, 178.202] },
              { vertex: [1168.187, 2935.75, 167.7] },
              { vertex: [1168.187, 2935.75, 159.501] },
              { vertex: [812.25, 3047.5, 173.202] },
              { vertex: [486.25, 3149.75, 179.485] },
            ],
            points2D: [
              { vertex: [1738.72, -44.867] },
              { vertex: [1738.72, -45.016] },
              { vertex: [2080.356, -51.299] },
              { vertex: [2453.387, -65] },
              { vertex: [2453.387, -56.801] },
              { vertex: [2080.356, -46.299] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [476.562, 3152.75, 179.485] },
              { vertex: [473.25, 3162.75, 179.678] },
              { vertex: [476.562, 3152.75, 179.634] },
            ],
            points2D: [
              { vertex: [1738.72, -45.016] },
              { vertex: [1738.72, -44.867] },
              { vertex: [1728.215, -44.823] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [481.187, 3151.25, 179.485] },
              { vertex: [807.187, 3049, 173.202] },
              { vertex: [807.187, 3049, 164.002] },
              { vertex: [481.187, 3151.25, 179.211] },
            ],
            points2D: [
              { vertex: [1738.72, -45.016] },
              { vertex: [1738.72, -45.29] },
              { vertex: [2080.356, -60.499] },
              { vertex: [2080.356, -51.299] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [476.562, 3152.75, 179.211] },
              { vertex: [473.25, 3162.75, 179.678] },
              { vertex: [476.562, 3152.75, 179.485] },
            ],
            points2D: [
              { vertex: [1738.72, -45.29] },
              { vertex: [1738.72, -45.016] },
              { vertex: [1728.215, -44.823] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [481.187, 3151.25, 179.932] },
              { vertex: [807.187, 3049, 188.202] },
              { vertex: [807.187, 3049, 178.202] },
              { vertex: [481.187, 3151.25, 179.634] },
            ],
            points2D: [
              { vertex: [1738.72, -44.569] },
              { vertex: [1738.72, -44.867] },
              { vertex: [2080.356, -46.299] },
              { vertex: [2080.356, -36.299] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [476.562, 3152.75, 179.634] },
              { vertex: [473.25, 3162.75, 179.678] },
              { vertex: [476.562, 3152.75, 179.932] },
            ],
            points2D: [
              { vertex: [1738.72, -44.867] },
              { vertex: [1738.72, -44.569] },
              { vertex: [1728.215, -44.823] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [415.187, 3340.25, 192.001] },
              { vertex: [473.312, 3162.75, 179.678] },
              { vertex: [415.187, 3340.25, 187.5] },
            ],
            points2D: [
              { vertex: [1541.355, -32.5] },
              { vertex: [1728.215, -44.823] },
              { vertex: [1541.355, -37.001] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [481.187, 3151.25, 192.441] },
              { vertex: [807.187, 3049, 193.202] },
              { vertex: [807.187, 3049, 188.202] },
              { vertex: [481.187, 3151.25, 179.932] },
            ],
            points2D: [
              { vertex: [1738.72, -32.06] },
              { vertex: [1738.72, -44.569] },
              { vertex: [2080.356, -36.299] },
              { vertex: [2080.356, -31.299] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [476.562, 3152.75, 179.932] },
              { vertex: [473.312, 3162.75, 179.678] },
              { vertex: [415.187, 3340.25, 192.001] },
              { vertex: [476.562, 3152.75, 192.441] },
            ],
            points2D: [
              { vertex: [1738.72, -44.569] },
              { vertex: [1738.72, -32.06] },
              { vertex: [1541.355, -32.5] },
              { vertex: [1728.215, -44.823] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [1628.062, 2725.75, 89.87] },
              { vertex: [1631, 2389.5, 95.4] },
              { vertex: [1631, 2389.5, 70.4] },
              { vertex: [1628.062, 2725.75, 72.771] },
            ],
            points2D: [
              { vertex: [3010.708, -134.631] },
              { vertex: [3010.708, -151.73] },
              { vertex: [3346.851, -154.101] },
              { vertex: [3346.851, -129.101] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [1656.062, 2709.5, 72.771] },
              { vertex: [1341.125, 2888.75, 75.328] },
              { vertex: [1341.125, 2888.75, 83.908] },
              { vertex: [1656.062, 2709.5, 89.87] },
            ],
            points2D: [
              { vertex: [3010.708, -151.73] },
              { vertex: [3010.708, -134.631] },
              { vertex: [2648.26, -140.593] },
              { vertex: [2648.26, -149.173] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [1361.375, 2875.25, 75.328] },
              { vertex: [1175.437, 2933.5, 76.702] },
              { vertex: [819.562, 3045.25, 67.201] },
              { vertex: [1175.437, 2933.5, 80.702] },
              { vertex: [1361.375, 2875.25, 83.908] },
            ],
            points2D: [
              { vertex: [2648.26, -149.173] },
              { vertex: [2648.26, -140.593] },
              { vertex: [2453.387, -143.799] },
              { vertex: [2080.356, -157.3] },
              { vertex: [2453.387, -147.799] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [1631, 2390.5, 95.4] },
              { vertex: [1635.75, 1842.5, 78.901] },
              { vertex: [1631, 2390.5, 70.4] },
            ],
            points2D: [
              { vertex: [3346.851, -129.101] },
              { vertex: [3894.762, -145.6] },
              { vertex: [3346.851, -154.101] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [2739.062, 1276.25, 205.446] },
              { vertex: [2881.062, 1116.25, 204.901] },
              { vertex: [2881.062, 1116.25, 185.902] },
              { vertex: [2739.062, 1276.25, 186.038] },
            ],
            points2D: [
              { vertex: [5252.19, -19.055] },
              { vertex: [5252.19, -38.463] },
              { vertex: [5466.191, -38.599] },
              { vertex: [5466.191, -19.6] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [2725.75, 1280.25, 186.038] },
              { vertex: [1651.125, 1604.75, 186.753] },
              { vertex: [1651.125, 1604.75, 208.303] },
              { vertex: [2725.75, 1280.25, 205.446] },
            ],
            points2D: [
              { vertex: [5252.19, -38.463] },
              { vertex: [5252.19, -19.055] },
              { vertex: [4129.71, -16.198] },
              { vertex: [4129.71, -37.748] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [1637.75, 1607.5, 186.753] },
              { vertex: [1635.75, 1842.5, 186.903] },
              { vertex: [1631, 2390.5, 181.401] },
              { vertex: [1628.062, 2726.5, 166.768] },
              { vertex: [1628.062, 2726.5, 200.622] },
              { vertex: [1631, 2390.5, 205.4] },
              { vertex: [1635.75, 1842.5, 208.901] },
              { vertex: [1637.75, 1607.5, 208.303] },
            ],
            points2D: [
              { vertex: [4129.71, -37.748] },
              { vertex: [4129.71, -16.198] },
              { vertex: [3894.762, -15.6] },
              { vertex: [3346.851, -19.101] },
              { vertex: [3010.708, -23.879] },
              { vertex: [3010.708, -57.733] },
              { vertex: [3346.851, -43.1] },
              { vertex: [3894.762, -37.598] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [1656.062, 2709.5, 166.768] },
              { vertex: [1643.625, 2716.5, 166.145] },
              { vertex: [1341.125, 2888.75, 167.142] },
              { vertex: [1341.125, 2888.75, 195.47] },
              { vertex: [1656.062, 2709.5, 200.622] },
            ],
            points2D: [
              { vertex: [3010.708, -57.733] },
              { vertex: [3010.708, -23.879] },
              { vertex: [2648.26, -29.031] },
              { vertex: [2648.26, -57.359] },
              { vertex: [2996.378, -58.356] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [1361.375, 2875.25, 167.142] },
              { vertex: [1175.437, 2933.5, 167.7] },
              { vertex: [819.562, 3045.25, 178.202] },
              { vertex: [1175.437, 2933.5, 192.7] },
              { vertex: [1361.375, 2875.25, 195.47] },
            ],
            points2D: [
              { vertex: [2648.26, -57.359] },
              { vertex: [2648.26, -29.031] },
              { vertex: [2453.387, -31.801] },
              { vertex: [2080.356, -46.299] },
              { vertex: [2453.387, -56.801] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [813.375, 3047.25, 193.202] },
              { vertex: [923.125, 3012.75, 191.368] },
              { vertex: [813.375, 3047.25, 188.202] },
            ],
            points2D: [
              { vertex: [2080.356, -31.299] },
              { vertex: [2195.394, -33.133] },
              { vertex: [2080.356, -36.299] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [816.875, 3046, 198.202] },
              { vertex: [1172.812, 2934.5, 192.7] },
              { vertex: [816.875, 3046, 178.202] },
            ],
            points2D: [
              { vertex: [2080.356, -26.299] },
              { vertex: [2453.387, -31.801] },
              { vertex: [2080.356, -46.299] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [481.187, 3151.25, 198.352] },
              { vertex: [551.937, 3129.25, 200.738] },
              { vertex: [807.187, 3049, 198.202] },
              { vertex: [807.187, 3049, 193.202] },
              { vertex: [481.187, 3151.25, 192.441] },
            ],
            points2D: [
              { vertex: [1738.72, -26.149] },
              { vertex: [1738.72, -32.06] },
              { vertex: [2080.356, -31.299] },
              { vertex: [2080.356, -26.299] },
              { vertex: [1812.854, -23.763] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [476.562, 3152.75, 192.441] },
              { vertex: [415.187, 3340.25, 192.001] },
              { vertex: [476.562, 3152.75, 198.352] },
            ],
            points2D: [
              { vertex: [1738.72, -32.06] },
              { vertex: [1738.72, -26.149] },
              { vertex: [1541.355, -32.5] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [0.062, 4609.25, 199.501] },
              { vertex: [153.187, 4141, 200.725] },
              { vertex: [277.25, 3762, 201.2] },
              { vertex: [415.5, 3339.25, 192.001] },
              { vertex: [415.5, 3339.25, 187.5] },
              { vertex: [277.25, 3762, 196.2] },
              { vertex: [0.062, 4609.25, 195] },
            ],
            points2D: [
              { vertex: [205.345, -25] },
              { vertex: [697.877, -23.776] },
              { vertex: [1096.748, -23.301] },
              { vertex: [1096.748, -23.301] },
              { vertex: [1541.355, -32.5] },
              { vertex: [1541.355, -37.001] },
              { vertex: [1096.748, -28.301] },
              { vertex: [1096.748, -28.301] },
              { vertex: [205.345, -29.501] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [277.25, 3762, 214.202] },
              { vertex: [277.25, 3762, 201.2] },
              { vertex: [153.187, 4141, 200.725] },
              { vertex: [168.187, 4095.25, 207.861] },
              { vertex: [154.437, 4137.25, 217.119] },
              { vertex: [194.062, 4016.25, 217.749] },
            ],
            points2D: [
              { vertex: [1096.748, -10.299] },
              { vertex: [829.222, -6.752] },
              { vertex: [701.762, -7.382] },
              { vertex: [745.968, -16.64] },
              { vertex: [697.877, -23.776] },
              { vertex: [1096.748, -23.301] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [0.187, 4608.75, 208.5] },
              { vertex: [89.937, 4334.5, 215.764] },
              { vertex: [154.562, 4136.75, 217.119] },
              { vertex: [168.312, 4094.75, 207.861] },
              { vertex: [153.375, 4140.5, 200.725] },
              { vertex: [0.187, 4608.75, 199.501] },
            ],
            points2D: [
              { vertex: [205.345, -16.001] },
              { vertex: [205.345, -25] },
              { vertex: [697.877, -23.776] },
              { vertex: [745.968, -16.64] },
              { vertex: [701.762, -7.382] },
              { vertex: [493.809, -8.737] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [476.875, 3152, 84.189] },
              { vertex: [476.875, 3152, 75.124] },
              { vertex: [415.5, 3339.5, 79.701] },
              { vertex: [277.187, 3762, 88.802] },
              { vertex: [0, 4609.25, 88.002] },
              { vertex: [0, 4609.25, 136.502] },
              { vertex: [277.187, 3762, 97.201] },
              { vertex: [415.5, 3339.5, 94.002] },
            ],
            points2D: [
              { vertex: [1738.72, -140.312] },
              { vertex: [1738.72, -149.377] },
              { vertex: [1541.355, -144.8] },
              { vertex: [1096.748, -135.699] },
              { vertex: [205.345, -136.499] },
              { vertex: [205.345, -87.999] },
              { vertex: [1096.748, -127.3] },
              { vertex: [1541.355, -130.499] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [481.187, 3151.25, 75.124] },
              { vertex: [481.187, 3151.25, 84.189] },
              { vertex: [807.187, 3049, 67.201] },
            ],
            points2D: [
              { vertex: [1738.72, -149.377] },
              { vertex: [1738.72, -140.312] },
              { vertex: [2080.356, -157.3] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [476.875, 3152, 75.124] },
              { vertex: [476.875, 3152, 71.955] },
              { vertex: [415.5, 3339.5, 74.701] },
              { vertex: [277.187, 3762, 70.702] },
              { vertex: [0, 4609.25, 69.501] },
              { vertex: [0, 4609.25, 88.002] },
              { vertex: [277.187, 3762, 88.802] },
              { vertex: [415.5, 3339.5, 79.701] },
            ],
            points2D: [
              { vertex: [1738.72, -149.377] },
              { vertex: [1738.72, -152.546] },
              { vertex: [1541.355, -149.8] },
              { vertex: [1096.748, -153.799] },
              { vertex: [205.345, -155] },
              { vertex: [205.345, -136.499] },
              { vertex: [1096.748, -135.699] },
              { vertex: [1541.355, -144.8] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [481.187, 3151.25, 71.955] },
              { vertex: [481.187, 3151.25, 75.124] },
              { vertex: [807.187, 3049, 67.201] },
            ],
            points2D: [
              { vertex: [1738.72, -152.546] },
              { vertex: [1738.72, -149.377] },
              { vertex: [2080.356, -157.3] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1366.5, 2873.75, 167.142] },
              { vertex: [1366.5, 2873.75, 156.142] },
              { vertex: [1180.562, 2932, 159.501] },
              { vertex: [1180.562, 2932, 167.7] },
            ],
            points2D: [
              { vertex: [2648.26, -57.359] },
              { vertex: [2648.26, -68.359] },
              { vertex: [2453.387, -65] },
              { vertex: [2453.387, -56.801] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1656.062, 2709.5, 165.583] },
              { vertex: [1656.062, 2709.5, 149.895] },
              { vertex: [1341.125, 2888.75, 156.142] },
              { vertex: [1341.125, 2888.75, 167.142] },
              { vertex: [1643.625, 2716.5, 166.145] },
            ],
            points2D: [
              { vertex: [3010.708, -58.918] },
              { vertex: [3010.708, -74.606] },
              { vertex: [2648.26, -68.359] },
              { vertex: [2648.26, -57.359] },
              { vertex: [2996.378, -58.356] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1637.75, 1607.5, 154.75] },
              { vertex: [1637.75, 1607.5, 151.588] },
              { vertex: [1635.75, 1842.5, 152.9] },
              { vertex: [1631, 2390.5, 144.101] },
              { vertex: [1628.062, 2726.5, 149.895] },
              { vertex: [1628.062, 2726.5, 165.583] },
              { vertex: [1631, 2390.5, 152.401] },
              { vertex: [1635.75, 1842.5, 163.402] },
            ],
            points2D: [
              { vertex: [4129.71, -69.751] },
              { vertex: [4129.71, -72.913] },
              { vertex: [3894.762, -71.601] },
              { vertex: [3346.851, -80.4] },
              { vertex: [3010.708, -74.606] },
              { vertex: [3010.708, -58.918] },
              { vertex: [3346.851, -72.1] },
              { vertex: [3894.762, -61.099] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1638.937, 1608.25, 151.588] },
              { vertex: [1638.937, 1608.25, 154.75] },
              { vertex: [1735.875, 1579, 151.023] },
            ],
            points2D: [
              { vertex: [4129.71, -72.913] },
              { vertex: [4129.71, -69.751] },
              { vertex: [4230.915, -73.478] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1637.75, 1608.5, 158.393] },
              { vertex: [1637.75, 1608.5, 154.75] },
              { vertex: [1635.687, 1843.25, 163.402] },
            ],
            points2D: [
              { vertex: [4129.71, -66.108] },
              { vertex: [4129.71, -69.751] },
              { vertex: [3894.762, -61.099] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1637.75, 1608.5, 151.588] },
              { vertex: [1637.75, 1608.5, 146.893] },
              { vertex: [1635.687, 1843.25, 152.9] },
            ],
            points2D: [
              { vertex: [4129.71, -72.913] },
              { vertex: [4129.71, -77.608] },
              { vertex: [3894.762, -71.601] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2725.75, 1280.25, 134.463] },
              { vertex: [2725.75, 1280.25, 128.292] },
              { vertex: [2433.5, 1368.5, 125.997] },
              { vertex: [1651.125, 1604.75, 146.893] },
              { vertex: [1651.125, 1604.75, 151.588] },
              { vertex: [1748, 1575.5, 151.023] },
              { vertex: [1651.125, 1604.75, 154.75] },
              { vertex: [1651.125, 1604.75, 158.393] },
            ],
            points2D: [
              { vertex: [5252.19, -90.038] },
              { vertex: [5252.19, -96.209] },
              { vertex: [4946.988, -98.504] },
              { vertex: [4129.71, -77.608] },
              { vertex: [4129.71, -72.913] },
              { vertex: [4230.915, -73.478] },
              { vertex: [4129.71, -69.751] },
              { vertex: [4129.71, -66.108] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2739.062, 1276.25, 128.292] },
              { vertex: [2739.062, 1276.25, 134.463] },
              { vertex: [2881.062, 1116.25, 129.901] },
            ],
            points2D: [
              { vertex: [5252.19, -96.209] },
              { vertex: [5252.19, -90.038] },
              { vertex: [5466.191, -94.6] },
            ],
          },
          {
            symbol: "A-6",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [3871.312, 0, 186.903] },
              { vertex: [3871.312, 0, 167.9] },
              { vertex: [3509.062, 408.5, 170.456] },
              { vertex: [3562.125, 348.75, 178.3] },
            ],
            points2D: [
              { vertex: [6958.726, -37.598] },
              { vertex: [6492.759, -46.201] },
              { vertex: [6412.894, -54.045] },
              { vertex: [6958.726, -56.601] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2738.875, 1276.5, 180.804] },
              { vertex: [2880.937, 1116.5, 185.902] },
              { vertex: [3084, 887.5, 187.099] },
              { vertex: [3871.437, 0, 211.903] },
              { vertex: [3871.437, 0, 196.903] },
              { vertex: [3084, 887.5, 167.9] },
              { vertex: [2880.937, 1116.5, 175.902] },
              { vertex: [2738.875, 1276.5, 175.687] },
            ],
            points2D: [
              { vertex: [5252.19, -43.697] },
              { vertex: [5252.19, -48.814] },
              { vertex: [5466.191, -48.599] },
              { vertex: [5772.213, -56.601] },
              { vertex: [6958.726, -27.598] },
              { vertex: [6958.726, -12.598] },
              { vertex: [5772.213, -37.402] },
              { vertex: [5466.191, -38.599] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2736.375, 1277.25, 175.687] },
              { vertex: [2521.75, 1342, 175.462] },
              { vertex: [2736.375, 1277.25, 180.804] },
            ],
            points2D: [
              { vertex: [5252.19, -48.814] },
              { vertex: [5252.19, -43.697] },
              { vertex: [5027.959, -49.039] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [1637.75, 1608.5, 186.753] },
              { vertex: [1637.75, 1608.5, 183.837] },
              { vertex: [1635.687, 1843.25, 186.903] },
            ],
            points2D: [
              { vertex: [4129.71, -37.748] },
              { vertex: [4129.71, -40.664] },
              { vertex: [3894.762, -37.598] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2725.75, 1280.25, 170.826] },
              { vertex: [2725.75, 1280.25, 169.193] },
              { vertex: [1651.125, 1604.75, 183.837] },
              { vertex: [1651.125, 1604.75, 186.753] },
              { vertex: [2725.75, 1280.25, 186.038] },
              { vertex: [2725.75, 1280.25, 180.804] },
              { vertex: [2511.062, 1345.25, 175.462] },
            ],
            points2D: [
              { vertex: [5252.19, -53.675] },
              { vertex: [5252.19, -55.308] },
              { vertex: [4129.71, -40.664] },
              { vertex: [4129.71, -37.748] },
              { vertex: [5252.19, -38.463] },
              { vertex: [5252.19, -43.697] },
              { vertex: [5027.959, -49.039] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2739.062, 1276.25, 169.193] },
              { vertex: [2739.062, 1276.25, 170.826] },
              { vertex: [2881.062, 1116.25, 166.401] },
            ],
            points2D: [
              { vertex: [5252.19, -55.308] },
              { vertex: [5252.19, -53.675] },
              { vertex: [5466.191, -58.1] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2739.062, 1276.25, 180.804] },
              { vertex: [2739.062, 1276.25, 186.038] },
              { vertex: [2881.062, 1116.25, 185.902] },
            ],
            points2D: [
              { vertex: [5252.19, -43.697] },
              { vertex: [5252.19, -38.463] },
              { vertex: [5466.191, -38.599] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [2881.062, 1116.25, 204.901] },
              { vertex: [2980.562, 1004, 205.561] },
              { vertex: [2881.062, 1116.25, 185.902] },
            ],
            points2D: [
              { vertex: [5466.191, -19.6] },
              { vertex: [5616.194, -18.94] },
              { vertex: [5466.191, -38.599] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [3871.312, 0.25, 217.9] },
              { vertex: [3871.312, 0.25, 211.903] },
              { vertex: [3760.75, 124.75, 217.647] },
            ],
            points2D: [
              { vertex: [6958.726, -6.601] },
              { vertex: [6792.119, -6.854] },
              { vertex: [6958.726, -12.598] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [3871.375, 0, 196.903] },
              { vertex: [3562.187, 348.5, 178.3] },
              { vertex: [3509.125, 408.25, 170.456] },
              { vertex: [3083.937, 887.5, 167.9] },
            ],
            points2D: [
              { vertex: [6958.726, -27.598] },
              { vertex: [6492.759, -46.201] },
              { vertex: [6412.894, -54.045] },
              { vertex: [5772.213, -56.601] },
            ],
          },
          {
            symbol: "A-6",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [1635.75, 1843, 22.9] },
              { vertex: [1635.75, 1843, 17.9] },
              { vertex: [1634.187, 2023, 21.286] },
            ],
            points2D: [
              { vertex: [3894.762, -201.601] },
              { vertex: [3714.806, -203.215] },
              { vertex: [3894.762, -206.601] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [3871.437, 0, 36.903] },
              { vertex: [3871.437, 0, 22.9] },
              { vertex: [3084, 887.5, 21.302] },
              { vertex: [2880.875, 1116.5, 29.901] },
              { vertex: [3084, 887.5, 38.901] },
            ],
            points2D: [
              { vertex: [6958.726, -187.598] },
              { vertex: [5772.213, -185.6] },
              { vertex: [5772.213, -185.6] },
              { vertex: [5466.191, -194.6] },
              { vertex: [5772.213, -203.199] },
              { vertex: [5772.213, -203.199] },
              { vertex: [6958.726, -201.601] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2881, 1116.25, 34.901] },
              { vertex: [3084.125, 887.5, 38.901] },
              { vertex: [2881, 1116.25, 29.901] },
            ],
            points2D: [
              { vertex: [5466.191, -189.6] },
              { vertex: [5772.213, -185.6] },
              { vertex: [5466.191, -194.6] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2739.062, 1276.25, 34.618] },
              { vertex: [2881.062, 1116.25, 34.901] },
              { vertex: [2881.062, 1116.25, 29.901] },
              { vertex: [2739.062, 1276.25, 26.905] },
            ],
            points2D: [
              { vertex: [5252.19, -189.883] },
              { vertex: [5252.19, -197.596] },
              { vertex: [5466.191, -194.6] },
              { vertex: [5466.191, -189.6] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2729.5, 1279.25, 26.905] },
              { vertex: [1958.312, 1512, 15.626] },
              { vertex: [2059.125, 1481.5, 33.691] },
              { vertex: [2729.5, 1279.25, 34.618] },
            ],
            points2D: [
              { vertex: [5252.19, -197.596] },
              { vertex: [5252.19, -189.883] },
              { vertex: [4551.982, -190.81] },
              { vertex: [4446.69, -208.875] },
            ],
          },
          {
            symbol: "A-6",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [3084.062, 887.5, 132.9] },
              { vertex: [3328.687, 611.75, 130.511] },
              { vertex: [3084.062, 887.5, 128.402] },
            ],
            points2D: [
              { vertex: [5772.213, -91.601] },
              { vertex: [6140.873, -93.99] },
              { vertex: [5772.213, -96.099] },
            ],
          },
          {
            symbol: "A-6",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [3084.125, 887.5, 132.9] },
              { vertex: [3084.125, 887.5, 128.402] },
              { vertex: [2881, 1116.25, 129.901] },
            ],
            points2D: [
              { vertex: [5772.213, -91.601] },
              { vertex: [5466.191, -94.6] },
              { vertex: [5772.213, -96.099] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [3084.125, 887.5, 205.4] },
              { vertex: [3084.125, 887.5, 187.099] },
              { vertex: [2881, 1116.25, 185.902] },
              { vertex: [2980.562, 1004.25, 205.561] },
              { vertex: [3084.125, 887.5, 207.401] },
            ],
            points2D: [
              { vertex: [5772.213, -19.101] },
              { vertex: [5772.213, -17.1] },
              { vertex: [5616.194, -18.94] },
              { vertex: [5466.191, -38.599] },
              { vertex: [5772.213, -37.402] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [3083.937, 887.5, 205.4] },
              { vertex: [3083.937, 887.5, 207.401] },
              { vertex: [3760.812, 124.75, 217.647] },
              { vertex: [3871.375, 0, 211.903] },
              { vertex: [3083.937, 887.5, 187.099] },
            ],
            points2D: [
              { vertex: [5772.213, -19.101] },
              { vertex: [5772.213, -17.1] },
              { vertex: [6792.119, -6.854] },
              { vertex: [6958.726, -12.598] },
              { vertex: [5772.213, -37.402] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2738.875, 1276.5, 128.292] },
              { vertex: [2880.937, 1116.5, 129.901] },
              { vertex: [3084, 887.5, 128.402] },
              { vertex: [3328.687, 611.75, 130.511] },
              { vertex: [3871.437, 0, 127.9] },
              { vertex: [3871.437, 0, 112.9] },
              { vertex: [3084, 887.5, 123.402] },
              { vertex: [2880.937, 1116.5, 120.4] },
              { vertex: [2738.875, 1276.5, 122.707] },
            ],
            points2D: [
              { vertex: [5252.19, -96.209] },
              { vertex: [5252.19, -101.794] },
              { vertex: [5466.191, -104.101] },
              { vertex: [5772.213, -101.099] },
              { vertex: [6958.726, -111.601] },
              { vertex: [6958.726, -96.601] },
              { vertex: [6140.873, -93.99] },
              { vertex: [5772.213, -96.099] },
              { vertex: [5466.191, -94.6] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2735.437, 1277.5, 122.707] },
              { vertex: [2443.25, 1365.5, 125.997] },
              { vertex: [2735.437, 1277.5, 128.292] },
            ],
            points2D: [
              { vertex: [5252.19, -101.794] },
              { vertex: [5252.19, -96.209] },
              { vertex: [4946.988, -98.504] },
            ],
          },
          {
            symbolDescription: null,
            symbol: null,
            color: "000000",
            points3D: [
              { vertex: [2729.75, 1279.25, 159.167] },
              { vertex: [2729.75, 1279.25, 149.208] },
              { vertex: [2711.937, 1284.5, 144.724] },
              { vertex: [2647.5, 1304, 133.507] },
              { vertex: [2429.625, 1369.75, 137.247] },
              { vertex: [2352.937, 1392.75, 154.34] },
              { vertex: [2214.875, 1434.5, 162.887] },
              { vertex: [2043, 1486.25, 165.023] },
              { vertex: [1997, 1500.25, 173.038] },
              { vertex: [1981.625, 1505, 186.391] },
              { vertex: [2024.625, 1492, 191.732] },
              { vertex: [2632.187, 1308.5, 193.336] },
              { vertex: [2708.875, 1285.5, 174.104] },
              { vertex: [2724.25, 1280.75, 163.422] },
            ],
            points2D: [
              { vertex: [5252.19, -65.334] },
              { vertex: [5252.19, -75.293] },
              { vertex: [5233.566, -79.777] },
              { vertex: [5166.26, -90.994] },
              { vertex: [4938.698, -87.254] },
              { vertex: [4858.566, -70.161] },
              { vertex: [4714.337, -61.614] },
              { vertex: [4534.849, -59.478] },
              { vertex: [4486.772, -51.463] },
              { vertex: [4470.748, -38.11] },
              { vertex: [4515.62, -32.769] },
              { vertex: [5150.233, -31.165] },
              { vertex: [5230.364, -50.397] },
              { vertex: [5246.388, -61.079] },
            ],
          },
          {
            symbolDescription: null,
            symbol: null,
            color: "000000",
            points3D: [
              { vertex: [2739.062, 1276.25, 149.208] },
              { vertex: [2739.062, 1276.25, 159.167] },
              { vertex: [2745.875, 1268.75, 151.67] },
            ],
            points2D: [
              { vertex: [5252.19, -75.293] },
              { vertex: [5252.19, -65.334] },
              { vertex: [5262.415, -72.831] },
            ],
          },
        ],
        groundWaterLines: [],
        boreholes: [
          {
            boreholeId: "25ba6f99-b8b7-1ff7-4f79-3a0e79f41193",
            name: "B-65",
            x: 205.345,
            elevation: -16,
            depth: 185.7,
            waterDepth: null,
          },
          {
            boreholeId: "e0f1dfbc-f020-e03c-09d7-3a0e79f41193",
            name: "B-64",
            x: 1096.748,
            elevation: -10.3,
            depth: 191.9,
            waterDepth: 27.5,
          },
          {
            boreholeId: "fdb74b0b-82ba-4d8b-25f7-3a0e79f41193",
            name: "B-62",
            x: 1541.355,
            elevation: -20,
            depth: 182.5,
            waterDepth: null,
          },
          {
            boreholeId: "4146b747-605c-52d4-7bad-3a0e79f41193",
            name: "B-61",
            x: 2080.356,
            elevation: -26.3,
            depth: 198.2,
            waterDepth: 12.3,
          },
          {
            boreholeId: "eb864ed5-5156-6aa4-8f0a-3a0e79f41193",
            name: "B-60",
            x: 2453.387,
            elevation: -31.8,
            depth: 169.1,
            waterDepth: null,
          },
          {
            boreholeId: "d796511b-75cd-39de-bc9f-3a0e79f41193",
            name: "B-58",
            x: 3346.851,
            elevation: -19.1,
            depth: 184.5,
            waterDepth: null,
          },
          {
            boreholeId: "a34462cd-9861-67d6-0e5c-3a0e79f41193",
            name: "B-57",
            x: 3894.762,
            elevation: -15.6,
            depth: 200.1,
            waterDepth: null,
          },
          {
            boreholeId: "602d5532-e5a8-90eb-5a56-3a0e79f41193",
            name: "B-54B",
            x: 5466.191,
            elevation: -19.6,
            depth: 183.3,
            waterDepth: null,
          },
          {
            boreholeId: "c5f3a8d6-87cc-c6f9-303d-3a0e79f41193",
            name: "B-55",
            x: 5772.213,
            elevation: -17.1,
            depth: 186.3,
            waterDepth: null,
          },
          {
            boreholeId: "d21781a4-1cb8-3d34-c912-3a0e79f41193",
            name: "B-56",
            x: 6958.726,
            elevation: -6.6,
            depth: 195,
            waterDepth: null,
          },
        ],
      },
      {
        sectionId: "id16984394071310.5039868340655891",
        sectionName: "Section A2",
        polygons: [],
        groundWaterLines: [],
        boreholes: [
          {
            boreholeId: "b8bf2c01-7c35-3ca5-9b06-3a0e79f41193",
            name: "B-67",
            x: 208.309,
            elevation: 4.7,
            depth: 110,
            waterDepth: null,
          },
          {
            boreholeId: "25ba6f99-b8b7-1ff7-4f79-3a0e79f41193",
            name: "B-65",
            x: 897.896,
            elevation: -16,
            depth: 185.7,
            waterDepth: null,
          },
        ],
      },
      {
        sectionId: "id16984394284230.47418072838640524",
        sectionName: "Section A3",
        polygons: [
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [0, 0, 151.899] },
              { vertex: [522.187, 611.25, 151.998] },
              { vertex: [522.187, 611.25, 141.998] },
              { vertex: [522.187, 611.25, 68.7] },
              { vertex: [0, 0, 84.399] },
              { vertex: [0, 0, 88.9] },
            ],
            points2D: [
              { vertex: [146.46, -67.3] },
              { vertex: [950.38, -67.201] },
              { vertex: [950.38, -77.201] },
              { vertex: [950.38, -150.499] },
              { vertex: [146.46, -134.8] },
              { vertex: [146.46, -130.299] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [0, 0, 34.898] },
              { vertex: [522.187, 611.25, 30.298] },
              { vertex: [522.187, 611.25, 0] },
              { vertex: [0, 0, 6.899] },
            ],
            points2D: [
              { vertex: [146.46, -184.301] },
              { vertex: [950.38, -188.901] },
              { vertex: [950.38, -219.199] },
              { vertex: [146.46, -212.3] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [0, 0, 84.399] },
              { vertex: [522.187, 611.25, 68.7] },
              { vertex: [522.187, 611.25, 30.298] },
              { vertex: [0, 0, 34.898] },
            ],
            points2D: [
              { vertex: [146.46, -134.8] },
              { vertex: [950.38, -150.499] },
              { vertex: [950.38, -188.901] },
              { vertex: [146.46, -184.301] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [4, 4.5, 73.9] },
              { vertex: [88.375, 103.25, 67.319] },
              { vertex: [4, 4.5, 64.399] },
            ],
            points2D: [
              { vertex: [146.46, -145.299] },
              { vertex: [276.316, -151.88] },
              { vertex: [146.46, -154.8] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [522.187, 611.25, 163.7] },
              { vertex: [522.187, 611.25, 151.998] },
              { vertex: [0, 0, 151.899] },
              { vertex: [0, 0, 160.898] },
              { vertex: [84.875, 99.25, 164.957] },
            ],
            points2D: [
              { vertex: [950.38, -55.499] },
              { vertex: [277.126, -54.242] },
              { vertex: [146.46, -58.301] },
              { vertex: [146.46, -67.3] },
              { vertex: [950.38, -67.201] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [522.187, 611.25, 187.7] },
              { vertex: [522.187, 611.25, 163.7] },
              { vertex: [84.875, 99.25, 164.957] },
              { vertex: [0, 0, 170.898] },
              { vertex: [0, 0, 189.898] },
              { vertex: [110.187, 129, 192.496] },
            ],
            points2D: [
              { vertex: [950.38, -31.499] },
              { vertex: [316.037, -26.703] },
              { vertex: [146.46, -29.301] },
              { vertex: [146.46, -48.301] },
              { vertex: [277.126, -54.242] },
              { vertex: [950.38, -55.499] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [4, 4.5, 170.898] },
              { vertex: [88.875, 104, 164.957] },
              { vertex: [4, 4.5, 160.898] },
            ],
            points2D: [
              { vertex: [146.46, -48.301] },
              { vertex: [277.126, -54.242] },
              { vertex: [146.46, -58.301] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [0, 0, 206.899] },
              { vertex: [522.187, 611.25, 199.698] },
              { vertex: [522.187, 611.25, 187.7] },
              { vertex: [110.187, 129, 192.496] },
              { vertex: [0, 0, 195.898] },
            ],
            points2D: [
              { vertex: [146.46, -12.3] },
              { vertex: [950.38, -19.501] },
              { vertex: [950.38, -31.499] },
              { vertex: [316.037, -26.703] },
              { vertex: [146.46, -23.301] },
            ],
          },
          {
            symbol: "A-6",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [3.75, 4.25, 195.898] },
              { vertex: [113.937, 133.25, 192.496] },
              { vertex: [3.75, 4.25, 189.898] },
            ],
            points2D: [
              { vertex: [146.46, -23.301] },
              { vertex: [316.037, -26.703] },
              { vertex: [146.46, -29.301] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [514.937, 602.75, 199.698] },
              { vertex: [790.375, 925, 200.098] },
              { vertex: [790.375, 925, 176.099] },
              { vertex: [514.937, 602.75, 187.7] },
            ],
            points2D: [
              { vertex: [950.38, -19.501] },
              { vertex: [1374.372, -19.101] },
              { vertex: [1374.372, -43.1] },
              { vertex: [950.38, -31.499] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [514.937, 602.75, 187.7] },
              { vertex: [790.375, 925, 176.099] },
              { vertex: [790.375, 925, 147.099] },
              { vertex: [514.937, 602.75, 163.7] },
            ],
            points2D: [
              { vertex: [950.38, -31.499] },
              { vertex: [1374.372, -43.1] },
              { vertex: [1374.372, -72.1] },
              { vertex: [950.38, -55.499] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [514.937, 602.75, 163.7] },
              { vertex: [790.375, 925, 147.099] },
              { vertex: [790.375, 925, 138.799] },
              { vertex: [514.937, 602.75, 151.998] },
            ],
            points2D: [
              { vertex: [950.38, -55.499] },
              { vertex: [1374.372, -72.1] },
              { vertex: [1374.372, -80.4] },
              { vertex: [950.38, -67.201] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [514.937, 602.75, 151.998] },
              { vertex: [790.375, 925, 138.799] },
              { vertex: [790.375, 925, 90.098] },
              { vertex: [691.625, 809.5, 71.719] },
              { vertex: [514.937, 602.75, 68.7] },
            ],
            points2D: [
              { vertex: [950.38, -67.201] },
              { vertex: [1374.372, -80.4] },
              { vertex: [1374.372, -129.101] },
              { vertex: [1222.398, -147.48] },
              { vertex: [950.38, -150.499] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [788.75, 923.25, 90.098] },
              { vertex: [788.75, 923.25, 65.098] },
              { vertex: [690, 807.75, 71.719] },
            ],
            points2D: [
              { vertex: [1374.372, -129.101] },
              { vertex: [1222.398, -147.48] },
              { vertex: [1374.372, -154.101] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [514.937, 602.75, 68.7] },
              { vertex: [691.625, 809.5, 71.719] },
              { vertex: [790.375, 925, 65.098] },
              { vertex: [790.375, 925, 25.098] },
              { vertex: [514.937, 602.75, 30.298] },
            ],
            points2D: [
              { vertex: [950.38, -150.499] },
              { vertex: [1222.398, -147.48] },
              { vertex: [1374.372, -154.101] },
              { vertex: [1374.372, -194.101] },
              { vertex: [950.38, -188.901] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [514.937, 602.75, 30.298] },
              { vertex: [790.375, 925, 25.098] },
              { vertex: [790.375, 925, 15.6] },
              { vertex: [514.937, 602.75, 0] },
            ],
            points2D: [
              { vertex: [950.38, -188.901] },
              { vertex: [1374.372, -194.101] },
              { vertex: [1374.372, -203.599] },
              { vertex: [950.38, -219.199] },
            ],
          },
        ],
        groundWaterLines: [],
        boreholes: [
          {
            boreholeId: "2473d808-0e71-9c5d-d40f-3a0e79f41193",
            name: "B-63",
            x: 146.46,
            elevation: -12.3,
            depth: 200,
            waterDepth: null,
          },
          {
            boreholeId: "29f7c6a0-0112-1850-c2d2-3a0e79f41193",
            name: "B-59",
            x: 950.38,
            elevation: -19.5,
            depth: 199.7,
            waterDepth: null,
          },
          {
            boreholeId: "d796511b-75cd-39de-bc9f-3a0e79f41193",
            name: "B-58",
            x: 1374.372,
            elevation: -19.1,
            depth: 184.5,
            waterDepth: null,
          },
        ],
      },
      {
        sectionId: "id16984396474190.47940899542972226",
        sectionName: "Section A4",
        polygons: [],
        groundWaterLines: [],
        boreholes: [
          {
            boreholeId: "340d9f10-9774-0b6a-86ce-3a0e79f41193",
            name: "B-53",
            x: 0,
            elevation: 5.6,
            depth: 155,
            waterDepth: null,
          },
          {
            boreholeId: "d21781a4-1cb8-3d34-c912-3a0e79f41193",
            name: "B-56",
            x: 2185.05,
            elevation: -6.6,
            depth: 195,
            waterDepth: null,
          },
        ],
      },
      {
        sectionId: "id16987975557420.876097828965958",
        sectionName: "Section A5",
        polygons: [
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [4.063, 1045.25, 20.098] },
              { vertex: [2006.75, 654.25, 9.498] },
              { vertex: [2006.75, 654.25, 0] },
              { vertex: [4.063, 1045.25, 17.598] },
            ],
            points2D: [
              { vertex: [261.065, -183.501] },
              { vertex: [2301.589, -194.101] },
              { vertex: [2301.589, -203.599] },
              { vertex: [261.065, -186.001] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [4.063, 1045.25, 60.098] },
              { vertex: [2006.75, 654.25, 49.498] },
              { vertex: [2006.75, 654.25, 9.498] },
              { vertex: [4.063, 1045.25, 20.098] },
            ],
            points2D: [
              { vertex: [261.065, -143.501] },
              { vertex: [2301.589, -154.101] },
              { vertex: [2301.589, -194.101] },
              { vertex: [261.065, -183.501] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [4.063, 1045.25, 105.098] },
              { vertex: [2006.75, 654.25, 74.498] },
              { vertex: [2006.75, 654.25, 49.498] },
              { vertex: [4.063, 1045.25, 99.6] },
            ],
            points2D: [
              { vertex: [261.065, -98.501] },
              { vertex: [2301.589, -129.101] },
              { vertex: [2301.589, -154.101] },
              { vertex: [261.065, -103.999] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [4.063, 1045.25, 135.098] },
              { vertex: [2006.75, 654.25, 123.199] },
              { vertex: [2006.75, 654.25, 74.498] },
              { vertex: [4.063, 1045.25, 105.098] },
            ],
            points2D: [
              { vertex: [261.065, -68.501] },
              { vertex: [2301.589, -80.4] },
              { vertex: [2301.589, -129.101] },
              { vertex: [261.065, -98.501] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [4.063, 1045.25, 150.098] },
              { vertex: [2006.75, 654.25, 131.499] },
              { vertex: [2006.75, 654.25, 123.199] },
              { vertex: [4.063, 1045.25, 135.098] },
            ],
            points2D: [
              { vertex: [261.065, -53.501] },
              { vertex: [2301.589, -72.1] },
              { vertex: [2301.589, -80.4] },
              { vertex: [261.065, -68.501] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [4.063, 1045.25, 180.6] },
              { vertex: [2006.75, 654.25, 160.499] },
              { vertex: [2006.75, 654.25, 131.499] },
              { vertex: [4.063, 1045.25, 150.098] },
            ],
            points2D: [
              { vertex: [261.065, -22.999] },
              { vertex: [2301.589, -43.1] },
              { vertex: [2301.589, -72.1] },
              { vertex: [261.065, -53.501] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [4.063, 1045.25, 195.6] },
              { vertex: [585.5, 931.75, 192.434] },
              { vertex: [2006.75, 654.25, 184.498] },
              { vertex: [2006.75, 654.25, 160.499] },
              { vertex: [4.063, 1045.25, 180.6] },
            ],
            points2D: [
              { vertex: [261.065, -7.999] },
              { vertex: [853.497, -11.165] },
              { vertex: [2301.589, -19.101] },
              { vertex: [2301.589, -43.1] },
              { vertex: [261.065, -22.999] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [0, 1046, 207.598] },
              { vertex: [581.438, 932.5, 192.434] },
              { vertex: [0, 1046, 195.6] },
            ],
            points2D: [
              { vertex: [261.065, 3.999] },
              { vertex: [853.497, -11.165] },
              { vertex: [261.065, -7.999] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [4.063, 1045.25, 99.6] },
              { vertex: [2006.75, 654.25, 49.498] },
              { vertex: [4.063, 1045.25, 60.098] },
            ],
            points2D: [
              { vertex: [261.065, -103.999] },
              { vertex: [2301.589, -154.101] },
              { vertex: [261.065, -143.501] },
            ],
          },
          {
            symbol: "A-7",
            symbolDescription: "Clayey soil",
            color: "32cd32",
            points3D: [
              { vertex: [5351.625, 1.25, 57.198] },
              { vertex: [5351.625, 1.25, 55.2] },
              { vertex: [2021.938, 651.25, 9.498] },
              { vertex: [2021.938, 651.25, 49.498] },
            ],
            points2D: [
              { vertex: [5694.111, -146.401] },
              { vertex: [2301.589, -154.101] },
              { vertex: [2301.589, -194.101] },
              { vertex: [5694.111, -148.399] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [5351.625, 1.25, 66.699] },
              { vertex: [5351.625, 1.25, 57.198] },
              { vertex: [2021.938, 651.25, 49.498] },
            ],
            points2D: [
              { vertex: [5694.111, -136.9] },
              { vertex: [2301.589, -154.101] },
              { vertex: [5694.111, -146.401] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [2021.938, 651.25, 74.498] },
              { vertex: [4270.125, 212.25, 100.961] },
              { vertex: [5351.625, 1.25, 113.697] },
              { vertex: [5351.625, 1.25, 66.699] },
              { vertex: [2021.938, 651.25, 49.498] },
            ],
            points2D: [
              { vertex: [2301.589, -129.101] },
              { vertex: [4592.238, -102.638] },
              { vertex: [5694.111, -89.902] },
              { vertex: [5694.111, -136.9] },
              { vertex: [2301.589, -154.101] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [5358, 0, 121.699] },
              { vertex: [5358, 0, 113.697] },
              { vertex: [4276.563, 211, 100.961] },
            ],
            points2D: [
              { vertex: [5694.111, -81.9] },
              { vertex: [4592.238, -102.638] },
              { vertex: [5694.111, -89.902] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2021.938, 651.25, 123.199] },
              { vertex: [5351.625, 1.25, 127.7] },
              { vertex: [5351.625, 1.25, 121.699] },
              { vertex: [4270.125, 212.25, 100.961] },
              { vertex: [2021.938, 651.25, 74.498] },
            ],
            points2D: [
              { vertex: [2301.589, -80.4] },
              { vertex: [5694.111, -75.899] },
              { vertex: [5694.111, -81.9] },
              { vertex: [4592.238, -102.638] },
              { vertex: [2301.589, -129.101] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [2021.938, 651.25, 184.498] },
              { vertex: [5351.625, 1.25, 204.199] },
              { vertex: [5351.625, 1.25, 176.699] },
              { vertex: [2021.938, 651.25, 160.499] },
            ],
            points2D: [
              { vertex: [2301.589, -19.101] },
              { vertex: [5694.111, 0.6] },
              { vertex: [5694.111, -26.9] },
              { vertex: [2301.589, -43.1] },
            ],
          },
          {
            symbol: "A-2",
            symbolDescription: "Silty or clayey gravel and sand",
            color: "ffd700",
            points3D: [
              { vertex: [2021.938, 651.25, 160.499] },
              { vertex: [5351.625, 1.25, 176.699] },
              { vertex: [5351.625, 1.25, 161.699] },
              { vertex: [2021.938, 651.25, 131.499] },
            ],
            points2D: [
              { vertex: [2301.589, -43.1] },
              { vertex: [5694.111, -26.9] },
              { vertex: [5694.111, -41.9] },
              { vertex: [2301.589, -72.1] },
            ],
          },
          {
            symbol: "A-4",
            symbolDescription: "Silty soil",
            color: "ff6820",
            points3D: [
              { vertex: [2021.938, 651.25, 131.499] },
              { vertex: [5351.625, 1.25, 161.699] },
              { vertex: [5351.625, 1.25, 137.198] },
              { vertex: [2021.938, 651.25, 123.199] },
            ],
            points2D: [
              { vertex: [2301.589, -72.1] },
              { vertex: [5694.111, -41.9] },
              { vertex: [5694.111, -66.401] },
              { vertex: [2301.589, -80.4] },
            ],
          },
          {
            symbol: "A-3",
            symbolDescription: "Fine sand",
            color: "a52a00",
            points3D: [
              { vertex: [5351.688, 1.25, 137.198] },
              { vertex: [5351.688, 1.25, 127.7] },
              { vertex: [2052.813, 645.25, 123.156] },
            ],
            points2D: [
              { vertex: [5694.111, -66.401] },
              { vertex: [2332.959, -80.443] },
              { vertex: [5694.111, -75.899] },
            ],
          },
        ],
        groundWaterLines: [],
        boreholes: [
          {
            boreholeId: "8dd98629-4506-0081-74d9-3a0e79f41193",
            name: "B-66",
            x: 261.065,
            elevation: 4,
            depth: 190,
            waterDepth: null,
          },
          {
            boreholeId: "d796511b-75cd-39de-bc9f-3a0e79f41193",
            name: "B-58",
            x: 2301.589,
            elevation: -19.1,
            depth: 184.5,
            waterDepth: null,
          },
          {
            boreholeId: "340d9f10-9774-0b6a-86ce-3a0e79f41193",
            name: "B-53",
            x: 5719.112,
            elevation: 5.6,
            depth: 155,
            waterDepth: null,
          },
        ],
      },
    ],
  };

  // Populate the dropdown
  const dropdown = document.getElementById("sectionDropdown");
  verticesData.polygonsBySection.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionId;
    option.textContent = section.sectionName;
    dropdown.appendChild(option);
  });

  dropdown.addEventListener("change", (event) => {
    const selectedSectionName =
      event.target.options[event.target.selectedIndex].text;
    const points2D = getPoints2DBySectionName(selectedSectionName);
    draw2DShape(points2D);
  });

  // Set up the Three.js scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("canvasContainer").appendChild(renderer.domElement);
  renderer.setClearColor(0xffffff, 1); // Set background color to white

  // Resize the renderer when the window is resized
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  // Add light to the scene
  const light = new THREE.PointLight(0xffffff);
  light.position.set(50, 50, 50);
  scene.add(light);

  // Set up OrbitControls for zoom, rotate, and pan
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI / 2;

  function draw3DShape() {
    // Clear previous objects
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }

    // Add light and grid helper again
    scene.add(light);
    scene.add(gridHelper);

    const verticesArray = [];
    const facesArray = [];
    const colorsArray = [];
    let vertexIndex = 0;
    const scale = 0.1;

    verticesData.polygonsBySection.forEach((section) => {
      section.polygons.forEach((polygon) => {
        const sectionColor = new THREE.Color(`#${polygon.color}`); // Convert hex to THREE.Color
        const faceVertexIndices = [];

        polygon.points3D.forEach((point) => {
          const vertex = new THREE.Vector3(...point.vertex).multiplyScalar(
            scale
          );
          verticesArray.push(vertex.x, vertex.y, vertex.z);

          // Assign color for each point
          colorsArray.push(sectionColor.r, sectionColor.g, sectionColor.b);

          faceVertexIndices.push(vertexIndex++);
        });

        // Create faces for the polygon
        for (let i = 2; i < faceVertexIndices.length; i++) {
          facesArray.push(
            faceVertexIndices[0],
            faceVertexIndices[i - 1],
            faceVertexIndices[i]
          );
        }
      });
    });

    if (verticesArray.length > 0) {
      // Create geometry from collected vertices and faces
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(verticesArray), 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(colorsArray), 3)
      );
      geometry.setIndex(facesArray);

      // Create a material with vertex colors
      const material = new THREE.MeshBasicMaterial({
        vertexColors: true, // Enable per-vertex coloring
        side: THREE.DoubleSide, // Render both sides of the faces
      });

      // Create and add mesh
      const mesh = new THREE.Mesh(geometry, material);
      console.log("Mesh created:", mesh);
      mesh.scale.set(0.1, 0.1, 0.1);
      console.log("Mesh scale set to 0.1");
      scene.add(mesh);
    }

    camera.position.set(0, 50, 100);
    camera.lookAt(0, 0, 0);
  }
  // draw 3d shape with custom img for vertices
  //   function draw3DShape() {
  //     // Clear previous objects
  //     while (scene.children.length > 0) {
  //       scene.remove(scene.children[0]);
  //     }

  //     // Add light and grid helper again
  //     scene.add(light);
  //     scene.add(gridHelper);

  //     const verticesArray = [];
  //     const facesArray = [];
  //     const colorsArray = [];
  //     const pointsArray = [];
  //     const pointColorsArray = [];
  //     let vertexIndex = 0;
  //     const scale = 0.1; // Adjust this value to make the mesh smaller

  //     verticesData.polygonsBySection.forEach((section) => {
  //       section.polygons.forEach((polygon) => {
  //         const sectionColor = new THREE.Color(`#${polygon.color}`); // Convert hex to THREE.Color
  //         const faceVertexIndices = [];

  //         polygon.points3D.forEach((point) => {
  //           // Scale the vertex coordinates
  //           const vertex = new THREE.Vector3(...point.vertex).multiplyScalar(
  //             scale
  //           );
  //           verticesArray.push(vertex.x, vertex.y, vertex.z);

  //           // Assign color for each point
  //           colorsArray.push(sectionColor.r, sectionColor.g, sectionColor.b);

  //           faceVertexIndices.push(vertexIndex++);

  //           // Add points for the point cloud
  //           pointsArray.push(vertex.x, vertex.y, vertex.z);
  //           pointColorsArray.push(sectionColor.r, sectionColor.g, sectionColor.b);
  //         });

  //         // Create faces for the polygon
  //         for (let i = 2; i < faceVertexIndices.length; i++) {
  //           facesArray.push(
  //             faceVertexIndices[0],
  //             faceVertexIndices[i - 1],
  //             faceVertexIndices[i]
  //           );
  //         }
  //       });
  //     });

  //     if (verticesArray.length > 0) {
  //       // Create geometry from collected vertices and faces
  //       const geometry = new THREE.BufferGeometry();
  //       geometry.setAttribute(
  //         "position",
  //         new THREE.BufferAttribute(new Float32Array(verticesArray), 3)
  //       );
  //       geometry.setAttribute(
  //         "color",
  //         new THREE.BufferAttribute(new Float32Array(colorsArray), 3)
  //       );
  //       geometry.setIndex(facesArray);

  //       // Create a material with vertex colors
  //       const material = new THREE.MeshBasicMaterial({
  //         vertexColors: true, // Enable per-vertex coloring
  //         side: THREE.DoubleSide, // Render both sides of the faces
  //       });

  //       // Create and add mesh
  //       const mesh = new THREE.Mesh(geometry, material);
  //       mesh.scale.set(0.1, 0.1, 0.1);
  //       scene.add(mesh);
  //     }

  //     if (pointsArray.length > 0) {
  //       // Create geometry from collected points
  //       const pointsGeometry = new THREE.BufferGeometry();
  //       pointsGeometry.setAttribute(
  //         "position",
  //         new THREE.BufferAttribute(new Float32Array(pointsArray), 3)
  //       );
  //       pointsGeometry.setAttribute(
  //         "color",
  //         new THREE.BufferAttribute(new Float32Array(pointColorsArray), 3)
  //       );

  //       // Create a material with vertex colors
  //       const pointsMaterial = new THREE.PointsMaterial({
  //         vertexColors: true, // Enable per-vertex coloring
  //         size: 10, // Adjust point size
  //       });

  //       // Create and add point cloud
  //       const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
  //       scene.add(pointsMesh);
  //     }

  //     camera.position.set(0, 50, 100);
  //     camera.lookAt(0, 0, 0);
  //   }
  //   function draw3DShape() {
  //     // Clear previous objects
  //     while (scene.children.length > 0) {
  //       scene.remove(scene.children[0]);
  //     }

  //     // Add light and grid helper again
  //     scene.add(light);
  //     scene.add(gridHelper);

  //     const verticesArray = [];
  //     const facesArray = [];
  //     const colorsArray = [];
  //     const pointsArray = [];
  //     const pointColorsArray = [];
  //     let vertexIndex = 0;
  //     const scale = 0.1; // Adjust this value to make the mesh smaller

  //     verticesData.polygonsBySection.forEach((section) => {
  //       section.polygons.forEach((polygon) => {
  //         const sectionColor = new THREE.Color(`#${polygon.color}`); // Convert hex to THREE.Color
  //         const faceVertexIndices = [];

  //         polygon.points3D.forEach((point) => {
  //           // Scale the vertex coordinates
  //           const vertex = new THREE.Vector3(...point.vertex).multiplyScalar(
  //             scale
  //           );
  //           verticesArray.push(vertex.x, vertex.y, vertex.z);

  //           // Assign color for each point
  //           colorsArray.push(sectionColor.r, sectionColor.g, sectionColor.b);

  //           faceVertexIndices.push(vertexIndex++);

  //           // Add points for the point cloud
  //           pointsArray.push(vertex.x, vertex.y, vertex.z);
  //           pointColorsArray.push(sectionColor.r, sectionColor.g, sectionColor.b);
  //         });

  //         // Create faces for the polygon
  //         for (let i = 2; i < faceVertexIndices.length; i++) {
  //           facesArray.push(
  //             faceVertexIndices[0],
  //             faceVertexIndices[i - 1],
  //             faceVertexIndices[i]
  //           );
  //         }
  //       });
  //     });

  //     if (verticesArray.length > 0) {
  //       // Create geometry from collected vertices and faces
  //       const geometry = new THREE.BufferGeometry();
  //       geometry.setAttribute(
  //         "position",
  //         new THREE.BufferAttribute(new Float32Array(verticesArray), 3)
  //       );
  //       geometry.setAttribute(
  //         "color",
  //         new THREE.BufferAttribute(new Float32Array(colorsArray), 3)
  //       );
  //       geometry.setIndex(facesArray);

  //       // Create a material with vertex colors
  //       const material = new THREE.MeshBasicMaterial({
  //         vertexColors: true, // Enable per-vertex coloring
  //         side: THREE.DoubleSide, // Render both sides of the faces
  //       });

  //       // Create and add mesh
  //       const mesh = new THREE.Mesh(geometry, material);
  //       scene.add(mesh);
  //     }

  //     if (pointsArray.length > 0) {
  //       // Load the custom image texture
  //       const textureLoader = new THREE.TextureLoader();
  //       textureLoader.load("./image.png", (texture) => {
  //         texture.minFilter = THREE.LinearFilter;
  //         texture.magFilter = THREE.LinearFilter;
  //         texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  //         // Create geometry from collected points
  //         const pointsGeometry = new THREE.BufferGeometry();
  //         pointsGeometry.setAttribute(
  //           "position",
  //           new THREE.BufferAttribute(new Float32Array(pointsArray), 3)
  //         );
  //         pointsGeometry.setAttribute(
  //           "color",
  //           new THREE.BufferAttribute(new Float32Array(pointColorsArray), 3)
  //         );

  //         // Create a material with vertex colors and custom texture
  //         const pointsMaterial = new THREE.PointsMaterial({
  //           vertexColors: true, // Enable per-vertex coloring
  //           size: 5, // Adjust point size
  //           map: texture, // Apply the custom image texture
  //           transparent: true, // Enable transparency
  //         });

  //         // Create and add point cloud
  //         const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
  //         scene.add(pointsMesh);
  //       });
  //     }

  //     camera.position.set(0, 50, 100);
  //     camera.lookAt(0, 0, 0);
  //   }

  function getPoints2DBySectionName(
    sectionName = verticesData.polygonsBySection[0].sectionName
  ) {
    console.log("default section name", sectionName);

    // Find the section based on the sectionName
    const section = verticesData.polygonsBySection.find(
      (sec) => sec.sectionName === sectionName
    );

    // If section is found, return points2D along with the color and polygon details
    if (section) {
      return section.polygons.map((polygon) => ({
        sectionName: section.sectionName,
        color: polygon.color,
        points2D: polygon.points2D,
        symbol: polygon.symbol,
        symbolDescription: polygon.symbolDescription,
      }));
    }

    // Return empty array if section is not found
    return [];
  }

  window.onload = function exampleFunction() {
    console.log("The Script will load now.");
    draw2DShape(getPoints2DBySectionName());
    draw3DShape();
  };

  function draw2DShape(points2DBySection) {
    // Clear previous SVG elements
    d3.select("#svgContainer").selectAll("*").remove();

    // Create SVG container
    const svg = d3
      .select("#svgContainer")
      .append("svg")
      .attr("width", 900)
      .attr("height", 700)
      .call(d3.zoom().on("zoom", zoomed));
    const g = svg.append("g");

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    // Define scales
    const xScale = d3
      .scaleLinear()
      .domain(
        d3.extent(
          points2DBySection.flatMap((sec) =>
            sec.points2D.flatMap((p) => p.vertex[0])
          )
        )
      )
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain(
        d3.extent(
          points2DBySection.flatMap((sec) =>
            sec.points2D.flatMap((p) => p.vertex[1])
          )
        )
      )
      .range([height - margin.bottom, margin.top]);

    // Create axes
    const xAxis = g
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));
    const yAxis = g
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));
    // Draw grid lines
    function createGrid(g, width, height, xScale, yScale) {
      const xGrid = d3.axisBottom(xScale).tickSize(-height).tickFormat("");
      const yGrid = d3.axisLeft(yScale).tickSize(-width).tickFormat("");

      g.append("g")
        .attr("class", "x-grid")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(xGrid)
        .selectAll("line")
        .attr("stroke", "lightgrey");

      g.append("g")
        .attr("class", "y-grid")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yGrid)
        .selectAll("line")
        .attr("stroke", "lightgrey");
    }

    // Call the grid function
    createGrid(g, width, height, xScale, yScale);

    // Tooltip for displaying the symbolDescription
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "1px solid black")
      .style("padding", "5px")
      .style("display", "none");
    // Draw polygons with colors
    points2DBySection.forEach((section) => {
      const { color, points2D, sectionName, symbol, symbolDescription } =
        section;

      const lineGenerator = d3
        .line()
        .x((d) => xScale(d.vertex[0]))
        .y((d) => yScale(d.vertex[1]));

      g.append("path")
        .datum(points2D)
        .attr("d", lineGenerator)
        .attr("fill", `#${color}`) // Ensure color is applied with a hash for hex format
        .attr("stroke", "black") // Set border color for the polygon
        .attr("class", "polygon")
        .attr("data-section", sectionName)
        .on("click", (event, d) => {
          event.stopPropagation();

          d3.selectAll(".polygon")
            .attr("stroke", "black")
            .attr("stroke-width", 1); // Reset all strokes
          d3.select(event.target).attr("stroke", "red").attr("stroke-width", 3); // Highlight selected polygon
          tooltip
            .style("display", "block")
            .html(
              `Symbol: ${symbol}<br>Symbol description: ${symbolDescription}<br>Color: ${color}`
            )
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY + 10}px`);
        })
        .on("mouseout", (event, d) => {
          // Hide the tooltip when the mouse leaves the polygon
          tooltip.style("display", "none");
        });
    });
    // If user clicks outside of any polygon, reset all polygon styling and hide tooltip
    svg.on("click", (event) => {
      if (!d3.select(event.target).classed("polygon")) {
        d3.selectAll(".polygon")
          .attr("stroke", "black")
          .attr("stroke-width", 1);
        tooltip.style("display", "none");
      }
    });

    // Zoom and pan event handler
    function zoomed(event) {
      // Compute new scales based on the zoom transform
      const newXScale = event.transform.rescaleX(xScale);
      const newYScale = event.transform.rescaleY(yScale);

      // Update the axes using the new scales
      xAxis.call(d3.axisBottom(newXScale));
      yAxis.call(d3.axisLeft(newYScale));

      // Update grid lines to reflect the new scales
      g.select(".x-grid")
        .call(d3.axisBottom(newXScale).tickSize(-height).tickFormat(""))
        .selectAll("line")
        .attr("stroke", "lightgrey");

      g.select(".y-grid")
        .call(d3.axisLeft(newYScale).tickSize(-width).tickFormat(""))
        .selectAll("line")
        .attr("stroke", "lightgrey");

      // Redraw each polygon's path using the updated scales so their shapes change accordingly
      d3.selectAll(".polygon").attr("d", function (d) {
        // Create a new line generator for this zoom state
        return d3
          .line()
          .x(function (p) {
            return newXScale(p.vertex[0]);
          })
          .y(function (p) {
            return newYScale(p.vertex[1]);
          })(d);
      });
    }
  }

  // Add a grid helper to the scene
  const gridSize = 1000;
  const gridDivisions = 100;
  const gridHelper = new THREE.GridHelper(gridSize, gridDivisions);
  scene.add(gridHelper);

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
});
