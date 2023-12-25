import { CardProduct } from "../index";
import "./Explore.css";
import data from "../../Data/Data";

const Explore = () => {
    const cards = data.map((el) => {
        return (
            <CardProduct
                key={el.id}
                image={el.img}
                title={el.title}
                time={el.time}
                price={el.price}
            />
        );
    });
    return (
        <div className="explore" id="explore">
            <div className="container">
                <div className="row about-content">
                    <div className="col-lg-12 col-md-12">
                        <h2>Explore Our Foods</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus <br /> bibendum
                            in sit amet leo. Mauris feugiat erat tellus. Far far
                            away, behind the word
                            <br /> mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts.
                            <br />
                            Separated they live in Bookmarksgrove.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 cards">{cards}</div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
