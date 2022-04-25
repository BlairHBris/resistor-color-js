/* eslint-disable prettier/prettier */
const colors = [
    {name:'black', id:0},
    {name:'brown', id:1},
    {name:'red', id:2},
    {name:'orange', id:3},
    {name:'yellow', id:4},
    {name:'green', id:5},
    {name:'blue', id:6},
    {name:'violet', id:7},
    {name:'grey', id:8},
    {name:'white', id:9}
]

export function colorCode(colorString) {
    const targetColor = colors.find(color => color.name == colorString)
    return targetColor.id
}

export const COLORS = colors.map(color => color.name)
