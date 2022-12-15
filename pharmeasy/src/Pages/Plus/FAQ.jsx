import React from "react";
import Styles from "./FAQ.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
export default function FAQ({arr}) {
  const [content, setContent] = useState(null);
  function allContent(i) {
    if (content === i) {
      return setContent(null);
    }
    setContent(i);
  }
  return (
    <div>
      <div className={Styles.ques}>
        {arr.map((elem, index) => {
          return (
            <div className={Styles.FAQ}>
              <div className={Styles.title} onClick={() => allContent(index)}>
                <h4>{elem.ques}</h4>
                {content === index ? (
                  <AiOutlineDown className={Styles.icon} />
                ) : (
                  <AiOutlineUp className={Styles.icon} />
                )}
              </div>
              <div
                className={
                  content === index ? `${Styles.ans} ${Styles.show}` : Styles.ans
                }
              >
                {elem.type===1 ? <p>{elem.ans1}</p>:elem.type===2 ? <ul>{elem.ans.map((el)=>{return <li>{el}</li>})}</ul>:<>{elem.type===3 ? <><p>{elem.heading}</p><ol>{elem.ans.map((e)=>{return <li>{e}</li>})}</ol></>:<><p>{elem.heading2}</p><ul>{elem.ans.map((e)=>{return <li>{e}</li>})}</ul></>}
               </> }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


