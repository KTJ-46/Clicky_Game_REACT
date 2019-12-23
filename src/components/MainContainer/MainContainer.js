import React, {Component} from "react";
import Card from "../Card";
import images from "../../images.json";
//import "./MainContainer.css"

class MainContainer extends Component {
    state = {
        images,
        score : 0,
        topScore: 0,
        message: "Start the game by clicking on the Images"
    };


    handleClick = (id, clicked) => {

        const imagesLayout = this.state.images

        if (clicked){
            imagesLayout.forEach((image, index) => {
                imagesLayout[index].clicked = false
            });
            return this.setState({
                image: imagesLayout.sort(()=> Math.random()- 0.5 ),
                message: "You clicked on this again!",
                score: 0
            })
        }
            else {
                imagesLayout.forEach((image, index) => {
                    if(id===image.id){
                    imagesLayout[index].clicked = true
                    }
                });

                const {score, topScore} = this.state;
                var newScore= score + 1;
                var newTopscore = newScore>topScore? newScore: topScore;

                return this.setState({
                    score: newScore,
                    topScore: newTopscore,
                    image: imagesLayout.sort(()=> Math.random()- 0.5 ),
                    message: "Correct guess!"

                });

            };
    };

render () {

    return (
        <div className="container-fluid MainContainer">
            <div className="message center">
                <p> {this.state.message}</p>
                <br/>
                <p>Score: {this.state.score}</p>
                <br/>
                <p>Top Score: {this.state.topScore} </p>
            </div>
            <div className="gameCards">
                
                {this.state.images.map(image =>(
                    <Card
                        key= {image.id}
                        id= {image.id}
                        name= {image.name}
                        alt= {image.alt}
                        clicked= {image.clicked}
                        handleClick= {this.handleClick}
                        image= {image.image}
                    />
                ))}
            </div>;
        </div>
    );

};
}
export default MainContainer; 