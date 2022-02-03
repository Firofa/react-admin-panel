import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Microft Holmes</span>
                        <span className="widgetSmUserTitle">IT Consultant</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Steve Algebra</span>
                        <span className="widgetSmUserTitle">Business Consultant</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Thomas Redhat</span>
                        <span className="widgetSmUserTitle">DevOps Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Samuel Ronny</span>
                        <span className="widgetSmUserTitle">Game Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.unsplash.com/photo-1506014739647-c231072489c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Zidane Holland</span>
                        <span className="widgetSmUserTitle">UI/UX Designer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}
