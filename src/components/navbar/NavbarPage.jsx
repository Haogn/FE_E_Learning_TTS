import React, { useState } from "react";

function NavbarPage() {
  const [selectedCourse, setSelectedCourse] = useState("English");
  const handleTabClick = (tab) => {
    setSelectedCourse(tab);
  };
  return (
    <div className="px-3">
      {/* avatar */}
      <div className="  h-[60px] flex justify-between">
        <div>
          <p className="font-semibold text-2xl">Welcome Back!!</p>
          <p>Micheal Scofiled</p>
        </div>
        <div>
          <img
            className="h-[60px] w-[60px] rounded-[50%]"
            src="https://giaydantuong.edu.vn/wp-content/uploads/2023/04/anh-gai-dep-lam-avatar-che-mat-1.jpg"
            alt=""
          />
        </div>
      </div>
      {/* search */}
      <div className="mt-8">
        <div className=" rounded-md relative">
          <input
            className="w-full h-[35px] py-1 pl-2 border-2 border-orange-400 outline-orange-400 rounded-md z-10"
            type="text"
            placeholder="Search for Course"
          />
          <button className="w-[43px] h-[43px] rounded-[50%] border-2 border-orange-400 bg-white absolute top-[-4px] right-3 z-20">
            <i className="fa-solid fa-magnifying-glass text-orange-400"></i>
          </button>
        </div>
      </div>
      {/* list course */}
      <div className="flex h-[84px] mt-8 gap-5 justify-center">
        <div onClick={() => handleTabClick("German")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] border-2 ${
              selectedCourse === "German" ? "border-orange-400" : ""
            } `}
            src="https://cdn.pixabay.com/photo/2016/07/11/17/29/outline-1510150_1280.png"
            alt=""
          />
          <p className="text-xs">Tiếng Đức</p>
        </div>
        <div onClick={() => handleTabClick("French")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] border-2 ${
              selectedCourse === "French" ? "border-orange-400" : ""
            } `}
            src="https://img.lovepik.com/element/45008/6779.png_860.png"
            alt=""
          />
          <p className="text-xs">Tiếng Pháp</p>
        </div>
        <div onClick={() => handleTabClick("CNTT")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] object-cover border-2 ${
              selectedCourse === "CNTT" ? "border-orange-400" : ""
            } `}
            src="https://tino.org/wp-content/uploads/2021/08/word-image-294.jpeg"
            alt=""
          />
          <p className="text-xs text-center">CNTT</p>
        </div>{" "}
        <div onClick={() => handleTabClick("English")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] object-cover border-2 ${
              selectedCourse === "English" ? "border-orange-400" : ""
            } `}
            src="https://img.lovepik.com/png/20230930/british-flag-pictures-flags-flag-pictures_40293_wh860.png"
            alt=""
          />
          <p className="text-xs">Tiếng Anh</p>
        </div>{" "}
        <div onClick={() => handleTabClick("China")}>
          <img
            className={`h-[60px] w-[60px] rounded-[50%] object-cover border-2 ${
              selectedCourse === "China" ? "border-orange-400" : ""
            } `}
            src="https://e7.pngegg.com/pngimages/416/925/png-clipart-flag-of-china-map-chinese-flag-leaf-heart-thumbnail.png"
            alt=""
          />
          <p className="text-xs">Tiếng Trung</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarPage;
