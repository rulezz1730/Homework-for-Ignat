import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import HW6 from "../../h6/HW6";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";

function PreJunior() {
    return (
        <div>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW6/>
            <HW7/>
            <HW8/>
            <HW9/>
            <Provider store={store}>
                <HW10/>
            </Provider>
            <HW11/>
            <HW12/>

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз