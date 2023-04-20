"use client"

// Used nivocharts dependency for charts
import { ResponsivePie } from "@nivo/pie";

// Data used to plot pie chart
export const piedata = [
  {
    id: "basic-tees",
    label: "Basic Tees",
    value: .55,
    color: "hsl(4, 70%, 50%)",
  },
  {
    id: "custom-short-pants",
    label: "Custom Short pants",
    value: .31,
    color: "hsl(358, 70%, 50%)",
  },
  {
    id: "super-hoodies",
    label: "Super Hoodies",
    value: .14,
    color: "hsl(268, 70%, 50%)",
  },
];


const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: -130 }}
    valueFormat=" >-.2p"
    activeOuterRadiusOffset={8}
    colors={{ scheme: "pastel1" }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    legends={[
      {
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: 0,
        itemsSpacing: 30,
        itemWidth: 100,
        itemHeight: 50,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsivePie;