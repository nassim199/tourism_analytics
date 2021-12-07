let serveur = 'http://127.0.0.1:5500/'

function unpack(rows, key) {
  return rows.map(function (row) { return row[key]; });
}

d3.csv(serveur + 'annees.csv', function (rows) {
  // -----------------------------
  let chartConfig = {
    type: 'line',
    title: {
      text: 'Flux des touristes au cours des années',
      adjustLayout: true
    },
    legend: {
      adjustLayout: true,
      align: 'center',
      verticalAlign: 'bottom',
      fontSize:'20px',
      fontFamily:'Open sans',
    },
    plot: {
      valueBox: {
        text: '%v'
      }
    },
    plotarea: {
      margin: 'dynamic 50 dynamic dynamic'
    },
    scaleX: {
      labels: unpack(rows, '')
    },
    scaleY: {
      guide: {
        lineStyle: 'solid'
      },
      label: {
        text: 'Nombre de touristes'
      }
    },
    crosshairX: {
      exact: true,
      lineColor: '#000',
      marker: {
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: '2px',
        size: '5px'
      },
      scaleLabel: {
        borderRadius: '2px'
      }
    },
    tooltip: {
      text: '%v<br>%kl',
      borderRadius: '2px'
    },
    series: [
      {
        values: unpack(rows, 'westminster').map(el => parseInt(el)),
        lineColor: '#123456',
        marker: {
          backgroundColor: '#123456'
        },
        text:'Westminster Abbey',
      },
      {
        values: unpack(rows, 'cordoue').map(el => parseInt(el)),
        lineColor: '#BC4676',
        marker: {
          backgroundColor: '#BC4676'
        },
        text:'Catherale de Cordoue'
      },
      {
        values: unpack(rows, 'camino').map(el => parseInt(el)),
        lineColor: '#9e9e9e',
        marker: {
          backgroundColor: '#9e9e9e'
        },
        text:'saint-jaques de compostelle'
      }
    ]
  };

  // RENDER CHARTS
  // -----------------------------
  zingchart.render({
    id: 'flux_annees',
    data: chartConfig,
    height: '99%',
    align : 'center'
  });
});


d3.csv(serveur + 'engagements.csv', function (rows) {
  var myConfig = {
    type: "bar",
    title: {
      text: 'Taux d\'engagement par site',
      adjustLayout: true
    },
    series: [{
      values: unpack(rows, 'Tauxengagement').map(el => parseFloat(el)),
      backgroundColor:'#123456'
    }
    ],
    'scale-x': {
      labels: unpack(rows, 'query'),
      item: {
        fontAngle: 20,
        offsetX: '-20px'
      }
    }
  };

  zingchart.render({
    id: 'engagement',
    data: myConfig,
    height: "99%",
    width: "100%"
  });
  myConfig = {
    type: "bar",
    title: {
      text: 'Nombre de J\'aime/Commentaire par site',
      adjustLayout: true
    },
    legend: {
      adjustLayout: true,
      align: 'Left',
      verticalAlign: 'middle'
    },
    series: [{
      values: unpack(rows, 'likeCount').map(el => parseFloat(el)),
      text:'J\'aime',
      backgroundColor :'#123456',
    },
    {
      values: unpack(rows, 'commentCount').map(el => parseFloat(el)),
      text:'Commentaire',
      backgroundColor:'#BC4676',
    }
    ],
    'scale-x': {
      labels: unpack(rows, 'query'),
      item: {
        fontAngle: 20,
        offsetX: '-20px'
      }
    }
  };

  zingchart.render({
    id: 'like_comment',
    data: myConfig,
    height: "99%",
    width: "100%"
  });

});


