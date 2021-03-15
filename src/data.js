import images from './assets/images/index';

const countries = [
    {
      id: "60270368f347c8267c02a528",
      capital: "Rome",
      description: "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
      name: "Italy",
      capitalLocation: {
        coordinates: [
        12.496365,
        41.902782
      ],
      type: "Point"
    },
      imageUrl: "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
      videoUrl: "https://youtu.be/FlRwssZYRM0",
      currency: "EUR",
      ISOCode: "IT",
    },
    {
      name: 'France',
      capital: 'Paris',
      countryImg: images.paris,
      countryFlag: images.flagFrance,
    },
    {
      name: 'England',
      capital: 'London',
      countryImg: images.paris,
      countryFlag: images.flagFrance,
    },
    {
      name: 'Norway',
      capital: 'Oslo',
      countryImg: images.paris,
      countryFlag: images.flagFrance,
    }
];

export default countries;
