import React from 'react';
import Button from '@mui/material/Button';

const Connectors = [
  {
    connector: 'Connector 1',
    description: 'Beschreibung1',
    logo: require('./Pictures/logo192.png'),
    name: 'Connector-Name1',
    maintainer: 'Connector-Maintainer1',
    zahlung: 'Zahlung',
    dokumentation: false,
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: false,
    itknowhow: 1,
    support: true,
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
    homepage: <a href='https://react.dev/'>Homepage</a>,
    greenImg: require('./Pictures/greenTrue.jpg'),
    yellowImg: require('./Pictures/yellowTrue.jpg'),
    redImg: require('./Pictures/redFalse.jpg'),
  },
  {
    connector: 'Connector 2',
    description: 'Beschreibung2',
    logo: require('./Pictures/eclipse.png'),
    name: 'Connector-Name2',
    maintainer: 'Connector-Maintainer2',
    zahlung: 'Zahlung',
    dokumentation: true,
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: false,
    itknowhow: 2,
    support: false,
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
    homepage: <a href='https://eclipseide.org/'>Homepage</a>,
    greenImg: require('./Pictures/greenTrue.jpg'),
    yellowImg: require('./Pictures/yellowTrue.jpg'),
    redImg: require('./Pictures/redFalse.jpg'),
  },
  {
    connector: 'Connector 3',
    description: 'Beschreibung3',
    logo: require('./Pictures/logo_MDS_claim_black.png'),
    name: 'Connector-Name3',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: true,
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: true,
    itknowhow: 2,
    support: false,
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
    homepage: <a href='https://www.isst.fraunhofer.de/'>Homepage</a>,
    greenImg: require('./Pictures/greenTrue.jpg'),
    yellowImg: require('./Pictures/yellowTrue.jpg'),
    redImg: require('./Pictures/redFalse.jpg'),
  },
  {
    connector: 'Connector 4',
    description: 'Beschreibung4',
    logo: require('./Pictures/logo192.png'),
    name: 'Connector-Name4',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: false,
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: true,
    itknowhow: 0,
    support: true,
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
    homepage: <a href='https://www.isst.fraunhofer.de/'>Homepage</a>,
    greenImg: require('./Pictures/greenTrue.jpg'),
    yellowImg: require('./Pictures/yellowTrue.jpg'),
    redImg: require('./Pictures/redFalse.jpg'),
  },
  {
    connector: 'Connector 5',
    description: 'Beschreibung5',
    logo: require('./Pictures/logo192.png'),
    name: 'Connector-Name5',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: true,
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: true,
    itknowhow: 1,
    support: false,
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
    homepage: <a href='https://www.isst.fraunhofer.de/'>Homepage</a>,
    greenImg: require('./Pictures/greenTrue.jpg'),
    yellowImg: require('./Pictures/yellowTrue.jpg'),
    redImg: require('./Pictures/redFalse.jpg'),
  },
  {
    connector: 'Connector 6',
    description: 'Connector-Beschreibung6',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 7',
    description: 'Connector-Beschreibung7',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 8',
    description: 'Connector-Beschreibung8',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 9',
    description: 'Connector-Beschreibung9',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 10',
    description: 'Connector-Beschreibung10',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 11',
    description: 'Connector-Beschreibung11',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 12',
    description: 'Connector-Beschreibung12',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 13',
    description: 'Connector-Beschreibung13',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 14',
    description: 'Connector-Beschreibung14',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 15',
    description: 'Connector-Beschreibung15',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 16',
    description: 'Connector-Beschreibung16',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 17',
    description: 'Connector-Beschreibung17',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 18',
    description: 'Connector-Beschreibung18',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 19',
    description: 'Connector-Beschreibung19',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 20',
    description: 'Connector-Beschreibung20',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 21',
    description: 'Connector-Beschreibung21',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
  {
    connector: 'Connector 22',
    description: 'Connector-Beschreibung22',
    logo: 'Connector-Logo',
    name: 'Connector-Name',
    maintainer: 'Connector-Maintainer',
    zahlung: 'Zahlung',
    dokumentation: 'Dokumentation',
    dienst: 'Service-Level',
    firma: 'Connector-Firma1',
    typ: 'Connector-Typ',
    branch: 'Concetor-Bereich',
    version: 'Connector-Version',
    website: 'Conector-Webseite',
    location: 'Connector-Ort',
    deployment: 'Deployment Typ',
    openSource: 'Open Source',
    lizenz: 'Lizenz',
    spezifischeGUI: 'dsSpezifischeGUI',
    cloudGebraucht: 'Ja',
    cloud: 'Cloud',
    zielgruppe: 'Zielgruppe',
    regionalBeschränkt: 'Ja',
    industrie: 'Industrie Fokus',
    basedonODRL: 'Basiert auf Policy Sprachmodell',
    alternativPolicy: 'Alternatives Policy Sprachmodell',
    specialUsagePolicies: 'Spezielle Nutzungsbediengunen',
    volumeRestricted: 'Speicher Begrenzung',
    usedProtocols: 'Verwendete Protokolle',
    trl: 'Technologie Reifegrad',
    references: 'Referenzen',
    duration: '12 Monate',
    fte: '1',
    gui: 'GUI',
    itknowhow: 'IT-Know-How',
    support: 'Support',
    email: 'Connector-Email',
    contact: 'Connector-Kontakt',
    price: 'Preis €',
    score: '100%',
    link: (
      <Button
        variant='contained'
        sx={{
          mt: 3,
          ml: 1,
          backgroundColor: '#ffff00',
          color: '#000',
          '&:hover': {
            backgroundColor: '#ffff00',
            color: '#000',
          },
          borderRadius: '0%',
        }}
        href=''
      >
        Weiter
      </Button>
    ),
  },
];
export { Connectors };
