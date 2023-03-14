import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import GaugeChart from './lib'

const App = () => {
  const [currentPercent, setCurrentPercent] = useState();
  const [arcs, setArcs] = useState([0.5, 0.3, 0.2])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercent(Math.random());
      setArcs([0.1, 0.5, 0.4])
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const chartStyle = {
    // height: "100%",
    // width: "100%"
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={{ offset: 2, span: 8 }}>
            <h1>React Responsive Gauge Chart Demo</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with default props</h6>
            <div className='gauge-container'>
            <GaugeChart id="gauge-chart1" style={chartStyle} />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with 20 levels</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart2"
              style={chartStyle}
              nrOfLevels={20}
              percent={0.86}
              needleColor="#345243"
              fontSize="12px"
              />
              </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with custom colors</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart3"
              style={chartStyle}
              nrOfLevels={30}
              colors={['#FF5F6D', '#FFC371']}
              arcWidth={0.3}
              percent={0.37}
              />
              </div>
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with larger padding between elements</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart4"
              style={chartStyle}
              nrOfLevels={10}
              arcPadding={0.1}
              cornerRadius={3}
              percent={0.6}
              />
              </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with custom arcs width</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart5"
              style={chartStyle}
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
              />
              </div>
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart without animation</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart6"
              style={chartStyle}
              animate={false}
              nrOfLevels={15}
              percent={0.56}
              needleColor="#345243"
              />
              </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with live updates</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart7"
              style={chartStyle}
              percent={currentPercent}
              animDelay={0}
              />
              </div>
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with formatted text</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart8"
              style={chartStyle}
              nrOfLevels={30}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              arcWidth={0.3}
              percent={0.37}
              formatTextValue={value => value + 'kbit/s'}
            />
              </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with arcs update</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart9"
              style={chartStyle}
              nrOfLevels={420}
              arcsLength={arcs}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
              />
              </div>
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with comparison (value decreased)</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart10"
              style={chartStyle}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
              previousValue={0.45}
            />
              </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with comparison (value increased)</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart11"
              style={chartStyle}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
              previousValue={0.34}
            />
              </div>
          </Col>
          <Col xs={12} lg={6}>
            <h6>GaugeChart with comparison (no change)</h6>
            <div className='gauge-container'>
            <GaugeChart
              id="gauge-chart12"
              style={chartStyle}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={0.37}
              arcPadding={0.02}
              previousValue={0.37}
              />
              </div>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default App
