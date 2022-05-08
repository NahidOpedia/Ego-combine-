// import React,{ useState} from 'react';
// import {Chart as ChartJs, Tooltip, ArcElement, Legend} from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJs.register(ArcElement, Tooltip, Legend);


// const options = {
//           tooltips: {enabled: true},
//                     plugins: {
//                         tooltip: {
//                         callbacks: {
//                         label: data => ` ${data.formattedValue} % `
//                   },
//                     backgroundColor:'#fff',
//                     bodyColor:'#000',
//                     bodyFontSize:"30",
//                     borderColor:'#000',
//                     borderWidth:'2',
//                     padding:20,
//                     titleColor:'#fff'
//               },

//         },
//   };


// const Chartgraph = () => {


//     const [data, setData] = useState({
//         datasets: [{
//               data: [6.7, 20, 20,53.3],
//               backgroundColor:[
//                 '#72C6EF',
//                 '#0AD7E4',
//                 '#6A2BBA',
//                 '#4E54C8'
//               ],
//               borderWidth: 0,
//           },
          
//         ],
//     });

//     return (
//         <div className='w-50 mx-auto' style={{marginTop:'200px'}}>
//           <h1 className='graph-heading'>PASSIVE INCOME PROFITS</h1>
//             <Doughnut
//             data={data}
//             options={options}
//              />
//         </div>  
//     );
// };

// export default Chartgraph;


import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';

const Chartgraph = () => {
		const options = {
			animationEnabled: true,
			// exportFileName: "New Year Resolutions",
			// exportEnabled: true,
			title:{
				text: ""
			},
			data: [{
				type: "doughnut",
        radius:  "100%",
        innerRadius: "50%",
				// showInLegend: true,
				// legendText: "{label}",
				toolTipContent: "<strong>{y}%</strong> : {label}",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
        indexLabelFontSize: 18,
        indexLabelFontColor: "#fff",
				dataPoints: [
					{color:'#4892EA', y: 10, label: "will go to the dev wallet to fund Developers salary and future marketing costs" },
					{color:'#0AD7E4', y: 30, label: "will go to buybacks of the token to reduce whale selling power and increase market stability" },
					{color:'#6A2BBA', y: 30, label: "will go to the Liquidity pool to provide liquidity for people to sell " },
					{color:'#4E54C8', y: 30, label: "is to be used to provide passive income reinvestments " },
				],
		}],
    backgroundColor:'transparent'
  }
  return (
    <div style={{marginTop:'200px'}}>
      <h1 className='graph-heading'>PASSIVE INCOME PROFITS</h1>
      <CanvasJSChart options = {options}/>
    </div>
  );
};

export default Chartgraph;