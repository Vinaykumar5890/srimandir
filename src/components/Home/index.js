import {Component} from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="mandirImageContainer">
            <img
              src="https://play-lh.googleusercontent.com/cxjgWIVHy2T9ufVyyqaR2GayNcAqyTeCrQWpIQIVXoZgE4_7SrU6PcnnRPjScumzYA"
              className="imageMandir"
              alt="imageMandir"
            />
            <div>
              <h1 className="mandirHeading">Sri Mandir</h1>
            </div>
          </div>
          <div className="mandirImageContainer1">
            <h1 className="homeNav1">Home</h1>
            <h1 className="homeNav">
              {' '}
              <a
                href="https://www.srimandir.com/epuja?lang=en"
                className="anchorelemet"
              >
                Puja
              </a>
            </h1>
            <h1 className="homeNav">
              {' '}
              <a
                href="https://www.srimandir.com/panchang/varanasi/today?lang=en"
                className="anchorelemet"
              >
                Panchang
              </a>
            </h1>
            <h1 className="homeNav">
              {' '}
              <a
                href="https://www.srimandir.com/temples?lang=en"
                className="anchorelemet"
              >
                Temples
              </a>
            </h1>
            <NavDropdown
              title="Library"
              id="basic-nav-dropdown"
              className="homeNav2"
            >
              <NavDropdown.Item href="https://www.srimandir.com/articles">
                <div className="fgbn">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_chalisa.6253bcdc.svg&w=32&q=75"
                    className="libraryImage"
                    alt="libraryImage"
                  />
                  <div>
                    <h1 className="libraryHeading">Santana sahitya </h1>
                    <p className="libraryParagraph">read all articles</p>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.srimandir.com/articles/aarti">
                <div className="fgbn">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_aarti.3e170fee.svg&w=32&q=75"
                    className="libraryImage"
                    alt="libraryImage"
                  />
                  <div>
                    <h1 className="libraryHeading">Aarti</h1>
                    <p className="libraryParagraph">commence your pooja</p>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.srimandir.com/articles/chalisa">
                <div className="fgbn">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_chalisa.6253bcdc.svg&w=32&q=75"
                    className="libraryImage"
                    alt="libraryImage"
                  />
                  <div>
                    <h1 className="libraryHeading">Chailsa</h1>
                    <p className="libraryParagraph">
                      Divine Graece With Chailsa
                    </p>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.srimandir.com/articles/mantra-aarth-or-unke-labh">
                <div className="fgbn">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_mantra.93ac210a.svg&w=32&q=75"
                    className="libraryImage"
                    alt="libraryImage"
                  />
                  <div>
                    <h1 className="libraryHeading">Mantra </h1>
                    <p className="libraryParagraph">
                      Meditation and Chantas are Powerful Mantras
                    </p>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.srimandir.com/articles/nav-durga-avtar">
                <div className="fgbn">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_library_bhajan.7cb97e79.svg&w=32&q=75"
                    className="libraryImage"
                    alt="libraryImage"
                  />
                  <div>
                    <h1 className="libraryHeading">
                      Incration Gods and Goodness
                    </h1>
                    <p className="libraryParagraph">
                      Stories of Incration gods and goodness
                    </p>
                    <p />
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="mandirImageContainer">
            <select className="selectLangauage">
              <option>English</option>
              <option>हिंदी</option>
            </select>
            <NavDropdown id="basic-nav-dropdown" className="IoMdContact">
              <NavDropdown.Item>
                <h1 className="libraryParagraph1">Hello ,Sri Mandir Bhakt</h1>
                <h1 className="libraryParagraph1">
                  Welcome to Sri Mandir Puja Seva
                </h1>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <h1 className="libraryHeading1">Account</h1>
              <NavDropdown.Item href="https://www.srimandir.com/profile?lang=en">
                <div className="myProfileContainer">
                  <div className="fgbn">
                    <img
                      src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_user_profile.a4a5bb8b.svg&w=32&q=75"
                      className="libraryImage1"
                      alt="libraryImage1"
                    />
                    <h1 className="libraryHeading1">My Profile</h1>
                  </div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    className="libraryImage1"
                    alt="libraryImage1"
                  />
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <div className="myProfileContainer">
                  <div className="fgbn">
                    <img
                      src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_history.69f033dd.svg&w=32&q=75"
                      className="libraryImage1"
                      alt="libraryImage1"
                    />
                    <h1 className="libraryHeading1">My Puja Booking</h1>
                  </div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    className="libraryImage1"
                    alt="libraryImage1"
                  />
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.srimandir.com/chadhava/history?lang=en">
                <div className="myProfileContainer">
                  <div className="fgbn">
                    <img
                      src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_history.69f033dd.svg&w=32&q=75"
                      className="libraryImage1"
                      alt="libraryImage1"
                    />
                    <h1 className="libraryHeading1">My Ramostav Booking</h1>
                  </div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    className="libraryImage1"
                    alt="libraryImage1"
                  />
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <div className="myProfileContainer">
                  <div className="fgbn">
                    <img
                      src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_explore_puja_seva.42f2f767.svg&w=32&q=75"
                      className="libraryImage1"
                      alt="libraryImage1"
                    />
                    <h1 className="libraryHeading1">Book a Puja</h1>
                  </div>
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chevron_right_black.f4ac97ef.svg&w=32&q=75"
                    className="libraryImage1"
                    alt="libraryImage1"
                  />
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <h1 className="libraryHeading1">
                Help and Support for Puja Booking{' '}
              </h1>
              <NavDropdown.Item>
                <div className="fgbn">
                  <img
                    src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_call.858e9981.svg&w=32&q=75"
                    className="libraryImage"
                    alt="libraryImage1"
                  />
                  <div>
                    <p className="libraryHeading"> 080-7171-4737</p>
                    <p className="libraryParagraph">
                      You can call me 7:30 to 10:30{' '}
                    </p>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </nav>
        <div className="sriMandirConatainer1" id="sriMandirConatainer">
          <div>
            <div className="fgb">
              {' '}
              <img
                src="https://i.ibb.co/bP6SvP7/img-achievement-1.webp"
                className="imageFirst"
                alt="libraryImage1"
              />
              <h1 className="sriMandirheading">
                WORLD S LARGEST APP FOR HINDU DEVOTEES
              </h1>
            </div>
            <h1 className="sriMandirheading1">
              Pray daily with{' '}
              <span className="sriMandirheading1Span"> Sri Mandir </span>
            </h1>
            <h1 className="sriMandirheading1">
              One App for all your devotional needs.
            </h1>
            <div className="fgb">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                className="playstoreImg"
                alt="appleImg"
              />
              <img
                src="https://www.connectedly.org/wp-content/uploads/2023/12/OIP.jpg"
                className="appleImg"
                alt="appleImg"
              />
            </div>
          </div>
          <img
            src="https://i.ibb.co/8x4k2Fv/img-hero-artwork-en-8.webp"
            alt="srimandirHanuman"
            className="srimandirHanuman"
          />
        </div>
        <div className="exploreContainer" id="exploreContainer">
          <h1 className="exploreheading1">Explore Sri Mandir</h1>
          <div className="explore">
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_seva.48294bc9.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Book Pujas <br /> At Temple
              </h1>
            </div>

            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_astro.4e8171bd.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Talk to <br /> Astrlogers
              </h1>
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chadhava_seva.c04d828f.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Offer <br /> Chandava
              </h1>
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Read
                <br /> Festivals
              </h1>
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_music.b3aeb0a3.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Listen <br /> Musicing
              </h1>
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_mandir_darshan.68d86126.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Do Mandir <br /> darshan
              </h1>
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_sahitya.976e992d.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Read Hindu
                <br /> literature
              </h1>
            </div>
            <div>
              <img
                src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_panchang.0458f8f4.svg&w=96&q=75"
                className="exploreBooking"
                alt="libraryImage1"
              />
              <h1 className="exploreHeading">
                Read <br /> Panchang
              </h1>
            </div>
          </div>
        </div>
        <div className="mediaContainer" id="mediaContainer">
          <h1 className="exploreheading2">
            Our Divine Mission recognised by Prominent Media Outlets
          </h1>
          <div className="explore">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_01.1dea7667.png&w=640&q=75"
              className="mediaImages"
              alt="mediaImages"
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_02.bddcfd94.png&w=640&q=75"
              className="mediaImages"
              alt="mediaImages"
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_03.d53d3f19.png&w=640&q=75"
              className="mediaImages"
              alt="mediaImages"
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_04.3e3537d0.png&w=640&q=75"
              className="mediaImages"
              alt="mediaImages"
            />
          </div>
        </div>

        <div className="downloadContainer">
          <div>
            <h1 className="exploreheading2">Download Sri Mandir App Now !!</h1>
            <h1 className="downloadContainerHeading">
              Connect to your beloved god , anytime , anywhere!
            </h1>
            <div className="fgb">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                className="playstoreImg"
                alt="appleImg"
              />
              <img
                src="https://www.connectedly.org/wp-content/uploads/2023/12/OIP.jpg"
                className="appleImg"
                alt="appleImg"
              />
            </div>
          </div>
          <img
            src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_showcase_section_family.2d744376.png&w=640&q=75"
            className="downloadContainerImage"
            alt="downloadContainerImage"
          />
        </div>
        <div className="fotterContainer">
          <div className="fgb">
            <img
              src="https://play-lh.googleusercontent.com/cxjgWIVHy2T9ufVyyqaR2GayNcAqyTeCrQWpIQIVXoZgE4_7SrU6PcnnRPjScumzYA"
              className="imageMandir"
              alt="downloadContainerImage"
            />
            <h1 className="mandirHeading">Sri Mandir</h1>
          </div>
          <div className="fgb">
            <p className="fotterContainerParagraph">About </p>
            <p className="fotterContainerParagraph">Terms Condition</p>
            <p className="fotterContainerParagraph">Privacy Policy</p>
          </div>
        </div>
        <div className="lastContainer">
          <div className="fgb">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_footer_logo_digitalindia.f2cedffc.svg&w=128&q=75"
              className="lastImage"
              alt="lastImage6"
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_footer_logo_startupindia.2a8f3e30.svg&w=128&q=75"
              className="lastImage"
              alt="lastImage89"
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_footer_logo_azadi_ka_mahotsav.7caf92db.svg&w=256&q=75"
              className="lastImage"
              alt="lastImage90"
            />
          </div>
          <div className="fgb">
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_instagram_small.deb8b7ac.svg&w=32&q=75"
              className="lastImage1"
              alt="lastImage"
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_youtube_small.e22fbcb6.svg&w=32&q=75"
              className="lastImage1"
              alt="lastImage"
            />
            <img
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_facebook_small.2ea6f678.svg&w=32&q=75"
              className="lastImage1"
              alt="lastImage"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
