import React, { Component } from 'react';
import axios from "axios";
import { Chart } from "react-charts";
// import We/bsocket from 'react-websocket';
// import WebSocket from 'ws';
 
class chart extends Component {
    
state={
    count:90,
    currency_name:[],
    currency:"EURUSD",
    messages:{},
    connection: {},
    lines: [
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] }
      ],
      stock:10
    }
    

     ws = new WebSocket('wss://stocksimulator.intuhire.com');
    
    componentDidUpdate(){
       
        
        console.log(this.state.currency,'ggg')
        
      
        console.log(this.state.currency);
    }
  

componentWillMount(){
   
    axios.get( 'https://restsimulator.intuhire.com/currency_pairs')
        .then( response => {
          console.log(response.data)
          this.setState({
              currency_name:response.data
          })
          
         
        })
        
}

componentDidMount(){

    this.ws.onopen =function(event) {
        console.log("WebSocket is open now.");
      };
     
    this.ws.onmessage = function (event) {
      console.log(event.data);
      console.log('event' + JSON.stringify(event.data))
      this.setState({
            stock:event.data
      })
    }.bind(this);
}
handleData(data) {

    this.setState({currency: data.target.value});
    this.ws.send(JSON.stringify({currencyPair:this.state.currency}))
}
    render() {
        console.log(this.state.currency)
        const currency=this.state.currency_name.map((evt,index)=>{
            return <option key={index} >{evt.currency_name}</option>
        });
        
     
        return (   
             <div  >
                 <h2 style={{textAlign:'center',marginTop:'60px'}}>Please Select currency</h2>
            <div style={{width:'98%',margin:'auto',marginTop:'100px',display:'flex',msFlexDirection:'row',flexDirection:'row',justifyContent:'space-around'}}>
           <div style={{width:'30%'}}>   
               <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <select className="ui dropdown" value={this.state.currency} onChange={(data)=>this.handleData(data)}>
                 
                {currency}
                </select> 
                </div>
            <div
            style={{
              width: "400px",
              height: "300px",
              background:'rgba(0,0,0,0.5)',
              color:'#fff'
            }}
          >
            <Chart
              data={[
                {
                  label: "Series 1",
                  data: [[0, 1], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock]]
                },
                
              ]}
              axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
              ]}
            />

          </div>
          </div>

          <div style={{width:'30%'}}>   
               <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <select className="ui dropdown" value={this.state.currency} onChange={(data)=>this.handleData(data)}>
                 
                {currency}
                </select> 
                </div>
            <div
            style={{
              width: "400px",
              height: "300px",
              background:'rgba(0,0,0,0.5)',
              color:'#fff'
            }}
          >
            <Chart
              data={[
                {
                  label: "Series 1",
                  data: [[0, 1], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock]]
                },
                
              ]}
              axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
              ]}
            />
            
          </div>
          </div>

          <div style={{width:'30%'}}>   
               <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <select className="ui dropdown" value={this.state.currency} onChange={(data)=>this.handleData(data)}>
                 
                {currency}
                </select> 
                </div>
            <div
            style={{
              width: "400px",
              height: "300px",
              background:'rgba(0,0,0,0.5)',
              color:'#fff'
            }}
          >
            <Chart
              data={[
                {
                  label: "Series 1",
                  data: [[0, 1], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock], [this.state.stock, this.state.stock]]
                },
                
              ]}
              axes={[
                { primary: true, type: "linear", position: "bottom" },
                { type: "linear", position: "left" }
              ]}
            />
            
          </div>
          </div>
          </div>
          </div>
        );
    }
}

export default chart;