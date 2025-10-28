import { IoMdInformationCircleOutline } from "react-icons/io";

function Header() {
  return (
    <main>
      <div className="header_top_for_all_pages">
        <div className='header_title_text'>
          <font className='font_app_name'>
            Flavora
          </font>
        </div>
      </div>
      <div className='header_second_parent'>
        <div className='header_intro'>
          <font className='font_hostel_name'>
            Kings Palace - 26
          </font>
          <br />
          <font className='font_mess_menu'>
            Mess Menu
          </font>
        </div>
        <div className='header_second_div2'>
          <a href="/info">
            <font className='font_info_icon'>
              <IoMdInformationCircleOutline />
            </font>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Header;
