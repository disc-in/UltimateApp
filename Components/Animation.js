import React from 'react';
import { Button, StyleSheet, Easing, Animated, Dimensions, View, ActivityIndicator } from 'react-native';

class Animation extends React.Component{

    constructor(props){
	super(props);
        this.state = {
            top1: new Animated.Value(0),
            top2: new Animated.Value(0),
            top3: new Animated.Value(0),
	    topDisc: new Animated.Value(0),
	    leftDisc: new Animated.Value(0),
	    screenH: 0,
	    screenW: 0
        };
    }

    _initPositions(){

        this.state.top1.setValue(50);
        this.state.top2.setValue(115);
        this.state.top3.setValue(315);
        this.state.topDisc.setValue(100);
        this.state.leftDisc.setValue(this.state.screenW/2-35);
        
    }

    componentDidMount(){
        
	var {height, width} = Dimensions.get('window');
        
        this.setState({
            screenH: height,
            screenW: width
        }, () => {this._initPositions();});
    }
    
    _restart(){

        this._initPositions();

        console.log("restart()");
        
        Animated.sequence([

            // 1 lance le disque
            Animated.parallel([
                Animated.timing(
                    this.state.topDisc,
                    {
                        toValue: 305,
                        duration: 1000,
                        easing: Easing.linear
                    }
                ),
                Animated.sequence([
                    Animated.timing(
                        this.state.leftDisc,
                        {
                            toValue: this.state.screenW/2-95,
                            duration: 500,
                            easing: Easing.out(Easing.sin)
                        }
                    ),
                    Animated.timing(
                        this.state.leftDisc,
                        {
                            toValue: this.state.screenW/2-35,
                            duration: 501,
                            easing: Easing.out(Easing.sin)
                        }
                    )
                ])
            ]),

            Animated.parallel([
                
                // 1 passe en defense
                Animated.timing(
                    this.state.top1,
                    {
                        toValue: 250,
                        duration: 1000,
                        easing: Easing.linear
                    }
                ),

                // 2 passe en receveur
                Animated.timing(
                    this.state.top2,
                    {
                        toValue: 50,
                        duration: 1000,
                        easing: Easing.linear
                        
                    }
                )
            ])
            
        ]).start();
    }
    
    render(){
	return(
	    <View style={styles.main_container}>
              <Button title='Lancer' onPress={() => this._restart()}/>
              
              <Animated.Text style={[styles.player, {top: this.state.top1}, {left:this.state.screenW/2-25}]}>1</Animated.Text>
              <Animated.Text style={[styles.player, {top: this.state.top2}, {left:this.state.screenW/2-25}]}>2</Animated.Text>
	      <Animated.Text style={[styles.player, {top: this.state.top3}, {left:this.state.screenW/2-25}]}>3</Animated.Text>
              
              <Animated.View style={[styles.disc, {top: this.state.topDisc}, {left:this.state.leftDisc}]}/>
	    </View>
	);
    }
}

const styles = StyleSheet.create({

    main_container: {
	flex: 1,
	marginTop: 40,
	alignItems: 'center'
    },
    player: {
        position: 'absolute',
	height: 50,
	width: 50,
        borderRadius: 100/2, 
	backgroundColor: 'red',
        textAlign: 'center',
    },

    disc: {
        position: 'absolute',
	height: 20,
	width: 20,
        borderRadius: 40/2,
	backgroundColor: 'gray'
    },
});

export default Animation;