d3.csv(
  serveur + "Type.csv",
  function (err, rows) {
    var myConfig = {
          type: 'pie', /* Specify your chart type. */
          title: {
            text: 'Pourcentage par type de visite -Westminster Abbey-',
            adjustLayout: true
          },
          plot: {

            valueBox: {
              text: '%t\n%npv%',
              fontFamily: 'Open Sans',
              placement: 'out',
              fontSize: '15px'
            },
            animation: {
              effect: 'ANIMATION_EXPAND_VERTICAL',
              method: 'ANIMATION_REGULAR_EASE_OUT',
              sequence: 'ANIMATION_BY_PLOT',
              speed: 500
            },
          },
          series: rows.map((row,i) => {
            let colors = [
              '#123456',
              '#9e9e9e',
              '#BC4676',
              '#6877e5',
              '#6FB07F'
            ]
            return {
              text: row[''],
              values: [parseInt(row['westminster'])],
              backgroundColor : colors[i]
            }
          })
        };
    zingchart.render({
      id: 'type',
      data: myConfig,
      height: '99%',
      width: '100%',
    });
    myConfig ={
        title: {
          text: 'Pourcentage par type de visite -Catherale de Cordoue-',
          adjustLayout: true
        },
        type: 'pie',
        plot: {

          valueBox: {
            text: '%t\n%npv%',
            fontFamily: 'Open Sans',
            placement: 'out',
            fontSize: '15px'
          },
          animation: {
            effect: 'ANIMATION_EXPAND_VERTICAL',
            method: 'ANIMATION_REGULAR_EASE_OUT',
            sequence: 'ANIMATION_BY_PLOT',
            speed: 500
          },
        },
        series: rows.map((row,i) => {
          let colors = [
            '#123456',
            '#9e9e9e',
            '#BC4676',
            '#6877e5',
            '#6FB07F'
          ]
          return {
            text: row[''],
            values: [parseInt(row['cordoue'])],
            backgroundColor : colors[i]
          }
        })
      };
      zingchart.render({
        id: 'type2',
        data: myConfig,
        height: '99%',
        width: '100%',
      });

      
    myConfig ={
      type: 'pie',
      title: {
        text: 'Pourcentage par type de visite -saint jaques de compostelle-',
        adjustLayout: true
      },
      plot: {

        valueBox: {
          text: '%t\n%npv%',
          fontFamily: 'Open Sans',
          placement: 'out',
          fontSize: '15px'
        },
        animation: {
          effect: 'ANIMATION_EXPAND_VERTICAL',
          method: 'ANIMATION_REGULAR_EASE_OUT',
          sequence: 'ANIMATION_BY_PLOT',
          speed: 500
        },
      },
      
    
      series: rows.map((row,i) => {
        let colors = [
          '#123456',
          '#9e9e9e',
          '#BC4676',
          '#6877e5',
          '#6FB07F'
        ]
        return {
          text: row[''],
          values: [parseInt(row['camino'])],
          backgroundColor : colors[i]
        }
      })
    };
    zingchart.render({
      id: 'type3',
      data: myConfig,
      height: '99%',
      width: '100%',
    });
    }
    );


