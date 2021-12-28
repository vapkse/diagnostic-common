/* eslint-disable @typescript-eslint/naming-convention */
export const serialBufferMaxLength = 64;

export interface AmpStep {
    [key: string]: string | boolean | undefined;
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

export interface Tubeinfo {
    name: string;
    valueFactor?: number;
    valueOffset?: number;
    valueUnit?: string;
    refFactor?: number;
    refOffset?: number;
    min?: number;
    max?: number;
    ref?: number;
}

export interface ModulationInfo {
    dataValueName: string;
    dataValueIndex: number;
    factor?: number;
}

export interface ToggleInfo {
    flag: number;
    flagName: string;
    title: string;
}

export interface Toggle extends ToggleInfo {
    name: string;
}

export interface SliderInfo {
    title: string;
    min?: number;
    max?: number;
    step?: number;
    factor?: number;
}

export interface Slider extends SliderInfo {
    name: string;
    enabled?: boolean;
}

export interface FieldInfo {
    type: string;
    name: string;
    title?: string;
    fields?: Array<FieldInfo>;
    slider?: SliderInfo;
    toggles?: Array<ToggleInfo>;
    index?: number;
}

export interface TempSensorInfo {
    name: string;
    offset?: number;
    factor?: number;
    index?: number;
}

export interface AmpError {
    descr: string;
}

export interface StepInfo {
    [key: string]: string | number | boolean | undefined;
    label: string;
    labelColor?: string;
    range: number;
    isError?: boolean;
}

export interface AmpInfoPicture {
    description?: string;
    path: string;
    width?: string;
}

export interface AmpInfoSchematic {
    description?: string;
    path: string;
    width?: string;
}

export interface AmpInfoMeasure {
    description?: string;
    path: string;
    width?: string;
}

export type ControlPanelTypes = 'reset' | 'resetModulation' | 'stop';
export type AmpInfoInterfaceTypes = string | number | boolean | Array<Tubeinfo> | Array<number> | ModulationInfo | Array<StepInfo> | Array<AmpInfoPicture> | Array<AmpInfoSchematic> | Array<AmpInfoMeasure> | Array<ControlPanelTypes>;

export interface AmpInfoInterface {
    [index: string]: AmpInfoTypes;
    name?: string;
    id?: number;
    description?: string;
    dampingfactor?: number;
    power?: string;
    bandwidth?: string;
    amplificationfactor?: number;
    inverter?: boolean;
    tubes?: Array<Tubeinfo>;
    url?: string;
    valueFactor?: number;
    valueOffset?: number;
    valueUnit?: string;
    refFactor?: number;
    refOffset?: number;
    outputLimits?: Array<number>;
    dataInfos?: Array<FieldInfo>;
    modulationInfos?: ModulationInfo;
    steps?: Array<StepInfo>;
    visible?: boolean;
    controlsInfos?: Array<FieldInfo>;
    paramsInfos?: Array<FieldInfo>;
    paramsPanelTitle?: string;
    master?: number;
    inherits?: number;
    baseSection?: boolean;
    isMaster?: boolean;
    order?: number;
    modFactor?: number;
    picturesPath?: string;
    pictures?: Array<AmpInfoPicture>;
    schematicsPath?: string;
    schematics?: Array<AmpInfoSchematic>;
    measuresPath?: string;
    measures?: Array<AmpInfoMeasure>;
    controlsPanel?: Array<ControlPanelTypes>;
}

export type AmpInfoMergeType = (baseInfos: AmpInfo) => void;
export type AmpInfoTypes = AmpInfoInterfaceTypes | AmpStatus | AmpDataHeader | AmpInfoInterface | Map<number, StepInfo> | Set<ControlPanelTypes> | AmpInfoMergeType | string | number | undefined;

export class AmpInfo implements AmpInfoInterface {
    [index: string]: AmpInfoTypes;
    public host: string = undefined as never;
    public status: AmpStatus = undefined as never;
    public port: string = undefined as never;
    public datas: AmpDataHeader = undefined as never;

    private _values: AmpInfoInterface;
    private _stepMap: Map<number, StepInfo> = undefined as never;
    private _controlsSet: Set<ControlPanelTypes> = undefined as never;

    public constructor(values: AmpInfoInterface) {
        this._values = values;
    }

    public get name(): string | undefined {
        return this._values?.name;
    }

    public get id(): number | undefined {
        return this._values?.id;
    }

    public get description(): string | undefined {
        return this._values?.description;
    }

    public get dampingfactor(): number | undefined {
        return this._values?.dampingfactor;
    }

    public get power(): string | undefined {
        return this._values?.power;
    }

    public get bandwidth(): string | undefined {
        return this._values?.bandwidth;
    }

    public get amplificationfactor(): number | undefined {
        return this._values?.amplificationfactor;
    }

    public get inverter(): boolean | undefined {
        return this._values?.inverter;
    }

    public get tubes(): Tubeinfo[] | undefined {
        return this._values?.tubes;
    }

