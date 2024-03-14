const countries = {
    af: 'Afghanistan',
    ax: 'Aland Islands',
    al: 'Albania',
    dz: 'Algeria',
    as: 'American Samoa',
    ad: 'Andorra',
    ao: 'Angola',
    ai: 'Anguilla',
    aq: 'Antarctica',
    ag: 'Antigua and Barbuda',
    ar: 'Argentina',
    am: 'Armenia',
    aw: 'Aruba',
    au: 'Australia',
    at: 'Austria',
    az: 'Azerbaijan',
    bs: 'Bahamas',
    bh: 'Bahrain',
    bd: 'Bangladesh',
    bb: 'Barbados',
    by: 'Belarus',
    be: 'Belgium',
    bz: 'Belize',
    bj: 'Benin',
    bm: 'Bermuda',
    bt: 'Bhutan',
    bo: 'Bolivia',
    ba: 'Bosnia and Herzegovina',
    bw: 'Botswana',
    bv: 'Bouvet Island',
    br: 'Brazil',
    io: 'British Indian Ocean Territory',
    vg: 'British Virgin Islands',
    bn: 'Brunei',
    bg: 'Bulgaria',
    bf: 'Burkina Faso',
    bi: 'Burundi',
    kh: 'Cambodia',
    cm: 'Cameroon',
    ca: 'Canada',
    cv: 'Cape Verde',
    ky: 'Cayman Islands',
    cf: 'Central African Republic',
    td: 'Chad',
    cl: 'Chile',
    cn: 'China',
    cx: 'Christmas Island',
    cc: 'Cocos Island',
    co: 'Colombia',
    km: 'Comoros',
    cg: 'Congo',
    cd: 'Congo, Democratic Republic of',
    ck: 'Cook Islands',
    cr: 'Costa Rica',
    ci: "C&ocirc;te d'Ivoire",
    hr: 'Croatia',
    cu: 'Cuba',
    cy: 'Cyprus',
    cz: 'Czech Republic',
    dk: 'Denmark',
    xx: 'Disputed Territory',
    dj: 'Djibouti',
    dm: 'Dominica',
    do: 'Dominican Republic',
    ec: 'Ecuador',
    eg: 'Egypt',
    sv: 'El Salvador',
    gq: 'Equatorial Guinea',
    er: 'Eritrea',
    ee: 'Estonia',
    et: 'Ethiopia',
    fk: 'Falkland Islands',
    fo: 'Faroe Islands',
    fj: 'Fiji',
    fi: 'Finland',
    fr: 'France',
    gf: 'French Guiana',
    pf: 'French Polynesia',
    tf: 'French Southern Territories',
    ga: 'Gabon',
    gm: 'Gambia',
    ge: 'Georgia',
    de: 'Germany',
    gh: 'Ghana',
    gi: 'Gibraltar',
    gr: 'Greece',
    gl: 'Greenland',
    gd: 'Grenada',
    gp: 'Guadeloupe',
    gu: 'Guam',
    gt: 'Guatemala',
    gg: 'Guernsey',
    gn: 'Guinea',
    gw: 'Guinea-Bissau',
    gy: 'Guyana',
    ht: 'Haiti',
    hm: 'Heard Islands and McDonald Islands',
    hn: 'Honduras',
    hk: 'Hong Kong',
    hu: 'Hungary',
    is: 'Iceland',
    in: 'India',
    id: 'Indonesia',
    ir: 'Iran',
    iq: 'Iraq',
    xe: 'Iraq-Saudi Arabia Neutral Zone',
    ie: 'Ireland',
    im: 'Isle of Man',
    il: 'Israel',
    it: 'Italy',
    ci: 'Ivory Coast',
    jm: 'Jamaica',
    jp: 'Japan',
    je: 'Jersey',
    jo: 'Jordan',
    kz: 'Kazakhstan',
    ke: 'Kenya',
    ki: 'Kiribati',
    kw: 'Kuwait',
    kg: 'Kyrgyzstan',
    la: 'Laos',
    lv: 'Latvia',
    lb: 'Lebanon',
    ls: 'Lesotho',
    lr: 'Liberia',
    ly: 'Libya',
    li: 'Liechtenstein',
    lt: 'Lithuania',
    lu: 'Luxembourg',
    mo: 'Macao',
    mk: 'Macedonia',
    mg: 'Madagascar',
    mw: 'Malawi',
    my: 'Malaysia',
    mv: 'Maldives',
    ml: 'Mali',
    mt: 'Malta',
    mh: 'Marshall Islands',
    mg: 'Martinique',
    mr: 'Mauritania',
    mu: 'Mauritius',
    yt: 'Mayotte',
    mx: 'Mexico',
    fm: 'Micronesia',
    md: 'Moldova',
    mc: 'Monaco',
    mn: 'Mongolia',
    me: 'Montenegro',
    ms: 'Montserrat',
    ma: 'Morocco',
    mz: 'Mozambique',
    mm: 'Myanmar',
    na: 'Namibia',
    nr: 'Nauru',
    np: 'Nepal',
    nl: 'Netherlands',
    an: 'Netherlands Antilles',
    nc: 'New Caledonia',
    nz: 'New Zealand',
    ni: 'Nicaragua',
    ne: 'Niger',
    ng: 'Nigeria',
    nu: 'Niue',
    nf: 'Norfolk Island',
    mp: 'Northern Mariana Islands',
    kp: 'North Korea',
    no: 'Norway',
    om: 'Oman',
    pk: 'Pakistan',
    pw: 'Palau',
    ps: 'Palestinian Territory',
    pa: 'Panama',
    pg: 'Papua New Guinea',
    py: 'Paraguay',
    pe: 'Peru',
    ph: 'Philippines',
    pn: 'Pitcairn Islands',
    pl: 'Poland',
    pt: 'Portugal',
    pr: 'Puerto Rico',
    qa: 'Qatar',
    re: 'Reunion',
    ro: 'Romania',
    ru: 'Russia',
    rw: 'Rwanda',
    sh: 'Saint Helena',
    kn: 'Saint Kitts and Nevis',
    lc: 'Sant Lucia',
    pm: 'Saint Pierre and Miquelon',
    vc: 'Sant Vincent and the Grenadines',
    ws: 'Samoa',
    sm: 'San Marino',
    st: 'S&atilde;p Tom&eacute; and Pr&iacute;ncipe',
    sa: 'Saudi Arabia',
    sn: 'Senegal',
    rs: 'Serbia',
    cs: 'Serbia and Montenegro',
    sc: 'Seychelles',
    sl: 'Sierra Leone',
    sg: 'Singapore',
    sk: 'Slovakia',
    si: 'Slovenia',
    sb: 'Solomon Islands',
    so: 'Somalia',
    za: 'South Africa',
    gs: 'South Georgia and the South Sandwich Islands',
    kr: 'South Korea',
    es: 'Spain',
    lk: 'Sri Lanka',
    sd: 'Sudan',
    sr: 'Suriname',
    sj: 'Svalbard and Jan Mayen Islands',
    sz: 'Swaziland',
    se: 'Sweden',
    ch: 'Switzerland',
    sy: 'Syria',
    tw: 'Taiwan',
    tj: 'Tajikistan',
    tz: 'Tanzania',
    th: 'Thailand',
    tl: 'Timor-Leste',
    tg: 'Togo',
    tk: 'Tokelau',
    to: 'Tonga',
    tt: 'Trinidad and Tobago',
    tn: 'Tunisia',
    tr: 'Turkey',
    tm: 'Turkmenistan',
    tc: 'Turks and Caicos Islands',
    tv: 'Tuvalu',
    ug: 'Uganda',
    ua: 'Ukraine',
    ae: 'United Arab Emirates',
    uk: 'United Kingdom',
    xd: 'United Nations Neutral Zone',
    us: 'United States',
    um: 'United States Minor Outlying Islands',
    vi: 'U.S. Virgin Islands',
    uy: 'Uruguay',
    uz: 'Uzbekistan',
    vu: 'Vanuatu',
    va: 'Vatican City',
    ve: 'Venezuela',
    vn: 'Vietnam',
    wf: 'Wallis and Futuna Islands',
    eh: 'Western Sahara',
    ye: 'Yemen',
    zm: 'Zambia',
    zw: 'Zimbabwe',
}
window.addEventListener('load', () => {
    const timer = document.getElementById('timer')
    const updateTimer = (seconds) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60
        if (timer) {
            timer.innerHTML = `${hours}h ${minutes < 10 ? '0' : ''}${minutes}m ${
          remainingSeconds < 10 ? '0' : ''
        }${remainingSeconds}s`
        }
    }

    const startCountdown = () => {
        const savedCountdownTime = localStorage.getItem('countdownTime')
        let seconds =
            savedCountdownTime > 0 ? parseInt(savedCountdownTime, 10) : (60 * 32) + 30

        updateTimer(seconds)

        const countdownInterval = setInterval(() => {
            seconds--
            updateTimer(seconds)
            localStorage.setItem('countdownTime', seconds.toString())

            if (seconds <= 0) {
                clearInterval(countdownInterval)
                startCountdown() // Restart the countdown
            }
        }, 1000)
    }

    const startAvailableCountdown = () => {
        const isAvailable = localStorage.getItem('isAvailable')
        const availableBlock = document.getElementById('available')
        const userStatusBlock = document.getElementById('user-status')
        if (isAvailable === 'true') {
            availableBlock.innerHTML = 'Available now'
            userStatusBlock.classList.add('available')
        } else {
            setTimeout(() => {
                availableBlock.innerHTML = 'Available now'
                userStatusBlock.classList.add('available')
                localStorage.setItem('isAvailable', 'true')
            }, 2000)
        }
    }

    startAvailableCountdown()

    startCountdown()

    const subtractDaysFromDate = (days) => {
        const currentDate = new Date()
        const newDate = new Date(currentDate)

        if (days < 0) {
            newDate.setDate(currentDate.getDate() - -days)
        } else {
            newDate.setDate(currentDate.getDate() + days)
        }
        return newDate.toString().toLowerCase()
    }

    const setLocationPeriod = (location) => {
        const locationPeriod = document.getElementById('time-in-current-location')
        const locationName = document.getElementById('location-name')
        locationName.innerHTML = `${location.city}, ${
        countries[location.country.toLowerCase()]
      }`

        locationPeriod.innerHTML = `I’m staying in ${location.city.toLowerCase()} from ${subtractDaysFromDate(-4).substring(
        3,
        10,
      )} to ${subtractDaysFromDate(2).substring(
        3,
        10,
      )} 🥰 <br/> matches only: send me a ❤️
          in my DMs`
    }

    const getLocation = async () => {
        const reponse = await fetch('https://ipinfo.io?token=d84134a453eac9')
        const result = await reponse.json()
        setLocationPeriod(result)
        return result
    }

    getLocation()
})
