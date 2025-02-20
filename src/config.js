const layersOrder = [
    { name: 'background', number: 18 },
    { name: 'shadow', number: 1 },
    { name: 'skin', number: 13 },
    { name: 'eyes', number: 34 },
    { name: 'overlay0', number: 1 },
    { name: 'shirt', number: 36 },
    { name: 'pants', number: 17 },
    { name: 'shoes', number: 13 },
    { name: 'hair', number: 91 },
    { name: 'overlay', number: 1 },
    { name: 'weapon', number: 136 },
];
  
const format = {
    width: 1800,
    height: 1800
};

const rarity = [
    { key: "_0", val: "common" },
    { key: "_1", val: "uncommon" },
    { key: "_2", val: "rare" },
    { key: "_3", val: "exotic" },
];

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };