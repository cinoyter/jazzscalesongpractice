import React from "react";
import { Autocomplete } from '@mantine/core';
import { Scale } from 'tonal';

const CMAJOR = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const ALL_NOTES = CMAJOR.map( (note => [note + 'b', note, note + '#'])).flat(1);
const ALL_SCALES = Scale.names().map( scale => ALL_NOTES.map( note => [`${note} ${scale}`])).flat(2);

function ScaleSearch(props) {
    function filter(value, item) {
        const [searchKey, searchScale] = value.toLowerCase().split(' ');
        const [listKey, listScale] = item.value.toLowerCase().split(' ');

        if(listKey && searchKey && listKey !== searchKey) return false;
        else {
            return listScale.indexOf(searchScale) >= 0;
        }
    }

    function onChange(e) {
        props.onScaleChange(e);
    }

    return (
        <Autocomplete value={props.scale} data={ALL_SCALES} filter={filter} onChange={onChange } placeholder="Scale"/> 
    )
}

export default ScaleSearch;