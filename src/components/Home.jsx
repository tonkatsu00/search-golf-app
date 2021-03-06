import React from "react";
import "./Common.css";
import "semantic-ui-css/semantic.min.css";

class Home extends React.Component {
  render() {
    return (
      <div className="ui container" id="container">
        <div className="Search__Form">
          <form className="ui form segment">
            <div className="field">
              <label>
                {" "}
                <i className="calendar alternate outline icon"></i>プレー日
              </label>
              <input type="date" />
            </div>
            <div className="field">
              <label>
                <i className="yen sign icon"></i>上限金額
              </label>
              <select className="ui dropdown" name="dropdown">
                <option value="8000">8,000円</option>
                <option value="12000">12,000円</option>
                <option value="16000">16,000円</option>
              </select>
            </div>
            <div className="field">
              <label>
                <i className="map pin icon"></i>
                移動時間計算の出発地点(自宅から近い地点をお選びくだい)
              </label>
              <select className="ui dropdown" name="dropdown">
                <option value="1">東京駅</option>
                <option value="2">横浜駅</option>
              </select>
            </div>
            <div className="filed">
              <label>
                <i className="car icon"></i>車での移動時間の上限
              </label>
              <select className="ui dropdown" name="dropdown">
                <option value="60">60分</option>
                <option value="90">90分</option>
                <option value="120">120分</option>
              </select>
            </div>
            <div className="Search__Button">
              <button type="submit" className="Search__Button__Design">
                <i className="search icon"></i>ゴルフ場を検索する
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
