__NYC Museums Application__

The Museum Hat app makes it easy for people to pick a museum in New York City. The user can use the drop down menu to filter museums by borough or click the randomizer to produce a random museum in New York City.

With so many museums to visit int NYC, use Museum Hat to get up and go without too much deliberating. 

____Technologies____

I am using a free API courtesy of NYC OpenData (https://opendata.cityofnewyork.us/) with the React library to render all components.

Each card has the NAME of the museum, its ADDRESS, its BOROUGH, and TELEPHONE number. The name also contains a link to the museums current website.

*** Note ***

Due to a bug with the open layers map API, if running this application locally, please uncomment line 45 in Display.js to use the interactive map. The button on each card will set the map to its correct location (zoom buttons on map are fucntional to better see cross streets)

____Dificulties____

Fetching the NYC Open Data information was no problem since the documentation was very clear. The react-openlayers npm package did not have any documentation regarding deployment which posed issues. However, all other features besides the map run fine on the deployed site via render: (https://museum-hat.onrender.com/)

___SHOUT OUTS___

Thank you to instructors Tishana, Kasper, and Dylan for helping with the rendering issues and moral support. 

Thank you all creators of open source softwares and those who keep them updated. 



