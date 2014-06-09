var nodes = [
  {id: 1, label: 'Modul 1', group: 'center'},
  {id: 2, label: 'Modul 2'},
  {id: 3, label: 'Modul 3'},
  {id: 4, label: 'Modul 4'},
  {id: 5, label: 'Modul 2.1'},
];

// create an array with edges
var edges = [
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 1, to: 4},
  {from: 2, to: 5},
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
      }
    }
  },
  groups: {
    center: {
      // defaults for nodes in this group
      radius: 15,
      color: 'black',
      fontColor: 'white',
      fontSize: 18,
      fontFace: 'courier',
      shape: 'rect'
    },
  },
};

var data = {
  nodes: nodes,
  edges: edges
};