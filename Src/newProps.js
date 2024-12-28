import { Component } from "react"
import { Text,View } from "react-native"


export class NewProps extends Component{
	constructor(props){
		super(props)
		this.state={
			counter:0,
			tes:2
		}
		
		console.log('constructor')
	}
	componentDidMount(){
		console.log('componentdidmount')
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')

	}
	
	   render(){
		console.log('render')
        return(
			// <TouchableOpacity >
			<View>

			
				<Text onPress={() => {
					this.setState({ counter: this.state.counter + 1 })
				}}>hihihi {this.state.counter}  {this.state.tes}</Text>
			         {this.state.counter <5 ? <Mybutton/>:null}
				
			</View>
		)
	}
}

class Mybutton extends Component{
	componentWillUnmount(){
		console.log('componentWillUnmount')
	}
            
         render(){
			return(
                     <View style={{backgroundColor:'red',padding:10}}>
						<Text>
							buttn
						</Text>
					 </View>
			)
		 }
}