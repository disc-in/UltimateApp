import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, {Line, Circle} from 'react-native-svg';

/** The cuts that must be displayed at each step of a drill (a cut correspond to the position of a player at the previous step) */
class DrillCuts extends React.Component{

    /** Props must contain:
	- drill: the drill Z
	- animationHeight/Width: size of the animation area
	- currentStep: the current step
	- positionPercentToPixel: function which returns the absolute position (x, y) in pixel on the screen associated to a position in percentages (xp, yp) on the animation
    */
    constructor(props){

        super(props);

        // TODO: put the constant coefficient used in the following somewhere to avoir writing them twice (in this class and in DisplayedElement)
	var dimensionMin = Math.min(this.props.animationWidth, this.props.animationHeight);
	this.playerRadius = dimensionMin / 12;
	this.discRadius = this.playerRadius / 2;
	this.coneSize = (this.playerRadius * 5) / 16;
        
        /* 2D array: this.cuts[stepId][cutId] 
         * Each cut contains: 
         * - coordinate x0, y0, x1, y1, x2, y2
         * If there is no counter-cut, (x1, y1) == (x2, y2)
         */
        this.cuts = [];

        if(this.props.drill.ids.length > 0){

	    
	    //	    for(var stepId2 = 0; stepId2 < this.props.drill.positions.length; stepId2++){
	    //
	    //		console.log("step: " + stepId2);
	    //		for(var elemId2 = 0; elemId2 < this.props.drill.positions[stepId2].length; elemId2++){
	    //
	    //		    console.log("\telem: " + elemId2);
	    //
	    //		    if(this.props.drill.positions[stepId2][elemId2] == undefined)
	    //			console.log("\t\tundefined");
	    //		    else
	    //			for(var cutId2 = 0; cutId2 < this.props.drill.positions[stepId2][elemId2].length; cutId2++)
	    //			    console.log("\t\t cut " + cutId2 + ": " +  this.props.drill.positions[stepId2][elemId2][cutId2]);
	    //		}
	    //	    }

            var elemCount = this.props.drill.ids.length;
            
            /* For each step */
            for(var stepId = 0; stepId < this.props.drill.stepCount(); stepId++){
                
		//        console.log('stepId: ' + stepId);
                this.cuts.push([]);

		/* Nothing to do at step 0 as there is no previous position */
		if(stepId > 0){
                    
                    /* For each element displayed */
                    for(var elemId = 0; elemId < elemCount; elemId++){


			//		    console.log("pos step+1 undefined2?: " + (this.props.drill.positions[stepId+1][elemId] == undefined));
			//		    console.log("pos step+1 not undefined2?: " + (this.props.drill.positions[stepId+1][elemId] != undefined));
			
			/* If the element moves at this step */
			if (
			    this.props.drill.positions[stepId][elemId] !== null &&
				this.props.drill.positions[stepId][elemId] !== undefined
			) {

                            var elemCut = [];

			    
			    //			console.log("elemCount: " + elemCount);
			    //			console.log("stepId: " + stepId);
			    //			console.log("elemId: " + elemId);
			    //			console.log("posAS.length: " + positionsAtStep.length);
			    //			console.log("posAS: " + positionsAtStep);
			    //			console.log("pas[length-1] undefined?: " + positionsAtStep[positionsAtStep.length-1] == undefined);
			    //			console.log("pos elem 0 at step 0: " + this.props.drill.positions[0][0]);
			    //
			    //			console.log("pos step: " + this.props.drill.positions[stepId][elemId]);
			    //			console.log("pos step+1: " + this.props.drill.positions[stepId+1][elemId]);
			    //			console.log("pos step+1 undefined?: " + (this.props.drill.positions[stepId+1][elemId] == undefined));
			    //			console.log("pos step+1 not undefined?: " + (this.props.drill.positions[stepId+1][elemId] != undefined));

                            /* The cut starting position is its position at step stepId */
			    var pos = this.props.positionPercentToPixel(
				this.props.drill.positions[stepId][elemId][0][0],
				this.props.drill.positions[stepId][elemId][0][1],
			    );

                            this._addOffset(pos, elemId);
                            elemCut.push(pos);

                            var positions = this.props.drill.getPositionsAtStep(elemId, stepId-1);
			    //            console.log('positions: ' + positions);
                            
                            /* For each substep in this cut */
                            for(var subStepId = 0; subStepId < positions.length; subStepId++){
				
				/* Add the position(s) of the cut */
				pos = this.props.positionPercentToPixel(positions[subStepId][0], positions[subStepId][1]);
				this._addOffset(pos, elemId);
				
				elemCut.push(pos);
                            }

			    //            console.log('positions2: ' + positions);
                            this.cuts[stepId].push({
				key: elemId,
				x0: elemCut[0][0],
				y0: elemCut[0][1],
				x1: elemCut[1][0],
				y1: elemCut[1][1],
				x2: elemCut[elemCut.length-1][0],
				y2: elemCut[elemCut.length - 1][1],
                            });
			}
                    }
		}
	    }
        }      
    }

