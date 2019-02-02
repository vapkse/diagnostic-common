export const serialBufferMaxLength = 64;

export interface ITubeinfo {
    name: string;
    valueFactor?: number;
    valueOffset?: number;
    valueUnit?: string;
    refFactor?: number;
    refOffset?: number;
}

export interface IModulationInfo {
    dataValueName: string;
    dataValueIndex: number;
    factor?: number;
}

export interface IToggleInfo {
    flag: number;
    flagName: string;
    title: string;
}

export interface IToggle extends IToggleInfo {
    name: string;
}

export interface ISliderInfo {
    title: string;
    min?: number;
    max?: number;
    step?: number;
    factor?: number;
}

export interface ISlider extends ISliderInfo {
    name: string;
    enabled?: boolean;
}

export interface IFieldInfo {
    type: string;
    name: string;
    title?: string;
    fields?: IFieldInfo[];
    slider?: ISliderInfo;
    toggles?: IToggleInfo[];
    index?: number;
}

export interface ITempSensorInfo {
    name: string;
    offset?: number;
    factor?: number;
    index?: number;
}

export interface IAmpError {
    descr: string;
}

export interface IStepInfo {
    label: string;
    labelColor?: string;
    range: number;
    isError?: boolean;
}

export interface IAmpInfo {
    name?: string;
    id: number;
    description?: string;
    dampingfactor?: number;
    power?: string;
    bandwidth?: string;
    amplificationfactor?: number;
    inverter?: boolean;
    tubes?: ITubeinfo[];
    errors?: { [id: number]: IAmpError };
    url?: string;
    valueFactor?: number;
    valueOffset?: number;
    valueUnit?: string;
    refFactor?: number;
    refOffset?: number;
    data?: IAmpDataHeader;
    port?: string;
    outputLimits?: number[];
    dataInfos?: IFieldInfo[];
    modulationInfos?: IModulationInfo;
    steps?: { [id: number]: IStepInfo };
    visible?: boolean;
    status?: IAmpStatus;
    host?: string;
    controlsInfos?: IFieldInfo[];
    paramsInfos?: IFieldInfo[];
    paramsPanelTitle?: string;
    master?: number;
    inherits?: number;
    baseSection?: boolean;
    isMaster?: boolean;
    order?: number;
    modFactor?: number;
}

export interface IAmpResponse {
    id: number;
    msg: number;
    errorNumber: number;
    extraValue: number;
}

export interface IAmpDataResponse {
    port: string;
    datas: IAmpDataHeader;
}

export interface IAmpDataHeader extends IAmpResponse {
    step: number;
    steptmax: number;
    steptelaps: number;
    stepvmax: number;
    stepval: number;
    tick: number;
}

export interface IAmpStatus {
    status: number;
    statusText: string;
    lastseen: number;
    interval?: string;
}

export interface AmpError {
    descr: string;
}

export const AmpErrors = {
    2: {
        descr: 'Discharge too long',
    },
    3: {
        descr: 'Current during heat time',
    },
    4: {
        descr: 'Regulation too long',
    },
    5: {
        descr: 'Maximun current reached during regulation',
    },
    6: {
        descr: 'Minimum current reached during regulation',
    },
    7: {
        descr: 'Maximun reached during normal function',
    },
    8: {
        descr: 'Minimum reached during normal function',
    },
    9: {
        descr: 'Time elapsed with current out of range during normal function',
    },
    10: {
        descr: 'Starting too long',
    },
    11: {
        descr: 'Out of range during starting',
    },
    12: {
        descr: 'Temperature maximum reached',
    },
    13: {
        descr: 'Phase detection error',
    },
    14: {
        descr: 'External stop',
    },
    15: {
        descr: 'Minimun current reached',
    },
    16: {
        descr: 'Maximun current reached',
    },
    17: {
        descr: 'High voltage present during heat',
    },
    50: {
        descr: 'Offline.',
    },
    51: {
        descr: 'Time out.',
    },
    52: {
        descr: 'Unknown request.',
    },
    53: {
        descr: 'Error writing params.',
    },
    55: {
        descr: 'Working point canot be set in auto mode.',
    },
    56: {
        descr: 'Global request return different values from cards.',
    },
    57: {
        descr: 'Busy.',
    },
} as { [key: number]: AmpError };

export interface AmpStep {
    label: string;
    isError?: boolean;
}

export const AmpSteps = {
    0: {
        label: 'Stand-by',
    },
    1: {
        label: 'Pre-stand-by',
    },
    2: {
        label: 'Discharge',
    },
    3: {
        label: 'Heating',
    },
    4: {
        label: 'Starting High Voltage',
    },
    5: {
        label: 'Regulating',
    },
    6: {
        label: 'Normal Function',
    },
    7: {
        label: 'Error',
        isError: true,
    },
    10: {
        label: 'Regulating driver',
    },
    11: {
        label: 'Starting finales',
    },
    12: {
        label: 'Regulating finales',
    },
    13: {
        label: 'Normal Function',
    },
    14: {
        label: 'Error',
        isError: true,
    },
} as { [key: number]: AmpStep };

