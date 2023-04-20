"use client"

// Used nivocharts dependency for charts
import { ResponsiveLine } from "@nivo/line";

// Data used to plot line chart
export const linedata = [
  {
    id: "User",
    color: "hsla(101, 59%, 68%, 1)",
    data: [
      {
        x: "",
        y: 100,
      },
      {
        x: "Week 1",
        y: 400,
      },
      {
        x: "Week 2",
        y: 150,
      },
      {
        x: "Week 3",
        y: 450,
      },
      {
        x: "Week 4",
        y: 175,
      },
    ],
  },
  {
    id: "Guest",
    color: "hsla(0, 62%, 77%, 1)",
    data: [
      {
        x: "",
        y: 200,
      },
      {
        x: "Week 1",
        y: 375,
      },
      {
        x: "Week 2",
        y: 225,
      },
      {
        x: "Week 3",
        y: 300,
      },
      {
        x: "Week 4",
        y: 225,
      },
    ],
  },
];

const MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 10, bottom: 50, left: 30 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: 0,
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-d"
    curve="cardinal"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    enableGridX={false}
    colors={{ scheme: "pastel2" }}
    lineWidth={3}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "top-right",
        direction: "row",
        justify: false,
        translateX: 10,
        translateY: -50,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveLine;
