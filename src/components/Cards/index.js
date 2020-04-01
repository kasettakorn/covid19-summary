import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import InfectIcon from '../icons/contagious-illness.png'
import RecoveredIcon from '../icons/patient.png'
import DeathsIcon from '../icons/tombstone.png'
import ThailandIcon from '../icons/asia.png'
import _ from 'lodash'
import '../../style/Cards.css'


var confirmed, deaths, recoveries, newDeaths, newConfirmed, 
newRecovered, maxInfectedCount = 0, maxInfectedProvince,
newInfectedDetail
;


const covidAPIurl = "https://api.covid19api.com/summary";
const casesAPIurl = "https://covid19.th-stat.com/api/open/cases";

const useFetchCovidData = url => {
    const [datas] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();

        for (let i = 0; i < json.Countries.length; i++) {
            if (json.Countries[i].Country === "Thailand") {
                const value = json.Countries[i];
                deaths = value.TotalDeaths;
                recoveries = value.TotalRecovered;
                confirmed = value.TotalConfirmed;
                newDeaths = value.NewDeaths;
                newConfirmed = value.NewConfirmed;
                newRecovered = value.NewRecovered;
            }

        }


        setLoading(false);
    }

    async function fetchCasesData() {
        const response = await fetch(casesAPIurl);
        const json = await response.json();
        var groupData = _.groupBy(json.Data, function (data) {
            return data.Province;
        })
        newInfectedDetail = json.Data[0]
        console.log(newInfectedDetail);
        


        for (var province in groupData) {
            if (province === "ไม่พบข้อมูล") break;
            if (groupData[province].length > maxInfectedCount) {
                maxInfectedCount = groupData[province].length;
                maxInfectedProvince = province;
            }

        }



    }

    useEffect(() => {
        fetchData()
        fetchCasesData()

    }, []);

    return { loading, datas };

}
export default function CovidCard() {
    const { loading } = useFetchCovidData(covidAPIurl);
    if (loading) {
        return (
            <center style={{ marginTop: "150px" }}>
                <Spin style={{ marginTop: "150px" }} tip="กำลังดึงข้อมูล..."></Spin>
            </center>
        );
    }
    return (
        <div style={{ marginTop: "60px" }}>
            <Row
                gutter={48}
                align="middle"
                justify="center"
                style={{ textAlign: "center", marginTop: "50px" }}
            >
                <Col span={48}>
                    <div className="confirmedCard">
                        <h5 id="confirmedLabel"><span><img src={InfectIcon} width={80} /></span> ผู้ติดเชื้อ</h5>
                        <h1 id="confirmedValueLabel">{confirmed}</h1>
                        <p style={{ marginTop: "100px" }} id="confirmedLabel"> (ผู้ติดเชื้อวันนี้ = {newConfirmed} คน)</p>
                    </div>
                </Col>
                <Col span={48}>
                    <Col span={16}>
                        <div className="recoveredCard">
                            <h5 id="recoveredLabel"><span><img src={RecoveredIcon} width={60} /></span> รักษาหาย</h5>
                            <h1 id="recoveredValueLabel">{recoveries}</h1>
                            <p style={{ marginTop: "18px" }} id="confirmedLabel"> (รักษาหายวันนี้ = {newRecovered} คน)</p>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="deathsCard" style={{ marginTop: "10px" }}>
                            <h5 id="deathsLabel"><span><img src={DeathsIcon} width={60} /></span> เสียชีวิต</h5>
                            <h1 id="deathsValueLabel">{deaths}</h1>
                            <p style={{ marginTop: "18px" }} id="confirmedLabel"> (เสียชีวิตวันนี้ = {newDeaths} คน)</p>
                        </div>
                    </Col>
                </Col>
            </Row>
            <Row
                gutter={48}
                align="middle"
                justify="center"
                style={{ textAlign: "center", marginTop: "50px" }}
            >
                <Col span={48}>
                    <div className="provinceCard">
                        <h5 id="recoveredLabel"><span><img src={ThailandIcon} width={100} /></span>จังหวัดที่ติดเชื้อมากที่สุด</h5>

                        <h5 id="provinceLabel" >{maxInfectedProvince}</h5>
                        <p style={{ marginTop: "50px" }} id="confirmedLabel"> (ผู้ติดเชื้อวันนี้ = {maxInfectedCount} คน)</p>
                        <p style={{ fontSize:"20px", color:"white"}}>** เฉพาะผู้ที่มีข้อมูลติดตามได้เท่านั้น **</p>

                    </div>
                </Col>
                <Col span={48}>
                    <Col span={16}>
                        <div className="latestDetailCard">
                            <h5 id="confirmedLabel"><span style={{fontSize:"50px"}}>🦠</span>  จังหวัดที่ติดเชื้อล่าสุด</h5>
                            <h5 style={{ marginTop: "90px" }}id="provinceLabel">{newInfectedDetail.Province}</h5>
                           
                        </div>
                    </Col>
                </Col>
            </Row>
        </div>
    )
}
