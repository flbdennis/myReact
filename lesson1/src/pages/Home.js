import React, {Component} from 'react';

// 一个 class 组件 继承与 Component 类  Component类会提供很多方法和生命周期等
class Home extends Component {
    constructor(props){
        super(props)
        // 创建变量 类似 vue的data
        this.state={
            date: new Date(),
            counter:1
        }
    }
    // 组件加载完成之后
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)

    }

    //  异步修改值
    setCounter1 = ()=>{
        // 使用 this.setState({})来修改值 是一个异步操作
        this.setState({
            counter:this.state.counter+10
        })
        console.log(this.state.counter)
    }

    //  同步修改值
    setCounter2 = ()=>{
        this.setState(nextState=>{
            return{
                counter:nextState.counter+10
            }
        })
        console.log(this.state.counter)
    }
    //  同步修改值
    setCounter3 = ()=>{
        setTimeout(()=>{
            this.setState({
                counter:this.state.counter +10
            })
            console.log(this.state.counter)
        },0)
    }

    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <p>{this.state.counter}</p>
                <button onClick={this.setCounter1}>异步修改</button>
                <button onClick={this.setCounter2}>同步修改</button>
                <button onClick={this.setCounter3}>同步修改</button>
            </div>
        );
    }


}

export default Home;
