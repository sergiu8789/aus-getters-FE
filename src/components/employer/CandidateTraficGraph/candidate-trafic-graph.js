'use client';
import styles from './candidate-trafic-graph.module.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

const CandidateTraficGraphComponent = () => {
  const handleChange = () => {};
  const handleBlur = () => {};

  const data = [
    {
      name: 'Week 1',
      Revenue: 20000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Week 2',
      Revenue: 75000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Week 3',
      Revenue: 40000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Week 4',
      Revenue: 70000,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Week 5',
      Revenue: 100000,
      pv: 4800,
      amt: 2181
    }
  ];

  const DataFormater = (number) => {
    if (number > 1000000000) {
      return (number / 1000000000).toString() + 'B';
    } else if (number > 1000000) {
      return (number / 1000000).toString() + 'M';
    } else if (number > 1000) {
      return (number / 1000).toString() + 'K';
    } else {
      return number.toString();
    }
  };

  // const labels = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'];
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       fill: false,
  //       label: 'Dataset 2',
  //       data: [100,250,300,800,500],
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',

  //     },
  //   ],
  // };
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart',
  //     },
  //   },
  // };

  return (
    <div className={`${styles.page_conatainer}`}>
      <Container>
        <Row>
          <Col>
            <div className={`${styles.title}`}>Candidate traffic</div>
          </Col>
          <Col md="auto">
            <div className={`${styles.filterbox}  d-flex col-md-6`}>
              <div
                className={`${styles.loginFormFloating}  position-relative d-inline-block`}
              >
                <select
                  type="email"
                  name="email"
                  placeholder=""
                  autoComplete="off"
                  className={`${styles.formInputSelect} d-inline-block `}
                >
                  <option value="">Digital Marketer</option>
                </select>
                <label
                  className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                >
                  <span className={styles.required}></span>Jobs
                </label>
              </div>
              <div
                className={`${styles.loginFormFloating}  position-relative d-inline-block`}
              >
                <select
                  type="email"
                  name="email"
                  placeholder=""
                  autoComplete="off"
                  className={`${styles.formInputSelect} d-inline-block `}
                >
                  <option value="">Last 15 days</option>
                </select>
                <label
                  className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                >
                  <span className={styles.required}></span>Number of Days
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Line options={options} data={data} /> */}
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                width={700}
                height={500}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0.17%"
                      stopColor="rgb(115, 102, 255)"
                      stopOpacity={0.6}
                    />
                    <stop
                      offset="107.13%"
                      stopColor="rgb(196, 196, 196)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  {/* fill: linear-gradient(180deg, rgba(115, 102, 255, 0.60) 0.17%, rgba(196, 196, 196, 0.00) 107.13%); */}
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  label={{
                    value: 'Pages',
                    position: 'insideBottomCenter',
                    dy: 10
                  }}
                  
                />
                <YAxis
                  label={{
                    value: 'Y:Revenue',
                    position: 'insideLeft',
                    angle: -90,
                    dy: -10
                  }}
                  tickFormatter={DataFormater}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Revenue"
                  stroke="#8884d8"
                  // fill="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CandidateTraficGraphComponent;
