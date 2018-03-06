import {declareChildApplication, start} from 'single-spa';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('angular2', () => import('./angular2/angular2.app.js'), pathPrefix('/angular2'));
declareChildApplication('angular21', () => import('./angular21/angular21.app.js'), pathPrefix('/angular21'));

start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
