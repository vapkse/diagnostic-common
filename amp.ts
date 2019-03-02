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
    fields?: Array<IFieldInfo>;
    slider?: ISliderInfo;
    toggles?: Array<IToggleInfo>;
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
    tubes?: Array<ITubeinfo>;
    errors?: { [id: number]: IAmpError };
    url?: string;
    valueFactor?: number;
    valueOffset?: number;
    valueUnit?: string;
    refFactor?: number;
    refOffset?: number;
    data?: IAmpDataHeader;
    port?: string;
    outputLimits?: Array<number>;
    dataInfos?: Array<IFieldInfo>;
    modulationInfos?: IModulationInfo;
    steps?: { [id: number]: IStepInfo };
    visible?: boolean;
    status?: IAmpStatus;
    host?: string;
    controlsInfos?: Array<IFieldInfo>;
    paramsInfos?: Array<IFieldInfo>;
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

export const AmpErrors = new Map<number, AmpError>();
AmpErrors.set(2, { descr: 'Discharge too long' } as AmpError);
AmpErrors.set(3, { descr: 'Current during heat time' } as AmpError);
AmpErrors.set(4, { descr: 'Regulation too long' } as AmpError);
AmpErrors.set(5, { descr: 'Maximun current reached during regulation' } as AmpError);
AmpErrors.set(6, { descr: 'Minimum current reached during regulation' } as AmpError);
AmpErrors.set(7, { descr: 'Maximun reached during normal function' } as AmpError);
AmpErrors.set(8, { descr: 'Minimum reached during normal function' } as AmpError);
AmpErrors.set(9, { descr: 'Time elapsed with current out of range during normal function' } as AmpError);
AmpErrors.set(10, { descr: 'Starting too long' } as AmpError);
AmpErrors.set(11, { descr: 'Out of range during starting' } as AmpError);
AmpErrors.set(12, { descr: 'Temperature maximum reached' } as AmpError);
AmpErrors.set(13, { descr: 'Phase detection error' } as AmpError);
AmpErrors.set(14, { descr: 'External stop' } as AmpError);
AmpErrors.set(15, { descr: 'Minimun current reached' } as AmpError);
AmpErrors.set(16, { descr: 'Maximun current reached' } as AmpError);
AmpErrors.set(17, { descr: 'High voltage present during heat' } as AmpError);
AmpErrors.set(50, { descr: 'Offline.' } as AmpError);
AmpErrors.set(51, { descr: 'Time out.' } as AmpError);
AmpErrors.set(52, { descr: 'Unknown request.' } as AmpError);
AmpErrors.set(53, { descr: 'Error writing params.' } as AmpError);
AmpErrors.set(55, { descr: 'Working point canot be set in auto mode.' } as AmpError);
AmpErrors.set(56, { descr: 'Global request return different values from cards.' } as AmpError);
AmpErrors.set(57, { descr: 'Busy.' } as AmpError);

export interface AmpStep {
    label: string;
    isError?: boolean;
}

export const AmpSteps = new Map<number, AmpStep>();
AmpSteps.set(0, { label: 'Stand-by' } as AmpStep);
AmpSteps.set(1, { label: 'Pre-stand-by' } as AmpStep);
AmpSteps.set(2, { label: 'Discharge' } as AmpStep);
AmpSteps.set(3, { label: 'Heating' } as AmpStep);
AmpSteps.set(4, { label: 'Starting High Voltage' } as AmpStep);
AmpSteps.set(5, { label: 'Regulating' } as AmpStep);
AmpSteps.set(6, { label: 'Normal Function' } as AmpStep);
AmpSteps.set(7, { label: 'Error', isError: true } as AmpStep);
AmpSteps.set(10, { label: 'Regulating driver' } as AmpStep);
AmpSteps.set(11, { label: 'Starting finales' } as AmpStep);
AmpSteps.set(12, { label: 'Regulating finales' } as AmpStep);
AmpSteps.set(13, { label: 'Normal Function' } as AmpStep);
AmpSteps.set(14, { label: 'Error', isError: true } as AmpStep);

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
} as { [key: string]: number };

export const AmpParamsFlags = {
    workingPointAuto: 0x1,
    diffFeedBack: 0x2,
    default: 0x1,
};

export const AmpControlsFlags = {
    diffFeedBack: 0x2,
    default: 0x2,
};
