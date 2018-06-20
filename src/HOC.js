import React, {Component} from 'react';

export default function Hoc(HocComponent){
    return class extends Component{
      constructor(props)
      {
        super(props);
        this.state={data:"this is HOC data"};
        this.callme=this.callme.bind(this);
      }
      callme()
      {
        alert("Iam HOC method");
      }

        render(){
            return (
                <div>
                    <HocComponent callme={this.callme} data={this.state.data} {...this.props}></HocComponent>
                </div>

            );
        }
    }
}
