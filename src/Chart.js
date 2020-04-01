import React, { PureComponent } from 'react';
import {LineChart, Line, BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import DateFnsUtils from '@date-io/date-fns';

import {
  
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import moment from 'moment'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
const queryString = require('query-string')


//   var moment = require('moment');
 

export default class Charts extends PureComponent {
       
    constructor(props) {
        super(props)
    
        this.state = {
            selectedDate:new Date(),
            isSelected:false,
            isSelected1:false,
            selectedDate1:new Date(),
            charts:"",
            chart:false,
            chartvalues:""
            
        }
    }

    componentDidMount(){
        console.log(6766)
        console.log(this.props.location)
        console.log(this.props.match)
       
        
      
        this.getChartValue()
        // const params=new URLSearchParams(this.props.location.search)
        // params.get
    }
    getChartValue=()=>{
      let query = this.props.location.search;
      const parsed = queryString.parse(query);
console.log(parsed.name);
   
      // console.log(query)
      this.setState({
        charts:parsed.name,
        chart:true,
        selectedDate:parsed.startdate,
        selectedDate1:parsed.enddate
      })

    }
    
    handleStartDateChange=(date)=>{
        this.setState({
            selectedDate:date,
            isSelected:true,
           
        })
        const startdate1=moment(date).format("MM/DD/YYYY")
        const enddate1=moment(this.state.selectedDate1).format("MM/DD/YYYY")
        this.props.history.push(`/charts?name=${this.state.charts}&startdate=${startdate1}&enddate=${enddate1}`);
    }
    handleEndDateChange=(date)=>{ 
        this.setState({
            selectedDate1:date,
            isSelected1:true
        })
        const startdate2=moment(this.state.selectedDate).format("MM/DD/YYYY")
        const enddate2=moment(date).format("MM/DD/YYYY")
        this.props.history.push(`/charts?name=${this.state.charts}&startdate=${startdate2}&enddate=${enddate2}`);
    }
    calculateDaysLeft(selectedDate, selectedDate1) {
        if (!moment.isMoment(selectedDate)) selectedDate = moment(selectedDate);
        if (!moment.isMoment(selectedDate1)) selectedDate1= moment(selectedDate1);    
        return selectedDate1.diff(selectedDate, "days");
      }
     
      
       

   
      getDates(selectedDate, selectedDate1) {
        var dateArray = [];
        var currentDate = moment(selectedDate);
        var stopDate = moment(selectedDate1);
       
        while (currentDate <= stopDate) { 
            dateArray.push({ date:moment(currentDate).format('YYYY-MM-DD'),
            pv:this.state.pv+200,amt:this.state.amt
        } )
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }
    handleChartsChange = (event) => {
        this.setState({
            charts: event.target.value,
            chart:true
        })
        const sdate=moment(this.state.selectedDate).format("MM/DD/YYYY")
        const edate=moment(this.state.selectedDate1).format("MM/DD/YYYY")
        this.props.history.push(`/charts?name=${event.target.value}&startdate=${sdate}&enddate=${edate}`);
      
      };

  render() {
   
  console.log(77)
      console.log(this.state.chartvalues)
   const days=this.getDates(this.state.selectedDate, this.state.selectedDate1,)
   console.log(days)
     
    const daysLeft = this.calculateDaysLeft(this.state.selectedDate, this.state.selectedDate1);
    console.log(daysLeft)
    
      console.log(this.state.selectedDate)
    const data = [
        {
          name: moment(this.state.selectedDate).format('DD-MM-YYYY'), pv: 2400, amt: 2400,
        },
        {
          name: moment('2020-3-10').format('DD-MM-YYYY'),  pv: 1398, amt: 2210,
        },
        {
          name:moment('2020-3-12').format('DD-MM-YYYY'),  pv: 12000, amt: 2290,
        },
        {
          name:moment('2020-3-15').format('DD-MM-YYYY'),  pv: 3908, amt: 2000,
        },
        {
          name: moment('2020-3-17').format('DD-MM-YYYY'), pv: 4800, amt: 2181,
        },
        {
            name: moment('2020-3-19').format('DD-MM-YYYY'), pv: 3800, amt: 2281,
          },
        
        {
          name: moment(this.state.selectedDate1).format('DD-MM-YYYY'), pv: 4300, amt: 2100,
        },
      ];
      
    
    return (
      
<>
 
        <div style={{marginTop:"50px"}}>
            <h2>Sample Line Chart  and Bar Chart</h2>


            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                style={{position:"absolute", left:"10px"}}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Starting Date"
                value={this.state.selectedDate}
                onChange={this.handleStartDateChange}
                KeyboardButtonProps={{
                'aria-label': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Ending Date"
                value={this.state.selectedDate1}
                onChange={this.handleEndDateChange}
                KeyboardButtonProps={{
                'aria-label': 'change date',
                }}
            />
            </MuiPickersUtilsProvider>
      
        <FormControl style={{   
            position:"absolute", marginTop:"10px", right:"80px",
        minWidth: 120,}}>
        <InputLabel id="demo-simple-select-label">Select an chart option</InputLabel>
        <Select  style={{minWidth:"200px"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
           
            value={this.state.charts}
            onChange={this.handleChartsChange}
            >
            <MenuItem value={"LineChart"}>Line Chart</MenuItem>
            <MenuItem value={"BarChart"}>Bar Chart</MenuItem>
            
            </Select>
            </FormControl>
        
{this.state.chart?
        this.state.charts==='LineChart'?
        <>
             <LineChart
             style={{marginTop:"50px"}}
        width={800}
        height={300}
        data={this.state.isSelected&& this.state.isSelected1?data:null}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"   />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
     
    </LineChart>
    <br/>
    </>
    : this.state.charts==='BarChart'?
    <BarChart
    style={{marginTop:"50px"}}
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        
      </BarChart>:null
      :null}

        </div>
        </>
     
    );
  }
}
