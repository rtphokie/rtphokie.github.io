const flags = {
korea: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png',
isro: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png',
jaxa: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png',
uae: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png',
italy: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png',
esa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png'
}
const spacecraftList =[
 {id: 'ace', title: 'Advanced Composition Explorer', mission: 'solar wind and cosmic rays', flag: null, launchdate: '1997-08-25', note: 'ACE is positioned between the Earth and Sun at the L1 point, 1 million miles from Earth'},
 {id: 'apm1', title: 'Astrobotic Peregrine 1', mission: 'Commercial Lunar Payload Services (CLPS', flag: null, launchdate: '2024-08-24', note: 'The Astrobotic Peregrine 1 lander carried 20 payloads, including NASA instruments, commercial technology experiments, and memorial items.'},
 {id: 'atot', title: 'Advanced Tracking and Observational Techniques', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'bepi', title: 'BepiColombo', mission: 'Mercury\'s magnetosphere & surface composition', flag: flags.esa, launchdate: '2018-10-20', note: 'BepiColombo is curently on its way to Mercury, named for the Italian scientists for his contributions to the understanding of Mercury\'s orbit'},
 {id: 'bios', title: 'BioSentinel', mission: 'radiation impact on DNA', flag: null, launchdate: '2022-11-16', note: 'BioSentinel uses yeast cells in testing how deep-space radiation will affect humans'},
 {id: 'caps', title: 'CAPSTONE', mission: 'navigation and positioning between the Earth and Moon', flag: null, launchdate: '2022-06-28', note: 'CAPSTONE is a cubesat launched from Wallops Island, VA to test navigation techniques for the Artemis program'},
 {id: 'cass', title: 'Testing', mission: 'maintenance', flag: null, launchdate: '', note: ''},
 {id: 'ch2', title: 'Chandrayaan-2', mission: 'study the Moon\'s surface, composition, and exosphere', flag: flags.isro, launchdate: '2019-07-22', note: 'Chandrayaan-2 was India\'s second lunar probe'},
 {id: 'ch2l', title: 'Chandrayaan-2 Lander', mission: 'study the Moon\'s south pole', flag: flags.isro, launchdate: '2019-07-22', note: 'Chandrayaan-2 was India\'s second lunar probe'},
 {id: 'ch2o', title: 'Chandrayaan-2 Orbiter', mission: 'study the Moon\'s surface, composition, and exosphere', flag: flags.isro, launchdate: '2019-07-22', note: 'Chandrayaan-2 was India\'s second lunar probe'},
 {id: 'ch3', title: 'Chandrayaan-3', mission: 'lunar surface composition', flag: flags.isro, launchdate: '2023-07-14', note: 'India is the first country to successfully soft land on the Moon\'s south pole with Chandrayaan-3'},
 {id: 'chdr', title: 'Chandra Space Telescope', mission: 'X-Ray space telescope', flag: null, launchdate: '1999-07-23', note: ''},
 {id: 'clu1', title: 'Cluster 1', mission: 'Earth\'s magnetosphere & solar wind interaction', flag: flags.esa, launchdate: '1996-06-04', note: 'The Cluster mission consists of four spacraft named Rumba, Salsa, Merengue, and Tango'},
 {id: 'clu2', title: 'Cluster 2', mission: 'Earth\'s magnetosphere & solar wind interaction', flag: flags.esa, launchdate: '1996-06-04', note: 'The Cluster mission consists of four spacraft named Rumba, Salsa, Merengue, and Tango'},
 {id: 'clu3', title: 'Cluster 3', mission: 'Earth\'s magnetosphere & solar wind interaction', flag: flags.esa, launchdate: '1996-06-04', note: 'The Cluster mission consists of four spacraft named Rumba, Salsa, Merengue, and Tango'},
 {id: 'clu4', title: 'Cluster 4', mission: 'Earth\'s magnetosphere & solar wind interaction', flag: flags.esa, launchdate: '1996-06-04', note: 'The Cluster mission consists of four spacraft named Rumba, Salsa, Merengue, and Tango'},
 {id: 'cue3', title: 'CU Earth Escape Explorer', mission: 'long-distance communications test', flag: null, launchdate: '', note: ''},
 {id: 'dsco', title: 'Deep Space Climate Observatory (DSCOVR)', mission: 'space weather', flag: null, launchdate: '2015-02-11', note: 'DSCOVR is a joint NASA/NOAA mission which provides the final warning before solar storms reach Earth'},
 {id: 'dsn', title: 'Testing', mission: 'maintenance', flag: null, launchdate: '', note: ''},
 {id: 'dss', title: 'Testing', mission: 'maintenance', flag: null, launchdate: '', note: ''},
 {id: 'egs', title: 'EVN and Global Services', mission: 'very long baseline interferometry', flag: null, launchdate: '', note: ''},
 {id: 'em1', title: 'Human Space Flight: Artemis I', mission: 'human return to the Moon', flag: null, launchdate: '', note: ''},
 {id: 'em2', title: 'Human Space Flight: Artemis II', mission: 'human return to the Moon', flag: null, launchdate: '', note: ''},
 {id: 'em3', title: 'Human Space Flight: Artemis III', mission: 'human return to the Moon', flag: null, launchdate: '', note: ''},
 {id: 'emm', title: 'Emirates Mars Mission (Hope)', mission: 'Mars atmosphere', flag: flags.uae, launchdate: '2020-07-19', note: 'The Emirates Mars Mission (also known as Hope Probe) is the United Arab Emirates\' (UAE) first interplanetary mission'},
 {id: 'equl', title: 'EQUilibriUm Lunar-Earth point 6U Spacecraft)', mission: 'Lagrange Point 1', flag: flags.jaxa , launchdate: '2022-10-01', note: 'EQUULEUS studies Lagrange Point 1 (L1), where the gravitational forces between the Earth and Moon balance'},
 {id: 'escg', title: 'Engineering and Science Contract Group', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'eurc', title: 'Europa Clipper', mission: 'Europa\'s subsurface ocean', flag: null, launchdate: '2024-10-14', note: 'Europa is considered one of the most promising places to search for signs of life beyond Earth due to its subsurface ocean beneath an icy crust.'},
 {id: 'gaia', title: 'Gaia', mission: 'mapping the Milky Way', flag: flags.esa , launchdate: '2013-12-19', note: 'Ended scientific operations 2025-01-15, operated at L2 point where JWST also orbits'},
 {id: 'gbra', title: 'Ground Based Radio Astronomy', mission: 'radio telescope', flag: null, launchdate: '', note: ''},
 {id: 'go16', title: 'Geostationary Operational Environmental Satellite (GOES-16)', mission: 'Earth\'s weather', flag: null, launchdate: '2016-11-19', note: 'GOES 16 (GOES East) is in geosyncronous orbit providing the weather images you see on the evening news'},
 {id: 'go17', title: 'Geostationary Operational Environmental Satellite (GOES-17)', mission: 'Earth\'s weather', flag: null, launchdate: '2018-04-01', note: 'GOES 16 (GOES West) is in geosyncronous orbit providing the weather images you see on the evening news'},
 {id: 'gssr', title: 'Solar System Radar', mission: 'NEO threat detection', flag: null, launchdate: '', note: 'Solar System Radar uses multiple DSN dishes to discover asteroids and other near Earth objects'},
 {id: 'gvrt', title: 'GAVRT', mission: 'radio telescope', flag: null, launchdate: '', note: ''},
 {id: 'hcra', title: 'Host Country Radio Astronomy', mission: 'radio telescope', flag: null, launchdate: '', note: ''},
 {id: 'hmap', title: 'LunaH-Map', mission: 'search for lunar water ice', flag: null, launchdate: '2022-11-16', note: 'LunaH-Map helps scientists better understand the distribution of hydrogen on the Moon'},
 {id: 'hst', title: 'Hubble Space Telescope', mission: 'space telescope', flag: null, launchdate: '1990-04-24', note: 'The Hubble Space Telescope is about the size of a school bus'},
 {id: 'imag', title: 'Magnetopause-to-Aurora Global Exploration', mission: 'Earth\'s magnetosphere', flag: null, launchdate: '2000-04-25', note: ''},
 {id: 'intg', title: 'International Gamma-ray Astrophysics Laboratory', mission: 'X-Ray/Gamma-Ray', flag: null, launchdate: '2002-10-17', note: ''},
 {id: 'jno', title: 'Juno', mission: 'Jupiter\'s magnetosphere', flag: null, launchdate: '2011-08-05', note: ''},
 {id: 'jnsa', title: 'Janus A', mission: 'study  near-Earth asteroids', flag: null, launchdate: '2022-10-20', note: ''},
 {id: 'jnsb', title: 'Janus B', mission: 'study  near-Earth asteroids', flag: null, launchdate: '2022-10-20', note: ''},
 {id: 'jwst', title: 'James Webb Space Telescope', mission: 'early universe', flag: null, launchdate: '2021-12-25', note: ''},
 {id: 'kplo', title: 'Korea Pathfinder Lunar Orbiter', mission: 'lunar orbiter', flag: flags.korea , launchdate: '2022-08-04', note: ''},
 {id: 'lnd1', title: 'Lunar Node 1', mission: 'lunar surface imaging', flag: null, launchdate: '2024-02-15', note: ''},
 {id: 'lro', title: 'Lunar Reconnaissance Orbiter', mission: 'mapping the Moon', flag: null, launchdate: '2009-06-18', note: ''},
 {id: 'lucy', title: 'Lucy', mission: 'trojan asteroids', flag: null, launchdate: '2021-10-16', note: ''},
 {id: 'lunah-map', title: 'Lunar Hydrogen MAPper', mission: 'search for lunar water ice', flag: null, launchdate: '2022-11-16', note: ''},
 {id: 'm01o', title: 'Mars Odyssey', mission: 'Mars atmosphere', flag: null, launchdate: '2001-04-07', note: 'acts as a relay for Mars rovers and landers'},
 {id: 'm01s', title: 'Mars Odyssey', mission: 'Mars climate', flag: null, launchdate: '2001-04-07', note: 'The Mars Reconnaissance Orbiter (MRO) acts as a relay for Mars rovers and landers'},
 {id: 'm20', title: 'Mars 2020 (Perseverance)', mission: 'Mars rover gathering samples for return', flag: null, launchdate: '2020-07-30', note: 'The Perseverance Mars rover was named by Thomas Zurbuchen, an elementary school student in Burke, VA'},
 {id: 'mex', title: 'Mars Express', mission: 'searching for subsurface water from Mars orbit', flag: flags.esa, launchdate: '2003-06-02', note: 'Mars Express was the first mission to another planet by the  European Space Agency (ESA)'},
 {id: 'mlic', title: 'Lunar IceCube', mission: 'studies the distribution of water ice on the Moon', flag: null, launchdate: '2022-11-16', note: 'understanding the availability and distribution of water on the Moon is crucial for future human missions'},
 {id: 'mms1', title: 'Magnetospheric Multiscale Mission 1', mission: 'Earth\'s magnetosphere', flag: null, launchdate: '2015-03-12', note: 'MMS studies  the processes of magnetic reconnection of Earth\'s magnetic field and  charged particles  in the upper atmosphere'},
 {id: 'mms2', title: 'Magnetospheric Multiscale Mission 2', mission: 'Earth\'s magnetosphere', flag: null, launchdate: '2015-03-12', note: '/in reg'},
 {id: 'mms3', title: 'Magnetospheric Multiscale Mission 3', mission: 'Earth\'s magnetosphere', flag: null, launchdate: '2015-03-12', note: 'MMS studies  the processes of magnetic reconnection of Earth\'s magnetic field and  charged particles  in the upper atmosphere'},
 {id: 'mms4', title: 'Magnetospheric Multiscale Mission 4', mission: 'Earth\'s magnetosphere', flag: null, launchdate: '2015-03-12', note: 'MMS studies  the processes of magnetic reconnection of Earth\'s magnetic field and  charged particles  in the upper atmosphere'},
 {id: 'mom', title: 'Mars Orbiter Mission (Mangalyaan)', mission: 'studying Mars surface', flag: flags.isro, launchdate: '2013-11-05', note: 'The Mars Orbiter Mission is India\'s first mission to another planet.'},
 {id: 'mro', title: 'Mars Reconnaissance Orbiter', mission: 'Mars climate, geology, & surface mapping', flag: null, launchdate: '2005-08-12', note: 'The Mars Reconnaissance Orbiter (MRO) acts as a relay for Mars rovers and landers'},
 {id: 'mros', title: 'Mars Reconnaissance Orbiter', mission: 'Mars climate, geology, & surface mapping', flag: null, launchdate: '2005-08-12', note: 'The Mars Reconnaissance Orbiter (MRO) acts as a relay for Mars rovers and landers'},
 {id: 'msl', title: 'Mars Science Laboratory (Curiosity)', mission: 'Mars rover studying geology and weather', flag: null, launchdate: '2011-11-26', note: 'The Mars Curiosity Rover is the size of a SUV'},
 {id: 'mvn', title: 'Mars Atmosphere and Volatile EvolutioN (MAVEN)', mission: 'Mars\' atmosphere', flag: null, launchdate: '2013-11-18', note: 'MAVEN is measuring composition of Mars atmosphere over time to answer the question "where it goe?"'},
 {id: 'neas', title: 'Near Earth Asteroid Scout', mission: 'image a a near-Earth asteroid', flag: null, launchdate: '', note: 'The Near Earth Asteroid Scout is the size of a shoebox and powered by a solar sail'},
 {id: 'nhpc', title: 'New Horizons', mission: 'Pluto and on to object in the Kuiper Belt', flag: null, launchdate: '2006-01-19', note: 'New Horizons returned the first detailed images of Pluto\'s surface'},
 {id: 'olin', title: 'SWARM-EX', mission: 'Earth\'s magnetic field interactions with space', flag: null, launchdate: '', note: ''},
 {id: 'omot', title: 'Outstanding MOon exploration TEchnologies (OMOTENASHI)', mission: 'low cost lunar lander', flag: flags.jaxa , launchdate: '2022-11-16', note: 'OMOTENASHI tests  miniaturization of spacecraft systems for efficient, low-cost lunar exploration.'},
 {id: 'orx', title: 'Origins, Spectral Interpretation, Resource Identification, Security, Regolith Explorer (OSIRIS-Rex)', mission: 'asteroid sample and return', flag: null, launchdate: '2016-09-08', note: 'Gathered and returned samples from asteroid Bennu'},
 {id: 'plc', title: 'Venus Climate Orbiter (Akatsuki)', mission: 'study the atmosphere of Venus', flag: flags.jaxa , launchdate: '2010-05-20', note: 'The Akatsuki team overcame significant issues with the spacecraft engines to collect valuable data about Venus'},
 {id: 'psyc', title: 'Psyche', mission: 'studying the asteroid 16 Psyche', flag: null, launchdate: '2023-10-23', note: 'The Psyche mission is  helping scientists learn more about planetary formation and the role of metal-rich bodies in the early solar system'},
 {id: 'rd1', title: 'Red Dragon 1', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'rfc', title: 'Reference Frame Calibration', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'rsp', title: 'ExoMars Rover and Surface Platform', mission: 'Mars\' atmosphere, weather, and geological history.', flag: flags.esa, launchdate: '', note: 'The ExoMars program is a collaboration between the ESA and Roscosmos to search for signs of past life on Mars'},
 {id: 'rsts', title: 'Resource System Time Sharing', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'sgp', title: 'Space Geodesy Program', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'soho', title: 'SOlar Heliophisics Observatory', mission: 'Sun\'s structure and activity from core to corona', flag: null, launchdate: '1995-12-02', note: 'The LASCO instrument aboard The Solar and Heliospheric Observatory (SOHO) has discovered more than 5,000 comets'},
 {id: 'spp', title: 'Parker Solar Probe', mission: 'solar wind, solar activity, and the Sun\'s outer atmosphere.', flag: null, launchdate: '2018-08-12', note: 'The Parker Solar Probe travels closer to the Sun than any previous spacecraft'},
 {id: 'sta', title: 'STEREO A', mission: 'structure and evolution of solar storms', flag: null, launchdate: '2006-10-25', note: 'STEREO-A orbited the Sun slightly inside Earth\'s orbit, while STEREO-B orbited slightly outside.'},
 {id: 'stab', title: 'STEREO B', mission: 'structure and evolution of solar storms', flag: null, launchdate: '2006-10-25', note: ''},
 {id: 'tha', title: 'Themis A', mission: 'Earth\'s magnetosphere', flag: null, launchdate: '2007-02-17', note: ''},
 {id: 'thb', title: 'Themis B', mission: 'Earth\'s magnetosphere', flag: null, launchdate: '2007-02-17', note: ''},
 {id: 'td10', title: 'TDRS 10', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'td11', title: 'TDRS 11', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'td12', title: 'TDRS 12', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'td13', title: 'TDRS 13', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr1', title: 'TDRS 1', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr3', title: 'TDRS 3', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr4', title: 'TDRS 4', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr5', title: 'TDRS 5', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr6', title: 'TDRS 6', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr7', title: 'TDRS 7', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr8', title: 'TDRS 8', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tdr9', title: 'TDRS 9', mission: 'Tracking Data Relay Satellite', flag: null, launchdate: '', note: ''},
 {id: 'tess', title: 'Transiting Exoplanet Survey Satellite', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'tgo', title: 'Trace Gas Orbiter', mission: 'search for methane in Mars atmosphere', flag: flags.esa, launchdate: '2016-03-14', note: 'TGO\'s instruments are sensitive enough to detect even small amounts of methane, clues to ongoing or past biological activity.'},
 {id: 'tm', title: 'Team Miles', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'tmm', title: 'Team Miles', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'vgr1', title: 'Voyager 1', mission: 'exploring cosmic rays, charged particle, plasma, and magnetic fields in interstellar space', flag: null, launchdate: '1977-09-05', note: 'Voyager 1 is the most distant human-made object. 6/10 instruments were powered down over the years to extend the mission. Voyager 1 entered intersteller space in August 2012.'},
 {id: 'vgr2', title: 'Voyager 2', mission: 'exploring cosmic rays, charged particle, plasma, and magnetic fields in interstellar space', flag: null, launchdate: '1977-08-20', note: 'Voyager 2 provided the only closeup images of Neptune. 6/10 instruments were powered down over the years to extend the mission.'},
 {id: 'vlbi', title: 'V.L.B. Interferometry', mission: '', flag: null, launchdate: '', note: ''},
 {id: 'wind', title: 'WIND', mission: 'solar wind', flag: null, launchdate: '1994-11-01', note: 'WIND studies the solar wind at the L1 point between the Earth and Sun'},
 {id: 'xmm', title: 'X-ray Multi-Mirror Mission (XMM-Newton)', mission: 'X-Ray space telescope', flag: flags.esa, launchdate: '1999-12-10', note: 'The XMM-Newton Space Telescope is named for physicist Isaac Newton in recognition of his groundbreaking work on gravitational theory'},
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