    /** Add an offset to the position so that the cut is placed at the center of the element (otherwise it would be at its top left) */
    _addOffset(pos, elemId){
        switch(this.props.drill.ids[elemId]){
	case 'triangle':
	    pos[0] += this.coneSize/2;
	    pos[1] += this.coneSize/2;
	    break;

	case 'offense':
	    pos[0] += this.playerRadius/2;
	    pos[1] += this.playerRadius/2;
	    break;

	case 'defense':
	    pos[0] += this.playerRadius/2;
	    pos[1] += this.playerRadius/2;
	    break;

	case 'disc':
	    pos[0] += this.discRadius/2;
	    pos[1] += this.discRadius/2;
	    break;
	    
        }
    }
    
    _displayCut = cut => {
        
        /* If there is no counter cut */
	if(cut.x1 == cut.x2 && cut.y1 == cut.y2){

	    console.log("cut: " + cut);
	    console.log("pos 0: " + cut.x0 + "/" + cut.y0);
	    console.log("pos 1: " + cut.x1 + "/" + cut.y1);
	    console.log("disc radius: " + this.discRadius)
	    
	    return (
		    <Svg style={[StyleSheet.absoluteFill]} height="100%" width="100%" key={cut.key}>
	            <Line x1={cut.x0} y1={cut.y0} x2={cut.x1} y2={cut.y1} stroke="green" strokeWidth="2" strokeDasharray="5, 5"/> 
		    <Circle
		cx={cut.x1}
		cy={cut.y1}
		r={this.discRadius / 2}
		fill="white"
		stroke="green"
		strokeWidth={this.discRadius / 8}
		strokeDasharray="3, 3"
		    />
		    </Svg>
	    );
	}
        else
	    return (
		    <Svg style={[StyleSheet.absoluteFill]} height="100%" width="100%">
		    <Line x1={cut.x0} y1={cut.y0} x2={cut.x1} y2={cut.y1} stroke="green" strokeWidth="2" strokeDasharray="5, 5" />
		    <Line x1={cut.x1} y1={cut.y1} x2={cut.x2} y2={cut.y2} stroke="green" strokeWidth="2" strokeDasharray="5, 5"/>
		    <Circle cx={cut.x2} cy={cut.y2} r={this.discRadius} fill="green" />
		    </Svg>
	    );
    };

    render(){
        
	return(
		<View key="1" style={[{position:'absolute'}]} height="100%" width="100%">
		{this.cuts.length >= this.props.currentStep && this.cuts[this.props.currentStep] != undefined
		 ? this.cuts[this.props.currentStep].map(this._displayCut)
		 : undefined}
	    </View>
	);
    }
}                         



export default DrillCuts;

const styles = StyleSheet.create({
})