d3.csv(
  serveur + "chemins.csv",
  function (err, rows) {
    colors = [
      '#50ADF5',
      '#FF7965',
      '#FFCB45',
      '#6877e5',
      '#6FB07F',
      '#FF7965'
    ]

    lignes = [
      [43.01,      -1.32,  42.4582,      -2.4446, 'camino frances', '#123456' ],
      [42.4582,      -2.4446,  42.34228,      -3.7, 'camino frances', '#123456' ],
      [42.34228,      -3.7,  42.605556,      -5.57, 'camino frances', '#123456' ],
      [42.605556,      -5.57,  42.7077,      -7.044, 'camino frances', '#123456' ],
      [42.7077,      -7.044,  42.878212,  -8.544844,    'camino frances', '#123456'],
      [  43.1033,  -9.2172,  42.878212,  -8.544844,   'camino finisterre', '#09c4ff'],
      [  37.392529,  -5.994072,  39.475276,  -6.372425,   'via de la plata', '#ff3300'],
      [  39.475276,  -6.372425,     40.965,   -5.66305,   'via de la plata', '#ff3300'],
      [     40.965,   -5.66305,  42.878212,  -8.544844,   'via de la plata', '#ff3300'],
      [    38.7075,  -9.136389,    40.2056,    -8.4196,  'camino portugues', '#BC4676'],
      [    40.2056,    -8.4196,    42.7374,     -8.66,  'camino portugues', '#BC4676'],
      [    42.7374,     -8.66,  42.878212,  -8.544844,  'camino portugues', '#BC4676'],
      [  43.3037,  -1.985,   43.5332,  -5.6585,  'camino del norte', '#6877e5'],
      [  43.5332,  -5.6585,   43.5344,  -7.0402,  'camino del norte', '#6877e5'],
      [  43.5344,  -7.0402,  42.878212,  -8.544844,  'camino del norte', '#6877e5'],
      [   43.3632,    -5.8473,  43.0129,    -7.56,  'camino primitivo', '#6FB07F'],
      [   43.0129,    -7.56,  42.878212,  -8.544844,  'camino primitivo', '#6FB07F'],
      [ 43.466667,      -8.25,  42.878212,  -8.544844,     'camino ingles', '#FF7965']
    ]
    function get_perp(C, A, B){
      // var A = { lat:33.345678, lng:-117.518921 };
      // var B = { lat:33.100678, lng:-117.318492 };
  
      t = ((C.lat-A.lat)*(B.lat-A.lat)+(C.lng-A.lng)*(B.lng-A.lng))/((B.lat-A.lat)*(B.lat-A.lat)+(B.lng-A.lng)*(B.lng-A.lng));
  
      var D = { lat:0,lng:0};
      D.lat = A.lat + t*(B.lat-A.lat);
      D.lng = A.lng + t*(B.lng-A.lng);
  
      return D;
  }
  function rad(deg) {
    return deg * (Math.PI/180)
  }

  var getDistance = function(p1, p2) {
  
    var R = 6378137; // Earth’s mean radius in meters
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
  
    return Math.round(d); // returns the distance in meters
  };

  function get_distance(C, A, B) {
    let D = get_perp(C, A, B)
    let l = getDistance(A, B)
    let l1 = getDistance(A, D)
    let l2 = getDistance(B, D)
    if (l1 < l && l2 < l)
      return getDistance(C, D)
    else return Number.POSITIVE_INFINITY
  }

  
function findPath(C) {
  let min = null
  let minI = -1
  lignes.forEach((l,i) => {
    let A = { lat:l[0], lng:l[1] }
    let B = { lat:l[2], lng:l[3] }
    let d = get_distance(C, A, B)

    if (!min || d<min) {
      min = d;
      minI = i;
    }
  });

  return {color: lignes[minI][5], d: min}
}
    // CHART CONFIG
    // -----------------------------
    var myConfig = {
      "shapes": [
        {  
          "type": "zingchart.maps",
          "options": {
            "name": "world.countries",
            "groups": ['EUROPE'],
            "scrolling": false,
            "zoom": 5,
            "offsetX": 550,
            "offsetY": -900,
            "style": {
              "label": {
                "visible": false
              }
            }
          }
        },

      ]

    };

    rows.forEach((row, i) => {
      let path = findPath({lat: parseFloat(row["lat"]), lng: parseFloat(row["long"])})
      if (path['d'] > 25000) return
      let a = {
        "type": "circle", // shapeid is OPTIONAL but smart if you are targeting events to this shape
        "id": i.toString(),
        "x": row["long"] + "lon", // hook shape based on lon/lat
        "y": row["lat"] + "lat",   // hook shape based on lon/lat
        "map": "world-countries", // assigning to map name or id is necessary
        "size": 1.5,
        "background-color": path['color'],
        "cursor": "pointer",
      }
      myConfig["shapes"].push(a)
    })
    
    // RENDER CHARTS
    // -----------------------------
    zingchart.loadModules('maps, maps-world-countries', function () {
      zingchart.render({
        id: 'Camino',
        data: myConfig,
        height: '95%',
        width: '100%'
      });
    });
  }
);

