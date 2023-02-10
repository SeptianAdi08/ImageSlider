
import './App.css';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";










function App() {
    return (

        <body>
            <header className="header">
                <p>SPORTLIFE</p>
                <nav className='navbar'>
                    <a className='#Home'>Home</a>
                    <a className='#services'>Services</a>
                    <a className='#AboutUs'>About Us</a>
                    <a className='#packages'>Packages</a>
                    <a className='#OurTeam'>Our Team</a>

                </nav>

            </header>

            <section className='home' id='home'>
                <div className='content'>
                    <h3>YOUR UNIQUE GOALS ARE WHAT WE ARE ALL ABOUT</h3>
                    <p>ARE YOU READY TO TAKE THE PLUNGE INTO A HELTERS LIFESTYLE</p>

                    <a href='#'>JOIN US TODAY</a>

                </div>

            </section>


            <section className='service'>

                <h1>SERVICES</h1>

                <div className='galery'>
                    <div className='box'>
                        <img src={require('./assets/img/golf.jpg')} alt="" />
                        <h3>GOLF</h3>
                    </div>
                    <div className='box' id='tenis'>
                        <img src={require('./assets/img/tenis.jpg')} alt="" />
                        <h3>TENIS</h3>
                    </div>
                    <div className='box' id='gym'>
                        <img src={require('./assets/img/gym.jpg')} alt="" />
                        <h3>GYM</h3>
                    </div>
                    <div className='box' id='yoga'>
                        <img src={require('./assets/img/yoga.jpg')} alt="" />
                        <h3>YOGA</h3>
                    </div>
                    <div className='box' id='swiming'>
                        <img src={require('./assets/img/swemmer.jpg')} alt="" />
                        <h3>SWIMING POOL</h3>
                    </div>
                    <div className='box' id='basket'>
                        <img src={require('./assets/img/basketball.jpg')} alt="" />
                        <h3>BASKETBALL</h3>
                    </div>
                </div>

            </section>

            <section className='aboutus'>
                <h1>ABOUT US</h1>
                <div className='content'>
                    <img src={require('./assets/img/imggym.jpg')} alt="" />
                    <p>Fitness merupakan olahraga yang banyak dilakukan oleh orang dewasa muda. Olahraga ini umumnya dilakukan di gym atau pusat kebugaran dan
                        menggunakan berbagai jenis alat bantu olahraga. Berbagai gerakan dalam fitness, misalnya angkat beban atau latihan ketahanan, dapat menjaga kekuatan tulang dan merangsang pembentukan otot, terlebih jika disertai dengan asupan protein yang memadai.

                        Hal ini karena tubuh akan melepaskan hormon yang dapat meningkatkan kemampuan otot untuk menyerap asam amino saat Anda berolahraga.
                        Fitness secara rutin dapat membuat kulit menjadi lebih sehat. Hal ini karena aktivitas fisik mampu membuat aliran oksigen dan darah mengalami peningkatan sehingga asupan nutrisi yang dibutuhkan kulit dapat tercukupi dengan baik.

                        Selain itu, produksi kolagen juga akan mengalami peningkatan, sehingga kulit akan tampak merona dan terlihat lebih segar setelah olahraga.
                        Manfaat fitness tidak hanya untuk kesehatan fisik saja, tetapi juga baik untuk kesehatan mental. Hal ini karena dengan melakukan latihan fisik, hormon serotonin yang terdapat di otak akan mengalami peningkatan. Hormon serotonin adalah hormon yang mengelola suasana hati,
                        termasuk mencegah depresi.</p>
                    <a href='#'>Read More</a>

                </div>
            </section>

            <section className='packages'>
                <h1>PACKAGES</h1>
                <div className='kotak'>
                    <div className='jadwal'>
                        <img src={require('./assets/img/jadwal.jpg')} alt="" />
                        <div className='topleft'>Full day</div>
                        <div className='center'>SPORTLIFE</div>
                        <div className='topright'>8:00-22:00</div>
                        <div className='bottomright'>Name Surname</div>
                        <div className='bottomleft'>00047</div>

                    </div>

                    <div className='jadwal'>
                        <img src={require('./assets/img/jadwal.jpg')} alt="" />
                        <div className='topleft'>Only morning</div>
                        <div className='center'>SPORTLIFE</div>
                        <div className='topright'>8:00-12:00</div>
                        <div className='bottomright'>Name Surname</div>
                        <div className='bottomleft'>00048</div>

                    </div>

                    <div className='jadwal'>
                        <img src={require('./assets/img/jadwal.jpg')} alt="" />
                        <div className='topleft'> oksigennly afternoon</div>
                        <div className='center'>SPORTLIFE</div>
                        <div className='topright'>12:00-16:00</div>
                        <div className='bottomright'>Name Surname</div>
                        <div className='bottomleft'>00049</div>

                    </div>

                    <div className='jadwal'>
                        <img src={require('./assets/img/jadwal.jpg')} alt="" />
                        <div className='topleft'>Only evening</div>
                        <div className='center'>SPORTLIFE</div>
                        <div className='topright'>16:00-12:00</div>
                        <div className='bottomright'>Name Surname</div>
                        <div className='bottomleft'>00050</div>

                    </div>
                </div>


            </section>

            <section className='ourteam'>
                <h1>OUR TEAM</h1>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper" >
                    <SwiperSlide className='card'>
                        <div className='card_image'>

                            <img src={require('./assets/img/catrein.jpg')} />
                        </div>
                        <div className='card_content'>
                            <span className='card_title'>Profesional Trainer</span>
                            <span className='card_name'>Catrein Hilson</span>
                            <p className='card_text'>she is a certified personal trainer through the
                                National Academy of SPORTLIFE certified through...</p>
                            <button className='button'>
                                <span className='button-content'>View More</span>
                            </button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='card'>
                        <div className='card_image'>

                            <img src={require('./assets/img/michael.jpg')} />
                        </div>
                        <div className='card_content'>
                            <span className='card_title'>Profesional Trainer</span>
                            <span className='card_name'>Michael Wilson</span>
                            <p className='card_text'> Michael has found his passion for exercise and helping others, and is extremaly excited
                                to share his knowladge with every client at SPORTLIFE...</p>
                            <button className='button'>
                                <span className='button-content'>View More</span>
                            </button>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='card'>
                        <div className='card_image'>

                            <img src={require('./assets/img/melisa.jpg')} />
                        </div>
                        <div className='card_content'>
                            <span className='card_title'>Profesional Trainer</span>
                            <span className='card_name'>Melisa Andrea</span>
                            <p className='card_text'>  She likes to work with children, she also a nutritionist by second proffesion...</p>
                            <button className='button'>
                                <span className='button-content'>View More</span>
                            </button>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='card'>
                        <div className='card_image'>

                            <img src={require('./assets/img/dave.jpg')} />
                        </div>
                        <div className='card_content'>
                            <span className='card_title'>Profesional Trainer</span>
                            <span className='card_name'>Dave Nachmanoff</span>
                            <p className='card_text'>  it's Dave mission to share his knowladge and passion with
                                SPORTLIFE clients, and help theme become the best version of themselfes...</p>
                            <button className='button'>
                                <span className='button-content'>View More</span>
                            </button>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='card'>
                        <div className='card_image'>

                            <img src={require('./assets/img/salsa.jpg')} />
                        </div>
                        <div className='card_content'>
                            <span className='card_title'>Profesional Trainer</span>
                            <span className='card_name'>Salsa Christine</span>
                            <p className='card_text'>  Him passion for support and fitness motivated him to porsue a
                                career in health and fitnes industry ...</p>
                            <button className='button'>
                                <span className='button-content'>View More</span>
                            </button>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>

            <section className='footer'>



                <div className='box-container'>

                    <div className='box'>
                        <h3>SPORTLIFE</h3>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Home</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Services</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>About Us</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Packages</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Our Team</a>
                    </div>

                    <div className='box'>
                        <h3>SERVICES</h3>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Gym</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Golf</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Yoga</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Basketball</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Tenis</a>
                        <a href='#' className='links'><i className='fas fa-arrow-right'></i>Swimming Pool</a>
                    </div>


                    <div className='box'>
                        <h3>CONTACT US</h3>
                        <a href='#' className='links'><i className='fas fa-phone'></i>+37433003300</a>
                        <a href='#' className='links'><i className='fas fa-phone'></i>+37433330033</a>
                        <a href='#' className='links'><i className='fas fa-envelope'></i>sportlife@gmail.com</a>

                    </div>


                    <div className='box'>
                        <h3>CONECT WITH US</h3>
                        <a href='#' className='links'><i className='fab fa-facebook-f'></i>sportlife</a>
                        <a href='#' className='links'><i className='fab fa-instagram'></i>sportlife</a>
                        <a href='#' className='links'><i className='fab fa-tiktok'></i>sportlife</a>
                        <a href='#' className='links'><i className='fab fa-telegram'></i>sportlife</a>
                        <a href='#' className='links'><i className='fab fa-twitter'></i>sportlife</a>
                    </div>


                </div>

            </section>



        </body>
    );
}

export default App;
