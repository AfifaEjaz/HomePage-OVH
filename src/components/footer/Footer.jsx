import './footer.css'

const Footer = () => {
    return (
        <>
            <hr />

            <footer className="footer container">
                <h1 className='px-5'>Ableton</h1>
                <div className="row gap-3 mt-3 px-5">
                    <div className="col_content col-sm-3 mt-3">
                        <aside className=""><a href="">Register Live or Push &gt;</a></aside>
                        <aside className=""><a href="">About Ableton</a></aside>
                        <aside className=""><a href="">Jobs</a></aside>
                        <ul className='icon_list d-flex'>
                            <li><a href=""><i class='bx bxl-facebook-circle'></i></a></li>
                            <li><a href=""><i class='bx bxl-twitter'></i></a></li>
                            <li><a href=""><i class='bx bxl-youtube text-danger' ></i></a></li>
                            <li><a href=""><i class='bx bxl-instagram-alt' ></i></a></li>
                            <li><a href=""><i class='bx bxl-tiktok text-dark' ></i></a></li>
                        </ul>
                    </div>
                    <div className="col_content col-sm-3 mt-3">
                        <aside className=""><strong>Education</strong></aside>
                        <aside className=""><a href="">Offers for students and teachers</a></aside>
                        <aside className=""><a href="">Ableton for the Classroom</a></aside>
                        <aside className=""><a href="">Ableton for Colleges and Universities</a></aside>
                    </div>
                    <div className="col_content col-sm-3 mt-3">
                        <h4>Sign up to our newsletter</h4>
                        <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                        <div className='email_content'>
                            <input
                                className='email_field'
                                type="email"
                                name="email"
                                placeholder='Email Address' />
                            <button className='signup_btn'>Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className="row gap-3 my-3 px-5">
                    <div className="col_content col-sm-3 mt-3">
                        <aside className=""><strong>Community</strong></aside>
                        <aside className=""><a href="">Find Ableton User Groups</a></aside>
                        <aside className=""><a href="">Find Certified Training</a></aside>
                        <aside className=""><a href="">Become a Certified Trainer</a></aside>
                    </div>

                    <div className="col_content col-sm-3 mt-3">
                        <h4>Language and Location</h4>
                        <input type="search" name="" id="" />
                        <select name="" id="">
                            <option value="">English</option>
                            <option value="">jjj</option>
                            <option value="">jjj</option>
                        </select>
                    </div>
                </div>

                <div className='footer_last d-flex justify-content-between mt-5'>
                    <ul className='footer_link_list d-flex'>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Press Resources</a></li>
                        <li><a href="">Legal Info</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Cookie Settings</a></li>
                        <li><a href="">Imprints</a></li>
                    </ul>
                    <div className='d-flex'>
                        <span>Made in Berlin</span>
                        <svg className='logo2' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="45px" height="21px" viewBox="0 0 45 21" enable-background="new 0 0 45 21" xml:space="preserve">
                            <g>
                                <rect width="3" height="21" />
                                <rect x="6" width="3" height="21" />
                                <rect x="12" width="3" height="21" />
                                <rect x="18" width="3" height="21" />
                                <g>
                                    <rect x="24" y="18" width="21" height="3" />
                                    <rect x="24" y="12" width="21" height="3" />
                                    <rect x="24" y="6" width="21" height="3" />
                                    <rect x="24" width="21" height="3" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer