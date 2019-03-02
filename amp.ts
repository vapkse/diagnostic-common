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

export interface IAmpInfoPicture {
    description?: string;
    path: string;
    width?: string;
}

export interface IAmpInfoSchematic {
    description?: string;
    path: string;
    width?: string;
}

export interface IAmpInfoMeasure {
    description?: string;
    path: string;
    width?: string;
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
    errors?: Map<number, IAmpError>;
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
    steps?: Map<number, IStepInfo>;
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
    picturesPath?: string;
    pictures?: Array<IAmpInfoPicture>;
    schematicsPath?: string;
    schematics?: Array<IAmpInfoSchematic>;
    measuresPath?: string;
    measures?: Array<IAmpInfoMeasure>;
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
export const AmpRequest = new Map<string, number>();
AmpRequest.set('reset', 70);
AmpRequest.set('stop', 71);
AmpRequest.set('writeParams', 80);
AmpRequest.set('resetParams', 81);
AmpRequest.set('resetModulation', 90);
AmpRequest.set('getData', 100);
AmpRequest.set('params', 110);
AmpRequest.set('getParams', 111);
AmpRequest.set('workingPoint', 112);
AmpRequest.set('tempMeasureInterval', 114);
AmpRequest.set('dischargeMaxTime', 115);
AmpRequest.set('heatMaxTime', 116);
AmpRequest.set('highVoltageMaxTime', 117);
AmpRequest.set('regulationMaxTime', 118);
AmpRequest.set('outOfRangeMaxTime', 119);
AmpRequest.set('errorMaxTime', 120);
AmpRequest.set('regulatedMinTime', 121);
AmpRequest.set('highVoltageErrorMaxTime', 122);
AmpRequest.set('emergencyStopDelay', 123);
AmpRequest.set('startP', 124);
AmpRequest.set('startMasterP', 124);
AmpRequest.set('startI', 125);
AmpRequest.set('startMasterI', 125);
AmpRequest.set('startSlaveP', 126);
AmpRequest.set('startSlaveI', 127);
AmpRequest.set('regulationP', 128);
AmpRequest.set('regulationMasterP', 128);
AmpRequest.set('regulationI', 129);
AmpRequest.set('regulationMasterI', 129);
AmpRequest.set('regulationSlaveP', 130);
AmpRequest.set('regulationSlaveI', 131);
AmpRequest.set('functionP', 132);
AmpRequest.set('functionMasterP', 132);
AmpRequest.set('functionI', 133);
AmpRequest.set('functionMasterI', 133);
AmpRequest.set('functionSlaveP', 134);
AmpRequest.set('functionSlaveI', 135);
AmpRequest.set('regulationTreshold', 137);
AmpRequest.set('startingTreshold', 138);
AmpRequest.set('functionTreshold', 139);
AmpRequest.set('measureAverageRatio', 140);
AmpRequest.set('modulationPeakAverageRatio', 141);
AmpRequest.set('modulationPeakReductionFactor', 142);
AmpRequest.set('modulationDetectedMinTime', 143);
AmpRequest.set('startWorkingPoint', 144);
AmpRequest.set('minPoint', 145);
AmpRequest.set('maxPoint', 146);
AmpRequest.set('tempAirMax', 147);
AmpRequest.set('tempRegulatorMax', 148);
AmpRequest.set('tempAverageRatio', 149);
AmpRequest.set('tempAirOffset', 150);
AmpRequest.set('tempAirFactor', 151);
AmpRequest.set('tempRegulatorOffset', 152);
AmpRequest.set('tempRegulatorFactor', 153);
AmpRequest.set('modulationLimit25', 154);
AmpRequest.set('modulationLimit50', 155);
AmpRequest.set('modulationLimit75', 156);
AmpRequest.set('modulationLimit100', 157);
AmpRequest.set('modulationCompensationFactor', 158);
AmpRequest.set('minWorkingPoint', 159);
AmpRequest.set('maxWorkingPoint', 160);
AmpRequest.set('modulationPeakReductionTime', 162);
AmpRequest.set('buttonPressedStandByTime', 163);
AmpRequest.set('buttonPressedMinTime', 164);
AmpRequest.set('buttonPressedModeTime', 165);
AmpRequest.set('buttonPressedMaxTime', 166); // Deprecated
AmpRequest.set('indicatorDetectModeMaxTime', 167);
AmpRequest.set('indicatorDisplayModeMaxTime', 168);
AmpRequest.set('indicatorMeasureFactor', 169);
AmpRequest.set('indicatorPercentFactor', 170);
AmpRequest.set('preStandByMaxTime', 171);
AmpRequest.set('dischargeMinTime', 172);
AmpRequest.set('autoWriteEepromDelay', 173);
AmpRequest.set('phaseDetectionErrorMaxTime', 174);
AmpRequest.set('buttonPressedResetTime', 175);
AmpRequest.set('phaseDetectionErrorMaxCount', 177);
AmpRequest.set('driverWorkingPoint', 178);
AmpRequest.set('indicatorDampingFactor', 179);
AmpRequest.set('heatMinTime', 180);
AmpRequest.set('paramsFlags', 199);
AmpRequest.set('controlsFlags', 201);
AmpRequest.set('driverMeasureAverageRatio', 140);
AmpRequest.set('finaleMeasureAverageRatio', 210);
AmpRequest.set('driverMinPoint', 145);
AmpRequest.set('finaleMinPoint', 211);
AmpRequest.set('driverMaxPoint', 146);
AmpRequest.set('finaleMaxPoint', 212);
    // Already defined -> driverWorkingPoint: workingPoint,
AmpRequest.set('finaleWorkingPoint', 213);
AmpRequest.set('driverStartingTreshold', 138);
AmpRequest.set('finaleStartingTreshold', 214);
AmpRequest.set('driverFunctionTreshold', 139);
AmpRequest.set('finaleFunctionTreshold', 215);
AmpRequest.set('driverRegulationMaxTime', 118);
AmpRequest.set('finaleRegulationMaxTime', 216);
AmpRequest.set('driverRegulatedMinTime', 121);
AmpRequest.set('finaleRegulatedMinTime', 217);
AmpRequest.set('finaleStartP', 218);
AmpRequest.set('finaleStartI', 219);
AmpRequest.set('finaleStartD', 220);
AmpRequest.set('finaleRegulationP', 221);
AmpRequest.set('finaleRegulationI', 222);
AmpRequest.set('finaleRegulationD', 223);
AmpRequest.set('finaleFunctionP', 224);
AmpRequest.set('finaleFunctionI', 225);
AmpRequest.set('driverRegulationP', 226);
AmpRequest.set('driverRegulationI', 227);
AmpRequest.set('driverFunctionP', 228);
AmpRequest.set('driverFunctionI', 229);
AmpRequest.set('driverRegulationTreshold', 137);
AmpRequest.set('finaleRegulationTreshold', 230);
AmpRequest.set('driverStartWorkingPoint', 144);
AmpRequest.set('driverStartWorkingPoint1', 144);
AmpRequest.set('driverStartWorkingPoint2', 231);
AmpRequest.set('finaleStartWorkingPoint', 232);
AmpRequest.set('driverOutOfRangeMaxTime', 119);
AmpRequest.set('finaleOutOfRangeMaxTime', 233);
AmpRequest.set('driverRegulationD', 234);
AmpRequest.set('startD', 235);
AmpRequest.set('regulationD', 236);

export const AmpParamsFlags = {
    workingPointAuto: 0x1,
    diffFeedBack: 0x2,
    default: 0x1,
};

export const AmpControlsFlags = {
    diffFeedBack: 0x2,
    default: 0x2,
};