d3.csv(
  serveur + "chemin_pourcentage.csv",
  function (err, rows) {
    // CHART CONFIG
    // -----------------------------
    let chartConfig = {
      type: 'pie',
      title: {
        text: 'Pourcentage des chemins empruntes',
        align: 'top',
        fontColor: '#fff',
        fontFamily: 'Open Sans',
        fontSize: '25px',
        offsetX: '10px',
      },
      plot: {
        tooltip: {
          text: '%npv%',
          padding: '5 10',
          fontFamily: 'Open Sans',
          fontSize: '18px'
        },
        valueBox: {
          text: '%t\n%npv%',
          fontFamily: 'Open Sans',
          fontSize:'12px'
         // placement: 'out'
        },
        animation: {
          effect: 'ANIMATION_EXPAND_VERTICAL',
          method: 'ANIMATION_REGULAR_EASE_OUT',
          sequence: 'ANIMATION_BY_PLOT',
          speed: 500
        },
      },
      plotarea: {
        margin: '20 0 0 0'
      },
      series: []
    };

    colors = [
      '#123456',
      '#BC4676',
      '#09c4ff',
      '#6FB07F',
      '#6877e5',
      '#FF7965'
    ]
    let series = []
    rows.forEach((row, i) => {
      series.push({
        text: row['chemin'],
        values: [parseInt(row['nombre_marcheurs'])],
        backgroundColor: colors[i]
      })
    })

    chartConfig['series'] = series

    // RENDER CHARTS
    // -----------------------------
    zingchart.render({
      id: 'CaminoPrc',
      data: chartConfig,
      height: '95%',
      width: '100%',
    });

  });

afficherWordCloud("CaminoDfMostUsedWord.csv", "camino_wordcloud")
afficherWordCloud("WestminsterDfMostUsedWord.csv", "westminster_wordcloud")
afficherWordCloud("CordouDfMostUsedWord.csv", "cordoue_wordcloud")
function afficherWordCloud(site, elementId) {
  d3.csv(serveur + site, function (err, rows) {

    var myConfig = {
      title: {
        text: 'Mots les plus utilisés -' + site +'-',
        backgroundColor:'#123456',
        align: 'bottom'
      },
      "graphset": [{
        "type": "wordcloud",
        "options": {
          "style": {
            "tooltip": {
              visible: true,
              text: '%text: %hits'
            }
          },
          "words": []
        }
      }]
    };

    let words = []
    rows.slice(0, 30).forEach((row, i) => {
      let a = {
        "text": row['Word'],
        "count": row['Frequency'],
      };
      words.push(a)

    });
    myConfig['graphset'][0]['options']['words'] = words
    zingchart.render({
      id: elementId,
      data: myConfig,
      height: '100%',
      width: '100%'
    });
  });
}

afficherSentiments('WestminsterSentiment')
afficherSentiments('CordoueSentiment')
afficherSentiments('CaminoSentiment')

function afficherSentiments(site) {
d3.csv(serveur + `${site}.csv`, function (rows) {
  var myConfig = {
    type: 'pie', /* Specify your chart type. */
    plot: {
      valueBox: {
        text: '%t\n%npv%',
        fontFamily: 'Open Sans',
        placement: 'out',
        fontSize: '15px'
      },
      animation: {
        effect: 'ANIMATION_EXPAND_VERTICAL',
        method: 'ANIMATION_REGULAR_EASE_OUT',
        sequence: 'ANIMATION_BY_PLOT',
        speed: 500
      },
    },
    series: rows.map(row => {
      return {
        text: row[''],
        values: [parseInt(row['Sentiment'])]
      }
    })
  };

  zingchart.render({
    id: site,
    data: myConfig,
    height: "90%",
    width: "100%"
  });
});

}

