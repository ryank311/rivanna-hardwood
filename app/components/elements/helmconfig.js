/*
 * Based on the template in Web Starter Kit : https://github.com/google/web-starter-kit/blob/master/app/index.html
 * To add to the config, add an object:
 * {
 *  type: "link" | "meta",
 *  sizes: "widthxheight",
 *  rel: "rel value"
 *  filename: <Name of your file"
 * }
 */

// Import all your needed files first (webpack will grab the url)
import favicon from '../../images/favicon.ico';
import largeFavicon from '../../images/favicon.png';

const description = 'Rivanna Wood Floors LLC is a local wood flooring specialist that supports residential ' +
  'and commercial businesses in the Rivanna & Charlottesville area.';

const config = {
  link: [
    // Add to homescreen for Chrome on Android
    { rel: 'icon', href: favicon },
    { rel: 'stylesheet', href: '/assets/styles/main.css' }
    // SEO: If your mobile URL is different from the desktop URL,
    // add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones
    // { "rel": "canonical", "href": "http://www.example.com/" }
  ],
  meta: [
    { charset: 'utf-8' },
    // Setting IE=edge tells Internet Explorer to use the latest engine to render the page and execute Javascript
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    //  Meta descriptions are commonly used on search engine result pages to display preview snippets for a given page.
    { name: 'description', content: description },
    { name: 'og:title', content: 'Rivanna Wood Floors LLC' },
    { name: 'og:description', content: description },
    { name: 'og:url', content: 'http://www.rivannawoodfloors.com' },
    { name: 'og:image', content: 'http://www.rivannawoodfloors.com/assets/logo-transparent.png' },
    // Mobile Safari introduced this tag to let web developers control the viewport's size and scale
    // The width property controls the size of the viewport, the initial-scale property controls
    // the zoom level when the page is first loaded
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // Add to homescreen for Chrome on Android
    { name: 'mobile-web-app-capable', content: 'yes' },
    // Add to homescreen for Safari on IOS
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'React Webpack Node' },
    // Tile icon for Win8 (144x144 + tile color)
    { name: 'msapplication-TileImage', content: largeFavicon },
    { name: 'msapplication-TileColor', content: '#456AA2' },
    { name: 'theme-color', content: '#456AA2' }
  ],
  title: 'Rivanna Wood Floors LLC.'
};

export default config;
