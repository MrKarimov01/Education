import React from "react";
import "./Student_home.css"
const StudentHome = () => {
    return (
        <>
            <div className="student_page">
                <div className="student_page-inner">
                    <img className="inner-img" src="https://s3-alpha-sig.figma.com/img/a65d/e12b/5e180b85e08c0472e9153465fbf624ea?Expires=1698019200&Signature=qqDNWjRggNCPiECzVeek2YGViSUsIYKxI00TAHH08Du3rkptD64mgWMtSxMv8ViC1N8NQyFN~D3eCUYppzSzqlNSRYPT6c1t5UdIQ8n0UdrPNXdhkM1PT~toLduXB-2p-5Q0EihA9tLXbg13GPSeAqrc5WOsjM0D0DFO-CkvbVbYWfbeMLy51IoZY0G~6S2lWpJiefUAqT9QVCXoMa9g6h6BLn65X3MRuDA5hwBUWfTI9bOwCwhzq9V9zBSWAfZBkq31uJ-9L-epulHigirzUULLqoOMQrwGPLfu7dJcVdEFmlazqWCqQTpK1NNpQ0qUWCiPH3vda4gRFX1I15O6bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <div className="student-page-header">
                        <p className="student-main-p">Личный кабинет</p>
                        <div className="student-home-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.8476C15.6392 16.8476 18.2481 16.1242 18.5 13.2205C18.5 10.3188 16.6812 10.5054 16.6812 6.94511C16.6812 4.16414 14.0452 1 10 1C5.95477 1 3.31885 4.16414 3.31885 6.94511C3.31885 10.5054 1.5 10.3188 1.5 13.2205C1.75295 16.1352 4.36177 16.8476 10 16.8476Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.3889 19.8574C11.0247 21.3721 8.89672 21.3901 7.51953 19.8574" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8064 6.62337L18.184 5.54328C17.6574 4.62936 16.4905 4.31408 15.5753 4.83847V4.83847C15.1397 5.0951 14.6198 5.16791 14.1305 5.04084C13.6411 4.91378 13.2224 4.59727 12.9666 4.16113C12.8021 3.88391 12.7137 3.56815 12.7103 3.2458V3.2458C12.7251 2.72898 12.5302 2.22816 12.1698 1.85743C11.8094 1.48669 11.3143 1.27762 10.7973 1.27783H9.54326C9.03672 1.27783 8.55107 1.47967 8.19376 1.8387C7.83644 2.19773 7.63693 2.68435 7.63937 3.19088V3.19088C7.62435 4.23668 6.77224 5.07657 5.72632 5.07646C5.40397 5.07311 5.08821 4.9847 4.81099 4.82017V4.82017C3.89582 4.29577 2.72887 4.61105 2.20229 5.52497L1.5341 6.62337C1.00817 7.53615 1.31916 8.70236 2.22975 9.23207V9.23207C2.82166 9.5738 3.18629 10.2053 3.18629 10.8888C3.18629 11.5723 2.82166 12.2038 2.22975 12.5456V12.5456C1.32031 13.0717 1.00898 14.2351 1.5341 15.1451V15.1451L2.16568 16.2344C2.4124 16.6795 2.82636 17.0081 3.31595 17.1472C3.80554 17.2863 4.3304 17.2247 4.77438 16.9758V16.9758C5.21084 16.7211 5.73094 16.6513 6.2191 16.782C6.70725 16.9126 7.12299 17.2328 7.37392 17.6714C7.53845 17.9486 7.62686 18.2644 7.63021 18.5868V18.5868C7.63021 19.6433 8.48671 20.4998 9.54326 20.4998H10.7973C11.8502 20.4998 12.7053 19.6489 12.7103 18.5959V18.5959C12.7079 18.0878 12.9086 17.5998 13.2679 17.2405C13.6272 16.8812 14.1152 16.6804 14.6233 16.6829C14.9449 16.6915 15.2594 16.7795 15.5387 16.9392V16.9392C16.4515 17.4651 17.6177 17.1541 18.1474 16.2435V16.2435L18.8064 15.1451C19.0615 14.7073 19.1315 14.1858 19.001 13.6961C18.8704 13.2065 18.55 12.7891 18.1108 12.5364V12.5364C17.6715 12.2837 17.3511 11.8663 17.2206 11.3767C17.09 10.8871 17.16 10.3656 17.4151 9.92772C17.581 9.63809 17.8211 9.39795 18.1108 9.23207V9.23207C19.0159 8.70265 19.3262 7.54325 18.8064 6.63252V6.63252V6.62337Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <ellipse cx="10.1752" cy="10.8886" rx="2.63615" ry="2.63616" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="student-header">
                        <img src="https://s3-alpha-sig.figma.com/img/7df8/2a91/7153a4697b87756e22ad8e19b748d25c?Expires=1698019200&Signature=fzCK-LCXehHv7qDDtM8JgP5W-B7LEnPCGg-uo-Kn5CiYv5ePp5znj6JCqX6xapvRXcqfnyy1XoIDJV9CmKLa16qKyZ2PkVMfAChK6M3UWmdiu2F4Dd3Misr0yiudDDadV2KNCWwODuCcWBfycglCCn6N~XCI~2JFzYg8P7WUXkAYw0aXqw6EXYN2xXFpU-~03d8oH1XISrxMAczF5MFbWpOTMk89aAikLYXE22xCfeTQXE-IZPkYjt69YiujIEPOkliOYLJ63mA66KtSGxu7AZJb2~6jOpKXyXKekzFKKPZWVoafJQXiV2ZjLkaD2CaUw9mTPgltRT-t38PlJ-v6vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <p>Nargiza Akhmedova</p>
                    </div>
                </div>
                <div className="student-page-hero">
                    <div className="student-page-hero-inner">
                        <div className="student-page-hero-in">
                            <h3>Ваши данные</h3>
                            <a href="./search">Изменить</a>
                        </div>
                        <div className="student-data">
                            <div className="student-data-in">
                                <h3>Имя</h3>
                                <div className="data-in-inner">
                                <p>Нафиса</p>

                                </div>
                            </div>
                            <div className="student-data-in2">
                                <h3>Фамилия</h3>
                                <div className="data-in-inner">
                                    <p>Абдураимова</p>
                                </div>
                                
                            </div>
                            <div className="student-data-in">
                                <h3>Отчество</h3>
                                <div className="data-in-inner">
                                    <p>Зафар кизи</p>
                                </div>
                                
                            </div>
                            <div className="student-data-in2">
                                <h3>Университет</h3>
                                <div className="data-in-inner">
                                    <p>Омская гуманитарная академия</p>
                                </div>
                                
                            </div>
                            <div className="student-data-in">
                                <h3>Факультет</h3>
                                <div className="data-in-inner">
                                    <p>Педагогическое образование (с двумя профилями подготовки) (уровень бакалавриата))</p>
                                </div>
                                
                            </div>
                            <div className="student-data-in2">
                                <h3>Специальность</h3>
                                <div className="data-in-inner">
                                    <p>Начальное образование и иностранный язык (английский язык</p>
                                </div>
                                
                            </div>
                            <div className="student-data-in">
                                <h3>Паспорт</h3>
                                <div className="data-in-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                                    <path d="M28.3607 29.6587H7.46484V26.9624H28.3607V29.6587ZM17.9128 24.2662L8.9574 16.1775L11.0619 14.2766L16.4202 19.1029V2.69629H19.4053V19.1029L24.7636 14.2766L26.8681 16.1775L17.9128 24.2662Z" fill="#000D7F" />
                                </svg>
                                </div>
                                
                            </div>
                            <div className="student-data-in2">
                                <h3>Диплом</h3>
                                <div className="data-in-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                                    <path d="M28.3607 29.6587H7.46484V26.9624H28.3607V29.6587ZM17.9128 24.2662L8.9574 16.1775L11.0619 14.2766L16.4202 19.1029V2.69629H19.4053V19.1029L24.7636 14.2766L26.8681 16.1775L17.9128 24.2662Z" fill="#000D7F" />
                                </svg>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default StudentHome;