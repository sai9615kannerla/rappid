import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


const Piechart = (todo) => {

  
    const data = todo.todo



    return (
        <PieChart style={{width:300}}

        data={[
            { title: '	Abhay Singh', value: 10, color: '#e7b9b9' },
            { title: 'Tamoy Smith', value: 15, color: '#d6a5d0' },
            { title: 'Mary Poppins', value: 20, color: '#7893c9' },
            { title: 'Patrick Huthinson', value: 10, color: '#b7c255' },
            { title: 'Kavvay Verma', value: 15, color: '#3a404d' },
            { title: '	John Black', value: 20, color: '#505543' },
            { title: 'Tim Perkinson', value: 10, color: '#cbec6f' },
            { title: 'Rita Alley', value: 15, color: 'rgb(172, 124, 124)' },
            { title: '	Raju Sunuwar', value: 20, color: '#54574c' },
            { title: 'Stewart Malachi', value: 20, color: '#adcf4e' },
            { title: '	null', value: 20, color: '#61dafb' },
          ]}
        />
    );
}

export default Piechart;