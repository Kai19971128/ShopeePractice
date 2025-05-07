import React, { useEffect } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import ModalImg from "../../Imgs/modal/modal1.png";
import { Link } from "react-router-dom";

const Image = styled.img`
`
const CustomStyleModal = styled(Modal)`
  .ant-modal-close{
    top:0;
    right:0;
    background-color: #f1f1f1;
    border-radius: 20px;
  }
  .ant-modal-content{
    padding: 5px;
  }
`
const LastShownDateKey = "shopee:popout.lastShownDate";

const eventProductId = "p003";

const getCurrentDateString = () => {
  const today = new Date();
  const  year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 月份從0開始，所以要加1
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;

}

const getInitialModalState = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const lastShownDate = localStorage.getItem(LastShownDateKey);
    const currentDate = getCurrentDateString();
    if(!lastShownDate || lastShownDate !== currentDate){
    return true; // 如果沒有記錄或今天還沒顯示過，則返回 true
  }else{
    return false; // 如果今天已經顯示過，則返回 false
  }
  }
  return true; // Default to true if localStorage is not available
}

const PopoutModal = ()=>{
    const [isModalOpen, setIsModalOpen] = React.useState(getInitialModalState);
    const effectRan = React.useRef(false); // useRef to track if effect has run

    useEffect(() => {
      if(effectRan.current === false ||process.env.NODE_ENV === "development"){
      // 這裡的邏輯會在組件首次渲染時運行一次
      if(isModalOpen)
      console.log("--- useEffect Logic Running ---");
      const currentDate = getCurrentDateString();
      const lastShownDate = localStorage.getItem(LastShownDateKey);
      if(lastShownDate !== currentDate){
      localStorage.setItem(LastShownDateKey, currentDate);

      
    }
  }
      return () => {
        console.log("--- useEffect Cleanup ---");
      effectRan.current = true
      }
    },[]);
const handleCancel = () => {
  setIsModalOpen(false); 
  const currentDate = getCurrentDateString();
  const lastShownDate = localStorage.getItem(LastShownDateKey);
  if(lastShownDate !== currentDate){
    localStorage.setItem(LastShownDateKey, currentDate);
  }
}
  
    // 如果初始狀態就是 false，直接不渲染 Modal 元件，避免任何動畫
    if (!isModalOpen) {
      return null; // 不渲染任何東西
    }


    return(
      
        <CustomStyleModal wrapClassName="my-custom-modal-wrapper"
        open={isModalOpen} 
        onCancel={handleCancel}
       centered={true}
        footer={null}
        width={500}
        mask={true}
        >
          <Link to={`/${eventProductId}`}>
          <Image src={ModalImg} alt={`/${eventProductId}-event`} width="100%" height="100%" />
          </Link>
        </CustomStyleModal>
)}
export default PopoutModal;

// 新增useRef