import Image from "next/image";
import ModalStyle from "./updateModal.module.scss";
import { ChangeEvent, useEffect } from "react";
import useMember from "@/app/(hooks)/member/useMember";
import CustomImage from "../common/customImage";
import Pencil from "@/public/asset/image/pencil.png";

interface Props {
  imageHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  nickNameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordHanler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordCheckHanler: (e: ChangeEvent<HTMLInputElement>) => void;
  phoneHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  updateMember: () => void;
  profile: any;
  imageUrl: any;
  fileInput: any;
  modal: boolean;
  setModal: (i: boolean) => void;
}

const UpdateModal = ({
  imageHandler,
  nickNameHandler,
  passwordHanler,
  passwordCheckHanler,
  phoneHandler,
  updateMember,
  profile,
  imageUrl,
  fileInput,
  modal,
  setModal,
  setImageUrl,
  setPhone,
  setNickName,
}: any) => {
  useEffect(() => {
    setImageUrl(profile.imageUrl);
    setNickName(profile.nickname);
    setPhone(profile.phoneNumber);
  }, []);

  return (
    <>
      <div className={ModalStyle.background}></div>

      <div className={ModalStyle.container}>
        <div className={ModalStyle.esc} onClick={() => setModal(false)}>
          <div className={ModalStyle.X}>X</div>
        </div>
        <span className={ModalStyle.title}>프로필 수정</span>

        <label htmlFor="input-file" className={ModalStyle.labelWrapper}>
          <CustomImage
            style={ModalStyle.img}
            src={imageUrl}
            width={100}
            height={100}
            alt="프로필"
          />
          <div className={ModalStyle.imgMod}>
            <Image
              src={"/asset/image/pencil.png"}
              width={35}
              height={35}
              alt="연필"
              style={{ fill: "white" }}
            />
          </div>
        </label>

        <input
          type="file"
          id="input-file"
          placeholder="Profile Image"
          ref={fileInput}
          onChange={(e) => imageHandler(e)}
          style={{ display: "none" }}
        />
        {/* <div className={ModalStyle.img}></div> */}

        <div className={ModalStyle.nameMod}>
          <input
            type="text"
            defaultValue={profile.nickname}
            className={ModalStyle.nickname}
            onChange={(e) => nickNameHandler(e)}
          />
          <span>
            {/* <Image
              src={"/asset/image/pencil.png"}
              width={15}
              height={15}
              alt="연필"
            /> */}
          </span>
        </div>

        <div>
          <div className={ModalStyle.inputSet}>
            <span className={ModalStyle.label}>연락처</span>
            <div className={ModalStyle.inputBox}>
              <input
                type="text"
                defaultValue={profile.phoneNumber}
                className={ModalStyle.input}
                onChange={(e) => phoneHandler(e)}
              />
              <span>
                {/* <Image
                  src={"/asset/image/pencil.png"}
                  width={15}
                  height={15}
                  alt="연필"
                /> */}
              </span>
            </div>
          </div>

          <div className={ModalStyle.inputSet}>
            <span className={ModalStyle.label}>변경 비밀번호</span>
            <div className={ModalStyle.inputBox}>
              <input
                type="password"
                className={ModalStyle.input}
                onChange={(e) => passwordHanler(e)}
              />
              <span>
                {/* <Image
                  src={"/asset/image/pencil.png"}
                  width={15}
                  height={15}
                  alt="연필"
                /> */}
              </span>
            </div>
          </div>

          <div className={ModalStyle.inputSet}>
            <span className={ModalStyle.label}>변경 비밀번호 확인</span>
            <div className={ModalStyle.inputBox}>
              <input
                type="password"
                className={ModalStyle.input}
                onChange={(e) => passwordCheckHanler(e)}
              />
              <span>
                {/* <Image
                  src={"/asset/image/pencil.png"}
                  width={15}
                  height={15}
                  alt="연필"
                /> */}
              </span>
            </div>
          </div>
        </div>

        <button
          className={ModalStyle.submit}
          onClick={() => {
            updateMember();
            setModal(false);
          }}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default UpdateModal;
