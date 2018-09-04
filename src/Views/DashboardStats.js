import React, { Component } from "react";
import "normalize.css";
import "./DashboardStats.css";
import {StatsTable} from '../Components/ViewStatsTable/ViewStatsTable'

class DashboardStats extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <span className="header-title"> One Knight </span>
        </header>
        <section className="container">
        <div className="row">
        <div className="cell-1-2">
        <StatsTable dashboardId="VBX_DASHBOARD_470074_0"></StatsTable>
        </div>
        <div className="cell-1-2"></div>
        </div>
        <div className="row">
        <div className="cell-1-2"></div>
        <div className="cell-1-2"></div>
        </div>
        </section>
      </div>
    );
  }
}

export {DashboardStats};
