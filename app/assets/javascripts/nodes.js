var nodes = [
  {id: "1", label: 'Floria', group: 'center'},
  {id: "d1", label: 'Anthocerotophyta', group: 'division'},
  {id: "d2", label: 'Bryophyta', group: 'division'},
  {id: "d3", label: 'Coniferophyta', group: 'division'},
  {id: "d4", label: 'Lycopodiophyta', group: 'division'},
  {id: "d1c1", label: 'Anthocerotopsida', group: 'class'},
  {id: "d1c1o1", label: 'Anthocerotales', group: 'order'},
  {id: "d1c1o1f1", label: 'Anthocerotaceae', group: 'family'},
  {id: "d1c1o1f1g1", label: 'Anthoceros', group: 'genus'},
  {id: "d1c1o1f1g2", label: 'Phaeoceros', group: 'genus'},
  {id: "d1c1o1f1g1s1", label: 'Anthoceros agrestis Paton', group: 'species'},
  {id: "d1c1o1f1g1s2", label: 'Anthoceros punctatus L. ns. str.', group: 'species'},
  {id: "d1c1o1f1g2s1", label: 'Phaeoceros carolinianus (Michx.) Prosk.', group: 'species'},
  {id: "d1c1o1f1g2s2", label: 'Phaeoceros laevis (L.) Prosk.', group: 'species'},
];

// create an array with edges
var edges = [
  {from: "1", to: "d1"},
  {from: "1", to: "d2"},
  {from: "1", to: "d3"},
  {from: "1", to: "d4"},
  {from: "d1", to: "d1c1"},
  {from: "d1c1", to: "d1c1o1"},
  {from: "d1c1o1", to: "d1c1o1f1"},
  {from: "d1c1o1f1", to: "d1c1o1f1g1"},
  {from: "d1c1o1f1", to: "d1c1o1f1g2"},
  {from: "d1c1o1f1g1", to: "d1c1o1f1g1s1"},
  {from: "d1c1o1f1g1", to: "d1c1o1f1g1s2"},
  {from: "d1c1o1f1g2", to: "d1c1o1f1g2s1"},
  {from: "d1c1o1f1g2", to: "d1c1o1f1g2s2"},
  
  
  ];

var options = {

  nodes: {
    // default for all nodes
    fontFace: 'times',
    shape: 'circle',
    color: {
      border: 'orange',
      background: 'green',
      highlight: {
        border: 'darkorange',
        background: 'gold'
      },
    },
  },
  groups: {
    center: {
      // defaults for nodes in this group
      //fontColor: 'white',
      fontFace: 'courier',
      fontSize: 32,
      shape: 'circle',
      color: {
        border: 'red',
        background: 'brown',
        highlight: {
          border: 'darkorange',
          background: 'gold',
        },
      },
    },

    division: {
      fontSize: 14,
      fontFace: 'courier',
      shape: 'ellipse',
      color: {
        border: 'red',
        background: 'gray',
        highlight: {
          border: 'darkorange',
          background: 'gold',
        },
      },
    },

    class: {
      fontSize: 14,
      fontFace: 'courier',
      shape: 'ellipse',
      color: {
        border: 'red',
        background: 'peru',
        highlight: {
          border: 'darkorange',
          background: 'gold',
        },
      },
    },

    order: {
      fontSize: 14,
      fontFace: 'courier',
      shape: 'ellipse',
      color: {
        border: 'red',
        background: 'skyblue',
        highlight: {
          border: 'darkorange',
          background: 'gold',
        },
      },
    },

    family: {
      fontSize: 14,
      fontFace: 'courier',
      shape: 'ellipse',
      color: {
        border: 'red',
        background: 'cyan',
        highlight: {
          border: 'darkorange',
          background: 'gold',
        },
      },
    },

    genus: {
      fontSize: 14,
      fontFace: 'courier',
      shape: 'ellipse',
      color: {
        border: 'red',
        background: 'aquamarine',
        highlight: {
          border: 'darkorange',
          background: 'gold',
        },
      },
    },

    species: {
      fontSize: 14,
      fontFace: 'courier',
      shape: 'box',
      color: {
        border: 'red',
        background: 'greenyellow',
        highlight: {
          border: 'darkorange',
          background: 'gold',
        },
      },
    },

  },
};

var data = {
  nodes: nodes,
  edges: edges
};