import { IoMdInformationCircle } from "react-icons/io";




function Header() {
  return (
    <main>
      <div className="header_top_for_all_pages">
        <div className='header_title_text'>
          Flavora
        </div>
      </div>
      <div className='header_second_parent'>
        <div className='header_intro'>
          <font className='header_font1'>
            Kings Palace - 26
          </font>
          <br />
          <font className='header_font2'>
            Mess Menu
          </font>
        </div>
        <div className='header_second_div2'>
          <a href="/info"><IoMdInformationCircle /></a>
        </div>
      </div>
    </main>
  );
}

export default Header;
