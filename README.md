__NYC Museums Application__

The Museum Hat app makes it easy for people to pick a museum in New York City. The user can use the drop down menu to filter museums by borough or click the randomizer to produce a random museum in New York City.

With so many museums to visit int NYC, use Museum Hat to get up and go without too much deliberating. 

LIVE SITE: (https://museum-hat.onrender.com/)

____Technologies____

I am using a free API courtesy of NYC OpenData (https://opendata.cityofnewyork.us/) with the React library to render all components.

Each card has the NAME of the museum, its ADDRESS, its BOROUGH, and TELEPHONE number. The name also contains a link to the museums current website. The button takes the pin to the current card's location. 

>*Note: for the map to track the pin from location to location, the user needs to click the pin and keep the pop-up opened. 

The App uses react leaflet for map integration (https://react-leaflet.js.org/)

____Dificulties____

Fetching the NYC Open Data information was no problem since the documentation was very clear. I first used react-openlayers npm package for the map feature. It did not have any documentation regarding deployment which posed issues. I ended up using leaflet and open street map (https://www.openstreetmap.org/copyright).

>*Note: The button on each card can be improved (custom label, improved event listener)

___SHOUT OUTS___

Thank you to instructors Tishana, Kasper, and Dylan for helping with the rendering issues and moral support. This project exposed me to working with dependencies and npm packages, which was very interesting. 

Bit shout out to open source software developers and those who keep the software updated. 



