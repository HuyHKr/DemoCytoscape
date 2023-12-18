import { useEffect, useMemo, useState } from "react"
import cytoscape from 'cytoscape'
const color = {
    blue:'#001C44',
    green:'#2D99AE',
    pink:'#F8DAD0',
    button:'#0C5776'
}
export default function App(){
    useEffect(()=>{
        var cy1 = cytoscape({
            container: document.getElementById('cy1'),//element để render đồ thị
            elements:[//định nghĩa các phần tử
                { group: 'nodes', data: { id: 'A' } },
                { group: 'nodes', data: { id: 'B' } },
                { group: 'nodes', data: { id: 'C' } },
                { group: 'nodes', data: { id: 'D' } },
                { group: 'edges', data: { id: 'E0', source: 'A', target: 'B', weight: 100 } },
              
                { group: 'nodes', data: { id: 'E' } },
                { group: 'nodes', data: { id: 'F' } },
                { group: 'nodes', data: { id: 'G' } },
                { group: 'nodes', data: { id: 'H' } },
                { group: 'edges', data: { id: 'E1', source: 'B', target: 'C', weight: 150 } },
              
                { group: 'nodes', data: { id: 'I' } },
                { group: 'nodes', data: { id: 'J' } },
                { group: 'nodes', data: { id: 'K' } },
                { group: 'nodes', data: { id: 'L' } },
                { group: 'edges', data: { id: 'E2', source: 'C', target: 'D', weight: 120 } },
              
                { group: 'nodes', data: { id: 'M' } },
                { group: 'nodes', data: { id: 'N' } },
                { group: 'nodes', data: { id: 'O' } },
                { group: 'nodes', data: { id: 'P' } },
                { group: 'edges', data: { id: 'E3', source: 'D', target: 'A', weight: 80 } },
              
                { group: 'nodes', data: { id: 'Q' } },
                { group: 'nodes', data: { id: 'R' } },
                { group: 'nodes', data: { id: 'S' } },
                { group: 'nodes', data: { id: 'T' } },
                { group: 'nodes', data: { id: 'U' } },
              
              
                // Additional edges
                { group: 'edges', data: { id: 'E14', source: 'E', target: 'A', weight: 50 } },
                { group: 'edges', data: { id: 'E15', source: 'E', target: 'B', weight: 55 } },
                { group: 'edges', data: { id: 'E19', source: 'R', target: 'E', weight: 75 } },
                { group: 'edges', data: { id: 'E20', source: 'I', target: 'R', weight: 80 } },
                { group: 'edges', data: { id: 'E21', source: 'E', target: 'N', weight: 85 } },
                { group: 'edges', data: { id: 'E22', source: 'A', target: 'I', weight: 90 } },
                { group: 'edges', data: { id: 'E23', source: 'A', target: 'N', weight: 95 } },
              ]
              ,
              
            style:[
                { //định nghĩa kiểu cho 1 node
                    selector:'node',
                    style:{
                        label:'data(id)',
                        'text-valign':'center',
                        'text-halign':'center',
                        'background-color':`${color.blue}`,
                        color:`${color.pink}`
                    }
                },
                { //định nghĩa kiểu cho 1 cạnh
                    selector:'edge',
                    style:{
                        label:'data(weight)',
                        "line-color":`${color.green}`,
                        color:`${color.blue}`,
                        "text-rotation":'autorotate'
                    }
                }
            ],
            layout: {
                name: 'circle'
              }
        })

        var cy2 = cytoscape({
            container: document.getElementById('cy2'),
            elements:[
                { group: 'nodes', data: { id: 'A' } },
                { group: 'nodes', data: { id: 'B' } },
                { group: 'nodes', data: { id: 'C' } },
                { group: 'nodes', data: { id: 'D' } },
                { group: 'edges', data: { id: 'E0', source: 'A', target: 'B', weight: 100 } },
              
                { group: 'nodes', data: { id: 'E' } },
                { group: 'nodes', data: { id: 'F' } },
                { group: 'nodes', data: { id: 'G' } },
                { group: 'nodes', data: { id: 'H' } },
                { group: 'edges', data: { id: 'E1', source: 'B', target: 'C', weight: 150 } },
              
                { group: 'nodes', data: { id: 'I' } },
                { group: 'nodes', data: { id: 'J' } },
                { group: 'nodes', data: { id: 'K' } },
                { group: 'nodes', data: { id: 'L' } },
                { group: 'edges', data: { id: 'E2', source: 'C', target: 'D', weight: 120 } },
              
                { group: 'nodes', data: { id: 'M' } },
                { group: 'nodes', data: { id: 'N' } },
              
                { group: 'nodes', data: { id: 'Q' } },
              
              
                // Additional edges
                { group: 'edges', data: { id: 'E14', source: 'E', target: 'A', weight: 50 } },
                { group: 'edges', data: { id: 'E15', source: 'E', target: 'B', weight: 55 } },
                { group: 'edges', data: { id: 'E21', source: 'E', target: 'N', weight: 85 } },
                { group: 'edges', data: { id: 'E22', source: 'A', target: 'I', weight: 90 } },
                { group: 'edges', data: { id: 'E23', source: 'A', target: 'N', weight: 95 } },
              ]
              ,
              
            style:[
                {
                    selector:'node',
                    style:{
                        label:'data(id)',
                        'text-valign':'center',
                        'text-halign':'center',
                        'background-color':`${color.pink}`,
                        color:`${color.blue}`
                    }
                },
                {
                    selector:'edge',
                    style:{
                        label:'data(weight)',
                        "line-color":`${color.green}`,
                        color:`${color.blue}`,
                        "text-rotation":'autorotate'
                    }
                }
            ],
            layout: {
                name: 'grid',
                cols:4,
                rows:3
              }
        })
           
    },[])
    
    
    return(
        <>
        <div  id = 'cy1' style={{
            position:'absolute',
            top:'0px',
            left:'35%',
            height:'100%',
            width:'80%',
            boxSizing:'border-box'
        }}></div>

        <div id = 'cy2' style={{
        position:'absolute',
        top:'0px',
        left:'0px',
        height:'90%',
        width:'40%',
        boxSizing:'border-box'
    }}></div>
        </>
        
    )
}