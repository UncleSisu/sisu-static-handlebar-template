// Import Modernizr and the Bootstrap components that are needed
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import Modernizr from 'modernizr';

import Alert from 'Alert';
import Button from 'Button';
import Carousel from 'Carousel';
import Collapse from 'Collapse';
import Dropdown from 'Dropdown';
import Modal from 'Modal';
import Popover from 'Popover';
import Scrollspy from 'Scrollspy';
import Tab from 'Tab';
import Tooltip from 'Tooltip';
import Util from 'Util';
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/no-unresolved */
/* eslint-enable no-unused-vars */

import $ from 'jquery';

// Components
import './components/test';

// For eslint testing
let foo = 'test' + 'bar' + 'bar' + 'bar';

$('[data-toggle="popover"]').popover();

$('[data-toggle="tooltip"]').tooltip();
