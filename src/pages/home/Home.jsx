// Css
import './home.css'
import '../../app.css'

// JSON
import {userData} from "../../dummyData"

// Components
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
    
  return (
    <>
        <Topbar />
        <div className='container'>
            <Sidebar />
            <div className='home'>
                <FeaturedInfo />
                <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
                <div className="homeWidgets">
                    <WidgetSm />
                    <WidgetLg />
                </div>
            </div>
        </div>
    </>
  );
}