// REQUEST params
export const AmpRequest = {
    reset: 70,
    stop: 71,
    writeParams: 80,
    resetParams: 81,
    resetModulation: 90,
    getData: 100,
    params: 110,
    getParams: 111,
    workingPoint: 112,
    tempMeasureInterval: 114,
    dischargeMaxTime: 115,
    heatMaxTime: 116,
    highVoltageMaxTime: 117,
    regulationMaxTime: 118,
    outOfRangeMaxTime: 119,
    errorMaxTime: 120,
    regulatedMinTime: 121,
    highVoltageErrorMaxTime: 122,
    emergencyStopDelay: 123,
    startP: 124,
    startMasterP: 124,
    startI: 125,
    startMasterI: 125,
    startSlaveP: 126,
    startSlaveI: 127,
    regulationP: 128,
    regulationMasterP: 128,
    regulationI: 129,
    regulationMasterI: 129,
    regulationSlaveP: 130,
    regulationSlaveI: 131,
    functionP: 132,
    functionMasterP: 132,
    functionI: 133,
    functionMasterI: 133,
    functionSlaveP: 134,
    functionSlaveI: 135,
    regulationTreshold: 137,
    startingTreshold: 138,
    functionTreshold: 139,
    measureAverageRatio: 140,
    modulationPeakAverageRatio: 141,
    modulationPeakReductionFactor: 142,
    modulationDetectedMinTime: 143,
    startWorkingPoint: 144,
    minPoint: 145,
    maxPoint: 146,
    tempAirMax: 147,
    tempRegulatorMax: 148,
    tempAverageRatio: 149,
    tempAirOffset: 150,
    tempAirFactor: 151,
    tempRegulatorOffset: 152,
    tempRegulatorFactor: 153,
    modulationLimit25: 154,
    modulationLimit50: 155,
    modulationLimit75: 156,
    modulationLimit100: 157,
    modulationCompensationFactor: 158,
    minWorkingPoint: 159,
    maxWorkingPoint: 160,
    modulationPeakReductionTime: 162,
    buttonPressedStandByTime: 163,
    buttonPressedMinTime: 164,
    buttonPressedModeTime: 165,
    buttonPressedMaxTime: 166, // Deprecated
    indicatorDetectModeMaxTime: 167,
    indicatorDisplayModeMaxTime: 168,
    indicatorMeasureFactor: 169,
    indicatorPercentFactor: 170,
    preStandByMaxTime: 171,
    dischargeMinTime: 172,
    autoWriteEepromDelay: 173,
    phaseDetectionErrorMaxTime: 174,
    buttonPressedResetTime: 175,
    phaseDetectionErrorMaxCount: 177,
    driverWorkingPoint: 178,
    indicatorDampingFactor: 179,
    heatMinTime: 180,
    paramsFlags: 199,
    controlsFlags: 201,
    driverMeasureAverageRatio: 140,
    finaleMeasureAverageRatio: 210,
    driverMinPoint: 145,
    finaleMinPoint: 211,
    driverMaxPoint: 146,
    finaleMaxPoint: 212,
    // Already defined -> driverWorkingPoint: workingPoint,
    finaleWorkingPoint: 213,
    driverStartingTreshold: 138,
    finaleStartingTreshold: 214,
    driverFunctionTreshold: 139,
    finaleFunctionTreshold: 215,
    driverRegulationMaxTime: 118,
    finaleRegulationMaxTime: 216,
    driverRegulatedMinTime: 121,
    finaleRegulatedMinTime: 217,
    finaleStartP: 218,
    finaleStartI: 219,
    finaleStartD: 220,
    finaleRegulationP: 221,
    finaleRegulationI: 222,
    finaleRegulationD: 223,
    finaleFunctionP: 224,
    finaleFunctionI: 225,
    driverRegulationP: 226,
    driverRegulationI: 227,
    driverFunctionP: 228,
    driverFunctionI: 229,
    driverRegulationTreshold: 137,
    finaleRegulationTreshold: 230,
    driverStartWorkingPoint: 144,
    driverStartWorkingPoint1: 144,
    driverStartWorkingPoint2: 231,
    finaleStartWorkingPoint: 232,
    driverOutOfRangeMaxTime: 119,
    finaleOutOfRangeMaxTime: 233,
    driverRegulationD: 234,
    startD: 235,
    regulationD: 236,
} as { [kex: string]: number };

export const AmpParamsFlags = {
    workingPointAuto: 0x1,
    diffFeedBack: 0x2,
    default: 0x1,
};

export const AmpControlsFlags = {
    diffFeedBack: 0x2,
    default: 0x2,
};
