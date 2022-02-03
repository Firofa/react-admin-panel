import "./featuredInfo.css"

// Material Icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,412</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,345</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,422</span>
                    <span className="featuredMoneyRate">
                        +12.9 <ArrowUpwardIcon className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
  )
  ;
}
