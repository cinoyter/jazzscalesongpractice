import React, { useState } from "react";
import ScaleSearch from "./ScaleSearch";

function MeasureEditor(props) {

    function onScaleChange(idx, val) {
        console.log(val, idx);
        const ret = props.measure;
        ret[idx] = val;
        props.onMeasureChange(ret);
    }

    const scales = props.measure.map( (scale, index) => (
        <ScaleSearch key={index} scale={scale} onScaleChange={(val) => onScaleChange(index, val)}></ScaleSearch>
    ));

    return (
        <div>{scales}</div>
    );
}

export default MeasureEditor;