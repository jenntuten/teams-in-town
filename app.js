let league;
        $('.choose').on('click', function () {
            console.log('choose clicked');
            league = $('.leagueSelector').val();
            console.log('league', league);
            if (league === "NBA") {
                $('.teamOptions').html(`<select class='teamSelector' name='ChooseTeam'>
                <option value='selection'>Select an NBA team</option>
                <option value='atlanta-hawks'>Atlanta Hawks</option>
                <option value='boston-celtics'>Boston Celtics</option>
                <option value='brooklyn-nets'>Brooklyn Nets</option>
                <option value='charlotte-hornets'>Charlotte Hornets</option>
                <option value='chicago-bulls'>Chicago Bulls</option>
                <option value='cleveland-cavaliers'>Cleveland Cavaliers</option>
                <option value='dallas-mavericks'>Dallas Mavericks</option>
                <option value='denver-nuggets'>Denver Nuggets</option>
                <option value='detroit-pistons'>Detroit Pistons</option>
                <option value='golden-state-warriors'>Golden State Warriors</option>
                <option value='houston-rockets'>Houston Rockets</option>
                <option value='indiana-pacers'>Indiana Pacers</option>
                <option value='los-angeles-clippers'>LA Clippers</option>
                <option value='los-angeles-lakers'>Los Angeles Lakers</option>
                <option value='memphis-grizzlies'>Memphis Grizzlies</option>
                <option value='miami-heat'>Miami Heat</option>
                <option value='milwaukee-bucks'>Milwaukee Bucks</option>
                <option value='minnesota-timberwolves'>Minnesota Timberwolves</option>
                <option value='new-orleans-pelicans'>New Orleans Pelicans</option>
                <option value='new-york-knicks'>New York Knicks</option>
                <option value='oklahoma-city-thunder'>Oklahoma City Thunder</option>
                <option value='orlando-magic'>Orlando Magic</option>
                <option value='philadelphia-76ers'>Philadelphia 76ers</option>
                <option value='phoenix-suns'>Phoenix Suns</option>
                <option value='portland-trail-blazers'>Portland Trail Blazers</option>
                <option value='sacramento-kings'>Sacramento Kings</option>
                <option value='san-antonio-spurs'>San Antonio Spurs</option>
                <option value='toronto-raptors'>Toronto Raptors</option>
                <option value='utah-jazz'>Utah Jazz</option>
                <option value='washington-wizards'>Washington Wizards</option>
                </select>`)
            }
            if (league === "NFL") {
                $('.teamOptions').html(`<select class='teamSelector' name='ChooseTeam'>
                <option value='selection'>Select an NFL team</option>
                <option value='arizona-cardinals'>Arizona Cardinals</option>
                <option value='atlanta-falcons'>Atlanta Falcons</option>
                <option value='baltimore-ravens'>Baltimore Ravens</option>
                <option value='buffalo-bills'>Buffalo Bills</option>
                <option value='carolina-panthers'>Carolina Panthers</option>
                <option value='chicago-bears'>Chicago Bears</option>
                <option value='cincinnati-bengals'>Cincinnati Bengals</option>
                <option value='cleveland-browns'>Cleveland Browns</option>
                <option value='dallas-cowboys'>Dallas Cowboys</option>
                <option value='denver-broncos'>Denver Broncos</option>
                <option value='detroit-lions'>Detroit Lions</option>
                <option value='green-bay-packers'>Green Bay Packers</option>
                <option value='houston-texans'>Houston Texans</option>
                <option value='indianapolis-colts'>Indianapolis Colts</option>
                <option value='jacksonville-jaguars'>Jacksonville Jaguars</option>
                <option value='kansas-city-chiefs'>Kansas City Chiefs</option>
                <option value='los-angeles-chargers'>Los Angeles Chargers</option>
                <option value='los-angeles-rams'>Los Angeles Rams</option>
                <option value='miami-dolphins'>Miami Dolphins</option>
                <option value='minnesota-vikings'>Minnesota Vikings</option>
                <option value='new-england-patriots'>New England Patriots</option>
                <option value='new-orleans-saints'>New Orleans Saints</option>
                <option value='new-york-giants'>New York Giants</option>
                <option value='new-york-jets'>New York Jets</option>
                <option value='oakland-raiders'>Oakland Raiders</option>
                <option value='philadelphia-eagles'>Philadelphia Eagles</option>
                <option value='pittsburgh-steelers'>Pittsburgh Steelers</option>
                <option value='san-francisco-49ers'>San Francisco 49ers</option>
                <option value='seattle-seahawks'>Seattle Seahawks</option>
                <option value='tampa-bay-buccaneers'>Tampa Bay Buccaneers</option>
                <option value='tennessee-titans'>Tennessee Titans</option>
                <option value='washington-redskins'>Washington Redskins</option>
                </select>`)
            }
            if (league === "NHL") {
                $('.teamOptions').html(`<select class='teamSelector' name='ChooseTeam'>
                <option value='selection'>Select an NHL team</option>
                <option value='anaheim-ducks'>Anaheim Ducks</option>
                <option value='arizona-coyotes'>Arizona Coyotes</option>
                <option value='boston-bruins'>Boston Bruins</option>
                <option value='buffalo-sabres'>Buffalo Sabres</option>
                <option value='calgary-flames'>Calgary Flames</option>
                <option value='carolina-hurricanes'>Carolina Hurricanes</option>
                <option value='chicago-blackhawks'>Chicago Blackhawks</option>
                <option value='colorado-avalanche'>Colorado Avalanche</option>
                <option value='columbus-blue-jackets'>Columbus Blue Jackets</option>
                <option value='dallas-stars'>Dallas Stars</option>
                <option value='detroit-red-wings'>Detroit Red Wings</option>
                <option value='edmonton-oilers'>Edmonton Oilers</option>
                <option value='florida-panthers'>Florida Panthers</option>
                <option value='los-angeles-kings'>Los Angeles Kings</option>
                <option value='minnesota-wild'>Minnesota Wild</option>
                <option value='montreal-canadiens'>Montreal Canadiens</option>
                <option value='nashville-predators'>Nashville Predators</option>
                <option value='new-jersey-devils'>New Jersey Devils</option>
                <option value='new-york-islanders'>New York Islanders</option>
                <option value='new-york-rangers'>New York Rangers</option>
                <option value='ottawa-senators'>Ottawa Senators</option>
                <option value='philadelphia-flyers'>Philadelphia Flyers</option>
                <option value='pittsburgh-penguins'>Pittsburgh Penguins</option>
                <option value='san-jose-sharks'>San Jose Sharks</option>
                <option value='st-louis-blues'>St. Louis Blues</option>
                <option value='tampa-bay-lightning'>Tampa Bay Lightning</option>
                <option value='toronto-maple-leafs'>Toronto Maple Leafs</option>
                <option value='vancouver-canucks'>Vancouver Canucks</option>
                <option value='vegas-golden-knights'>Vegas Golden Knights</option>
                <option value='washington-capitals'>Washington Capitals</option>
                <option value='winnipeg-jets'>Winnipeg Jets</option>
                </select>`)
            }
        })
        console.log('league', league)
        
        $(window).resize(function () {
            if ($(window).width() <= 6000) $('.td').addClass("p");
            else $('.td').removeClass("p");
        });

        let theGames;
        let lessThan;
        //Get user team's coordinates for distance function.
        let teamName;
        let firstLatitude;
        let firstLongitude;
        let userLat;
        let userLon;
        let n = null;
        let userLatitude;
        let userLongitude;

        $('.submit').on('click', function () {

            let userDist = $('.userDist').val()
            console.log('userDist',userDist)
            let userZip = $('.zip').val();
            console.log('userZip', userZip);
            /*if (userDist = NaN) {
              console.log('invalid distance')
            }
            if (userZip.length !=5) {
                console.log('invalid zip code');
                $('.table').html("Please fill out all fields!")
            }*/
            

            let placeUrl = "https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=us&postalCode=" + userZip + "&key=6ZjigwGGx4YCL1iYYttvgO5TIAwXFL17";
            console.log(placeUrl)
            $.ajax({
                url: placeUrl,
                method: "GET"
            }).then(data2 => {
                userLatitude = data2.results[0].position.lat;
                console.log('userLatitude', userLatitude)
                userLongitude = data2.results[0].position.lon;
                console.log('userLongitude', userLongitude)
                let url = "https://places.cit.api.here.com/places/v1/autosuggest?at=" + userLatitude + "," + userLongitude + "&q=goodwill&app_id=fYrrvBAlqXvmPoQalRfh&app_code=bYQ6P3Z6w2bfK5mxckdHgg";
                console.log(url);
                $.ajax({
                    url: url,
                    method: "GET"
                }).then(data => {
                    //console.log(data)
                })

                let userTeam = $('.teamSelector').val();
                let arenaCoordinates = userTeam;

                /*if (userTeam == undefined) {
                    $('.table').html("Please fill out all fields!")
                }*/

                //Get each team arena's coordinates.
                switch (arenaCoordinates) {
                    case 'anaheim-ducks':
                        teamName = "Anaheim Ducks",
                            firstLatitude = 33.8353,
                            firstLongitude = -117.915,
                            $('body').css('background', "#F47A38"),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'arizona-coyotes':
                        teamName = "Arizona Coyotes",
                            firstLatitude = 33.5315,
                            firstLongitude = -112.261,
                            $('body').css('background', "#8C2633"),
                            $('.card-header').css('background', '#E2D6B5')
                        $('.card-header').css('color', '#000000')
                        break;
                    case 'boston-bruins':
                        teamName = "Boston Bruins",
                            firstLatitude = 42.3653,
                            firstLongitude = -71.0618,
                            $('body').css('background', "#000000"),
                            $('.card-header').css('background', '#FFB81C'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'buffalo-sabres':
                        teamName = "Buffalo Sabres",
                            firstLatitude = 42.8759,
                            firstLongitude = -78.8767,

                            $('body').css('background', "#002654"),
                            $('.card-header').css('background', '#FCB514'),
                            $('.card-header').css('color', '#ffffff')
                        break;
                    case 'calgary-flames':
                        teamName = "Calgary Flames",
                            firstLatitude = 51.0382,
                            firstLongitude = -114.051,
                            $('body').css('background', "#C8102E"),
                            $('.card-header').css('background', '#F1BE48'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'carolina-hurricanes':
                        teamName = "Carolina Hurricanes",
                            firstLatitude = 35.804,
                            firstLongitude = -78.7265,
                            $('body').css('background', '#CC0000'),
                            $('.card-header').css('background', "#000"),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'chicago-blackhawks':
                        teamName = "Chicago Blackhawks",
                            firstLatitude = 41.8806,
                            firstLongitude = -87.6742,
                            $('body').css('background', '#CF0A2C'),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'colorado-avalanche':
                        teamName = "Colorado Avalanche",
                            firstLatitude = 39.7487,
                            firstLongitude = -105.008,
                            $('body').css('background', '#6F263D'),
                            $('.card-header').css('background', "#236192"),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'columbus-blue-jackets':
                        teamName = "Columbus Blue Jackets",
                            firstLatitude = 39.97,
                            firstLongitude = -83.01,
                            $('body').css('background', '#002654'),
                            $('.card-header').css('background', "#CE1126"),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'dallas-stars':
                        teamName = "Dallas Stars",
                            firstLatitude = 32.7904,
                            firstLongitude = -96.8103,
                            $('body').css('background', '#006847'),
                            $('.card-header').css('background', "#8F8F8C"),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'detroit-red-wings':
                        teamName = "Detroit Red Wings",
                            firstLatitude = 42.3411,
                            firstLongitude = -83.0554,
                            $('body').css('background', '#CE1126'),
                            $('.card-header').css('background', "#fff"),
                            $('.card-header').css('color', "#000")
                        break;
                    case 'edmonton-oilers':
                        teamName = "Edmonton Oilers",
                            firstLatitude = 53.547,
                            firstLongitude = -113.497,
                            $('body').css('background', '#041E42'),
                            $('.card-header').css('background', "#FF4C00"),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'florida-panthers':
                        teamName = "Florida Panthers",
                            firstLatitude = 26.1585,
                            firstLongitude = -80.3256,
                            $('body').css('background', '#041E42'),
                            $('.card-header').css('background', '#C8102E'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'los-angeles-kings':
                        teamName = "Los Angeles Kings",
                            firstLatitude = 34.0431,
                            firstLongitude = -118.267,
                            $('body').css('background', '#111111'),
                            $('.card-header').css('background', '#A2AAAD'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'minnesota-wild':
                        teamName = "Minnesota Wild",
                            firstLatitude = 44.9448,
                            firstLongitude = -93.1011,
                            $('body').css('background', '#154734'),
                            $('.card-header').css('background', '#A6192E'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'montreal-canadiens':
                        teamName = "Montreal Canadiens",
                            firstLatitude = 45.496,
                            firstLongitude = -73.5695,
                            $('body').css('background', '#AF1E2D'),
                            $('.card-header').css('background', '#192168'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'nashville-predators':
                        teamName = "Nashville Predators",
                            firstLatitude = 36.1601,
                            firstLongitude = -86.7791,
                            $('body').css('background', '#041E42'),
                            $('.card-header').css('background', '#FFB81C'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'new-jersey-devils':
                        teamName = "New Jersey Devils",
                            firstLatitude = 40.7333,
                            firstLongitude = -74.1713,
                            $('body').css('background', '#CE1126'),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'new-york-islanders':
                        teamName = "New York Islanders",
                            firstLatitude = 40.7464,
                            firstLongitude = -73.5956,
                            $('body').css('background', '#00539B'),
                            $('.card-header').css('background', '#F47D30'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'new-york-rangers':
                        teamName = "New York Rangers",
                            firstLatitude = 40.7509,
                            firstLongitude = -73.9943,
                            $('body').css('background', '#0038A8'),
                            $('.card-header').css('background', '#CE1126'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'ottawa-senators':
                        teamName = "Ottawa Senators",
                            firstLatitude = 45.2973,
                            firstLongitude = -75.9258,
                            $('body').css('background', '#E31837'),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'philadelphia-flyers':
                        teamName = "Philadelphia Flyers",
                            firstLatitude = 39.9012,
                            firstLongitude = -75.172,
                            $('body').css('background', '#F74902'),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', "#fff")
                        break;

                    case 'pittsburgh-penguins':
                        teamName = "Pittsburgh Penguins",
                            firstLatitude = 40.4392,
                            firstLongitude = -79.9897,
                            $('body').css('background', '#000'),
                            $('.card-header').css('background', '#FCB514'),
                            $('.card-header').css('color', "#fff")
                        break;

                    case 'san-jose-sharks':
                        teamName = "San Jose Sharks",
                            firstLatitude = 37.3322,
                            firstLongitude = -121.902,
                            $('body').css('background', '#006D75'),
                            $('.card-header').css('background', '#ea7200'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'st-louis-blues':
                        teamName = "St. Louis Blues",
                            firstLatitude = 38.6268,
                            firstLongitude = -90.2026,
                            $('body').css('background', '#002F87'),
                            $('.card-header').css('background', '#FCB514'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'tampa-bay-lightning':
                        teamName = "Tampa Bay Lightning",
                            firstLatitude = 27.94,
                            firstLongitude = -82.45,
                            $('body').css('background', '#002868'),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', "#fff")
                        break;

                    case 'toronto-maple-leafs':
                        teamName = "Toronto Maple Leafs",
                            firstLatitude = 43.64,
                            firstLongitude = -79.38,
                            $('body').css('background', '#003E7E'),
                            $('.card-header').css('background', '#fff'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'vancouver-canucks':
                        teamName = "Vancouver Canucks",
                            firstLatitude = 49.2782,
                            firstLongitude = -123.108,
                            $('body').css('background', '#001F5B'),
                            $('.card-header').css('background', '#000000'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'vegas-golden-knights':
                        teamName = "Vegas Golden Knights",
                            firstLatitude = 36.1024,
                            firstLongitude = -115.178,
                            $('body').css('background', '#B4975A'),
                            $('.card-header').css('background', '#F9A01B'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'washington-capitals':
                        teamName = "Washington Capitals",
                            firstLatitude = 38.8981,
                            firstLongitude = -77.0209,
                            $('body').css('background', '#041E42'),
                            $('.card-header').css('background', '#C8102E'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'winnipeg-jets':
                        teamName = "Winnipeg Jets",
                            firstLatitude = 49.8936,
                            firstLongitude = -97.1435,
                            $('body').css('background', '#041E42'),
                            $('.card-header').css('background', '#AC162C'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'arizona-cardinals':
                        teamName = "Arizona Cardinals",
                            firstLatitude = 33.5294,
                            firstLongitude = -112.262,
                            $('body').css('background', "#97233F"),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'atlanta-falcons':
                        teamName = "Atlanta Falcons",
                            firstLatitude = 33.7547,
                            firstLongitude = -84.404,
                            $('body').css('background', "#A71930"),
                            $('.card-header').css('background', '#000')
                        $('.card-header').css('color', '#fff')
                        break;
                    case 'baltimore-ravens':
                        teamName = "Baltimore Ravens",
                            firstLatitude = 39.2774,
                            firstLongitude = -76.623,
                            $('body').css('background', "#241773"),
                            $('.card-header').css('background', '#000000'),
                            $('.card-header').css('color', '#ffffff')
                        break;
                    case 'buffalo-bills':
                        teamName = "Buffalo Bills",
                            firstLatitude = 42.7737,
                            firstLongitude = -78.7874,

                            $('body').css('background', "#00338D"),
                            $('.card-header').css('background', '#C60C30'),
                            $('.card-header').css('color', '#ffffff')
                        break;
                    case 'carolina-panthers':
                        teamName = "Carolina Panthers",
                            firstLatitude = 35.2243,
                            firstLongitude = -80.8524,
                            $('body').css('background', "#0085CA"),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'chicago-bears':
                        teamName = "Chicago Bears",
                            firstLatitude = 41.8623,
                            firstLongitude = -87.6159
                        $('body').css('background', "#0B162A"),
                            $('.card-header').css('background', '#C83803'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'cincinnati-bengals':
                        teamName = "Cincinnati Bengals",
                            firstLatitude = 39.0961,
                            firstLongitude = -84.5177
                        $('body').css('background', "#FB4F14"),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', '#fff')
                        break;

                    case 'cleveland-browns':
                        teamName = "Cleveland Browns",
                            firstLatitude = 41.5065,
                            firstLongitude = -81.7,
                            $('body').css('background', "#311D00"),
                            $('.card-header').css('background', '#FF3C00'),
                            $('.card-header').css('color', '#fff')
                        break;

                    case 'dallas-cowboys':
                        teamName = "Dallas Cowboys",
                            firstLatitude = 32.7459,
                            firstLongitude = -97.0957,
                            $('body').css('background', "#041E42"),
                            $('.card-header').css('background', '#869397'),
                            $('.card-header').css('color', '#000')
                        break;

                    case 'denver-broncos':
                        teamName = "Denver Broncos",
                            firstLatitude = 39.74,
                            firstLongitude = -105.02,
                            $('body').css('background', "#FB4F14"),
                            $('.card-header').css('background', '#002244'),
                            $('.card-header').css('color', '#fff')
                        break;

                    case 'detroit-lions':
                        teamName = "Detroit Lions",
                            firstLatitude = 42.34,
                            firstLongitude = -83.0459,
                            $('body').css('background', "#0076B6"),
                            $('.card-header').css('background', '#B0B7BC'),
                            $('.card-header').css('color', '#000')
                        break;

                    case 'green-bay-packers':
                        teamName = "Green Bay Packers",
                            firstLatitude = 44.5013,
                            firstLongitude = -88.0622,
                            $('body').css('background', "#203731"),
                            $('.card-header').css('background', '#FFB612'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'houston-texans':
                        teamName = "Houston Texans",
                            firstLatitude = 29.6847,
                            firstLongitude = -95.4107,
                            $('body').css('background', "#03202F"),
                            $('.card-header').css('background', '#A71930'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'indianapolis-colts':
                        teamName = "Indianapolis Colts",
                            firstLatitude = 39.7601,
                            firstLongitude = -86.1639,
                            $('body').css('background', "#002C5F"),
                            $('.card-header').css('background', '#A2AAAD'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'jacksonville-jaguars':
                        teamName = "Jacksonville Jaguars",
                            firstLatitude = 30.32,
                            firstLongitude = -81.64,
                            $('body').css('background', "#006778"),
                            $('.card-header').css('background', '#9F792C'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'kansas-city-chiefs':
                        teamName = "Kansas City Chiefs",
                            firstLatitude = 39.0489,
                            firstLongitude = -94.4839,
                            $('body').css('background', "#E31837"),
                            $('.card-header').css('background', '#FFB81C'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'los-angeles-chargers':
                        teamName = "Los Angeles Chargers",
                            firstLatitude = 34.0138,
                            firstLongitude = -118.288,
                            $('body').css('background', "#002A5E"),
                            $('.card-header').css('background', '#FFC20E'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'los-angeles-rams':
                        teamName = "Los Angeles Rams",
                            firstLatitude = 33.8643,
                            firstLongitude = -118.261,
                            $('body').css('background', "#002244"),
                            $('.card-header').css('background', '#866D4B'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'minnesota-vikings':
                        teamName = "Minnesota Vikings",
                            firstLatitude = 44.9751,
                            firstLongitude = -93.2582,
                            $('body').css('background', "#4F2683"),
                            $('.card-header').css('background', '#FFC62F'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'miami-dolphins':
                        teamName = "Miami Dolphins",
                            firstLatitude = 25.9579,
                            firstLongitude = -80.2388,
                            $('body').css('background', "#008E97"),
                            $('.card-header').css('background', '#F26A24'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'new-england-patriots':
                        teamName = "New England Patriots",
                            firstLatitude = 42.0906,
                            firstLongitude = -71.2674,
                            $('body').css('background', "#002244"),
                            $('.card-header').css('background', '#C60C30'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'new-orleans-saints':
                        teamName = "New Orleans Saints",
                            firstLatitude = 29.9515,
                            firstLongitude = -90.0786,
                            $('body').css('background', "#D3BC8D"),
                            $('.card-header').css('background', '#101820'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'new-york-giants':
                        teamName = "New York Giants",
                            firstLatitude = 40.8142,
                            firstLongitude = -74.0737,
                            $('body').css('background', "#0B2265"),
                            $('.card-header').css('background', '#A71930'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'new-york-jets':
                        teamName = "New York Jets",
                            firstLatitude = 40.8142,
                            firstLongitude = -74.0737,
                            $('body').css('background', "#003F2D"),
                            $('.card-header').css('background', '#fff'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'oakland-raiders':
                        teamName = "Oakland Raiders",
                            firstLatitude = 37.7469,
                            firstLongitude = -122.201,
                            $('body').css('background', "#000"),
                            $('.card-header').css('background', '#A5ACAF'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'philadelphia-eagles':
                        teamName = "Philadelphia Eagles",
                            firstLatitude = 39.9046,
                            firstLongitude = -75.1675,
                            $('body').css('background', "#004C54"),
                            $('.card-header').css('background', '#A5ACAF'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'pittsburgh-steelers':
                        teamName = "Pittsburgh Steelers",
                            firstLatitude = 40.4468,
                            firstLongitude = -80.0158,
                            $('body').css('background', "#000"),
                            $('.card-header').css('background', '#FFB612'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'san-francisco-49ers':
                        teamName = "San Francisco 49ers",
                            firstLatitude = 37.4023,
                            firstLongitude = -121.969,
                            $('body').css('background', "#AA0000"),
                            $('.card-header').css('background', '#B3995D'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'seattle-seahawks':
                        teamName = "Seattle Seahawks",
                            firstLatitude = 47.5948,
                            firstLongitude = -122.332,
                            $('body').css('background', "#002244"),
                            $('.card-header').css('background', '#69BE28'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'tampa-bay-buccaneers':
                        teamName = "Tampa Bay Buccaneers",
                            firstLatitude = 27.9753,
                            firstLongitude = -82.5034,
                            $('body').css('background', "#D50A0A"),
                            $('.card-header').css('background', '#FF7900'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'tennessee-titans':
                        teamName = "Tennessee Titans",
                            firstLatitude = 36.1665,
                            firstLongitude = -86.7713,
                            $('body').css('background', "#002A5C"),
                            $('.card-header').css('background', '#4495D1'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'washington-redskins':
                        teamName = "Washington Redskins",
                            firstLatitude = 38.9071,
                            firstLongitude = -76.8658,
                            $('body').css('background', "#773141"),
                            $('.card-header').css('background', '#FFB612'),
                            $('.card-header').css('color', '#000')
                        break;
                    case 'atlanta-hawks':
                        teamName = "Atlanta Hawks",
                            firstLatitude = 33.7566,
                            firstLongitude = -84.3969,
                            $('body').css('background', "#E03A3E"),
                            $('.card-header').css('background', '#C1D32F'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'boston-celtics':
                        teamName = "Boston Celtics",
                            firstLatitude = 42.3653,
                            firstLongitude = -71.0618,
                            $('body').css('background', "#007A33"),
                            $('.card-header').css('background', '#BA9653')
                        $('.card-header').css('color', '#fff')
                        break;
                    case 'brooklyn-nets':
                        teamName = "Brooklyn Nets",
                            firstLatitude = 40.6837,
                            firstLongitude = -73.9788,
                            $('body').css('background', "#000000"),
                            $('.card-header').css('background', '#000000'),
                            $('.card-header').css('color', '#ffffff')
                        break;
                    case 'charlotte-hornets':
                        teamName = "Charlotte Hornets",
                            firstLatitude = 35.2248,
                            firstLongitude = -80.8403,

                            $('body').css('background', "#1D1160"),
                            $('.card-header').css('background', '#00788C'),
                            $('.card-header').css('color', '#ffffff')
                        break;
                    case 'chicago-bulls':
                        teamName = "Chicago Bulls",
                            firstLatitude = 41.8806,
                            firstLongitude = -87.6742,
                            $('body').css('background', "#CE1141"),
                            $('.card-header').css('background', '#000'),
                            $('.card-header').css('color', '#fff')
                        break;
                    case 'cleveland-cavaliers':
                        teamName = "Cleveland Cavaliers",
                            firstLatitude = 41.4971,
                            firstLongitude = -81.6884,
                            $('body').css('background', '#6F263D'),
                            $('.card-header').css('background', "#FFB81C"),
                            $('.card-header').css('color', "#000000")
                        break;
                    case 'dallas-mavericks':
                        teamName = "Dallas Mavericks",
                            firstLatitude = 32.7904,
                            firstLongitude = -96.8103,
                            $('body').css('background', '#00538C'),
                            $('.card-header').css('background', '#B8C4CA'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'denver-nuggets':
                        teamName = "Denver Nuggets",
                            firstLatitude = 39.7487,
                            firstLongitude = -105.008,
                            $('body').css('background', '#0E2240'),
                            $('.card-header').css('background', "#FEC524"),
                            $('.card-header').css('color', "#000000")
                        break;
                    case 'detroit-pistons':
                        teamName = "Detroit Pistons",
                            firstLatitude = 42.3411,
                            firstLongitude = -83.0554,
                            $('body').css('background', '#C8102E'),
                            $('.card-header').css('background', "#006BB6"),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'golden-state-warriors':
                        teamName = "Golden State Warriors",
                            firstLatitude = 37.7496,
                            firstLongitude = -122.201,
                            $('body').css('background', '#006BB6'),
                            $('.card-header').css('background', "#FDB927"),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'houston-rockets':
                        teamName = "Houston Rockets",
                            firstLatitude = 29.7505,
                            firstLongitude = -95.3622,
                            $('body').css('background', '#CE1141'),
                            $('.card-header').css('background', "#000000"),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'indiana-pacers':
                        teamName = "Indiana Pacers",
                            firstLatitude = 39.7648,
                            firstLongitude = -86.1563,
                            $('body').css('background', '#002D62'),
                            $('.card-header').css('background', "#FDBB30"),
                            $('.card-header').css('color', "#000000")
                        break;
                    case 'los-angeles-clippers':
                        teamName = "LA Clippers",
                            firstLatitude = 34.0431,
                            firstLongitude = -118.267,
                            $('body').css('background', '#C8102E'),
                            $('.card-header').css('background', '#1D42BA'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'los-angeles-lakers':
                        teamName = "Los Angeles Lakers",
                            firstLatitude = 34.0431,
                            firstLongitude = -118.267,
                            $('body').css('background', '#552583'),
                            $('.card-header').css('background', '#FDB927'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'memphis-grizzlies':
                        teamName = "Memphis Grizzlies",
                            firstLatitude = 35.1383,
                            firstLongitude = -90.0522,
                            $('body').css('background', '#5D76A9'),
                            $('.card-header').css('background', '#12173F'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'miami-heat':
                        teamName = "Miami Heat",
                            firstLatitude = 25.7813,
                            firstLongitude = -80.1874,
                            $('body').css('background', '#98002E'),
                            $('.card-header').css('background', '#F9A01B'),
                            $('.card-header').css('color', "#000000")
                        break;
                    case 'milwaukee-bucks':
                        teamName = "Milwaukee Bucks",
                            firstLatitude = 43.0417,
                            firstLongitude = -87.9162,
                            $('body').css('background', '#00471B'),
                            $('.card-header').css('background', '#EEE1C6'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'minnesota-timberwolves':
                        teamName = "Minnesota Timberwolves",
                            firstLatitude = 44.9795,
                            firstLongitude = -93.276,
                            $('body').css('background', '#0C2340'),
                            $('.card-header').css('background', '#236192'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'new-orleans-pelicans':
                        teamName = "New Orleans Pelicans",
                            firstLatitude = 29.949,
                            firstLongitude = -90.0821,
                            $('body').css('background', '#0C2340'),
                            $('.card-header').css('background', '#C8102E'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'new-york-knicks':
                        teamName = "New York Knicks",
                            firstLatitude = 40.7509,
                            firstLongitude = -73.9943,
                            $('body').css('background', '#006BB6'),
                            $('.card-header').css('background', '#F58426'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'oklahoma-city-thunder':
                        teamName = "Oklahoma City Thunder",
                            firstLatitude = 35.4634,
                            firstLongitude = -97.5146,
                            $('body').css('background', '#007AC1'),
                            $('.card-header').css('background', '#EF3B24'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'orlando-magic':
                        teamName = "Orlando Magic",
                            firstLatitude = 28.5402,
                            firstLongitude = -81.3839,
                            $('body').css('background', '#0077C0'),
                            $('.card-header').css('background', '#C4CED4'),
                            $('.card-header').css('color', "#000000")
                        break;
                    case 'philadelphia-76ers':
                        teamName = "Philadelphia 76ers",
                            firstLatitude = 39.9012,
                            firstLongitude = -75.172,
                            $('body').css('background', '#006BB6'),
                            $('.card-header').css('background', '#ED174C'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'phoenix-suns':
                        teamName = "Phoenix Suns",
                            firstLatitude = 33.4458,
                            firstLongitude = -112.071,
                            $('body').css('background', '#1D1160'),
                            $('.card-header').css('background', '#E56020'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'portland-trail-blazers':
                        teamName = "Portland Trail Blazers",
                            firstLatitude = 45.5322,
                            firstLongitude = -122.668,
                            $('body').css('background', '#E03A3E'),
                            $('.card-header').css('background', '#000000'),
                            $('.card-header').css('color', '#ffffff')
                        break;
                    case 'sacramento-kings':
                        teamName = "Sacramento Kings",
                            firstLatitude = 38.5161,
                            firstLongitude = -121.417,
                            $('body').css('background', '#5A2D81'),
                            $('.card-header').css('background', '#63727A'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'san-antonio-spurs':
                        teamName = "San Antonio Spurs",
                            firstLatitude = 29.4271,
                            firstLongitude = -98.4374,
                            $('body').css('background', '#000000'),
                            $('.card-header').css('background', '#C4CED4'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'toronto-raptors':
                        teamName = "Toronto Raptors",
                            firstLatitude = 43.64,
                            firstLongitude = -79.38,
                            $('body').css('background', '#CE1141'),
                            $('.card-header').css('background', '#000000'),
                            $('.card-header').css('color', "#fff")
                        break;
                    case 'utah-jazz':
                        teamName = "Utah Jazz",
                            firstLatitude = 40.7693,
                            firstLongitude = -111.9,
                            $('body').css('background', '#002B5C'),
                            $('.card-header').css('background', '#F9A01B'),
                            $('.card-header').css('color', '#000000')
                        break;
                    case 'washington-wizards':
                        teamName = "Washington Wizards",
                            firstLatitude = 38.8981,
                            firstLongitude = -77.0209,
                            $('body').css('background', '#002B5C'),
                            $('.card-header').css('background', '#E31837'),
                            $('.card-header').css('color', "#fff")
                        break;
                    default:
                    //console.log('Sorry, ' + arenaCoordinates + 'is not valid.');
                }

                //Change slug to user team.
                let teamUrl = "https://api.seatgeek.com/2/events?per_page=100&performers.slug=" + userTeam + "&client_id=MTQyMjQwNjN8MTU0Mzk1MjQxOS45OQ"
                console.log(teamUrl);
                let newArray = [];
                $.ajax({
                    url: teamUrl,
                    method: "GET"
                }).then(data => {
                    //console.log('data.events', data.events)
                    let gameFilter = data.events;
                    let filteredGames;
                    let games = []
                    for (let r = 0; r < gameFilter.length; r++) {
                        //console.log('gameFilter[r]', gameFilter[r]);
                        filteredGames = gameFilter[r]
                        //console.log('filtered inside loop', filteredGames)
                        Object.keys(filteredGames).forEach(function (key) {
                            if (filteredGames.stats.average_price === null || filteredGames.stats.lowest_price === null) {
                                filteredGames.stats.average_price = 0;
                                filteredGames.stats.lowest_price = 0;
                            }
                        })
                        games.push(filteredGames)
                    }
                    //console.log('GAME FILTER:', games);

                    for (let i = 0; i < games.length; i++) {

                        //Calculate distance using GeoDataSource code.

                        let secondLatitude = games[i].venue.location.lat;
                        let secondLongitude = games[i].venue.location.lon;
                        var dist = distance(userLatitude, userLongitude, secondLatitude, secondLongitude, 'M');

                        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                        //:::                                                                         :::
                        //:::  This routine calculates the distance between two points (given the     :::
                        //:::  latitude/longitude of those points). It is being used to calculate     :::
                        //:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
                        //:::                                                                         :::
                        //:::  Definitions:                                                           :::
                        //:::    South latitudes are negative, east longitudes are positive           :::
                        //:::                                                                         :::
                        //:::  Passed to function:                                                    :::
                        //:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
                        //:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
                        //:::    unit = the unit you desire for results                               :::
                        //:::           where: 'M' is statute miles (default)                         :::
                        //:::                  'K' is kilometers                                      :::
                        //:::                  'N' is nautical miles                                  :::
                        //:::                                                                         :::
                        //:::  Worldwide cities and other features databases with latitude longitude  :::
                        //:::  are available at https://www.geodatasource.com                         :::
                        //:::                                                                         :::
                        //:::  For enquiries, please contact sales@geodatasource.com                  :::
                        //:::                                                                         :::
                        //:::  Official Web site: https://www.geodatasource.com                       :::
                        //:::                                                                         :::
                        //:::               GeoDataSource.com (C) All Rights Reserved 2018            :::
                        //:::                                                                         :::
                        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                        function distance(lat1, lon1, lat2, lon2, unit) {
                            if ((lat1 == lat2) && (lon1 == lon2)) {
                                return 0;
                            }
                            else {
                                var radlat1 = Math.PI * lat1 / 180;
                                var radlat2 = Math.PI * lat2 / 180;
                                var theta = lon1 - lon2;
                                var radtheta = Math.PI * theta / 180;
                                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                                if (dist > 1) {
                                    dist = 1;
                                }
                                dist = Math.acos(dist);
                                dist = dist * 180 / Math.PI;
                                dist = dist * 60 * 1.1515;
                                if (unit == "K") { dist = dist * 1.609344 }
                                if (unit == "N") { dist = dist * 0.8684 }
                                return dist;
                            }//Else statement
                        }//Distance function
                        console.log(dist);

                        let dateTime = moment(games[i].datetime_local).format("dddd, LL");

                        //Calculating hours driving
                        let driveTime = dist / 60;
                        let driveMinutes = driveTime.toString();
                        let drivingMinutes;
                        if (driveMinutes.length < 2) {
                            drivingMinutes = '0.00'
                        }
                        else {
                            drivingMinutes = driveMinutes.toString();
                        }
                        let splitMinutes = drivingMinutes.split('.');
                        let theHours = splitMinutes[0]
                        let theMinutes = splitMinutes[1];
                        if (theMinutes.length > 2) theMinutes = theMinutes.substring(0, 2);

                        function calculateDrive(a) {
                            return a / 60
                        };
                        function calculateMinutes(b) {
                            return (b / 100) * 60
                        };

                        let userDrive = theHours + 'h ' + calculateMinutes(theMinutes).toFixed(0) + 'm';

                        newArray.push({
                            game: games[i].title,
                            url: games[i].url,
                            distance: parseInt(dist),
                            average: games[i].stats.average_price.toFixed(2),
                            starting: games[i].stats.lowest_price.toFixed(2),
                            date: moment(games[i].datetime_local).format("dddd, LL"),
                            location: games[i].venue.display_location,
                            time: moment(games[i].datetime_local).format("LT"),
                            //driveTime: userDrive,
                            venue: games[i].venue.name,
                            id: [i]
                        })//Push to array
                        console.log('new array:', newArray)

                        lessThan = newArray.filter(obj => {
                            return obj.distance < userDist && obj.starting > 1 && obj.average > 1;
                        })

                        lessThan.sort(function (a, b) {
                            return parseFloat(a.distance) - parseFloat(b.distance);
                        });

                        let rowItems = lessThan.map(function (p) {
                            return `<tr><td>${p.game}</td>
                                    <td>${p.date}</td>
                                    <td>${p.time}</td>
                                    <td>${p.venue} - ${p.location}</td>
                                
                                <td>$${p.starting}</td>
                                <td>$${p.average}</td>
                                <td>${p.distance} miles</td>
                                
                                <td><button class="seatgeek" id = "${p.id}"><a href="${p.url}" target="_blank">Visit SeatGeek</a></button></td>
                                </tr>`;
                        });
                        //<td>${p.driveTime}</td><th>Drive Time</th>
                        let tableHead = '<tr><th>Game</th><th>Date</th><th>Time</th><th>Location</th><th>Starting Ticket Price</th><th>Average Ticket Price</th><th>Distance</th><th>Find Tickets</th></tr>';
                        let createTable = '<table> ' + tableHead + rowItems.join('') + ' </table>';
                        
                        $(".table").html(createTable);
                        console.log('lessThanlenght',newArray.length)
                        /*if (newArray.length < 1) {
                            $('.table').html('Sorry, no upcoming games found!')
                        }*/
                        $('.seatgeek').on('click', function () {
                            //console.log('SeatGeek clicked: ', this.id);

                            let chosen = this.id;

                            // console.log('CHOSEN: ', lessThan[chosen].url)

                            function openInNewTab() {
                                target = "_blank";
                                href = lessThan[chosen].url;
                                // console.log('href', href)
                            }
                            // And then
                            openInNewTab(`${lessThan[chosen].url}`);
                        })
                        $('.output').append(``);

                    }//For loop(i)
                })//Data success

                //filter out by weekend games
                /*$('.filter').on('click', function(){
                             console.log('filter clicked')
                             var find = lessThan.filter(function (result) {
                             return result.date === "Friday" || result.date === 'Saturday';
                         });
                         return find[0];
                         console.log('find',find[0],'FIND',find)
                         if (find.length >1) {
                             $('.table').html('Sorry, no results were found!')
                         }
                         else{
                             find.sort(function (a, b) {
                             return parseFloat(a.starting) - parseFloat(b.starting);
                         });
     
                         let rowItems = find.map(function (p) {
                             return `<tr><td>${p.game}</td>
                                         <td>${p.date}</td>
                                         <td>${p.time}</td>
                                         <td>${p.venue} - ${p.location}</td>
                                     
                                     <td>$${p.starting}</td>
                                     <td>$${p.average}</td>
                                     <td>${p.distance} miles</td>
                                     <td>${p.driveTime}</td>
                                     <td><button class="seatgeek" id = "${p.id}"><a href="${p.url}" target="_blank">Visit SeatGeek</a></button></td>
                                     </tr>`;
                         });
                         let tableHead = '<tr><th>Game</th><th>Date</th><th>Time</th><th>Location</th><th>Starting Ticket Price</th><th>Average Ticket Price</th><th>Distance</th><th>Drive Time</th><th>Find Tickets</th></tr>';
                         let createTable = '<table> ' + tableHead + rowItems.join('') + ' </table>';
                         $(".table").html(createTable);
                         }
                         })//filter function*/

                if (teamName != undefined) {
                    $('.teamName').html(`${teamName}`)
                }

            })//Submit function
        })//SUBMIT

        $(".reset").on('click', function () {
            $('body').css('background', '#17408b'),
                $('.card-header').css('background', '#c9082a');
            $('.card-header').css('color', 'white')
            $(".table").html("")
            $('.teamName').html("")
            $('.zip').val('')
            //initialize()
        })//reset

        $('#entercitystate').on('click', function () {
            //value = $('#goodwills').val();
            let placeUrl = "https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=us&postalCode=" + userZip + "&key=6ZjigwGGx4YCL1iYYttvgO5TIAwXFL17";
            console.log(placeUrl)
            $.ajax({
                url: placeUrl,
                method: "GET"
            }).then(data2 => {
                let latitude = data2.results[0].position.lat;
                let longitude = data2.results[0].position.lon;
                let url = "https://places.cit.api.here.com/places/v1/autosuggest?at=" + latitude + "," + longitude + "&q=goodwill&app_id=fYrrvBAlqXvmPoQalRfh&app_code=bYQ6P3Z6w2bfK5mxckdHgg";
                console.log(url);
                $.ajax({
                    url: url,
                    method: "GET"
                }).then(data => {
                    //console.log(data)
                })//data success
            })//data2 success
        })
