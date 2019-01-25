"use strict";

import Selector from "./selector";
import Table from "./table";


const _GET_DATA_TEXT = "text"; // default
const _GET_DATA_HTML = "html";
const _GET_DATA_JSON = "json";

export default class TableCellSelector {
    options = {
        deselectOutTableClick: true,
        destroySizeMatrix: false, // when out table click. Clear memory for big table
        ignoreClass: 'tcs-ignore',
        mergePasting: false,
        mergePastingGlue: '',
        selectableTableClass : 'tcs',// class added to table
        selectClass: 'tcs-select',
        usingSizeMatrix: true, // for tables with merged cells, enabling is mandatory. Shutdown optimizes performance.
    };
    obTable;
    obSelector;


    constructor (table, options) {
        Object.assign(this.options, options);
        this.obSelector = new Selector(table, this.options);
        this.obTable = new Table(table, this.obSelector, this.options);
    }

    deselect () {
        return this.obSelector.deselectAll();
    }

    destroy () {
        this.deselect();
        this.obTable.destroy();
    }

    static get GET_DATA_TEXT () {
        return _GET_DATA_TEXT;
    }

    static get GET_DATA_HTML () {
        return _GET_DATA_HTML;
    }

    static get GET_DATA_JSON () {
        return _GET_DATA_JSON;
    }

    getArray (type) {

    }

    getPositions () {
        return this.obTable.getPositions();
    }

    getJson (type) {

    }

    paste (positions, options) {

    }

    /**
     * select cells. Fn: select (c1 [, c2])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     */
    select (c1, c2) {
        this.select(c1, c2);
    }

    selectAll () {
        return this.obSelector.selectAll();
    }
}

if (window) {
    window.TableCellSelector = TableCellSelector;
}