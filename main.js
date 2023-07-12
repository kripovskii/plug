import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import MaintenancePage from './MaintenancePage.js';

const appElement = document.getElementById('app');
const maintenancePage = new MaintenancePage();

appElement.appendChild(maintenancePage.render());



