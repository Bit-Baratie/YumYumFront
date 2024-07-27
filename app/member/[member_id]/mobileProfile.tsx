import Image from "next/image";
import ModalStyle from "@/app/member//[member_id]/mobileProfile.module.scss";
import { ChangeEvent, useEffect } from "react";
import useMember from "@/app/(hooks)/member/useMember";
import CustomImage from "@/app/(component)/common/customImage";
import { EditFilled } from "@ant-design/icons";

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

const MobileProfile = ({
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
    setImageUrl(profile?.imageUrl);
    setNickName(profile?.nickname);
    setPhone(profile?.phoneNumber);
  }, [profile]);

  return (
    <>
      <div className={ModalStyle.background}>
        <div className={ModalStyle.containerWrapper}>
          <div className={ModalStyle.title}>
            <p>내정보</p>
          </div>
          <div className={ModalStyle.container}>
            <div
              className={ModalStyle.esc}
              onClick={() => setModal(false)}
            ></div>
            <label htmlFor="input-file" className={ModalStyle.labelWrapper}>
              <div className={ModalStyle.imgg}>
                <CustomImage
                  style={ModalStyle.img}
                  src={imageUrl}
                  width={100}
                  height={100}
                  alt="프로필"
                />
              </div>
              <div className={ModalStyle.imgMod}>
                <Image
                  src={"/asset/image/pencil.png"}
                  width={20}
                  height={20}
                  alt="연필"
                  className={ModalStyle.pen}
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
            <div className={ModalStyle.inputSet}>
              <span className={ModalStyle.label}>닉네임</span>
              <div className={ModalStyle.nameMod}>
                <input
                  type="text"
                  defaultValue={profile?.nickname}
                  className={ModalStyle.nickname}
                  onChange={(e) => nickNameHandler(e)}
                />
              </div>
              <div className={ModalStyle.line}></div>
            </div>
            <div>
              <div className={ModalStyle.inputSet}>
                <span className={ModalStyle.label}>이메일</span>
                <div className={ModalStyle.inputBox}>
                  <input
                    type="text"
                    defaultValue={profile?.phoneNumber}
                    className={ModalStyle.input}
                    onChange={(e) => phoneHandler(e)}
                  />
                </div>
                <div className={ModalStyle.line}></div>
              </div>
              <div className={ModalStyle.inputSet}>
                <span className={ModalStyle.label}>변경 비밀번호</span>
                <div className={ModalStyle.inputBox}>
                  <input
                    type="password"
                    className={ModalStyle.input}
                    onChange={(e) => passwordHanler(e)}
                  />
                </div>
              </div>
              <div className={ModalStyle.line}></div>
              <div className={ModalStyle.inputSet}>
                <span className={ModalStyle.label}>변경 비밀번호 확인</span>
                <div className={ModalStyle.inputBox}>
                  <input
                    type="password"
                    className={ModalStyle.input}
                    onChange={(e) => passwordCheckHanler(e)}
                  />
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
        </div>
      </div>
    </>
  );
};
export default MobileProfile;
