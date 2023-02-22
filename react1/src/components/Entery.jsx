import React from "react";
function Entery(props){
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoj}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.dd}
          </dd>
        </div>
    )
}

export default Entery