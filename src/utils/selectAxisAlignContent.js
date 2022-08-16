import {COLUMN, COLUMN_REVERSE, ROW, ROW_REVERSE} from './../utils/constants.js'

export const mainAxisContent = [
    {id:1, value:ROW,            clName:"row"}, 
    {id:2, value:ROW_REVERSE,    clName:"rowReverse"},
    {id:3, value:COLUMN,         clName:"column"},
    {id:4, value:COLUMN_REVERSE, clName:"columnReverse"}
];
export const justifyContentData = [
    {id:1, value:"baseline",      clName:"justifyContentBaseline"}, 
    {id:2, value:"center",        clName:"justifyContentCenter"},
    {id:3, value:"end",           clName:"justifyContentEnd"},
    {id:4, value:"flex-end",      clName:"justifyContentFlexEnd"},
    {id:5, value:"flex-start",    clName:"justifyContentFlexStart"},
    {id:6, value:"left",          clName:"justifyContentLeft"},
    {id:7, value:"right",         clName:"justifyContentRight"},
    {id:8, value:"space-around",  clName:"justifyContentSpaceAround"},
    {id:9, value:"space-between", clName:"justifyContentSpaceBetween"},
    {id:10, value:"space-evenly", clName:"justifyContentSpaceEvenly"},
    {id:11, value:"start",        clName:"justifyContentStart"},
    {id:12, value:"stretch",      clName:"justifyContentStretch"}
];

export const alignItemsData = [
    {id:1, value:"baseline",   clName:"alignItemsBaseline" },
    {id:2, value:"center",     clName:"alignItemsCenter"   },
    {id:3, value:"flex-end",   clName:"alignItemsFlexEnd"  },
    {id:4, value:"flex-start", clName:"alignItemsFlexStart"},
    {id:5, value:"stretch",    clName:"alignItemsStretch"  }
];
export const flexWrapData = [
    {id:1, value:"nowrap",       clName:"flexWrapNowrap"  },
    {id:2, value:"wrap",         clName:"flexWrapWrap"    },
    {id:3, value:"wrap-reverse", clName:"flexWrapReverse" }
]; 

export const flexBasisData = [
    {id:1, value:"20 %",     clName:"flexBasis20percent"  },
    {id:2, value:"25 %",     clName:"flexBasis25percent"  },
    {id:3, value:"33 %",     clName:"flexBasis33percent"  },
    {id:4, value:"50 %",     clName:"flexBasis50percent"  },
];