    public get url(): string | undefined {
        return this._values?.url;
    }

    public get valueFactor(): number | undefined {
        return this._values?.valueFactor;
    }

    public get valueOffset(): number | undefined {
        return this._values?.valueOffset;
    }

    public get valueUnit(): string | undefined {
        return this._values?.valueUnit;
    }

    public get refFactor(): number | undefined {
        return this._values?.refFactor;
    }

    public get refOffset(): number | undefined {
        return this._values?.refOffset;
    }

    public get outputLimits(): number[] | undefined {
        return this._values?.outputLimits;
    }

    public get dataInfos(): FieldInfo[] | undefined {
        return this._values?.dataInfos;
    }

    public get modulationInfos(): ModulationInfo | undefined {
        return this._values?.modulationInfos;
    }

    public get visible(): boolean | undefined {
        return this._values?.visible;
    }

    public get paramsInfos(): FieldInfo[] | undefined {
        return this._values?.paramsInfos;
    }

    public get paramsPanelTitle(): string | undefined {
        return this._values?.paramsPanelTitle;
    }

    public get master(): number | undefined {
        return this._values?.master;
    }

    public get inherits(): number | undefined {
        return this._values?.inherits;
    }

    public get baseSection(): boolean | undefined {
        return this._values?.baseSection;
    }

    public get order(): number | undefined {
        return this._values?.order;
    }

    public get modFactor(): number | undefined {
        return this._values?.modFactor;
    }

    public get picturesPath(): string | undefined {
        return this._values?.picturesPath;
    }

    public get pictures(): AmpInfoPicture[] | undefined {
        return this._values?.pictures;
    }

    public get schematicsPath(): string | undefined {
        return this._values?.schematicsPath;
    }

    public get schematics(): AmpInfoSchematic[] | undefined {
        return this._values?.schematics;
    }

    public get measuresPath(): string | undefined {
        return this._values?.measuresPath;
    }

    public get measures(): AmpInfoMeasure[] | undefined {
        return this._values?.measures;
    }

    public get controlsPanel(): ControlPanelTypes[] | undefined {
        return this._values?.controlsPanel;
    }

    public get isMaster(): boolean | undefined {
        return this._values?.isMaster;
    }

    public set isMaster(value: boolean | undefined) {
        if (!this._values) {
            return;
        }

        this._values.isMaster = value;
    }

    public get stepMap(): Map<number, StepInfo> {
        if (this._stepMap) {
            return this._stepMap;
        }

        if (!this._values?.steps) {
            this._stepMap = new Map<number, StepInfo>();
        } else {
            this._stepMap = this._values.steps.reduce((m, step, index) => m.set(index, step || {} as StepInfo), new Map<number, StepInfo>());
        }

        // Merge steps with default
        this._stepMap.forEach((step, key) => {
            const defaultStep = AmpSteps.get(key);
            if (defaultStep) {
                Object.keys(defaultStep)
                    .filter(k => step[k] === undefined)
                    .forEach(k => {
                        step[k] = defaultStep[k];
                    });
            }
        });

        return this._stepMap;
    }

    public get controlsSet(): Set<ControlPanelTypes> {
        if (this._controlsSet) {
            return this._controlsSet;
        }

        this._controlsSet = new Set<ControlPanelTypes>();

        if (this._values.controlsPanel) {
            this._controlsSet = this._values.controlsPanel.reduce((s, control) => s.add(control), this._controlsSet);
        }

        return this._controlsSet;
    }

    public merge(baseInfos: AmpInfo): void {
        const val = this._values;
        const base = baseInfos._values;

        Object.keys(base)
            .filter(key => val[key] === undefined)
            .forEach(key => {
                val[key] = base[key];
            });

        this._stepMap = undefined as never;
    }
}

export type AmpResponseTypes = number | number | { [index: string]: number } | undefined;

export interface AmpResponse {
    [index: string]: AmpResponseTypes;
    id: number;
    msg: number;
    errorNumber: number;
    extraValue: number;
}

export interface AmpDataResponse {
    port: string;
    datas: AmpDataHeader;
}

export interface AmpDataHeader extends AmpResponse {
    step: number;
    steptmax: number;
    steptelaps: number;
    stepvmax: number;
    stepval: number;
    tick: number;
    // Client fields
    ctrlflags?: number;
    temp?: number;
    val?: { [index: string]: number };
    out?: { [index: string]: number };
    min?: number | { [index: string]: number };
    max?: number | { [index: string]: number };
    ref?: number | { [index: string]: number };
    modlimits?: { [index: string]: number };
}

export interface AmpStatus {
    status: number;
    statusText: string;
    lastseen: number;
    interval?: string;
    flags?: boolean; // Indicate if working point is manual or differential feedback is off
}

export const AmpParamsFlags = {
    workingPointAuto: 0x1,
    diffFeedBack: 0x2,
    default: 0x1
};

export const AmpControlsFlags = {
    diffFeedBack: 0x2,
    default: 0x2
};
