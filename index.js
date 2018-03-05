import './scss/main.scss'
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import fs from 'fs';

// const jokes = require('./jokes');
import { jokes } from './jokes';
jokes.getOne()
    .then(joke => {
        $('#joke').text(joke);
        //document.getElementById('joke').innerHTML = joke; // Vanilla Js
    });

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');

$('#copy').text(copy);

$("#reset").click(function(){
    document.location.reload(true) });