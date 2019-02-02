export declare const serialBufferMaxLength = 64;
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
    errors?: {
        [id: number]: IAmpError;
    };
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
    steps?: {
        [id: number]: IStepInfo;
    };
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
export declare const AmpErrors: {
    [key: number]: AmpError;
};
export interface AmpStep {
    label: string;
    isError?: boolean;
}
export declare const AmpSteps: {
    [key: number]: AmpStep;
};
export declare const AmpRequest: {
    [kex: string]: number;
};
export declare const AmpParamsFlags: {
    workingPointAuto: number;
    diffFeedBack: number;
    default: number;
};
export declare const AmpControlsFlags: {
    diffFeedBack: number;
    default: number;
};
