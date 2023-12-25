import "./Statistics.css";

const Statistic = () => {
    return (
        <div className="statistic" id="statistic">
            <div className="statis container">
                <div className="stats1">
                    <p>{1287 + "+"} </p> <h3>SAVINGS</h3>
                </div>
                <div className="stats2">
                    <p>{4287 + "+"} </p>
                    <h3>PHOTOS</h3>
                </div>
                <div className="stats3">
                    <p>{7287 + "+"} </p>
                    <h3>ROCKETS</h3>
                </div>
                <div className="stats4">
                    <p>{3287 + "+"} </p>
                    <h3>GLOBES</h3>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
