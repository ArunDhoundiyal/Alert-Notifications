import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {GrFormClose} from 'react-icons/gr'

import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="top-heading">Alert Notifications</h1>
    <Notification>
      <div className="container">
        <div className="logo-text-container">
          <AiFillCheckCircle className="success icon" />
          <div className="text-container">
            <h1 className="success">Success</h1>
            <p className="paragraph">
              You can access all the files in the folder
            </p>
          </div>
        </div>

        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
    <Notification>
      <div className="container">
        <div className="logo-text-container">
          <RiErrorWarningFill className="error icon" />
          <div className="text-container">
            <h1 className="error">Error</h1>
            <p className="paragraph">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>

        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
    <Notification>
      <div className="container">
        <div className="logo-text-container">
          <MdWarning className="warning icon" />
          <div className="text-container">
            <h1 className="warning">Warning</h1>
            <p className="paragraph">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>

        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
    <Notification>
      <div className="container">
        <div className="logo-text-container">
          <MdInfo className="info icon" />
          <div className="text-container">
            <h1 className="info">Info</h1>
            <p className="paragraph">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>

        <GrFormClose className="cross-icon" />
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
