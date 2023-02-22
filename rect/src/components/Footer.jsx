import React from "react";
const currentdate= new Date()
const time1=currentdate.getFullYear()
function Footer(){
    return(<footer><p>Copyright {time1}</p></footer>
);

}
export default Footer