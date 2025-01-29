const flags = {
    korea: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png',
    isro: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png',
    jaxa: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png',
    uae: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png',
    esa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png'
}
const spacecraftList = [
    {
        id: 'ace',
        title: 'Advanced Composition Explorer',
        mission: 'solar wind',
        location: 'heliocentric',
        flag: null,
        launchdate: '1997-08-25',
        note: ''
    },
    {
        id: 'apm1',
        title: 'Astrobotic Peregrine 1',
        mission: 'Commercial Lunar Payload Services (CLPS',
        location: 'lunar',
        flag: null,
        launchdate: '2024-08-24',
        note: ''
    },
    {
        id: 'argo',
        title: 'ArgoMoon',
        mission: 'demo',
        location: 'deep space',
        flag: null,
        launchdate: '2022-11-16',
        note: ''
    },
    {
        id: 'atot',
        title: 'Advanced Tracking and Observational Techniques',
        mission: '',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'bepi',
        title: 'BepiColombo',
        mission: 'Mercury\'s magnetosphere',
        location: 'Mercury',
        flag: flags.esa,
        launchdate: '2018-10-20',
        note: ''
    },
    {
        id: 'bios',
        title: 'BioSentinel',
        mission: 'radiation impact on DNA',
        location: 'LEO',
        flag: null,
        launchdate: '2022-11-16',
        note: ''
    },
    {
        id: 'caps',
        title: 'CAPSTONE',
        mission: 'orbit stability test',
        location: 'lunar',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'cass', title: 'Testing', mission: 'maintenance', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'ch1',
        title: 'Chandrayaan-1',
        mission: 'lunar surface composition',
        location: 'lunar',
        flag: flags.isro,
        launchdate: '2008-10-22',
        note: ''
    },
    {
        id: 'ch2',
        title: 'Chandrayaan-2',
        mission: 'lunar surface composition',
        location: 'lunar',
        flag: flags.isro,
        launchdate: '2019-07-22',
        note: ''
    },
    {
        id: 'ch2l',
        title: 'Chandrayaan-2 Lander',
        mission: 'lunar surface composition',
        location: 'Moon\'s south pole',
        flag: flags.isro,
        launchdate: '2019-07-22',
        note: ''
    },
    {
        id: 'ch2o',
        title: 'Chandrayaan-2 Orbiter',
        mission: 'lunar surface composition',
        location: 'lunar',
        flag: flags.isro,
        launchdate: '2019-07-22',
        note: ''
    },
    {
        id: 'ch3',
        title: 'Chandrayaan-3',
        mission: 'lunar surface composition',
        location: 'Moon\'s south pole',
        flag: flags.isro,
        launchdate: '2023-07-14',
        note: ''
    },
    {
        id: 'chdr',
        title: 'Chandra Space Telescope',
        mission: 'X-ray Observatory',
        location: 'HEO',
        flag: null,
        launchdate: '1999-07-23',
        note: ''
    },
    {
        id: 'clu1',
        title: 'Cluster 1',
        mission: 'Earth\'s magnetosphere - solar wind interaction',
        location: 'LEO',
        flag: flags.esa,
        launchdate: '1996-06-04',
        note: ''
    },
    {
        id: 'clu2',
        title: 'Cluster 2',
        mission: 'Earth\'s magnetosphere - solar wind interaction',
        location: 'LEO',
        flag: flags.esa,
        launchdate: '1996-06-04',
        note: ''
    },
    {
        id: 'clu3',
        title: 'Cluster 3',
        mission: 'Earth\'s magnetosphere - solar wind interaction',
        location: 'LEO',
        flag: flags.esa,
        launchdate: '1996-06-04',
        note: ''
    },
    {
        id: 'clu4',
        title: 'Cluster 4',
        mission: 'Earth\'s magnetosphere - solar wind interaction',
        location: 'LEO',
        flag: flags.esa,
        launchdate: '1996-06-04',
        note: ''
    },
    {
        id: 'cue3',
        title: 'CU Earth Escape Explorer',
        mission: 'long-distance communications test',
        location: 'HEO',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'dsco',
        title: 'Deep Space Climate Observatory (DSCOVR)',
        mission: 'space weather',
        location: 'L1',
        flag: null,
        launchdate: '2015-02-11',
        note: ''
    },
    {id: 'dsn', title: 'Testing', mission: 'maintenance', location: '', flag: null, launchdate: '', note: ''},
    {id: 'dss', title: 'Testing', mission: 'maintenance', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'egs',
        title: 'EVN and Global Services',
        mission: 'very long baseline interferometry',
        location: 'radio astronomy',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'em1',
        title: 'Human Space Flight: Artemis I',
        mission: 'human return to the Moon',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'em2',
        title: 'Human Space Flight: Artemis II',
        mission: 'human return to the Moon',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'em3',
        title: 'Human Space Flight: Artemis III',
        mission: 'human return to the Moon',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'emm',
        title: 'Emirates Mars Mission (Hope)',
        mission: 'Mars atmosphere',
        location: 'Mars',
        flag: flags.uae,
        launchdate: '2020-07-19',
        note: ''
    },
    {
        id: 'equl',
        title: 'EQUilibriUm Lunar-Earth point 6U Spacecraft)',
        mission: 'mapping Earth plasmasphere',
        location: 'lunar',
        flag: flags.jaxa,
        launchdate: '',
        note: ''
    },
    {
        id: 'escg',
        title: 'Engineering and Science Contract Group',
        mission: '',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'eurc',
        title: 'Europa Clipper',
        mission: 'Europa\'s subsurface ocean',
        location: 'Jupiter (en-route)',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'gaia',
        title: 'Gaia',
        mission: 'mapping Milky Way',
        location: 'L2',
        flag: flags.esa,
        launchdate: '',
        note: ''
    },
    {
        id: 'gbra',
        title: 'Ground Based Radio Astronomy',
        mission: 'radio telescope',
        location: 'radio astronomy',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'go10',
        title: 'GOES 10',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '1997-04-25',
        note: ''
    },
    {
        id: 'go11',
        title: 'GOES 11',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '2000-05-03',
        note: ''
    },
    {
        id: 'go12',
        title: 'GOES 12',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '2001-07-23',
        note: ''
    },
    {
        id: 'go13',
        title: 'GOES 13',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '2006-05-24',
        note: ''
    },
    {
        id: 'go14',
        title: 'GOES 14',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '2009-06-27',
        note: ''
    },
    {
        id: 'go15',
        title: 'GOES 15',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '2010-04-04',
        note: ''
    },
    {
        id: 'go16',
        title: 'GOES 16',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '2016-11-19',
        note: ''
    },
    {
        id: 'go17',
        title: 'GOES 17',
        mission: 'Earth\'s weather',
        location: 'GEO',
        flag: null,
        launchdate: '2018-04-01',
        note: ''
    },
    {
        id: 'grla',
        title: 'Gravity Recovery And Interior Laboratory (Ebb)',
        mission: 'lunar interior & gravity',
        location: 'lunar',
        flag: null,
        launchdate: '2011-10-11',
        note: ''
    },
    {
        id: 'grlb',
        title: 'Gravity Recovery And Interior Laboratory (Flow)',
        mission: 'lunar interior & gravity',
        location: 'lunar',
        flag: null,
        launchdate: '2011-10-11',
        note: ''
    },
    {
        id: 'gssr',
        title: 'Solar System Radar',
        mission: 'NEO threat detection',
        location: 'radio astronomy',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'gvrt',
        title: 'GAVRT',
        mission: 'radio telescope',
        location: 'radio astronomy',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'hcra',
        title: 'Host Country Radio Astronomy',
        mission: 'radio telescope',
        location: 'radio astronomy',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'hmap',
        title: 'LunaH-Map',
        mission: 'search for lunar water ice',
        location: 'lunar',
        flag: null,
        launchdate: '2022-11-16',
        note: ''
    },
    {
        id: 'hst',
        title: 'Hubble Space Telescope',
        mission: 'space telescope',
        location: 'LEO',
        flag: null,
        launchdate: '1990-04-24',
        note: ''
    },
    {
        id: 'hyb2',
        title: 'Hayabusa-2',
        mission: 'solar system formation',
        location: 'asteroid 1998 KY (en-route)',
        flag: flags.jaxa,
        launchdate: '2014-12-03',
        note: ''
    },
    {
        id: 'icps',
        title: 'Interim Cryogenic Propulsion Stage',
        mission: '',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'imag',
        title: 'Magnetopause-to-Aurora Global Exploration',
        mission: 'Earth\'s magnetosphere',
        location: 'LEO',
        flag: null,
        launchdate: '2000-04-25',
        note: ''
    },
    {
        id: 'intg',
        title: 'International Gamma-ray Astrophysics Laboratory',
        mission: 'X-Ray/Gamma-Ray',
        location: 'LEO',
        flag: null,
        launchdate: '2002-10-17',
        note: ''
    },
    {
        id: 'jno',
        title: 'Juno',
        mission: 'Jupiter\'s magnetosphere',
        location: 'Jupiter',
        flag: null,
        launchdate: '2011-08-05',
        note: ''
    },
    {id: 'jnsa', title: 'Janus A', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'jnsb', title: 'Janus B', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'jwst',
        title: 'James Webb Space Telescope',
        mission: 'early universe',
        location: 'L2',
        flag: null,
        launchdate: '2021-12-25',
        note: ''
    },
    {
        id: 'kplo',
        title: 'Korea Pathfinder Lunar Orbiter',
        mission: 'demonstration',
        location: 'lunar',
        flag: flags.korea,
        launchdate: '2022-08-04',
        note: ''
    },
    {
        id: 'lade',
        title: 'Lunar Atmosphere and Dust Environment Explorer',
        mission: 'Moon\'s atmosphere',
        location: 'Lunar',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'lnd1',
        title: 'Lunar Node 1',
        mission: 'demonstration, lunar surface imaging',
        location: 'lunar',
        flag: null,
        launchdate: '2024-02-15',
        note: ''
    },
    {
        id: 'lro',
        title: 'Lunar Reconnaissance Orbiter',
        mission: 'mapping the Moon',
        location: 'lunar',
        flag: null,
        launchdate: '2009-06-18',
        note: ''
    },
    {
        id: 'lucy',
        title: 'Lucy',
        mission: 'trojan asteroids',
        location: 'en-route',
        flag: null,
        launchdate: '2021-10-16',
        note: ''
    },
    {
        id: 'lunah-map',
        title: 'Lunar Hydrogen MAPper',
        mission: 'search for lunar water ice',
        location: 'lunar',
        flag: null,
        launchdate: '2022-11-16',
        note: ''
    },
    {
        id: 'm01o',
        title: 'Mars Odyssey',
        mission: 'Mars atmosphere',
        location: 'geology',
        flag: flags.Mars,
        launchdate: '2001-04-07',
        note: 'acts as a relay for Mars rovers and landers'
    },
    {
        id: 'm01s',
        title: 'Mars Odyssey',
        mission: 'climate',
        location: 'geology',
        flag: flags.Mars,
        launchdate: '2001-04-07',
        note: 'acts as a relay for Mars rovers and landers'
    },
    {
        id: 'm20',
        title: 'Mars 2020 (Perseverance)',
        mission: 'Mars rover',
        location: 'Mars',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'map', title: 'WMAP', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'mcoa', title: 'MarCO A', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'mcob', title: 'MarCO B', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'mer1', title: 'Opportunity', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'mer2', title: 'Spirit', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'mex', title: 'Mars Express', mission: '', location: 'Mars', flag: null, launchdate: '', note: ''},
    {id: 'mgs', title: 'Mars Global Surveyor', mission: '', location: 'Mars', flag: null, launchdate: '', note: ''},
    {id: 'mlic', title: 'Lunar IceCube', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'mms1',
        title: 'Magnetospheric Multiscale Mission 1',
        mission: 'Earth\'s magnetosphere',
        location: 'HEO',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'mms2',
        title: 'Magnetospheric Multiscale Mission 2',
        mission: 'Earth\'s magnetosphere',
        location: 'HEO',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'mms3',
        title: 'Magnetospheric Multiscale Mission 3',
        mission: 'Earth\'s magnetosphere',
        location: 'HEO',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'mms4',
        title: 'Magnetospheric Multiscale Mission 4',
        mission: 'Earth\'s magnetosphere',
        location: 'HEO',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'mom', title: 'Mars Orbiter Mission', mission: '', location: 'Mars', flag: null, launchdate: '', note: ''},
    {
        id: 'mro',
        title: 'Mars Reconnaissance Orbiter',
        mission: 'climate & geology',
        location: 'Mars',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'mros',
        title: 'Mars Reconnaissance Orbiter',
        mission: 'climate & geology',
        location: 'Mars',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'msgr', title: 'MESSENGER', mission: '', location: 'Mercury', flag: null, launchdate: '', note: ''},
    {
        id: 'msl',
        title: 'Mars Science Laboratory (Curiosity)',
        mission: 'rover',
        location: 'Mars',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'musc', title: 'Hayabusa', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'mvn', title: 'MAVEN', mission: 'atmosphere', location: 'Mars', flag: null, launchdate: '', note: ''},
    {id: 'neas', title: 'Near Earth Asteroid Scout', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'nhpc',
        title: 'New Horizons',
        mission: '',
        location: 'Pluto/Kuiper Belt',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'no15', title: 'NOAA 15', mission: 'weather', location: 'Earth', flag: null, launchdate: '', note: ''},
    {id: 'no16', title: 'NOAA 16', mission: 'weather', location: 'Earth', flag: null, launchdate: '', note: ''},
    {id: 'no17', title: 'NOAA 17', mission: 'weather', location: 'Earth', flag: null, launchdate: '', note: ''},
    {id: 'no18', title: 'NOAA 18', mission: 'weather', location: 'Earth', flag: null, launchdate: '', note: ''},
    {
        id: 'nsyt',
        title: 'InSight',
        mission: 'geology & atmosphere',
        location: 'Mars surface',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'olin', title: 'SWARM-EX', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'omot', title: 'OMOTENASHI', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'orx',
        title: 'OSIRIS-REx',
        mission: 'small body sample',
        location: 'asteroid Apophis (en-route)',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'phx', title: 'Phoenix', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'plc', title: 'Akatsuki', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'polr', title: 'POLAR', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'psyc',
        title: 'Psyche',
        mission: 'planet formation',
        location: 'Asteroid 16 Psyche (en-route',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'rd1', title: 'Red Dragon 1', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'rfc', title: 'Reference Frame Calibration', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'rose', title: 'Rosetta', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'rp', title: 'Resource Prospector', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'rsp',
        title: 'ExoMars Rover and Surface Platform',
        mission: '',
        location: '',
        flag: flags.esa,
        launchdate: '',
        note: ''
    },
    {
        id: 'rsts',
        title: 'Resource System Time Sharing',
        mission: '',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'sdu', title: 'Stardust', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'sele', title: 'Kaguya', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'sgp', title: 'Space Geodesy Program', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'slim',
        title: 'Smart Lander for Investigating Moon',
        mission: '',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'soho',
        title: 'SOlar Heliophisics Observatory',
        mission: 'heliophysics',
        location: 'L1',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'spil', title: 'Beresheet', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'spp',
        title: 'Parker Solar Probe',
        mission: 'Sun\'s corona',
        location: 'HEO',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'sta', title: 'STEREO A', mission: 'heliophysics', location: 'trojan', flag: null, launchdate: '', note: ''},
    {id: 'stab', title: 'STEREO B', mission: 'heliophysics', location: 'trojan', flag: null, launchdate: '', note: ''},
    {id: 'stb', title: 'STEREO B', mission: 'heliophysics', location: 'trojan', flag: null, launchdate: '', note: ''},
    {id: 'stf', title: 'Spitzer Space Telescope', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'td10', title: 'TDRS 10', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'td11', title: 'TDRS 11', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'td12', title: 'TDRS 12', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'td13', title: 'TDRS 13', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr1', title: 'TDRS 1', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr3', title: 'TDRS 3', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr4', title: 'TDRS 4', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr5', title: 'TDRS 5', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr6', title: 'TDRS 6', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr7', title: 'TDRS 7', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr8', title: 'TDRS 8', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'tdr9', title: 'TDRS 9', mission: '', location: 'LEO', flag: null, launchdate: '', note: ''},
    {id: 'terr', title: 'TERRA', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'tess',
        title: 'Transiting Exoplanet Survey Satellite',
        mission: '',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'tgo',
        title: 'Trace Gas Orbiter',
        mission: 'atmosphere',
        location: 'Mars',
        flag: flags.esa,
        launchdate: '',
        note: ''
    },
    {
        id: 'thb',
        title: 'THEMIS B',
        mission: 'Earth\'s magnetosphere',
        location: 'LEO',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'thc', title: 'THEMIS C', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'tm', title: 'Team Miles', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'tmm', title: 'Team Miles', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'ulys', title: 'Ulysses', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'vex', title: 'Venus Express', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {
        id: 'vgr1',
        title: 'Voyager 1',
        mission: 'beyond the solar system',
        location: 'interstellar',
        flag: null,
        launchdate: '',
        note: ''
    },
    {
        id: 'vgr2',
        title: 'Voyager 2',
        mission: 'beyond the solar system',
        location: 'interstellar',
        flag: null,
        launchdate: '',
        note: ''
    },
    {id: 'vlbi', title: 'V.L.B. Interferometry', mission: '', location: '', flag: null, launchdate: '', note: ''},
    {id: 'wind', title: 'WIND', mission: 'solar wind', location: 'L1', flag: null, launchdate: '', note: ''},
    {
        id: 'xmm',
        title: 'X-ray Multi-Mirror Mission (XMM-Newton)',
        mission: '',
        location: '',
        flag: null,
        launchdate: '',
        note: ''
    },
]
const spacecraftMap = spacecraftList.reduce((result, dict) => {
    result[dict.id] = dict;
    result[dict.id].last_dish = null;
    result[dict.id].last_site = null;
    result[dict.id].total_down = 0;
    result[dict.id].first_seen = null;
    result[dict.id].total_sec = 10; // seed at refresh rate
    return result;
}, {});
