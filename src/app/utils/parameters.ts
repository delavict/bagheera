export interface ChartBundleMargins {
    top: number,
    right: number,
    bottom: number,
    left: number
    middle: number
}

export interface ChartMargins {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export interface Position {
    x: number;
    y: number;
}

export enum ChartType {
    LINE, AREA, BAR
}

export enum BundleChartPosition {
    FIRST, MIDDLE, LAST, ALONE
}



export class Chart {
    public type: ChartType;
    public scale: any;
    public position: BundleChartPosition;
    public height: number;
    public width: number;
    // TO BE DONE 

    constructor(
        type: ChartType,
        position: BundleChartPosition,
        height: number
    ){
        this.type = type;
        this.position = position;
        this.height = height;
    }

    getMargin(bundleMargin: ChartBundleMargins): ChartMargins {
        let margin: ChartMargins = {
            top: bundleMargin.middle,
            right: bundleMargin.right,
            bottom: bundleMargin.middle,
            left: bundleMargin.left
        }
        if(this.position = BundleChartPosition.FIRST || BundleChartPosition.ALONE){
            margin.top = bundleMargin.top;
        }
        if(this.position = BundleChartPosition.LAST || BundleChartPosition.ALONE){
            margin.bottom = bundleMargin.bottom;
        }
        return margin;
    }
}


export class LineChart extends Chart {
    public lineColor: string;
    constructor(
        lineColor: string, 
        type: ChartType,
        position: BundleChartPosition,
        height: number

    ) {
        super(type,position,height);
        this.lineColor = lineColor;

    }

}


export class AreaChart extends Chart {
    // FOR ANOTHER PROJECT

}