import React, { Component } from "react";
import {getRecentStats} from '../../Services/dashboard_stats'
import {getColumnData} from '../../Utils/aggrid/ColumnFactory'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import './ViewStatsTable.css'

class StatsTable extends Component  {
    constructor(props) {
        super(props);
        this.state = {loading:true};
    }
    componentDidMount() {
        getRecentStats(this.props.dashboardId).then((resultRows)=>{
            this.setState({columnDefs:getColumnData(),rowData:resultRows,loading:false})
        });
    }
    onRowDataChanged = ({api}) => {
            api.sizeColumnsToFit(); 
    }
    render() {
        return (
                <div 
                  className="ag-theme-balham"
                  style={{ 
	                height: '100%', 
	                width: '100%' }} 
		            >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        enableSorting
                        enableFilter
                        onRowDataChanged={this.onRowDataChanged}>
                    </AgGridReact>
                </div>
            );
    }
}

export {StatsTable}