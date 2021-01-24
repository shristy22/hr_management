import React, { useState, useEffect } from "react";
// import { Typography } from "@material-ui/core";
import { PieChart } from 'react-minimal-pie-chart';

const Piechart = (props) => {
    let width = props.width1;
    if(props.showhomepage){
        return (
            <div>
                <PieChart style={{width:width}}
                label={(props) => { return props.dataEntry.title;}}
                // label={props => { return props.data[props.dataIndex].label;}}
                data={[
                    { title: 'One', value: 50, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    // { title: 'Three', value: 20, color: '#6A2135' },
                ]}
               
                /> 
            </div>
        );

      }
      else {
          return(
              <div></div>
          );
      }
        
}
export default Piechart;


