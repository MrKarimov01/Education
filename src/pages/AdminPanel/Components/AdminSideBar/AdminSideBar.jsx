import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminSideBar.scss"

const AdminSideBar = () => {
  return (
    <div className="AdminSideBar">
      <Link to={"/"} className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <g clip-path="url(#clip0_101_2303)">
            <path
              d="M29.7498 14.1667C25.1449 14.4337 20.7162 16.0301 16.9998 18.7623C13.2835 16.0301 8.85475 14.4337 4.24984 14.1667V18.36C3.49714 18.3615 2.77584 18.6619 2.24452 19.195C1.71321 19.7282 1.41538 20.4505 1.41651 21.2032V22.6256C1.41651 24.1967 4.24984 25.7536 4.24984 25.7536V28.5968C8.01251 28.8388 11.6412 30.0864 14.7573 32.2093C15.544 32.7553 16.2933 33.3536 16.9998 34C17.7064 33.3536 18.4556 32.7553 19.2424 32.2093C22.3584 30.0864 25.9872 28.8388 29.7498 28.5968V25.4688C30.5025 25.4673 31.2238 25.167 31.7552 24.6338C32.2865 24.1006 32.5843 23.3783 32.5832 22.6256V21.2032C32.5843 20.4505 32.2865 19.7282 31.7552 19.195C31.2238 18.6619 30.5025 18.3615 29.7498 18.36V14.1667ZM16.9998 30.3478C14.0617 28.1945 10.6694 26.7427 7.08317 26.1035V17.391C9.83162 17.9447 12.4411 19.044 14.7573 20.6238C15.544 21.1698 16.2933 21.7681 16.9998 22.4145C17.7064 21.7681 18.4556 21.1698 19.2424 20.6238C21.5585 19.0435 24.168 17.9437 26.9165 17.3896V26.1035C23.3303 26.7427 19.938 28.1945 16.9998 30.3478ZM15.5832 11.3333H18.4165V12.75H15.5832V11.3333ZM15.5832 5.66666H18.4165V7.08333H15.5832V5.66666Z"
              fill="white"
            />
            <path
              d="M15.583 14.1664H18.4164V15.583H15.583V14.1664ZM12.7497 7.08303C13.1254 7.08303 13.4857 6.93378 13.7514 6.6681C14.0171 6.40243 14.1664 6.04209 14.1664 5.66637C14.1677 5.48182 14.1323 5.29885 14.0623 5.1281C13.9923 4.95734 13.889 4.80221 13.7585 4.67171C13.628 4.54121 13.4729 4.43796 13.3021 4.36794C13.1314 4.29793 12.9484 4.26255 12.7639 4.26387C12.5787 4.26294 12.3953 4.29848 12.2239 4.36846C12.0525 4.43843 11.8966 4.54148 11.7651 4.67172C11.4994 4.93474 11.3491 5.29252 11.3472 5.66637C11.3453 6.04021 11.492 6.39949 11.755 6.66517C12.0181 6.93085 12.3758 7.08116 12.7497 7.08303Z"
              fill="white"
            />
            <path
              d="M21.2502 7.08333C22.0326 7.08333 22.6668 6.44907 22.6668 5.66667C22.6668 4.88426 22.0326 4.25 21.2502 4.25C20.4678 4.25 19.8335 4.88426 19.8335 5.66667C19.8335 6.44907 20.4678 7.08333 21.2502 7.08333Z"
              fill="white"
            />
            <path
              d="M22.6668 11.3333H11.3335C10.2067 11.3322 9.12632 10.8841 8.32953 10.0873C7.53275 9.29051 7.08462 8.21016 7.0835 7.08333V4.25C7.08462 3.12318 7.53275 2.04282 8.32953 1.24604C9.12632 0.449253 10.2067 0.00112514 11.3335 0L22.6668 0C23.7937 0.00112514 24.874 0.449253 25.6708 1.24604C26.4676 2.04282 26.9157 3.12318 26.9168 4.25V7.08333C26.9157 8.21016 26.4676 9.29051 25.6708 10.0873C24.874 10.8841 23.7937 11.3322 22.6668 11.3333ZM11.3335 2.83333C10.9579 2.83371 10.5978 2.98308 10.3322 3.24868C10.0666 3.51427 9.9172 3.87439 9.91683 4.25V7.08333C9.9172 7.45894 10.0666 7.81906 10.3322 8.08465C10.5978 8.35025 10.9579 8.49962 11.3335 8.5H22.6668C23.0424 8.49962 23.4026 8.35025 23.6681 8.08465C23.9337 7.81906 24.0831 7.45894 24.0835 7.08333V4.25C24.0831 3.87439 23.9337 3.51427 23.6681 3.24868C23.4026 2.98308 23.0424 2.83371 22.6668 2.83333H11.3335Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_101_2303">
              <rect width="34" height="34" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Education</span>
      </Link>
      <ul className="SidebarBox">
        
          <NavLink to={"home"} className="SidebarLinks sideHome">
            <svg
              width="26"
              height="28"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M9.44652 24.9643V21.1308C9.4465 20.1558 10.2414 19.3635 11.2263 19.357H14.8339C15.8234 19.357 16.6256 20.1512 16.6256 21.1308V21.1308V24.9762C16.6254 25.804 17.2928 26.4806 18.1288 26.5H20.5339C22.9314 26.5 24.875 24.5758 24.875 22.2023V22.2023V11.2973C24.8622 10.3635 24.4193 9.48669 23.6725 8.91629L15.4472 2.35663C14.0062 1.21446 11.9578 1.21446 10.5168 2.35663L2.32753 8.9282C1.57782 9.49628 1.13423 10.3746 1.125 11.3092V22.2023C1.125 24.5758 3.06859 26.5 5.46614 26.5H7.8712C8.72794 26.5 9.42247 25.8124 9.42247 24.9643V24.9643"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span>Главное</span>
          </NavLink>
        
        
          <NavLink to={"institute"} className="SidebarLinks sideins">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_101_2279)">
                <path
                  d="M17.5 11.3621L28.5125 13.5496C29.4 13.7371 30 14.4871 30 15.3746V28.1246C30 29.1621 29.1625 29.9996 28.125 29.9996H16.875C17.225 29.9996 17.5 29.7246 17.5 29.3746V28.7496H28.125C28.4625 28.7496 28.75 28.4746 28.75 28.1246V15.3746C28.75 15.0871 28.55 14.8246 28.2625 14.7621L17.5 12.6371V11.3621Z"
                  fill="white"
                />
                <path
                  d="M24.3735 17.4997C24.7235 17.4997 24.9985 17.7747 24.9985 18.1247C24.9985 18.4747 24.7235 18.7497 24.3735 18.7497H21.8735C21.5235 18.7497 21.2485 18.4747 21.2485 18.1247C21.2485 17.7747 21.5235 17.4997 21.8735 17.4997H24.3735Z"
                  fill="white"
                />
                <path
                  d="M24.3735 21.2497C24.7235 21.2497 24.9985 21.5247 24.9985 21.8747C24.9985 22.2247 24.7235 22.4997 24.3735 22.4997H21.8735C21.5235 22.4997 21.2485 22.2247 21.2485 21.8747C21.2485 21.5247 21.5235 21.2497 21.8735 21.2497H24.3735Z"
                  fill="white"
                />
                <path
                  d="M24.3735 24.9997C24.7235 24.9997 24.9985 25.2747 24.9985 25.6247C24.9985 25.9747 24.7235 26.2497 24.3735 26.2497H21.8735C21.5235 26.2497 21.2485 25.9747 21.2485 25.6247C21.2485 25.2747 21.5235 24.9997 21.8735 24.9997H24.3735Z"
                  fill="white"
                />
                <path
                  d="M17.5015 29.3748C17.5015 29.7248 17.2265 29.9998 16.8765 29.9998C16.5265 29.9998 16.2515 29.7248 16.2515 29.3748V28.7498V11.8748C16.2515 11.6873 16.339 11.5123 16.4765 11.3873C16.6265 11.2748 16.814 11.2248 17.0015 11.2623L17.5015 11.3623V12.6373V28.7498V29.3748Z"
                  fill="white"
                />
                <path
                  d="M16.249 28.7497V29.3747C16.249 29.7247 16.524 29.9997 16.874 29.9997H11.874C12.224 29.9997 12.499 29.7247 12.499 29.3747V28.7497H16.249Z"
                  fill="white"
                />
                <path
                  d="M13.1235 6.24969C13.4735 6.24969 13.7485 6.52469 13.7485 6.87469C13.7485 7.22469 13.4735 7.49969 13.1235 7.49969H10.6235C10.2735 7.49969 9.99854 7.22469 9.99854 6.87469C9.99854 6.52469 10.2735 6.24969 10.6235 6.24969H13.1235Z"
                  fill="white"
                />
                <path
                  d="M13.7485 10.6247C13.7485 10.9747 13.4735 11.2497 13.1235 11.2497H10.6235C10.2735 11.2497 9.99854 10.9747 9.99854 10.6247C9.99854 10.2747 10.2735 9.99969 10.6235 9.99969H13.1235C13.4735 9.99969 13.7485 10.2747 13.7485 10.6247Z"
                  fill="white"
                />
                <path
                  d="M13.1235 13.7497C13.4735 13.7497 13.7485 14.0247 13.7485 14.3747C13.7485 14.7247 13.4735 14.9997 13.1235 14.9997H10.6235C10.2735 14.9997 9.99854 14.7247 9.99854 14.3747C9.99854 14.0247 10.2735 13.7497 10.6235 13.7497H13.1235Z"
                  fill="white"
                />
                <path
                  d="M13.1235 17.4997C13.4735 17.4997 13.7485 17.7747 13.7485 18.1247C13.7485 18.4747 13.4735 18.7497 13.1235 18.7497H10.6235C10.2735 18.7497 9.99854 18.4747 9.99854 18.1247C9.99854 17.7747 10.2735 17.4997 10.6235 17.4997H13.1235Z"
                  fill="white"
                />
                <path
                  d="M7.5 18.1247C7.5 18.4747 7.225 18.7497 6.875 18.7497H4.375C4.025 18.7497 3.75 18.4747 3.75 18.1247C3.75 17.7747 4.025 17.4997 4.375 17.4997H6.875C7.225 17.4997 7.5 17.7747 7.5 18.1247Z"
                  fill="white"
                />
                <path
                  d="M6.875 6.24969C7.225 6.24969 7.5 6.52469 7.5 6.87469C7.5 7.22469 7.225 7.49969 6.875 7.49969H4.375C4.025 7.49969 3.75 7.22469 3.75 6.87469C3.75 6.52469 4.025 6.24969 4.375 6.24969H6.875Z"
                  fill="white"
                />
                <path
                  d="M6.875 9.99969C7.225 9.99969 7.5 10.2747 7.5 10.6247C7.5 10.9747 7.225 11.2497 6.875 11.2497H4.375C4.025 11.2497 3.75 10.9747 3.75 10.6247C3.75 10.2747 4.025 9.99969 4.375 9.99969H6.875Z"
                  fill="white"
                />
                <path
                  d="M6.875 13.7497C7.225 13.7497 7.5 14.0247 7.5 14.3747C7.5 14.7247 7.225 14.9997 6.875 14.9997H4.375C4.025 14.9997 3.75 14.7247 3.75 14.3747C3.75 14.0247 4.025 13.7497 4.375 13.7497H6.875Z"
                  fill="white"
                />
                <path
                  d="M11.2515 23.1247C11.2515 22.7747 10.964 22.4997 10.6265 22.4997H6.87646C6.52646 22.4997 6.25146 22.7747 6.25146 23.1247V28.7497H5.00146V23.1247C5.00146 22.0872 5.83896 21.2497 6.87646 21.2497H10.6265C11.664 21.2497 12.5015 22.0872 12.5015 23.1247V28.7497H11.2515V23.1247Z"
                  fill="white"
                />
                <path
                  d="M6.25146 28.7497H11.2515H12.5015V29.3747C12.5015 29.7247 12.2265 29.9997 11.8765 29.9997H5.62646C5.27646 29.9997 5.00146 29.7247 5.00146 29.3747V28.7497H6.25146Z"
                  fill="white"
                />
                <path
                  d="M2.1875 0.24977L15.925 2.33727C16.8375 2.48727 17.5 3.26227 17.5 4.18727V11.3623L17 11.2623C16.8125 11.2248 16.625 11.2748 16.475 11.3873C16.3375 11.5123 16.25 11.6873 16.25 11.8748V4.18727C16.25 3.87477 16.025 3.61227 15.725 3.56227L1.9875 1.48727C1.95 1.47477 1.9125 1.47477 1.875 1.47477C1.725 1.47477 1.5875 1.52477 1.475 1.62477C1.325 1.74977 1.25 1.91227 1.25 2.09977V28.1248C1.25 28.4748 1.5375 28.7498 1.875 28.7498H5V29.3748C5 29.7248 5.275 29.9998 5.625 29.9998H1.875C0.8375 29.9998 0 29.1623 0 28.1248V2.09977C0 1.54977 0.2375 1.02477 0.6625 0.67477C1.0875 0.31227 1.6375 0.16227 2.1875 0.24977Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_101_2279">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Университеты</span>
          </NavLink>
        
        
          <NavLink to={"student"} className="SidebarLinks sideStu">
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="2 User">
                <path
                  id="Stroke 1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.98951 16.0085C14.6008 16.0085 18.542 16.7073 18.542 19.4985C18.542 22.2898 14.627 23.0085 9.98951 23.0085C5.37701 23.0085 1.43701 22.316 1.43701 19.5235C1.43701 16.731 5.35076 16.0085 9.98951 16.0085Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.98982 12.0248C6.96232 12.0248 4.50732 9.57104 4.50732 6.54354C4.50732 3.51604 6.96232 1.06229 9.98982 1.06229C13.0161 1.06229 15.4711 3.51604 15.4711 6.54354C15.4823 9.55979 13.0448 12.0135 10.0286 12.0248H9.98982Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 5"
                  d="M18.604 10.602C20.6053 10.3208 22.1465 8.60328 22.1503 6.52453C22.1503 4.47578 20.6565 2.77578 18.6978 2.45453"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 7"
                  d="M21.2446 15.4153C23.1834 15.704 24.5371 16.384 24.5371 17.784C24.5371 18.7478 23.8996 19.3728 22.8696 19.764"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span>Студенты</span>
          </NavLink>
        
        
          <NavLink to={"exit"} className="SidebarLinks sideExit">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Logout">
                <path
                  id="Stroke 1"
                  d="M16.7703 7.23689V6.07064C16.7703 3.52689 14.7078 1.46439 12.1641 1.46439H6.07033C3.52783 1.46439 1.46533 3.52689 1.46533 6.07064V19.9831C1.46533 22.5269 3.52783 24.5894 6.07033 24.5894H12.1766C14.7128 24.5894 16.7703 22.5331 16.7703 19.9969V18.8181"
                  stroke="#D1DCE0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 3"
                  d="M25.2622 13.0268H10.2109"
                  stroke="#D1DCE0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Stroke 5"
                  d="M21.6021 9.38287L25.2621 13.0266L21.6021 16.6716"
                  stroke="#D1DCE0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span>Выйти</span>
          </NavLink>
        
        <i className="Sidebarpos">
            <div className="sidebarpos_inner"></div>
        </i>
      </ul>
    </div>
  );
};

export default AdminSideBar;
