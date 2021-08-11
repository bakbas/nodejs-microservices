import { hot } from "react-hot-loader/root";
import Countdown from "react-countdown";
import Providers from "./providers";
import MainRouter from "SRC/router";

import "./App.styles.css";

const renderer = ({ days, hours, minutes, seconds, completed }) =>
    completed ? (
        <MainRouter />
    ) : (
        <div className="countdownPage">
            <div className="countdown">
                <div>
                    {String(days).padStart(2, 0)}
                    <span>Days</span>
                </div>
                <div>
                    {String(hours).padStart(2, 0)}
                    <span>Hours</span>
                </div>
                <div>
                    {String(minutes).padStart(2, 0)}
                    <span>Minutes</span>
                </div>
                <div>
                    {String(seconds).padStart(2, 0)}
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    );

const App = () => {
    return (
        <Providers>
            <Countdown
                date={new Date("2021-04-24T22:00:00.000Z")}
                renderer={renderer}
            />
        </Providers>
    );
};

export default hot(App);
