import React from "react";
import Login from "../login";

const Registir = ()=>{
    return(
        <>
              <div className="login-page">
        <div className="login-inner">
          <h2>Education</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
            <g clip-path="url(#clip0_101_751)">
              <path d="M41.1252 19.5835C34.7596 19.9527 28.6375 22.1594 23.5002 25.9363C18.3629 22.1594 12.2408 19.9527 5.87517 19.5835V25.3802C4.83466 25.3822 3.83757 25.7974 3.10311 26.5345C2.36865 27.2715 1.95694 28.27 1.9585 29.3105V31.2767C1.9585 33.4485 5.87517 35.6007 5.87517 35.6007V39.5311C11.0765 39.8656 16.0927 41.5902 20.4001 44.5248C21.4877 45.2796 22.5234 46.1065 23.5002 47.0002C24.4769 46.1065 25.5126 45.2796 26.6002 44.5248C30.9076 41.5902 35.9238 39.8656 41.1252 39.5311V35.2071C42.1657 35.205 43.1628 34.7898 43.8972 34.0528C44.6317 33.3157 45.0434 32.3172 45.0418 31.2767V29.3105C45.0434 28.27 44.6317 27.2715 43.8972 26.5345C43.1628 25.7974 42.1657 25.3822 41.1252 25.3802V19.5835ZM23.5002 41.9516C19.4386 38.975 14.7493 36.968 9.79183 36.0844V24.0407C13.5912 24.806 17.1984 26.3257 20.4001 28.5096C21.4877 29.2643 22.5234 30.0913 23.5002 30.9849C24.4769 30.0913 25.5126 29.2643 26.6002 28.5096C29.8018 26.325 33.409 24.8047 37.2085 24.0387V36.0844C32.2511 36.968 27.5618 38.975 23.5002 41.9516ZM21.5418 15.6668H25.4585V17.6252H21.5418V15.6668ZM21.5418 7.8335H25.4585V9.79183H21.5418V7.8335Z" fill="black" />
              <path d="M21.541 19.5828H25.4577V21.5412H21.541V19.5828ZM17.6243 9.79118C18.1437 9.79118 18.6418 9.58485 19.0091 9.21759C19.3763 8.85033 19.5827 8.35222 19.5827 7.83284C19.5845 7.57773 19.5356 7.32481 19.4388 7.08876C19.342 6.85272 19.1993 6.63827 19.0189 6.45787C18.8385 6.27748 18.624 6.13474 18.388 6.03796C18.1519 5.94117 17.899 5.89227 17.6439 5.89409C17.388 5.89281 17.1344 5.94193 16.8975 6.03867C16.6606 6.1354 16.4451 6.27785 16.2632 6.45788C15.896 6.82147 15.6882 7.31606 15.6856 7.83284C15.683 8.34963 15.8858 8.84628 16.2494 9.21354C16.6129 9.5808 17.1075 9.78858 17.6243 9.79118Z" fill="black" />
              <path d="M29.3748 9.79167C30.4564 9.79167 31.3332 8.91489 31.3332 7.83333C31.3332 6.75178 30.4564 5.875 29.3748 5.875C28.2933 5.875 27.4165 6.75178 27.4165 7.83333C27.4165 8.91489 28.2933 9.79167 29.3748 9.79167Z" fill="black" />
              <path d="M31.3332 15.6667H15.6665C14.1088 15.6651 12.6154 15.0456 11.514 13.9442C10.4125 12.8428 9.79306 11.3493 9.7915 9.79167V5.875C9.79306 4.31733 10.4125 2.8239 11.514 1.72247C12.6154 0.621026 14.1088 0.00155534 15.6665 0L31.3332 0C32.8908 0.00155534 34.3843 0.621026 35.4857 1.72247C36.5871 2.8239 37.2066 4.31733 37.2082 5.875V9.79167C37.2066 11.3493 36.5871 12.8428 35.4857 13.9442C34.3843 15.0456 32.8908 15.6651 31.3332 15.6667ZM15.6665 3.91667C15.1473 3.91719 14.6495 4.12368 14.2823 4.49082C13.9152 4.85797 13.7087 5.35578 13.7082 5.875V9.79167C13.7087 10.3109 13.9152 10.8087 14.2823 11.1758C14.6495 11.543 15.1473 11.7495 15.6665 11.75H31.3332C31.8524 11.7495 32.3502 11.543 32.7173 11.1758C33.0845 10.8087 33.291 10.3109 33.2915 9.79167V5.875C33.291 5.35578 33.0845 4.85797 32.7173 4.49082C32.3502 4.12368 31.8524 3.91719 31.3332 3.91667H15.6665Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_101_751">
                <rect width="47" height="47" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="login-head">
          <div className="login-inner-main">
            <p className="main-p">Регистрация</p>
            <div className="login-inner-main-in">
                <p>Аккаунта</p>
                <input type="text" />
              <p>Пароль</p>
              <input type="password" />
              <p>Потвердиты</p>
              <input type="password" />
              <div className="checkbox">
                <div className="checkbox-in">
                  <input type="checkbox" />

                </div>
                <p>Запомнить меня</p>
              </div>
              <a className="first" href="./student">Войти</a>
              <div className="login-final">
              </div>

            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Registir