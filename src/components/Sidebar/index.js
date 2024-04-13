import {AiOutlinePlusCircle} from 'react-icons/ai'
import './index.css'

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="header-side">
      <p className="initial">RR</p>
      <div className="name-designation">
        <h1 className="name">Rolande Raimondi</h1>
        <p className="designation">Research Nurse</p>
      </div>
    </div>
    <div className="conversations-cont">
      <p className="conversation">Conversations</p>
      <AiOutlinePlusCircle className="plus" />
    </div>
    <div className="office-cont">
      <p className="hash">#</p>
      <p className="office-name">Poland Office</p>
    </div>
    <div className="office-cont introduction">
      <p className="hash">#</p>
      <p className="office-name intro">Introductions</p>
    </div>
    <div className="office-cont">
      <p className="hash">#</p>
      <p className="office-name">India Office</p>
    </div>
  </div>
)

export default Sidebar
