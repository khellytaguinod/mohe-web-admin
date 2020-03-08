import React from "react";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">System Logs</span>
          <ul className="online-users">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="note-date grey-text">
                      <span>{item.time && item.time.toString()}</span>
                      {/* {moment(item.time).fromNow()} */}
                      {/* {moment(item.time).format("MMMM Do YYYY, h:mm:ss a")} */}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
