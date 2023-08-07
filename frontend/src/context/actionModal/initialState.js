import Moment from 'moment'

export const defaultState = {
    /*************
    / GLOBAL
    **************/
    changeOptionBin: ['no', 'yes'],

    
    /*************
    / ACTION STATE
    **************/
    numberOfSets: '0',
    spoolInputArray: [...Array(51)].map((_, i) => i),

    repValue: '8',

    weightSelection: false,
    defaultWeightOpt: 0,

    currentWeight: '10',
    weightSteps: '.5',

    changeOptionReps: [ ],
    changeOptionWeight: [ ],

    baseSets: [ ],


    /*************
    / TIME STATE
    **************/
    hoursMinutes: [...Array(60)].map((_, i) => i < 1 ? '' : i < 10 ? '0' + i : i),
    manualTime: {
        hours: '',
        minutes: ''
    },
    timeDistanceArray: [ ],
    
    isDistanceExercise: false,
    defaultDistanceOpt: 0,

    optBtnDistanceUnit: ['miles', 'kilometers', 'laps'],
    disUnitSelection: 'miles',
    defaultDisUnitOpt: 0,

    timeStrArr: ['00','00','00','00'],

    // date for date today
    date: Moment().format('YYYY-MM-D'),
}
//[...Array(4)].map(() => false)yyyy-MM-dd

