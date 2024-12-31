import {Component} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";
import {SmallButton} from "../atoms/SmallButton.jsx";

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {count:0}
    }
    componentDidMount() { console.log('1. Mounted') }
    componentDidUpdate() { console.log('2. Updated')}
    componentWillUnmount() { console.log('3. Unmount') }

    handleIncrement = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render (){
        console.log('---RENDERING---')
        return(
            <SectionTag>
                <h2 className={'text-2xl font-bold'}>Class Component</h2>
                <p className={'text-xl font-semibold'}>Count: {this.state.count}</p>
                <SmallButton buttonName={'Increment'} onClick={this.handleIncrement}/>
            </SectionTag>
        )
    }
}

export default ClassComp;