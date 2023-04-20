// Components
import Header from "./components/Header";
import MyResponsiveLine, { linedata } from "./components/LineChart";
import MyResponsivePie, { piedata } from "./components/PieChart";

// Fonts
import { Montserrat, Lato } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const lato = Lato({
  weight: "400",
  preload: false,
});

// Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faTag,
  faThumbsUp,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";


export default function Dashboard() {

  return (
    <div className="m-4">
      <Header />

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      
        {/* Total Revenue */}
        <div className="bg-[#DDEFE0] min-w-min rounded-[20px] p-4 relative">
          <FontAwesomeIcon
            icon={faMoneyBill}
            className="w-[20px] absolute right-4"
          />
          <h6 className={`${lato.className} text-sm mt-4`}>Total Revenue</h6>
          <h3 className={`${montserrat.className} text-2xl font-bold`}>
            $2,129,430
          </h3>
        </div>

        {/* Total Transactions */}
        <div className="bg-[#F4ECDD] min-w-min rounded-[20px] p-4 relative">
          <FontAwesomeIcon icon={faTag} className="w-[20px] absolute right-4" />
          <h6 className={`${lato.className} text-sm mt-4`}>
            Total Transactions
          </h6>
          <h3 className={`${montserrat.className} text-2xl font-bold`}>
            1,520
          </h3>
        </div>

        {/* Total Likes */}
        <div className="bg-[#EFDADA] min-w-min rounded-[20px] p-4 relative">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="w-[20px] absolute right-4"
          />
          <h6 className={`${lato.className} text-sm mt-4`}>Total Likes</h6>
          <h3 className={`${montserrat.className} text-2xl font-bold`}>9721</h3>
        </div>

        {/* Total Users */}
        <div className="bg-[#DEE0EF] min-w-min rounded-[20px] p-4 relative">
          <FontAwesomeIcon
            icon={faUserGroup}
            className="w-[20px] absolute right-4"
          />
          <h6 className={`${lato.className} text-sm mt-4`}>Total Users</h6>
          <h3 className={`${montserrat.className} text-2xl font-bold`}>892</h3>
        </div>

        {/* LineChart */}
        <div className="col-span-2 lg:col-span-4 bg-white rounded-[20px] p-4">
          <div className="h-[300px] max-w-full rounded-[30px] px-4 py-4 bg-white ">
            <h3
              className={`${montserrat.className} font-bold text-lg mb-4 self-start`}
            >
              Activities
            </h3>
            <MyResponsiveLine data={linedata} />
          </div>
        </div>

        {/* PieChart */}
        <div className="col-span-2 bg-white rounded-[20px] md:p-6 p-4 flex flex-col items-center">
          <h3
            className={`${montserrat.className} font-bold text-lg mb-4 self-start`}
          >
            Top products
          </h3>
          <div className="sm:h-[230px] w-full lg:w-4/5 max-w-full rounded-[30px] bg-white">
            <div className="sm:h-[230px] h-[180px]">
              <MyResponsivePie data={piedata} className="m-4" />
            </div>
          </div>
        </div>

        {/* Schedules Section */}
        <div className="col-span-2 bg-white rounded-[20px] md:p-8 p-4">
          <h3
            className={`${montserrat.className} font-bold text-lg mb-4 self-start`}
          >
            Today&apos;s schedule
          </h3>
          <div className={lato.className}>
            <div className="text-xs text-[#999999] border-s-[#9BDD7C] border-s-4 p-2 mb-3">
              <h4 className="font-bold text-sm text-[#666666]">
                Meeting with suppliers from Kuta Bali
              </h4>
              <p>14.00-15.00</p>
              <p>at Sunset Road, Kuta, Bali</p>
            </div>

            <div className="text-xs text-[#999999] border-s-[#6972C3] border-s-4 p-2 mb-3">
              <h4 className="font-bold text-sm text-[#666666]">
                Check operation at Giga Factory 1
              </h4>
              <p>18.00-20.00</p>
              <p>at Central Jakarta</p>
            </div>

            <div className="text-xs text-[#999999] border-s-[#9BDD7C] border-s-4 p-2">
              <h4 className="font-bold text-sm text-[#666666]">
                Check operation at Giga Factory 1
              </h4>
              <p>18.00-20.00</p>
              <p>at Central Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