afficherFlux("geo_camino.csv", "camino_flux", "cathedrale saint-jaques de compostelle")
afficherFlux("geo_cordoba.csv", "cordoue_flux", "mosquee-catherale de cordoue")
afficherFlux("geo_westminster.csv", "westminster_flux", "abbaye de westminster")
function afficherFlux(site, elementId, nomSite) {
  d3.csv(serveur + site, function (err, rows) {

    // CHART CONFIG
    // -----------------------------
    let chartConfig = {
      title: {
        text: 'Flux des origines des touristes ' + nomSite,
        align: 'center',
        fontFamily:'Montserrat',
        fontSize: '24px',
        color:'#123456'
      },
      shapes: [
        {
          type: 'zingchart.maps',
          options: {
            name: 'world.countries',
            style: {
              tooltip: {
                backgroundColor: '#ff9800',
                borderWidth: '0px',
                fontColor: '#FFF',
                fontSize: '18px'
              },
              controls: {
                placement: 'br'
              },
              backgroundColor: '#9e9e9e',
              hoverState: {
                visible: false
              },
              items: {
                _HB: {
                  backgroundColor: '#00AE4D'
                }
              },
              label: {
                fontSize: '0px',
                visible: false
              }
      
            }
          }
        }
      ]
    };

    // DEFINE DATA
    // -----------------------------
    // example format of data for cities
    let oCities = {

    };

    rows.slice(0,20).forEach((row, i) => {
      let a = {
        iPopulation: parseInt(row['User']),
        sPopulation: row['User'],
        latitude: row['long'],
        longitude: row['lat'],
        name: row['pays'],
        x: '0px',
        y: '0px'
      };
      oCities[row['pays']] = a;

    });
    let total = rows.reduce((t, row) => t += parseInt(row['User']), 0)

    let defaultColor = '#4682B4';

    function drawCity(city) {
      return {
        type: 'circle',
        id: city,
        tooltip: {
          text: buildTooltipText(city),
          padding: '10px',
          backgroundColor: '#FFF',
          borderColor: (oCities[city].color) ? oCities[city].color : defaultColor,
          borderRadius: '5px',
          borderWidth: '2px',
          fontSize: '14px',
          textAlign: 'left'
        },
        alpha: .6,
        backgroundColor: (oCities[city].color) ? oCities[city].color : defaultColor,
        borderWidth: '3px',
        borderColor: 'none',
        hoverState: {
          alpha: .1,
          borderAlpha: 1,
          borderColor: (oCities[city].color) ? oCities[city].color : defaultColor,
          size: calculateCircleSize(oCities[city].iPopulation) + 2
        },
        map: 'world-countries',
        size: calculateCircleSize(oCities[city].iPopulation),
        x: oCities[city].x,
        y: oCities[city].y
      }
    }

    /**
     * Code below calculates bubble size
     */
    function buildTooltipText(city) {
      return '<b>Nombre de touristes</b><br>  ' + oCities[city].name + ': ' + oCities[city].sPopulation + '(' + Math.ceil(oCities[city].iPopulation*10000 / total)/100 + '% )';
    }

    function calculateCircleSize(population) {
      let range = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45];
      let domain = generateDomain('quantize', [30, 1000], range);
      let keyValue = quantize(population, domain, range);
      return keyValue.range;
    }

    function leftOrRight(value, left, right) {
      let leftDiff = Math.abs(value - left);
      let rightDiff = Math.abs(value - right);
      return leftDiff < rightDiff ? true : false;
    }

    function isBetween(value, left, right) {
      return value > left && value < right;
    }

    function quantizeIndex(value, scale) {
      let first = scale[0];
      let last = scale[scale.length - 1];
      for (let i = 0; i < scale.length; i++) {
        if (value <= first) {
          return 0;
        }
        else if (value >= last) {
          return scale.length - 1;
        }
        else if (i < scale.length - 1) {
          if (value == scale[i]) {
            return i;
          }
          else {
            let current = scale[i];
            let next = scale[i + 1];
            if (isBetween(value, current, next)) {
              return leftOrRight(value, current, next) ? i : i + 1;
            }
          }
        }
      }
    }

    // define mix max for domain
    function quantize(value, domain, range) {
      let index = quantizeIndex(value, domain);
      return {
        range: range[index],
        domain: domain[index]
      }
    }

    function quantizeDomain(aDomain, aRange) {
      let iMin = aDomain[0];
      let iMax = aDomain[1];
      let iSlope = (iMax - iMin) / (aRange.length - 1);
      let aScale = [];
      for (let i = 0; i < aRange.length; i++) {
        aScale[i] = (iSlope * i + iMin);
      }
      return aScale;
    }

    function generateDomain(sType, aDomain, aRange) {
      let aScale = aDomain;
      if (sType == 'quantize') {
        aScale = quantizeDomain(aDomain, aRange)
      }
      return aScale;
    }

    for (let city in oCities) {
      // save xy position
      oCities[city].x = oCities[city].longitude + 'lon';
      oCities[city].y = oCities[city].latitude + 'lat';
      chartConfig.shapes.push(drawCity(city));
    }


    // RENDER CHARTS
    // -----------------------------
    zingchart.loadModules('maps,maps-world-countries');
    zingchart.render({
      id: elementId,
      data: chartConfig,
      
      height: '100%',
      width: '100%'
    });

  });
}