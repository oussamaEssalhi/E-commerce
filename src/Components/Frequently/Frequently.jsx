import "./Frequently.css";
import { Buttons } from "../index";
import { Fragment } from "react";

const Frequently = () => {
    return (
        <Fragment>
            <div className="frequently container" id="frequently">
                <div className="heading">
                    <h1 className="main-heading">Frequently Asked Questions</h1>
                </div>
                <div className="frequently-contente">
                    <p>
                        <span>
                            {" "}
                            <span>~</span>Is Foodera Bread really baked fresh
                            each day?
                        </span>{" "}
                        <br />
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language.
                    </p>
                    <p>
                        <span>
                            {" "}
                            <span>~</span>Can I order your products online?
                        </span>{" "}
                        <br />
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language.
                    </p>
                    <p>
                        <span>
                            <span>~</span>Do you bake breads containing animal
                            fats or products?
                        </span>{" "}
                        <br />
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language.
                    </p>
                    <p>
                        <span>
                            {" "}
                            <span>~</span>When are you opening a shop near me?
                        </span>{" "}
                        <br />
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language.
                    </p>
                </div>
            </div>
            <div className="frequently-footer">
                <div className="container">
                    <h4>Baked fresh daily by bakers with passion.</h4>
                    <Buttons>Learn More</Buttons>
                </div>
            </div>
        </Fragment>
    );
};

export default Frequently;
