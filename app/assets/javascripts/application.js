// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
import jQuery from 'jquery';
//= require jquery_ujs
import 'jquery-ujs';

//= require turbolinks
import Turbolinks from 'turbolinks';
Turbolinks.start();

//= require materialize-sprockets
import 'materialize-css';
import './../stylesheets/application.scss';

var onPageReady = function() {
  $('select').material_select();
};

$(document).ready(onPageReady);
$(document).on("turbolinks:load", onPageReady);
