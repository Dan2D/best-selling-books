import React from "react";
import {connect} from "react-redux";
import {updateHomeDate, updateGenreDate, changeWeek} from "../../Store/Actions/genresActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datebar(props) {
  if (props.content.text === "search" || props.content.text === "detail") {
    return <></>;
  }

  function plusMinusDays(date, days, type) {
    if (type === "add") {
      return new Date(date.getTime() + days * 86400000);
    } else {
      return new Date(date.getTime() - days * 86400000);
    }
  }

  function handleDtChng(date) {
    props.changeWeek(date);
    let srchDt = date.toISOString().substr(0, 10);
    if (props.content.text === "home") {
      return props.updateHomeDate(srchDt);
    }
    return props.updateGenreDate(srchDt, props.genreTxt);
  }

  function handleWkJmpClk(e) {
    let newDate;
    if (e.target.dataset.name === "prev") {
      let dateMin = plusMinusDays(props.dateMin, 7, "add");
      if (props.date < dateMin) {
        return null;
      } else {
        newDate = plusMinusDays(props.date, 7, "subtract");
      }
    } else {
      let dateMax = plusMinusDays(props.dateMax, 7, "subtract");
      if (props.date > dateMax) {
        return null;
      } else {
        newDate = plusMinusDays(props.date, 7, "add");
      }
    }
    props.changeWeek(newDate);
    newDate = newDate.toISOString().substr(0, 10);
    if (props.content === "home") {
      props.updateHomeDate(newDate);
    } else {
      props.updateGenreDate(newDate, props.genreTxt);
    }
  }

  return (
    <div className="date-picker">
      <button className="date-picker__wk-btn" onClick={handleWkJmpClk} data-name="prev">
        <img className="arrow-left" src={require("../../Images/arrow-down.png")} alt="arrow"/>
        {" Prev Week"}
      </button>
      <DatePicker
        selected={props.date}
        onChange={handleDtChng}
        minDate={props.dateMin}
        maxDate={props.dateMax}
        peekNextMonth
        onFocus={e => (e.target.readOnly = true)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      <button className="date-picker__wk-btn" onClick={handleWkJmpClk} data-name="next">
        {"Next Week "}
        <img className="arrow-right" src={require("../../Images/arrow-down.png")} alt="arrow"/>
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    date: state.genres.dateCurr,
    dateMin: state.genres.dateMin,
    dateMax: state.genres.dateMax,
    genreTxt: state.genres.text,
    content: state.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeWeek: date => {
      dispatch(changeWeek(date));
    },
    updateHomeDate: date => {
      dispatch(updateHomeDate(date));
    },
    updateGenreDate: (date, genreTxt) => {
      dispatch(updateGenreDate(date, genreTxt));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Datebar);

