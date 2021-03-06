export const auth0Config = {
  domain: 'xtg.eu.auth0.com',
  clientId: 'f8mTlypd0j0tfBsKTu1ppxvC6Mk2DTnX',
  options: {
    auth:  {
      redirectUrl: location.origin + '/home',
      responseType: 'token id_token',
      params: {
        scope: 'openid profile email picture name',
      },
      leeway: 30,
    },
    languageDictionary: {
      title: ''
    },
    theme: {
      logo: 'assets/img/xtg_two_color_logo.svg'
    }
  }
};

export const environment = {
  production: true,
  languages: ['en', 'es'],
  googleMapsKey: 'AIzaSyDnnHGVUJJCRIzFTmRwdASd60QnQi2L7LY',
  organization: {
    code: 'tgx',
    assetsPath: 'assets/img/travelgatex/',
    defaultMarket: {
      isoCode: 'es',
      name: 'Spain'
    },
    email: 'info@xmltravelgate.com',
    dateFormat: 'YYYY/MM/DD',
    headquarters: [{
      country: 'Spain',
      telephone: '+(34) 871 968 181 ',
      address: 'Edificio Europa, Local 1, bajos, 07121 (ParcBIT), Palma de Mallorca, Spain'
    }],
    // linkedin: 'https://www.linkedin.com/company/smyrooms',
    logoNav: 'assets/img/xtg_two_color_logo.svg',
    logoHome: 'assets/img/xtg_logo.svg',
    logo: 'assets/img/xtg_two_color_logo.svg',
    name: 'Travelgatex',
  }
};
